import assert from "node:assert/strict";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const root = fileURLToPath(new URL("..", import.meta.url));
const vite = await createServer({ appType: "custom", configFile: false, root, resolve: { alias: { "@": root } }, server: { middlewareMode: true, hmr: false, ws: false } });
after(() => vite.close());
const { checkDock, defaultDockAnswers, dockOptions, dockChecklistText } = await vite.ssrLoadModule("/lib/dock-checker.ts");
const { dockSources } = await vite.ssrLoadModule("/lib/dock-sources.ts");
const { guides } = await vite.ssrLoadModule("/lib/guides.tsx");

test("all 25,200 answer combinations return educational, sourced guidance", () => {
  let count = 0;
  for (const [device] of dockOptions.device) for (const [os] of dockOptions.os) for (const [port] of dockOptions.port) for (const [monitors] of dockOptions.monitors) for (const [resolution] of dockOptions.resolution) for (const [charging] of dockOptions.charging) {
    const result = checkDock({ device, os, port, monitors, resolution, charging });
    assert.match(result.disclaimer, /not a compatibility guarantee/);
    assert.ok(result.notes.length >= 4);
    assert.equal(new Set(result.notes.map(note => note.id)).size, result.notes.length);
    for (const note of result.notes) {
      assert.ok(note.text.length > 25);
      if (note.source) assert.ok(dockSources[note.source]);
      assert.doesNotMatch(note.text, /undefined|NaN|guaranteed compatible/i);
    }
    if (monitors === "0") {
      assert.ok(!result.notes.some(note => ["display-plan", "displaylink", "mac-display"].includes(note.id)));
      assert.equal(result.summary.some(item => item.key === "resolution"), false);
    }
    count++;
  }
  assert.equal(count, 25200);
});

test("unknown ports, USB-A, Mac displays, high power and mobile devices keep their caveats", () => {
  const ids = answers => checkDock({ ...defaultDockAnswers, ...answers }).notes.map(note => note.id);
  assert.ok(ids({ port: "unknown" }).includes("port-unknown"));
  assert.ok(ids({ port: "usbc" }).includes("port-unknown"));
  assert.ok(ids({ port: "usba", charging: "100" }).includes("separate-power"));
  assert.ok(!ids({ port: "usba", charging: "high" }).includes("power"));
  assert.ok(ids({ os: "macos", monitors: "2" }).includes("mac-display"));
  assert.ok(ids({ os: "macos" }).includes("mac-permission"));
  assert.ok(ids({ charging: "high" }).includes("high-power"));
  assert.ok(ids({ device: "desktop", charging: "65" }).includes("desktop-power"));
  assert.ok(ids({ device: "tablet", os: "ipados" }).includes("mobile-device"));
  assert.ok(ids({ os: "linux" }).includes("os-check"));
});

test("download includes the answers, caveats, official sources and model blanks", () => {
  const text = dockChecklistText({ ...defaultDockAnswers, os: "macos", monitors: "2", resolution: "4k" });
  assert.match(text, /Two external monitors/);
  assert.match(text, /4K at 60 Hz/);
  assert.match(text, /not a compatibility guarantee/);
  assert.match(text, /Exact computer model:/);
  assert.match(text, /https:\/\/support.apple.com/);
  assert.ok(text.includes(dockSources.protectedVideo.url));
  assert.doesNotMatch(text, /affiliate\?|tag=|UGREEN/i);
});

test("editorial intent links resolve to available guides or the marked business section", async () => {
  const { editorialIntents, pillars } = await vite.ssrLoadModule("/lib/editorial.ts");
  for (const intent of editorialIntents) assert.ok(intent.href === "/guides/#business" || guides.some(guide => intent.href === `/guides/${guide.slug}/`));
  for (const pillar of pillars) assert.ok(guides.some(guide => guide.slug === pillar.guide && guide.pillar === pillar.id));
  const dock = guides.find(guide => guide.slug === "seven-things-usb-c-dock");
  assert.equal(dock.sections.filter(section => /^\d\./.test(section.title)).length, 7);
  assert.equal(new Set(dock.sections.map(section => section.id)).size, dock.sections.length);
});

test("commercial components are silent until an approved tracking URL is provided", async () => {
  const { affiliateLinks, approvedAffiliateUrl } = await vite.ssrLoadModule("/lib/commercial-links.ts");
  const { AffiliateDisclosure, AffiliateLink } = await vite.ssrLoadModule("/components/affiliate-disclosure.tsx");
  assert.deepEqual(affiliateLinks, []);
  const base = { id: "test", label: "Example", program: "software-affiliate", approval: "pending", trackingUrl: "https://example.com/approved-test" };
  for (const entry of [base, { ...base, approval: "approved", trackingUrl: null }, { ...base, approval: "approved", trackingUrl: "javascript:alert(1)" }, { ...base, approval: "approved", trackingUrl: "https://user:secret@example.com" }]) {
    assert.equal(approvedAffiliateUrl(entry), null);
    assert.equal(renderToStaticMarkup(React.createElement(AffiliateLink, { entry })), "");
    assert.equal(renderToStaticMarkup(React.createElement(AffiliateDisclosure, { links: [entry] })), "");
  }
  const approved = { ...base, approval: "approved" };
  assert.match(renderToStaticMarkup(React.createElement(AffiliateLink, { entry: approved })), /rel="sponsored nofollow"/);
  assert.match(renderToStaticMarkup(React.createElement(AffiliateDisclosure, { links: [approved] })), /Affiliate disclosure/);
});

test("reading estimates use real nested article text", async () => {
  const { readingMinutes } = await vite.ssrLoadModule("/lib/guide-reading.ts");
  assert.equal(readingMinutes([{ title: "", content: React.createElement("p", null, "word ".repeat(440)) }]), 2);
  for (const guide of guides) assert.ok(readingMinutes(guide.sections) >= 1);
});
