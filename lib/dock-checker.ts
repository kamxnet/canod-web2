import { dockSources, dockSourceCheckDate, dockGuidePath } from "./dock-sources";

export const laptopPresets = [
  { id: "macbook-air", label: "MacBook Air (M1, M2, or M3)", os: "macos", port: "thunderbolt", device: "laptop", defaultCharging: "65" },
  { id: "macbook-pro", label: "MacBook Pro (M-series Pro or Max)", os: "macos", port: "thunderbolt", device: "laptop", defaultCharging: "100" },
  { id: "windows-dell", label: "Dell XPS / Latitude / Inspiron", os: "windows", port: "thunderbolt", device: "laptop", defaultCharging: "65" },
  { id: "windows-lenovo", label: "Lenovo ThinkPad / Yoga / IdeaPad", os: "windows", port: "thunderbolt", device: "laptop", defaultCharging: "65" },
  { id: "windows-hp", label: "HP Spectre / Envy / Pavilion", os: "windows", port: "dp", device: "laptop", defaultCharging: "65" },
  { id: "windows-surface", label: "Microsoft Surface Laptop / Pro", os: "windows", port: "thunderbolt", device: "laptop", defaultCharging: "65" },
  { id: "windows-other", label: "Other Windows Laptop (with USB-C)", os: "windows", port: "dp", device: "laptop", defaultCharging: "65" },
  { id: "chromebook", label: "Chromebook", os: "chromeos", port: "dp", device: "laptop", defaultCharging: "65" },
  { id: "ipad", label: "iPad Pro / iPad Air", os: "ipados", port: "thunderbolt", device: "tablet", defaultCharging: "65" },
  { id: "custom", label: "Other / Specify exact ports manually", os: "unknown", port: "unknown", device: "laptop", defaultCharging: "unknown" },
] as const;

export type LaptopPresetId = typeof laptopPresets[number]["id"];

export const dockOptions = {
  device: [["laptop", "Laptop"], ["desktop", "Desktop computer"], ["tablet", "Tablet or 2-in-1"], ["phone", "Phone"], ["unknown", "Not sure"]],
  os: [["unknown", "Not sure"], ["windows", "Windows"], ["macos", "macOS"], ["chromeos", "ChromeOS"], ["linux", "Linux"], ["ipados", "iPadOS"], ["android", "Android"]],
  port: [["unknown", "Not sure"], ["usbc", "USB-C, features unknown"], ["dp", "USB-C with DisplayPort Alt Mode"], ["usb4", "USB4"], ["thunderbolt", "Thunderbolt 3, 4 or 5"], ["usba", "USB-A only (no USB-C)"]],
  monitors: [["1", "One external monitor"], ["2", "Two external monitors"], ["3", "Three or more monitors"], ["0", "No external monitors"]],
  resolution: [["unknown", "Not sure yet"], ["1080", "1080p at 60 Hz"], ["1440", "1440p at 60 Hz"], ["4k", "4K at 60 Hz"], ["high", "Over 60 Hz or a mixed setup"]],
  charging: [["unknown", "Not sure"], ["no", "No, I will use separate power"], ["yes", "Yes, wattage not yet known"], ["65", "Yes, up to 65 W"], ["100", "Yes, around 100 W"], ["high", "Yes, more than 100 W"]],
} as const;

export type DockAnswers = {
  [K in keyof typeof dockOptions]: typeof dockOptions[K][number][0];
} & {
  preset?: LaptopPresetId;
};

export const defaultDockAnswers: DockAnswers = {
  preset: "macbook-air",
  device: "laptop",
  os: "macos",
  port: "thunderbolt",
  monitors: "2",
  resolution: "unknown",
  charging: "65",
};

export type DockNote = { id: string; title: string; text: string; source?: keyof typeof dockSources; isTechnical?: boolean };

export function describeDockAnswers(answers: DockAnswers) {
  const list = (Object.keys(dockOptions) as (keyof typeof dockOptions)[])
    .filter(key => key !== "resolution" || answers.monitors !== "0")
    .map(key => ({ key, label: dockOptions[key].find(([value]) => value === answers[key])?.[1] ?? "Not sure" }));

  if (answers.preset && answers.preset !== "custom") {
    const p = laptopPresets.find(item => item.id === answers.preset);
    // Replace the generic "device" row with the human-readable preset label
    if (p) {
      const idx = list.findIndex(item => item.key === "device");
      if (idx !== -1) list[idx] = { key: "device" as const, label: "Laptop" as "Laptop" };
    }
  }
  return list;
}

export function checkDock(answers: DockAnswers) {
  const notes: DockNote[] = [];
  const add = (id: string, title: string, text: string, source?: keyof typeof dockSources, isTechnical = false) =>
    notes.push({ id, title, text, source, isTechnical });

  const displays = answers.monitors !== "0";

  // Plain English top-level consumer verdict
  if (answers.preset === "macbook-air" && (answers.monitors === "2" || answers.monitors === "3")) {
    add(
      "macbook-air-dual-warning",
      "MacBook Air Dual-Screen Limitation",
      "Base Apple Silicon chips (M1, M2, and M3 MacBook Air) natively support only ONE external display. If you plug into a standard USB-C or Thunderbolt dock, both monitors will show the exact same mirrored picture. To get two independent extended screens, you must choose a dock with DisplayLink USB-graphics software.",
      "mac"
    );
  } else if (answers.os === "macos" && answers.monitors === "2") {
    add(
      "mac-dual-mst-warning",
      "Mac Dual Extended Display Check",
      "macOS does not support standard Multi-Stream Transport (MST) over a single USB-C cable. Windows can do two extended screens over a cheap USB-C hub, but a Mac requires either a true Thunderbolt 4 dock (with dual native video streams) or a DisplayLink-powered dock.",
      "mac"
    );
  } else if (answers.os === "windows" && answers.monitors === "2") {
    add(
      "windows-dual-success",
      "Windows Dual Extended Displays Supported",
      "Windows natively supports Multi-Stream Transport (MST). A USB-C dock with two HDMI or DisplayPort sockets can display two completely different extended desktops, provided your laptop's USB-C port supports video output.",
      "windows"
    );
  }

  if (answers.port === "unknown" || answers.port === "usbc") {
    add("port-unknown", "Check if your USB-C port supports video", "Not all USB-C ports can send video to a monitor. Check whether your laptop has a tiny 'D' (DisplayPort) icon or lightning bolt beside the port. If it only has a battery icon, it may only support charging.", "windows");
  } else if (answers.port === "usba") {
    add("usb-a", "USB-A does not support native monitor video", displays ? "A rectangular USB-A port cannot transmit native video. You would need a specialized DisplayLink USB-to-HDMI adapter, and your laptop cannot charge through this port." : "Check dock compatibility for USB-A. A physical adapter does not add USB-C video or charging.", "windows");
  } else if (answers.port === "dp") {
    add("alt-mode", "DisplayPort Video Path", "Your laptop supports DisplayPort Alt Mode. It can run one external monitor directly at full resolution, or dual monitors on Windows via display lane sharing.", "displayport", true);
  } else {
    add("high-speed-port", "Thunderbolt / USB4 Connection", `Your laptop has ${answers.port === "usb4" ? "USB4" : "Thunderbolt 3, 4 or 5"}. This provides the highest video bandwidth (40 Gbps), allowing dual 4K monitors on compatible docks.`, "windows", true);
  }

  if (displays) {
    const count = answers.monitors === "1" ? "one external display" : answers.monitors === "2" ? "two independent external displays" : "three or more independent external displays";
    const target = dockOptions.resolution.find(([value]) => value === answers.resolution)![1];
    add("display-plan", "Display Resolution & Refresh Rates", `Setup goal: ${count} at ${target}. Ensure the dock documentation explicitly states it can run all connected screens simultaneously at 60 Hz rather than dropping down to 30 Hz.`, "displayport");

    if (answers.os === "macos") {
      add("mac-display", "Apple Silicon Display Ceilings", "MacBook Pro with M-Pro chips supports up to two displays; M-Max chips support up to four displays. A dock cannot bypass Apple's native hardware maximum.", "mac", true);
      add("mac-permission", "DisplayLink Screen Recording Permission", "If you use a DisplayLink dock to run dual screens on a Mac, macOS requires 'Screen Recording' permission in System Settings. Verify if your corporate IT policy allows this on managed work laptops.", "permissions");
    }
  } else {
    add("no-displays", "Peripherals and Hubs", "No external monitors selected. If you only need USB ports, Ethernet, and charging, a small $25–$40 travel hub may be more practical than an expensive $200 display dock.");
  }

  if (answers.charging === "no" || answers.port === "usba") {
    add("separate-power", "Separate Laptop Charger Required", "Plan to keep your laptop's original wall charger plugged into its own port while using the dock.");
  } else {
    const need = answers.charging === "65" ? "up to 65 W" : answers.charging === "100" ? "around 100 W" : answers.charging === "high" ? "more than 100 W" : null;
    add("power", "Host Power Delivery Sufficiency", `${need ? `Your laptop needs ${need}. ` : "Check your laptop's required wattage. "}Make sure the dock states power delivery TO THE LAPTOP (host), not just the size of the dock's power brick.`, "windows");
    if (answers.charging === "high") add("high-power", "High-Power Laptops (>100W)", "Power-heavy laptops (e.g. 16\" MacBook Pro or gaming laptops) may slowly discharge during heavy workloads if the dock only delivers 65W–85W to the host.", "power", true);
  }

  add("purchase", "Canadian Purchase & Return Protection", "Before unboxing a dock in Canada, verify return shipping terms and whether opened electronics carry a restocking fee, in case your laptop model has an unexpected compatibility quirk.");

  return {
    notes,
    summary: describeDockAnswers(answers),
    disclaimer: "Educational guidance based on hardware standards, not a compatibility guarantee. CANOD has not tested your exact hardware.",
  };
}

export function dockChecklistText(answers: DockAnswers) {
  const result = checkDock(answers);
  return [
    "CANOD | USB-C Dock & Dual Monitor Compatibility Checklist",
    result.disclaimer,
    "",
    "YOUR SETUP",
    ...result.summary.map(item => `- ${item.label}`),
    "",
    "RECOMMENDATIONS & VERIFICATION STEPS",
    ...result.notes.flatMap(note => [
      note.title,
      note.text,
      ...(note.source ? [dockSources[note.source].url] : []),
      ""
    ]),
    "Exact computer model: ____________________",
    "Exact dock model: ____________________",
    "",
    `Sources checked: ${dockSourceCheckDate}`,
    `Full guide: https://canod.ca${dockGuidePath}`,
  ].join("\n");
}
