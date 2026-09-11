export const pillars = [
  { id: "work", number: "01", title: "Work & connectivity", description: "The right connections. A calmer workspace.", detail: "Docks, displays, chargers and the cables that connect them.", guide: "seven-things-usb-c-dock", cta: "Understand your connections", upcoming: "Chargers, monitor setups and everyday peripherals" },
  { id: "storage", number: "02", title: "Storage & backup", description: "Your files, with a plan behind them.", detail: "Local storage, independent backups and the path between devices.", guide: "choosing-a-home-nas", cta: "Build a storage plan", upcoming: "External SSDs, cloud backup and digital protection" },
  { id: "travel", number: "03", title: "Portable work & travel", description: "A useful setup. A lighter bag.", detail: "Compact charging, cable organization and working away from home.", guide: "choosing-a-tech-organizer", cta: "Rethink your everyday carry", upcoming: "Compact chargers, travel adapters and laptop carry" },
] as const;
export type PillarId = typeof pillars[number]["id"];

export const editorialIntents = [
  { id: "workspace", label: "Connect my workspace", description: "Start with the computer, the screens and the connections between them. Check the details before choosing a dock.", href: "/guides/seven-things-usb-c-dock/", cta: "Read the dock buying guide", section: "work", secondary: "Explore work & connectivity" },
  { id: "digital", label: "Organize and protect my files", description: "Separate where your files live from how you will recover them. Our NAS guide explains storage, backups and the whole setup.", href: "/guides/choosing-a-home-nas/", cta: "Start with storage & backup", section: "storage", secondary: "Explore storage & backup" },
  { id: "travel", label: "Build a portable work setup", description: "Choose around what you actually carry, from your largest charger to the cable you reach for every day.", href: "/guides/choosing-a-tech-organizer/", cta: "Read the organizer guide", section: "travel", secondary: "Explore portable work" },
  { id: "business", label: "Choose technology for my business", description: "Begin with a connected workspace and a file-recovery plan. Dedicated business-software guides are planned; there are no software recommendations yet.", href: "/guides/#business", cta: "See the business starting point", section: "business", secondary: "Our planned business coverage" },
] as const;
export type EditorialIntentId = typeof editorialIntents[number]["id"];
