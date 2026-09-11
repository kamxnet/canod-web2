import { safetyDisclaimer, safetyGuidePath, safetyReviewDate, safetySources, type SafetySourceId } from "./safety-sources";

// False means ask about the supplied power path, not assume a non-mains product.
export const safetyProducts = [
  { id: "wall", label: "Wall charger", mains: true },
  { id: "usb", label: "USB charger", mains: false },
  { id: "bar", label: "Power bar", mains: true },
  { id: "cord", label: "Extension cord", mains: true },
  { id: "travel", label: "Travel adapter", mains: true },
  { id: "battery", label: "Battery or power bank", mains: false },
  { id: "dock", label: "Dock or powered accessory", mains: false },
] as const;
export type SafetyProduct = typeof safetyProducts[number]["id"];
export const checkOptions = [["unknown", "Not sure yet"], ["yes", "Yes"], ["no", "No"]] as const;
export const recallOptions = [["unchecked", "Not checked yet"], ["clear", "Searched; no matching notice found"], ["possible", "A possible match needs checking"], ["affected", "The product matches a recall"]] as const;
export type CheckAnswer = typeof checkOptions[number][0];
export type SafetyAnswers = { product: SafetyProduct; mains: CheckAnswer; approval: CheckAnswer; specs: CheckAnswer; supply: CheckAnswer; fit: CheckAnswer; seller: CheckAnswer; condition: CheckAnswer; placement: CheckAnswer; recall: typeof recallOptions[number][0] };
export type SafetyQuestion = { key: Exclude<keyof SafetyAnswers, "product">; label: string; hint: string; source: SafetySourceId };
export const defaultSafetyAnswers: SafetyAnswers = { product: "wall", mains: "unknown", approval: "unknown", specs: "unknown", supply: "unknown", fit: "unknown", seller: "unknown", condition: "unknown", placement: "unknown", recall: "unchecked" };
export const safetyStatuses = ["confirmed", "verify", "concern"] as const;
export type SafetyStatus = typeof safetyStatuses[number];
export const safetyStatusLabels: Record<SafetyStatus, string> = { confirmed: "Information confirmed", verify: "Needs verification", concern: "Potential concern" };
export type SafetyItem = { id: string; status: SafetyStatus; title: string; detail: string; source: SafetySourceId };

export function safetyMains(answers: SafetyAnswers): CheckAnswer {
  return safetyProducts.find(product => product.id === answers.product)!.mains ? "yes" : answers.mains;
}

export function safetyQuestions(answers: SafetyAnswers): SafetyQuestion[] {
  const mains = safetyMains(answers), distribution = ["bar", "cord", "travel"].includes(answers.product);
  const questions: SafetyQuestion[] = [];
  if (!safetyProducts.find(product => product.id === answers.product)!.mains) questions.push({ key: "mains", label: "Does this item connect to household mains power?", hint: "Include a supplied wall adapter. Choose No only for an item powered entirely by USB, batteries or another low-voltage source.", source: "electrical" });
  if (mains !== "no") questions.push({ key: "approval", label: "Is Canadian approval information identifiable?", hint: "On the actual mains-powered item or its wall adapter, not just a marketplace badge. Check the exact mark and model against an official reference.", source: "marks" });
  questions.push(
    { key: "specs", label: distribution ? "Are voltage, current and use ratings visible?" : "Are input and output specifications visible?", hint: distribution ? "Look for the product rating and intended indoor/outdoor use in its label and instructions." : "Use the actual label and instructions, including voltage, current and frequency where applicable.", source: "electrical" },
    { key: "supply", label: mains === "no" ? "Does its required input match the power source?" : "Does the input rating match the intended supply?", hint: mains === "no" ? "Compare the device input with the specified USB or battery supply. Do not infer this from connector shape." : "Confirm both voltage and frequency with the manufacturer. Do not measure, modify or diagnose an outlet with this tool.", source: "electrical" },
    { key: "fit", label: distribution ? "Does the rating suit the connected load and location?" : "Do the output and cable suit the exact device?", hint: distribution ? "Check the connected equipment and the accessory's instructions, including load limits and use location." : "Check voltage/current, charging profiles and required cable capability against the device maker's instructions.", source: distribution ? "consumer" : "cable" },
    { key: "seller", label: "Can you identify the manufacturer, model and seller?", hint: "Look for a traceable seller, contact details and a receipt. A marketplace name alone does not identify the seller.", source: "shopping" },
    { key: "condition", label: "Are the product and cable free of visible warning signs?", hint: "No observed damage, swelling, scorching, abnormal heat or damaged pins. Choose Not sure for an item you have not inspected.", source: answers.product === "battery" ? "battery" : "consumer" },
  );
  if (!distribution) questions.push({ key: "placement", label: "Can it be placed and charged as instructed?", hint: "Check a dry, unobstructed location, away from soft or combustible surfaces. Follow the product's own ventilation instructions.", source: "battery" });
  if (answers.product === "battery") {
    const batteryQuestions: Partial<Record<SafetyQuestion["key"], { label: string; hint: string }>> = {
      specs: { label: "Are the battery type, voltage and applicable ratings visible?", hint: "Identify the chemistry and whether it is rechargeable. Check any charging input, power-bank output and the exact model's instructions." },
      supply: { label: "Does it match the intended device and any charging source?", hint: "Do not recharge a non-rechargeable battery. For rechargeable products, confirm the specified charger and input. Otherwise check the device maker's required battery type." },
      fit: { label: "Do its type, size and connections suit the exact device?", hint: "Check the device's required battery type and fit. For a power bank, also check the output profiles and cable capability." },
      placement: { label: "Can it be used and stored according to its instructions?", hint: "Follow the battery maker's handling and storage instructions. Charging applies only to rechargeable products and must follow their placement instructions." },
    };
    for (const question of questions) if (batteryQuestions[question.key]) Object.assign(question, batteryQuestions[question.key], { source: "batteryBasics" });
  }
  questions.push({ key: "recall", label: "What did your Canadian recall search show?", hint: "Search the exact model and compare the identifiers in any notice. CANOD does not search the database for you.", source: "recalls" });
  return questions;
}

export function checkSafety(answers: SafetyAnswers) {
  const questions = safetyQuestions(answers), items: SafetyItem[] = [];
  const mains = safetyMains(answers), distribution = ["bar", "cord", "travel"].includes(answers.product);
  const add = (id: string, status: SafetyStatus, title: string, detail: string, source: SafetySourceId) => items.push({ id, status, title, detail, source });
  for (const question of questions) {
    const value = answers[question.key];
    if (question.key === "mains") {
      if (value === "unknown") add("mains", "verify", "Identify the power path", "Confirm whether this item or an included adapter connects to mains power. Its approval and input checks remain open until that is known.", "electrical");
      else add("mains", "confirmed", "Power path reported", value === "yes" ? "You reported a mains connection, including any supplied wall adapter." : "You reported no mains connection. This does not establish battery or low-voltage safety. Check any separately purchased wall charger on its own.", "electrical");
      continue;
    }
    if (question.key === "recall") {
      const status = value === "clear" ? "confirmed" : value === "affected" || value === "possible" ? "concern" : "verify";
      add("recall", status, value === "clear" ? "Recall search reported" : value === "affected" ? "A matching recall was reported" : value === "possible" ? "Resolve the possible recall match" : "Search the Canadian recall database", value === "clear" ? "You reported no match in your search. That is not a safety clearance; retain the model and search date and recheck when relevant." : value === "affected" ? "Do not buy or use the affected item. Follow the specific recall notice and the manufacturer's instructions." : value === "possible" ? "Hold off on purchase or use while you compare model, batch and other identifiers with the notice or manufacturer." : "Search the model, including archived notices where relevant. Record the identifiers and actions in a matching notice.", "recalls");
      continue;
    }
    // A positive fit answer cannot close a check whose underlying ratings remain unknown.
    const dependencyMissing = value === "yes" && ((["supply", "fit"].includes(question.key) && answers.specs !== "yes") || (question.key === "approval" && mains === "unknown"));
    const status: SafetyStatus = value === "unknown" || dependencyMissing ? "verify" : value === "yes" ? "confirmed" : "concern";
    const details: Partial<Record<SafetyQuestion["key"], [string, string, string]>> = {
      approval: ["You reported identifiable approval information. CANOD has not authenticated the mark, model or its scope.", "Ask for the actual mains-product label and exact model. Use the official mark reference and relevant provincial or territorial authority; do not infer approval from a listing.", "You reported no identifiable Canadian approval information for an item that connects, or may connect, to mains power. Hold off on purchase or use and ask the manufacturer or relevant authority to resolve it."],
      specs: ["You reported readable ratings. Keep a copy of the exact product label and instructions.", "Obtain the missing product ratings before comparing the supply or connected equipment.", "You reported missing ratings. Ask the manufacturer for the exact product specifications before purchase or use."],
      supply: answers.product === "battery" ? ["You reported a match with the device requirements and, only if rechargeable, its charging source. CANOD has not verified the combination.", "Confirm the battery type, device requirements and any applicable charging ratings. Never recharge a non-rechargeable battery.", "You reported a mismatch with the device or charging source. Do not use that combination; resolve it with the manufacturer."] : ["You reported a matching input requirement. This is your statement, not an electrical measurement or CANOD verification.", "Confirm the input requirements and intended power source with the manufacturer. Visible ratings are needed to support a match.", "You reported an input mismatch. Do not connect the item to that supply; resolve it with the manufacturer or a qualified professional."],
      fit: answers.product === "battery" ? ["You reported that battery type, size and connections suit the intended device. Retain the exact-model documentation.", "Check the battery type and physical fit specified by the device maker. For a power bank, also verify the output and cable requirements.", "You reported a mismatch in type, fit or connections. Hold off on use and ask the manufacturer about the correct battery or power bank."] : ["You reported a match with the intended equipment and cable or load. Keep the supporting manufacturer information.", distribution ? "Compare the accessory's load and use ratings with the connected equipment and intended location." : "Verify device output requirements, charging profiles and cable capability using exact-model documentation.", "You reported that the equipment, cable or connected load does not match. Hold off on use and ask the manufacturer about the correct combination."],
      seller: ["You reported traceable manufacturer, model and seller details. Retain their contact information and your receipt.", "Identify the exact model, responsible manufacturer and seller before paying. Ask who handles Canadian warranty service and returns.", "You reported untraceable product or seller information. Resolve the identity and support route before buying."],
      condition: ["You reported no visible warning signs. Appearance cannot reveal every defect or prove safety.", "Check the item and cable when available. Do not treat a listing photo as an inspection of the unit you will receive.", "You reported visible damage or another warning sign. Do not use or test the item. Contact the manufacturer or regulator about next steps."],
      placement: answers.product === "battery" ? ["You reported that use and storage follow the battery maker's instructions. This does not establish that a battery is rechargeable.", "Confirm handling and storage for the exact battery type. Charging checks apply only to rechargeable products.", "You reported an unsuitable use or storage arrangement. Resolve it using the manufacturer's instructions before use."] : ["You reported that the intended location follows the product's instructions. Recheck when the setup changes.", "Read the placement and ventilation instructions and plan a dry, unobstructed charging location.", "You reported an unsuitable location. Change the charging arrangement to follow manufacturer instructions before use."],
    };
    const detail = details[question.key]!;
    add(question.key, status, question.label.replace(/\?$/, ""), detail[status === "confirmed" ? 0 : status === "verify" ? 1 : 2], question.source);
  }
  const concern = items.some(item => item.status === "concern"), unknown = items.some(item => item.status === "verify");
  const reminder = answers.product === "battery" ? { text: "Follow the maker's handling and storage instructions, and charging instructions only for rechargeable products. Hidden defects can exist even when a battery looks intact. Check any separate mains charger as a separate product.", source: "batteryBuying" as const } : distribution ? { text: "Check the complete accessory and its intended use, not just its plug. For travel adapters, confirm any needed voltage conversion; for cords and power bars, confirm load and indoor/outdoor ratings. Do not remove a grounding pin.", source: "consumer" as const } : { text: "Check the complete charging path, including any wall adapter, device and cable. A visible mark is only one part of the information to verify; it is not a verdict on the setup.", source: "usb" as const };
  return {
    items, reminder, disclaimer: safetyDisclaimer,
    next: concern ? "Resolve the potential concerns before purchase or use. Ask the manufacturer or seller for exact-model information; contact the relevant regulator or qualified professional when needed." : unknown ? "Take the unverified items to the manufacturer or traceable seller. Keep the unanswered questions open until you have the relevant information." : "Keep the model, supporting documents and recall-search record. Recheck the product on arrival and follow its instructions. Confirmed answers are not a safety clearance.",
    summary: [{ label: "Product", value: safetyProducts.find(product => product.id === answers.product)!.label }, ...questions.map(question => ({ label: question.label, value: (question.key === "recall" ? recallOptions : checkOptions).find(([value]) => value === answers[question.key])![1] }))],
  };
}

export function safetyChecklistText(answers: SafetyAnswers) {
  const result = checkSafety(answers);
  return ["CANOD | Canadian Electrical Product Safety Checklist", result.disclaimer, "Answers are self-reported, not independently verified.", "", "YOUR ANSWERS", ...result.summary.map(item => `${item.label}: ${item.value}`), "", ...safetyStatuses.flatMap(status => [safetyStatusLabels[status].toUpperCase(), ...result.items.filter(item => item.status === status).flatMap(item => [item.title, item.detail, safetySources[item.source].url, ""])]), "NEXT STEP", result.next, "", result.reminder.text, safetySources[result.reminder.source].url, "", "Model / batch: ____________________", "Recall search date: ____________________", "Seller / support contact: ____________________", "Canadian warranty / return terms: ____________________", "", "For smoke, fire or immediate danger, move away and contact emergency services. Do not test or handle a hazardous item.", `Editorial sources reviewed: ${safetyReviewDate}`, `Full guide: https://canod.ca${safetyGuidePath}`, "No product inspection, database lookup or affiliate recommendations are included."].join("\n");
}
