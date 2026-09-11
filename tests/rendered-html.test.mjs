import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("exports the public homepage without development-only metadata", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.match(html, /Good finds\./);
  assert.match(html, /Better days\./);
  assert.match(html, /id="your-start"/);
  assert.match(html, /id="starting-point"/);
  assert.match(html, /href="https:\/\/canod.ca\/"/);
  assert.doesNotMatch(html, /CANOD \/ Form study 01|hero-orbit/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
});

test("keeps the existing GitHub Pages routes and domain", async () => {
  for (const route of ["about", "contact", "interests", "partners", "guides", "privacy", "editorial-standards", "guides/choosing-a-tech-organizer", "guides/choosing-a-home-nas"]) {
    const html = await readFile(new URL(`../out/${route}/index.html`, import.meta.url), "utf8");
    assert.match(html, /<h1\b/, route);
    assert.ok(html.includes(`https://canod.ca/${route}/`), route);
  }
  assert.equal((await readFile(new URL("../out/CNAME", import.meta.url), "utf8")).trim(), "canod.ca");
});
