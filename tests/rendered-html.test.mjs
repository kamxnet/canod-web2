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
  for (const route of ["about", "contact", "interests", "partners", "guides", "privacy", "editorial-standards", "affiliate-disclosure", "tools", "tools/usb-c-dock-checker", "guides/seven-things-usb-c-dock", "guides/choosing-a-tech-organizer", "guides/choosing-a-home-nas"]) {
    const html = await readFile(new URL(`../out/${route}/index.html`, import.meta.url), "utf8");
    assert.match(html, /<h1\b/, route);
    assert.ok(html.includes(`https://canod.ca/${route}/`), route);
  }
  assert.equal((await readFile(new URL("../out/CNAME", import.meta.url), "utf8")).trim(), "canod.ca");
});
