export type ToolStatus = "live" | "coming-soon";

export type CanodToolItem = {
  id: string;
  question: string;
  name: string;
  category: "Connect" | "Power" | "Store & Protect" | "Understand";
  status: ToolStatus;
  path: string;
  badge: string;
  tagline: string;
  description: string;
  inputsPreview: string[];
  outputsPreview: string[];
  companionGuideSlug: string;
  companionGuideTitle: string;
  shopCategory: string;
};

export const canodToolsList: CanodToolItem[] = [
  {
    id: "usb-c-dock-checker",
    question: "Will two monitors work with my laptop?",
    name: "USB-C Dock & Dual Monitor Compatibility Checker",
    category: "Connect",
    status: "live",
    path: "/tools/usb-c-dock-checker/",
    badge: "Free Instant Tool",
    tagline: "Tests 25,200 hardware permutations to check monitors, ports, and charging before you buy.",
    description:
      "Enter your laptop model, operating system, and screens. Generates an instant, client-side compatibility report and downloadable checklist so you don't waste money on incompatible adapters.",
    inputsPreview: [
      "Your computer (Mac, Windows PC, Chromebook, iPad)",
      "How many monitors you want to connect",
      "Screen resolution (1080p, 1440p, 4K)",
      "How much power your laptop needs to charge",
    ],
    outputsPreview: [
      "Clear yes/no compatibility confirmation",
      "Whether your laptop can show two different extended screens",
      "Whether your laptop will charge at full speed",
      "Printable pre-purchase checklist",
    ],
    companionGuideSlug: "seven-things-usb-c-dock",
    companionGuideTitle: "7 Things to Check Before Connecting Dual Monitors",
    shopCategory: "Connect",
  },
  {
    id: "canadian-electrical-safety-checklist",
    question: "Is my charger or power bar safe to plug in?",
    name: "Canadian Electrical Product Safety Checklist",
    category: "Understand",
    status: "live",
    path: "/tools/canadian-electrical-safety-checklist/",
    badge: "Free Safety Check",
    tagline: "Pre-purchase safety audit checking recognized Canadian electrical marks (cUL, CSA, cETL).",
    description:
      "Record what you see on a charger, power bar, or battery. Immediately flags missing Canadian safety approvals, ungrounded plugs, and fire hazards before you plug into a Canadian wall.",
    inputsPreview: [
      "Product type (wall charger, power strip, travel battery)",
      "Safety approval marks printed on the back (cUL, CSA, cETL, CE only)",
      "Cord thickness and 3-prong grounding",
      "Manufacturer and Canadian retailer details",
    ],
    outputsPreview: [
      "Confirmation of recognized Canadian safety marks",
      "Warnings for dangerous uncertified electrical gear",
      "Official provincial electrical safety registry links",
      "Printable pre-purchase safety checklist",
    ],
    companionGuideSlug: "charger-safety-canada",
    companionGuideTitle: "Buy Safe in Canada: Charger Safety Checks",
    shopCategory: "Power",
  },
  {
    id: "charger-wattage-calculator",
    question: "Which charger do I need for my devices?",
    name: "Charger Wattage & Fast-Charging Calculator",
    category: "Power",
    status: "coming-soon",
    path: "/tools/#charger-wattage-calculator",
    badge: "Coming Soon",
    tagline: "Find the exact charger wattage to fast-charge your phone, tablet, and laptop at once.",
    description:
      "Calculate how many watts your charger needs so your laptop stays charged during heavy use while simultaneously fast-charging your phone without slowing down.",
    inputsPreview: [
      "Your devices (laptop brand, phone model, tablet)",
      "How many devices you plug in at the same time",
      "Travel vs. permanent home desk setup",
    ],
    outputsPreview: [
      "Recommended total charger wattage (e.g. 65W or 100W)",
      "Warning if your laptop will slowly drain under load",
      "Recommended compact GaN charger sizes",
    ],
    companionGuideSlug: "why-is-my-phone-charging-slowly",
    companionGuideTitle: "Why Is My Phone Charging Slowly?",
    shopCategory: "Power",
  },
  {
    id: "usbc-cable-checker",
    question: "Which USB-C cable do I need?",
    name: "USB-C Cable Capability & E-Marker Checker",
    category: "Connect",
    status: "coming-soon",
    path: "/tools/#usbc-cable-checker",
    badge: "Coming Soon",
    tagline: "Find out if a cable charges your laptop, transfers photos fast, or connects a monitor.",
    description:
      "Enter the markings on your cable to discover whether it's restricted to slow phone charging or capable of powering your laptop and connecting a 4K display.",
    inputsPreview: [
      "What you want to do (charge, transfer files, connect monitor)",
      "Markings printed on the cable tip (USB, SS, 100W, 240W, 40)",
      "Length of the cable",
    ],
    outputsPreview: [
      "Whether the cable can power your specific laptop",
      "Whether the cable can send video to a monitor",
      "Simple shopping recommendation",
    ],
    companionGuideSlug: "why-usb-c-cables-work-differently",
    companionGuideTitle: "Why USB-C Cables Work Differently",
    shopCategory: "Connect",
  },
  {
    id: "dual-monitor-hub-checker",
    question: "Can my laptop run two 4K screens?",
    name: "Dual Monitor Hub & DisplayBandwidth Calculator",
    category: "Connect",
    status: "live",
    path: "/tools/usb-c-dock-checker/",
    badge: "Active via Dock Suite",
    tagline: "Calculate display lane allocation across DisplayPort 1.2, 1.4 (DSC), and Thunderbolt.",
    description:
      "Integrated directly into our free Dock Suite. Evaluates whether your computer and hub support dual extended displays without blurry refresh rates or flickering.",
    inputsPreview: [
      "Laptop processor type (Apple Mac or Windows PC)",
      "Desired resolution (1080p, 1440p, 4K)",
      "Target refresh rate (60 Hz vs 120 Hz gaming)",
    ],
    outputsPreview: [
      "Confirmation if dual screens will run at full 60 Hz",
      "Mac dual extended display warnings",
      "Best port connection sequence",
    ],
    companionGuideSlug: "seven-things-usb-c-dock",
    companionGuideTitle: "7 Things to Check Before Connecting Dual Monitors",
    shopCategory: "Connect",
  },
  {
    id: "wifi-coverage-calculator",
    question: "How much Wi-Fi coverage do I need?",
    name: "Wi-Fi Coverage & Node Placement Calculator",
    category: "Connect",
    status: "coming-soon",
    path: "/tools/#wifi-coverage-calculator",
    badge: "Coming Soon",
    tagline: "Calculate whether you need a single router, an extender, or a whole-home mesh system.",
    description:
      "Enter your home's square footage, floor count, and wall materials to find out the right router setup to eliminate dead spots upstairs and in the basement.",
    inputsPreview: [
      "Home size (condo, 2-story house, split level)",
      "Number of floors and basement",
      "Where your internet modem enters the home",
    ],
    outputsPreview: [
      "Recommendation: Single router vs. 2-pack vs. 3-pack mesh",
      "Best placement spots to avoid dead zones",
      "Whether you should run one wired cable to your desk",
    ],
    companionGuideSlug: "router-or-mesh-system",
    companionGuideTitle: "Do I Need a Router, Wi-Fi Extender or Mesh System?",
    shopCategory: "Connect",
  },
  {
    id: "backup-storage-calculator",
    question: "How much backup storage do I need?",
    name: "Backup Storage Capacity Calculator",
    category: "Store & Protect",
    status: "coming-soon",
    path: "/tools/#backup-storage-calculator",
    badge: "Coming Soon",
    tagline: "Calculate how large an external hard drive or SSD you need to protect your files for years.",
    description:
      "Enter how many photos, videos, and files you have today to find out what size backup drive to buy so you don't run out of space in six months.",
    inputsPreview: [
      "Current computer storage (e.g. 256GB, 512GB, 1TB)",
      "How many photos and home videos you take per year",
      "How many years of history you want to keep",
    ],
    outputsPreview: [
      "Recommended portable drive size (1TB, 2TB, 4TB)",
      "Simple 3-2-1 backup checklist",
      "Recommended durable portable SSDs",
    ],
    companionGuideSlug: "how-much-backup-storage",
    companionGuideTitle: "How Much Backup Storage Do I Need?",
    shopCategory: "Store & Protect",
  },
  {
    id: "nas-capacity-calculator",
    question: "How much space will my backup drive have?",
    name: "NAS RAID Usable Capacity & Redundancy Calculator",
    category: "Store & Protect",
    status: "coming-soon",
    path: "/tools/#nas-capacity-calculator",
    badge: "Coming Soon",
    tagline: "Calculate real usable space after formatting and safety drive mirroring.",
    description:
      "Calculate real usable storage space on home backup enclosures so you know exactly how much room you have for files after safety mirroring.",
    inputsPreview: [
      "Number of hard drives (2-bay or 4-bay)",
      "Capacity of each drive (4TB, 8TB, 12TB)",
      "Mirroring safety preference",
    ],
    outputsPreview: [
      "True usable space for your photos and files",
      "Space dedicated to protecting against drive failure",
      "Simple setup advice for families and home offices",
    ],
    companionGuideSlug: "choosing-a-home-nas",
    companionGuideTitle: "Choosing a Home NAS: Storage & Backups",
    shopCategory: "Store & Protect",
  },
];
