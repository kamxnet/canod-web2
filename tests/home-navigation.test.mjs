import assert from "node:assert/strict";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import React from "react";

const root = fileURLToPath(new URL("..", import.meta.url));
const vite = await createServer({ appType: "custom", configFile: false, root, resolve: { alias: { "@": root } }, server: { middlewareMode: true, hmr: false, ws: false } });
after(() => vite.close());
const navigation = await vite.ssrLoadModule("/lib/home-navigation.ts");
const { guides } = await vite.ssrLoadModule("/lib/guides.tsx");

test("all 12 starting points resolve to real categories and relevant guide anchors", () => {
  for (const place of navigation.places) for (const priority of navigation.priorities) {
    const result = navigation.startingPoint(place.id, priority.id);
    assert.ok(result.category >= 0 && result.category <= 4);
    const url = new URL(navigation.categoryHref(result.category), "https://canod.ca");
    assert.equal(url.pathname, "/interests/");
    assert.ok(url.searchParams.get("category"));
    if (result.guide) {
      const guide = guides.find(item => item.slug === result.guide.slug);
      assert.ok(guide, `${place.id}/${priority.id}`);
      assert.ok(guide.sections.some(section => section.id === result.guide.anchor));
      assert.notEqual(place.id === "travel" && result.guide.slug === "choosing-a-home-nas", true);
    }
  }
});

test("every visitor intent supplies a valid navigator starting state", () => {
  for (const intent of navigation.intents) {
    assert.ok(navigation.places.some(place => place.id === intent.place));
    assert.ok(navigation.priorities.some(priority => priority.id === intent.priority));
    assert.equal(navigation.startingPoint(intent.place, intent.priority).category, intent.category);
  }
  assert.equal(navigation.categoryHref(-1), "/interests/");
});

test("reading estimates derive from article text including nested content", async () => {
  const { readingMinutes } = await vite.ssrLoadModule("/lib/guide-reading.ts");
  assert.equal(readingMinutes([{ title: "", content: React.createElement("p", null, "word ".repeat(440)) }]), 2);
  assert.equal(readingMinutes([{ title: "", content: ["word ".repeat(220), React.createElement("strong", null, "one")] }]), 2);
  for (const guide of guides) assert.ok(readingMinutes(guide.sections) >= 1);
});
