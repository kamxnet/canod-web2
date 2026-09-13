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
    id: "charger-wattage-calculator",
    question: "Which charger do I need for my devices?",
    name: "Charger Wattage & Fast-Charging Calculator",
    category: "Power",
    status: "live",
    path: "/tools/charger-wattage-calculator/",
    badge: "Free Instant Tool",
    tagline: "Find the exact single charger wattage to fast-charge your phone, tablet, and laptop at once.",
    description:
      "Select your laptop, phone, and tablet to see exactly what size GaN charger you need, how power splits across ports, and how to avoid slow charging warnings.",
    inputsPreview: [
      "Your laptop (MacBook Air, Pro, or Windows PC)",
      "Your phone (iPhone, Samsung Galaxy, or Pixel)",
      "Tablet / e-reader",
      "Charging simultaneously vs. one at a time",
    ],
    outputsPreview: [
      "Recommended charger wattage (e.g. 65W or 100W GaN)",
      "How power splits across ports when both are plugged in",
      "Cable power delivery requirements (60W vs 100W/240W)",
      "Canadian safety checklist for wall plugs",
    ],
    companionGuideSlug: "which-charger-do-i-need",
    companionGuideTitle: "Which Charger Do I Need for My Phone and Laptop?",
    shopCategory: "Power",
  },
  {
    id: "usb-c-dock-checker",
    question: "Will two monitors work with my laptop?",
    name: "USB-C Dock & Dual Monitor Compatibility Checker",
    category: "Connect",
    status: "live",
    path: "/tools/usb-c-dock-checker/",
    badge: "Free Instant Tool",
    tagline: "Checks whether your laptop can run dual extended screens and charge over one cable.",
    description:
      "Select your laptop brand and model to immediately see whether your computer supports two extended monitors, whether DisplayLink is required on a Mac, and how much power you need.",
    inputsPreview: [
      "Your laptop (MacBook Air, MacBook Pro, Dell XPS, ThinkPad)",
      "How many monitors you want to connect (1 or 2)",
      "Whether you need the laptop to charge through the dock",
      "Optional advanced screen resolution & port override",
    ],
    outputsPreview: [
      "Clear confirmation if dual screens will mirror or extend",
      "MacBook single-screen limit alerts and DisplayLink solutions",
      "Host power delivery sufficiency check",
      "Downloadable pre-purchase checklist",
    ],
    companionGuideSlug: "seven-things-usb-c-dock",
    companionGuideTitle: "How to Connect Two Monitors to a Laptop (Mac & PC)",
    shopCategory: "Connect",
  },
  {
    id: "wifi-coverage-calculator",
    question: "How can I improve my Wi-Fi coverage?",
    name: "Wi-Fi Coverage & Node Placement Tool",
    category: "Connect",
    status: "live",
    path: "/tools/wifi-coverage-calculator/",
    badge: "Free Instant Tool",
    tagline: "Find out whether moving your router or adding a mesh node fixes dead zones upstairs.",
    description:
      "Enter your home size, floor count, and wall materials to find out whether a single well-placed router or a 2-node mesh system will eliminate dead spots.",
    inputsPreview: [
      "Home size (apartment, townhouse, 2-story home)",
      "Number of floors and basement",
      "Current modem & router location",
      "Where Wi-Fi is currently slowest",
    ],
    outputsPreview: [
      "Clear recommendation: Move router vs. 2-pack mesh system",
      "Golden node placement rule to avoid placing pods in dead zones",
      "Advice on older plaster, brick, and concrete walls",
      "Key diagnostic steps before spending money",
    ],
    companionGuideSlug: "wifi-slow-in-one-room",
    companionGuideTitle: "Why Is My Wi-Fi Slow in One Room?",
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
      "Record what you see on a charger, power bar, or battery. Flags missing Canadian safety approvals, ungrounded plugs, and fire hazards before you plug into a Canadian wall.",
    inputsPreview: [
      "Product type (wall charger, power strip, travel battery)",
      "Safety approval marks printed on the back (cUL, CSA, cETL)",
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
    companionGuideTitle: "Is This Charger Safe to Buy in Canada?",
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
];
