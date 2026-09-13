export type SolutionBlueprint = {
  id: string;
  consumerTitle: string;
  title: string;
  badge: string;
  tagline: string;
  problemSolved: string;
  targetAudience: string;
  coreComponents: {
    item: string;
    role: string;
    specNote: string;
  }[];
  verificationSteps: string[];
  guideSlug: string;
  guideTitle: string;
  toolPath?: string;
  toolTitle?: string;
  shopCategory: string;
};

export const solutionBlueprints: SolutionBlueprint[] = [
  {
    id: "dual-screen-hybrid-desk",
    consumerTitle: "Connect two monitors to your laptop",
    title: "The Dual-Screen Workstation",
    badge: "Most Popular Setup",
    tagline: "One cable into your laptop. Two clear screens, fast laptop charging, and a clean desk with no tangled wires.",
    problemSolved: "Eliminates morning cable hassle, flickering screens, and incompatible display adapters between Windows and Mac laptops.",
    targetAudience: "Anyone working from home who wants dual screens without messy cords.",
    coreComponents: [
      {
        item: "Dual Display USB-C / Thunderbolt Dock",
        role: "Central desk connection",
        specNote: "Provides full 96W power to your laptop while sending video to two screens over one cable.",
      },
      {
        item: "Dual Monitor Desk Arm",
        role: "Floating screen position",
        specNote: "Raises screens to comfortable eye level and hides wires inside the arms.",
      },
      {
        item: "Under-Desk Steel Cable Tray",
        role: "Hides heavy power bricks",
        specNote: "Keeps power strips and heavy adapters off your floor for a clean, dust-free space.",
      },
      {
        item: "Certified 40 Gbps Cable",
        role: "Single tether to laptop",
        specNote: "Guaranteed high-speed cable that handles dual video, power, and data without dropouts.",
      },
    ],
    verificationSteps: [
      "Check whether your laptop supports two extended screens (Macs need Thunderbolt for two different screens).",
      "Confirm your monitors have HDMI or DisplayPort connections.",
      "Run our free 30-second compatibility checker before buying any hub.",
    ],
    guideSlug: "seven-things-usb-c-dock",
    guideTitle: "7 Things to Check Before Connecting Dual Monitors",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Will Two Monitors Work With My Laptop?",
    shopCategory: "Docks & Hubs",
  },
  {
    id: "mobile-professional-carry",
    consumerTitle: "Work from anywhere with one bag",
    title: "The One-Bag Travel & Remote Work Kit",
    badge: "Travel Tested",
    tagline: "Ultra-compact charging and connectivity that fits in any backpack and clears Canadian airport security without issues.",
    problemSolved: "Replaces 4 heavy chargers and messy tangled cords with one lightweight travel kit that charges everything.",
    targetAudience: "Commuters, travelers, hybrid workers, and students who work in cafés, libraries, and airports.",
    coreComponents: [
      {
        item: "100W Fast Multi-Port Wall Charger",
        role: "All-in-one power source",
        specNote: "Charges your laptop, phone, and headphones all at once from a single wall plug.",
      },
      {
        item: "Airport-Approved Power Bank (74 Wh)",
        role: "Backup battery on the move",
        specNote: "Safely under CATSA's strict 100 Wh airline carry-on limit so airport security won't seize it.",
      },
      {
        item: "Weatherproof Structured Tech Pouch",
        role: "Keeps cords neat",
        specNote: "Opens flat on airplane tray tables with elastic loops so cables don't tangle in your bag.",
      },
      {
        item: "Flexible High-Power USB-C Cable",
        role: "Universal charging cord",
        specNote: "Durable silicone jacket that won't kink or fray, rated for fast 100W–240W charging.",
      },
    ],
    verificationSteps: [
      "Check that your power bank has its Watt-hour (Wh) rating clearly printed on the plastic casing.",
      "Check your laptop's original charger wattage so you get enough power while working.",
    ],
    guideSlug: "what-size-power-bank-do-i-need",
    guideTitle: "What Size Power Bank Can I Take on a Plane?",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Check Power Bank Safety & Airport Limits",
    shopCategory: "Charging & Power",
  },
  {
    id: "canadian-3-2-1-backup",
    consumerTitle: "Back up your important files & photos",
    title: "The 3-2-1 Data Protection Strategy",
    badge: "Family & Business Essential",
    tagline: "Never lose precious family memories or critical tax documents to a spilled coffee, dropped laptop, or sudden hard drive failure.",
    problemSolved: "Protects your data with zero ongoing effort by keeping three safe copies of your files.",
    targetAudience: "Homeowners, photographers, parents, and self-employed professionals across Canada.",
    coreComponents: [
      {
        item: "Fast Portable SSD (1TB–2TB)",
        role: "Instant local backup",
        specNote: "Backs up photos and documents in seconds with rugged drop protection.",
      },
      {
        item: "Automated Home Backup Drive or NAS",
        role: "Whole-home automatic backup",
        specNote: "Silently backs up all family laptops over home Wi-Fi without needing to plug in cables.",
      },
      {
        item: "Encrypted Cloud Storage",
        role: "Safe off-site copy",
        specNote: "Protects your most important memories if your computer is stolen or damaged by water.",
      },
    ],
    verificationSteps: [
      "Follow the 3-2-1 rule: 3 copies of your files, on 2 different devices, with 1 copy in the cloud.",
      "Turn on automatic daily backups (Time Machine on Mac, File History or OneDrive on Windows).",
      "Store your portable backup drive safely away from daily spills.",
    ],
    guideSlug: "how-much-backup-storage",
    guideTitle: "How Much Backup Storage Do I Need?",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Check Storage Device Safety & Wattage",
    shopCategory: "Storage & Protection",
  },
  {
    id: "safe-home-office-electrical",
    consumerTitle: "Protect your home office from power surges",
    title: "Safe Home Office Electrical Foundation",
    badge: "Safety Verified",
    tagline: "Protect your expensive computer, monitors, and router from sudden lightning surges and dangerous uncertified power strips.",
    problemSolved: "Eliminates fire hazards and protects delicate electronics from voltage spikes during summer storms and winter brownouts.",
    targetAudience: "Anyone working from home with expensive laptops, multiple monitors, and desktop accessories.",
    coreComponents: [
      {
        item: "Canadian Certified Surge Protector (14 AWG)",
        role: "Safety power barrier",
        specNote: "Features legitimate cUL or CSA marks with thick, heavy-duty pure copper wiring.",
      },
      {
        item: "Fire-Resistant Cable Raceway Box",
        role: "Encloses floor clutter",
        specNote: "Hides messy plugs and protects cords from curious pets and vacuum cleaners.",
      },
      {
        item: "Reusable Silicone Cord Straps",
        role: "Tidy cable bundles",
        specNote: "Replaces throwaway zip ties so you can unplug or swap devices in seconds without scissors.",
      },
    ],
    verificationSteps: [
      "Check the back of your current power bar for legitimate cUL, CSA, or cETL safety marks.",
      "Ensure your power bar has 14 AWG wire (never thin 18 AWG cords for computers and heaters).",
      "Never plug a power strip into another power strip ('daisy-chaining').",
    ],
    guideSlug: "power-bar-or-surge-protector-canada",
    guideTitle: "Power Bar or Surge Protector: What Canadians Should Check",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Is My Power Bar Safe for Canadian Walls?",
    shopCategory: "Charging & Power",
  },
  {
    id: "whole-home-network-backbone",
    consumerTitle: "Fix dead spots & slow Wi-Fi in your home",
    title: "Whole-Home High-Speed Network Setup",
    badge: "Zero Dead Zones",
    tagline: "Reliable, high-speed internet in every room, upstairs, and in the basement for video calls and 4K streaming without buffering.",
    problemSolved: "Fixes dropped Zoom calls, slow upstairs Wi-Fi, and dead zones caused by thick walls and metal furnace ducts.",
    targetAudience: "Families, remote workers, and gamers in multi-story houses or large apartments.",
    coreComponents: [
      {
        item: "Wi-Fi 6 Whole-Home Mesh System",
        role: "Seamless wireless coverage",
        specNote: "Places wireless nodes where signal is strong to blanket the entire house under one simple Wi-Fi name.",
      },
      {
        item: "Pure Copper Cat6 Ethernet Cable",
        role: "Direct wired desk connection",
        specNote: "Direct wired connection to your office desk for 100% reliable speed during work hours.",
      },
      {
        item: "Gigabit Desktop Network Switch",
        role: "Expands desk ports",
        specNote: "Provides wired internet to your computer, dock, and printer using one simple box.",
      },
    ],
    verificationSteps: [
      "Place your main Wi-Fi unit out in the open, not inside a closed metal or wooden cabinet.",
      "Position mesh nodes halfway between your main router and the weak room (not in the dead room itself).",
      "Run a single wired cable to your main desk if you do critical daily video calls.",
    ],
    guideSlug: "wifi-slow-in-one-room",
    guideTitle: "Why is My Wi-Fi Slow in One Room?",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Check Wi-Fi vs. Wired Speeds",
    shopCategory: "Networking",
  },
];
