import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("exports the public homepage without development-only metadata", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.match(html, /Technology should/);
  assert.match(html, /work together\./);
  assert.match(html, /id="your-start"/);
  assert.match(html, /id="starting-point"/);
  assert.match(html, /href="https:\/\/canod.ca\/"/);
  assert.match(html, /https:\/\/canod.ca\/og-canod-publication.png/);
  assert.match(html, /href="\/guides\/seven-things-usb-c-dock\/"/);
  assert.match(html, /id="buy-safe-canada"/);
  assert.match(html, /aria-label="01: Problem\. Start with the everyday"/);
  assert.doesNotMatch(html, /CANOD \/ Form study 01|hero-orbit/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
});

test("keeps the existing GitHub Pages routes and domain", async () => {
  for (const route of [
    "shop",
    "learn",
    "solutions",
    "about",
    "contact",
    "interests",
    "partners",
    "guides",
    "privacy",
    "editorial-standards",
    "affiliate-disclosure",
    "tools",
    "tools/usb-c-dock-checker",
    "guides/seven-things-usb-c-dock",
    "guides/choosing-a-tech-organizer",
    "guides/choosing-a-home-nas",
  ]) {
    const html = await readFile(new URL(`../out/${route}/index.html`, import.meta.url), "utf8");
    assert.match(html, /<h1\b/, route);
    assert.ok(html.includes(`https://canod.ca/${route}/`), route);
  }
  assert.equal((await readFile(new URL("../out/CNAME", import.meta.url), "utf8")).trim(), "canod.ca");
});

test("exports the power-bank sizing guide with its required structure", async () => {
  const html = await readFile(new URL("../out/guides/what-size-power-bank-do-i-need/index.html", import.meta.url), "utf8");
  assert.match(html, /What Size Power Bank Do I Need\?/);
  assert.match(html, /https:\/\/canod\.ca\/guides\/what-size-power-bank-do-i-need\//);
  for (const heading of ["The problem", "The 30-second answer", "What to check", "Step-by-step solution", "Common mistakes", "Canadian compatibility or safety note", "Recommended specifications", "Where to check suitable products"]) {
    assert.ok(html.includes(heading), heading);
  }
  assert.match(html, /65% to 80% usable-energy range/);
  assert.match(html, /No affiliate links are included/);
});

test("exports the slow-phone-charging guide with its required structure", async () => {
  const html = await readFile(new URL("../out/guides/why-is-my-phone-charging-slowly/index.html", import.meta.url), "utf8");
  assert.match(html, /Why Is My Phone Charging Slowly\?/);
  assert.match(html, /https:\/\/canod\.ca\/guides\/why-is-my-phone-charging-slowly\//);
  for (const heading of ["The problem", "The 30-second answer", "What to check", "Step-by-step solution", "Common mistakes", "Canadian compatibility or safety note", "Recommended specifications", "Where to check suitable products"]) {
    assert.ok(html.includes(heading), heading);
  }
  assert.match(html, /note the battery percentage after 15 minutes/);
  assert.match(html, /No affiliate links are included/);
});

test("exports the Canadian power-bar and surge-protector guide with its required structure", async () => {
  const html = await readFile(new URL("../out/guides/power-bar-or-surge-protector-canada/index.html", import.meta.url), "utf8");
  assert.match(html, /Power Bar or Surge Protector: What Should Canadians Check\?/);
  assert.match(html, /https:\/\/canod\.ca\/guides\/power-bar-or-surge-protector-canada\//);
  for (const heading of ["The problem", "The 30-second answer", "What to check", "Step-by-step solution", "Common mistakes", "Canadian compatibility or safety note", "Recommended specifications", "Where to check suitable products"]) {
    assert.ok(html.includes(heading), heading);
  }
  assert.match(html, /minimum 14 AWG copper conductor/);
  assert.match(html, /No product or retailer link in this guide is an affiliate recommendation/);
});

test("exports curated product pages, intent-based learn routes, and support pages with valid HTML and single h1", async () => {
  const newRoutes = [
    "shop/tb4-dual-display-dock",
    "shop/compact-travel-usb-c-hub",
    "shop/gan-100w-multiport-charger",
    "learn/how-to",
    "learn/buying-guides",
    "learn/tech-explained",
    "learn/canada",
    "support",
    "support/contact",
    "support/shipping",
    "support/returns",
    "support/track-order",
    "support/faq",
    "support/warranty",
  ];

  for (const route of newRoutes) {
    const html = await readFile(new URL(`../out/${route}/index.html`, import.meta.url), "utf8");
    const h1Count = (html.match(/<h1\b/g) || []).length;
    assert.equal(h1Count, 1, `Expected exactly 1 h1 in ${route}, found ${h1Count}`);
    assert.ok(html.includes(`https://canod.ca/${route}/`), `Missing canonical in ${route}`);
  }
});

