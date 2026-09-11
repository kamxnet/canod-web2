import assert from "node:assert/strict";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";
import { createServer } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));
const vite = await createServer({ appType: "custom", configFile: false, root, resolve: { alias: { "@": root } }, server: { middlewareMode: true, hmr: false, ws: false } });
after(() => vite.close());
const { checkSafety, safetyProducts, safetyQuestions, safetyMains, safetyChecklistText, defaultSafetyAnswers } = await vite.ssrLoadModule("/lib/safety-checker.ts");
const { safetySources, safetyDisclaimer } = await vite.ssrLoadModule("/lib/safety-sources.ts");
const values = ["unknown", "yes", "no"];
const known = { ...defaultSafetyAnswers, mains: "yes", approval: "yes", specs: "yes", supply: "yes", fit: "yes", seller: "yes", condition: "yes", placement: "yes", recall: "clear" };

test("all 183,708 answer combinations retain limits and produce sourced, unique checks", () => {
  let count = 0;
  for (const { id: product } of safetyProducts) for (const mains of values) for (const approval of values) for (const specs of values) for (const supply of values) for (const fit of values) for (const seller of values) for (const condition of values) for (const placement of values) for (const recall of ["unchecked", "clear", "possible", "affected"]) {
    const answers = { product, mains, approval, specs, supply, fit, seller, condition, placement, recall };
    const result = checkSafety(answers);
    assert.equal(result.disclaimer, safetyDisclaimer);
    assert.equal(result.items.length, safetyQuestions(answers).length);
    assert.equal(new Set(result.items.map(item => item.id)).size, result.items.length);
    for (const item of result.items) {
      assert.ok(safetySources[item.source]);
      assert.ok(["confirmed", "verify", "concern"].includes(item.status));
      assert.doesNotMatch(item.detail, /undefined|NaN|certified safe|legally compliant|safe to use/i);
    }
    if (["possible", "affected"].includes(recall)) assert.equal(result.items.find(item => item.id === "recall").status, "concern");
    if (specs !== "yes") for (const key of ["supply", "fit"]) if (answers[key] === "yes") assert.equal(result.items.find(item => item.id === key).status, "verify");
    count++;
  }
  assert.equal(count, 183708);
});

test("unknown and positive answers never imply independent verification", () => {
  const initial = checkSafety(defaultSafetyAnswers);
  assert.ok(initial.items.every(item => item.status === "verify"));
  const reported = checkSafety(known);
  assert.ok(reported.items.every(item => item.status === "confirmed"));
  assert.ok(reported.items.every(item => item.detail.startsWith("You reported")));
  assert.match(reported.next, /not a safety clearance/);
  assert.match(reported.items.find(item => item.id === "recall").detail, /not a safety clearance/);
});

test("power paths and product types change only applicable questions", () => {
  for (const product of safetyProducts) {
    const answers = { ...defaultSafetyAnswers, product: product.id, mains: "no" };
    assert.equal(safetyMains(answers), product.mains ? "yes" : "no");
    const keys = safetyQuestions(answers).map(item => item.key);
    assert.equal(keys.includes("approval"), product.mains);
    assert.equal(keys.includes("mains"), !product.mains);
    assert.equal(keys.includes("placement"), !["bar", "cord", "travel"].includes(product.id));
  }
  const battery = checkSafety({ ...known, product: "battery", mains: "no" });
  assert.match(battery.reminder.text, /Hidden defects/);
  assert.match(safetyQuestions({ ...known, product: "battery" }).find(item => item.key === "supply").hint, /Do not recharge a non-rechargeable battery/);
  assert.match(battery.items.find(item => item.id === "supply").detail, /only if rechargeable/);
  assert.ok(!battery.items.some(item => item.id === "approval"));
  assert.match(checkSafety({ ...known, product: "travel" }).reminder.text, /voltage conversion/);
});

test("unresolved dependencies stay open and reported hazards warrant action", () => {
  const unknownPower = checkSafety({ ...known, product: "dock", mains: "unknown" });
  assert.equal(unknownPower.items.find(item => item.id === "approval").status, "verify");
  const damage = checkSafety({ ...known, condition: "no", recall: "affected" });
  assert.equal(damage.items.find(item => item.id === "condition").status, "concern");
  assert.match(damage.items.find(item => item.id === "condition").detail, /Do not use or test/);
  assert.match(damage.items.find(item => item.id === "recall").detail, /specific recall notice/);
});

test("download retains self-reported answers, official sources, limits and record blanks", () => {
  const text = safetyChecklistText({ ...known, product: "battery", mains: "no", condition: "no" });
  assert.ok(text.includes(safetyDisclaimer));
  assert.match(text, /self-reported/);
  assert.match(text, /Model \/ batch:/);
  assert.match(text, /Recall search date:/);
  assert.match(text, /warranty \/ return terms/);
  assert.match(text, /emergency services/);
  assert.ok(text.includes(safetySources.recalls.url));
  assert.doesNotMatch(text, /affiliate\?|tag=|https?:\/\/.*amazon/i);
});

test("new static routes include dated educational content and no-JavaScript alternatives", async () => {
  const guide = await readFile(new URL("../out/guides/charger-safety-canada/index.html", import.meta.url), "utf8");
  const tool = await readFile(new URL("../out/tools/canadian-electrical-safety-checklist/index.html", import.meta.url), "utf8");
  for (const anchor of ["approval", "input", "output", "usb-c", "warning-signs", "placement", "recalls", "sources"]) assert.ok(guide.includes(`id="${anchor}"`));
  assert.match(guide, /Last reviewed/);
  assert.match(guide, /Elsewhere in Canada/);
  assert.match(guide, /Ontario/);
  assert.match(tool, /<noscript>/);
  assert.match(tool, /does not certify a product/);
  assert.match(tool, /does not search the database for you/);
});
