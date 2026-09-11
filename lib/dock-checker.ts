import { dockSources, dockSourceCheckDate, dockGuidePath } from "./dock-sources";

export const dockOptions = {
  device: [["laptop", "Laptop"], ["desktop", "Desktop computer"], ["tablet", "Tablet or 2-in-1"], ["phone", "Phone"], ["unknown", "Not sure"]],
  os: [["unknown", "Not sure"], ["windows", "Windows"], ["macos", "macOS"], ["chromeos", "ChromeOS"], ["linux", "Linux"], ["ipados", "iPadOS"], ["android", "Android"]],
  port: [["unknown", "Not sure"], ["usbc", "USB-C, features unknown"], ["dp", "USB-C with DisplayPort Alt Mode"], ["usb4", "USB4"], ["thunderbolt", "Thunderbolt 3, 4 or 5"], ["usba", "USB-A only (no USB-C)"]],
  monitors: [["1", "One external monitor"], ["2", "Two external monitors"], ["3", "Three or more monitors"], ["0", "No external monitors"]],
  resolution: [["unknown", "Not sure yet"], ["1080", "1080p at 60 Hz"], ["1440", "1440p at 60 Hz"], ["4k", "4K at 60 Hz"], ["high", "Over 60 Hz or a mixed setup"]],
  charging: [["unknown", "Not sure"], ["no", "No, I will use separate power"], ["yes", "Yes, wattage not yet known"], ["65", "Yes, up to 65 W"], ["100", "Yes, around 100 W"], ["high", "Yes, more than 100 W"]],
} as const;
export type DockAnswers = { [K in keyof typeof dockOptions]: typeof dockOptions[K][number][0] };
export const defaultDockAnswers: DockAnswers = { device: "laptop", os: "unknown", port: "unknown", monitors: "1", resolution: "unknown", charging: "unknown" };
export type DockNote = { id: string; title: string; text: string; source?: keyof typeof dockSources };

export function describeDockAnswers(answers: DockAnswers) {
  return (Object.keys(dockOptions) as (keyof DockAnswers)[])
    .filter(key => key !== "resolution" || answers.monitors !== "0")
    .map(key => ({ key, label: dockOptions[key].find(([value]) => value === answers[key])?.[1] ?? "Not sure" }));
}

export function checkDock(answers: DockAnswers) {
  const notes: DockNote[] = [];
  const add = (id: string, title: string, text: string, source?: keyof typeof dockSources) => notes.push({ id, title, text, source });
  const displays = answers.monitors !== "0";

  if (answers.port === "unknown" || answers.port === "usbc") {
    add("port-unknown", "Identify the port first", "Find the exact device model and its port specifications. USB-C describes the connector; do not assume it supplies native video, USB4, Thunderbolt or charging input.", "windows");
  } else if (answers.port === "usba") {
    add("usb-a", "USB-A is not a native USB-C display path", displays ? "A physical adapter does not add native USB-C video. A USB-graphics dock is a different route that needs explicit device, operating-system and software support. Keep computer charging separate." : "Check the dock's explicit USB-A host support for your peripherals. A physical adapter does not add USB-C functions, and USB-C laptop charging should not be assumed.", "windows");
  } else if (answers.port === "dp") {
    add("alt-mode", "Match the complete DisplayPort path", "You selected DisplayPort Alt Mode. Confirm it in the device specification, then match the dock, host cable and monitor connection. A matching connector alone is not evidence.", "displayport");
  } else {
    add("high-speed-port", "Match the protocol, not just the plug", `You selected ${answers.port === "usb4" ? "USB4" : "Thunderbolt"}. Check the exact generation, dock host requirements, cable and any fallback-mode restrictions. Do not infer a display count or charging wattage from this choice.`, "windows");
  }

  if (displays) {
    const count = answers.monitors === "1" ? "one external display" : answers.monitors === "2" ? "two independent external displays" : "three or more independent external displays";
    const target = dockOptions.resolution.find(([value]) => value === answers.resolution)![1];
    add("display-plan", "Verify the simultaneous display combination", `Ask for support for ${count}, not only the number of sockets. ${answers.resolution === "unknown" ? "Record each screen's resolution and refresh rate before comparing docks." : `Your target is ${target}. Get confirmation for every screen running at once, including any mixed resolutions.`} Check the host's total limit and the dock's extended-versus-mirrored output table.`, "displayport");
    if (answers.os === "macos") {
      add("mac-display", "Use the exact Mac model's display limit", "Check the chip, model and Apple's supported display arrangement, including any lid-position conditions. A native Thunderbolt hub does not raise that maximum. Ask separately about a dock's MST and DisplayLink outputs.", "mac");
    }
    add("displaylink", "Ask whether the displays use DisplayLink", "DisplayLink is USB graphics, not another name for native DisplayPort or Thunderbolt video. Check the dock's exact software and platform requirements, application needs and workplace installation policy.", "displaylink");
    if (answers.os === "macos") {
      add("mac-permission", "Check the macOS software trade-offs", "DisplayLink Manager requires Screen Recording permission. DisplayLink also documents limits with some protected video on macOS. Verify those constraints before choosing that display path.", "permissions");
    }
  } else {
    add("no-displays", "Prioritize the connections you will use", "No external displays are included in this checklist. Compare your USB peripherals, Ethernet, storage and audio requirements. You may not need a display dock at all.");
  }

  if (answers.charging === "no" || answers.port === "usba") {
    add("separate-power", "Keep the computer's power supply", "Plan a separate power connection for the computer. Check whether the dock itself needs a supplied adapter and whether it can power your attached peripherals.");
  } else {
    const need = answers.charging === "65" ? "up to 65 W" : answers.charging === "100" ? "around 100 W" : answers.charging === "high" ? "more than 100 W" : null;
    add("power", "Verify power delivered to the host", `${need ? `You entered ${need}; this is your estimate, not a verified device requirement. ` : "Find the device's required charging wattage and supported USB-C charging input. "}Compare it with the dock's host-output rating, required adapter and cable, not just the adapter's headline wattage.`, "windows");
    if (answers.charging === "high") add("high-power", "Verify the higher-power combination", "USB Power Delivery can support higher power, but it must be supported by the specific device, dock, power supply and cable. Do not assume that a high-wattage adapter makes a dock deliver that power to your device.", "power");
    if (answers.device === "desktop") add("desktop-power", "Do not assume a desktop accepts dock power", "Use the desktop manufacturer's power requirements. A USB-C data or display port is not proof that the desktop can run from a dock's power supply.");
  }

  if (answers.device === "tablet" || answers.device === "phone" || answers.os === "ipados" || answers.os === "android") {
    add("mobile-device", "Confirm mobile-device support explicitly", "Look for support for the exact device, OS version, display mode and apps. A desktop dock's compatibility list does not establish the same features on a phone or tablet.");
  }
  if (["unknown", "linux", "chromeos"].includes(answers.os)) {
    add("os-check", "Check the operating-system support page", "Confirm your OS version and, where relevant, distribution, kernel or processor architecture. Check the dock's display, Ethernet and audio support separately; do not infer full support from one working port.");
  } else if (answers.os === "windows") {
    add("windows-software", "Check Windows and workplace requirements", "Use the dock maker's supported Windows versions and firmware notes. Confirm required drivers and permission to install them on a managed computer before purchase.");
  }
  add("purchase", "Confirm the whole Canadian purchase", "Ask the seller to confirm the exact setup in writing. Compare the total in CAD, required extras, delivery and return terms, including opened packages and return shipping.");

  return { notes, summary: describeDockAnswers(answers), disclaimer: "Educational guidance, not a compatibility guarantee. This checker does not detect your hardware or evaluate a specific dock." };
}

export function dockChecklistText(answers: DockAnswers) {
  const result = checkDock(answers);
  return ["CANOD | USB-C Dock Compatibility Checklist", result.disclaimer, "", "YOUR SETUP", ...result.summary.map(item => `- ${item.label}`), "", ...result.notes.flatMap(note => [note.title, note.text, ...(note.source ? [dockSources[note.source].url] : []), ...(note.id === "mac-permission" ? [dockSources.protectedVideo.url] : []), ""]), "Exact computer model: ____________________", "Exact dock model: ____________________", "Seller's written confirmation: ____________________", "", `Sources checked: ${dockSourceCheckDate}`, `Read the guide: https://canod.ca${dockGuidePath}`, "No affiliate links or product recommendations are included."].join("\n");
}
