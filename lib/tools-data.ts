export type ToolStatus = "live" | "coming-soon";

export type CanodToolItem = {
  id: string;
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
    name: "USB-C Dock & Dual Monitor Compatibility Checker",
    category: "Connect",
    status: "live",
    path: "/tools/usb-c-dock-checker/",
    badge: "Active Tool",
    tagline: "Tests 25,200 hardware permutations to verify monitor, port, and charging limits.",
    description:
      "Enter your laptop model, operating system, host port type, external monitor resolutions, and charging requirements. Generates an instant, client-side compatibility report and downloadable checklist.",
    inputsPreview: [
      "Device & Operating System (macOS, Windows, ChromeOS, iPadOS)",
      "Host Port (Thunderbolt 4, USB4, USB-C DP Alt Mode, USB-A)",
      "Monitors Count & Resolution (Dual 4K @ 60Hz, Ultrawide)",
      "Charging Wattage Requirement (45W, 65W, 96W, 100W+)",
    ],
    outputsPreview: [
      "Hardware bandwidth sufficiency check",
      "macOS MST vs Thunderbolt dual-extended display advice",
      "Power delivery shortfall warnings",
      "Downloadable .txt verification checklist",
    ],
    companionGuideSlug: "seven-things-usb-c-dock",
    companionGuideTitle: "7 Things to Check Before Buying a USB-C Dock",
    shopCategory: "Connect",
  },
  {
    id: "canadian-electrical-safety-checklist",
    name: "Canadian Electrical Product Safety Checklist",
    category: "Understand",
    status: "live",
    path: "/tools/canadian-electrical-safety-checklist/",
    badge: "Active Tool",
    tagline: "Pre-purchase safety audit evaluating 183,708 product inspection permutations.",
    description:
      "Record what you know about a charger, power bar, battery, or appliance. Identifies recognized SCC-accredited certification marks (cUL, CSA, cETL), missing voltage specifications, and potential fire red flags.",
    inputsPreview: [
      "Product Type (Wall charger, power strip, power bank, cord)",
      "Marking Inspection (cUL, CSA, cETL, CE-only, none)",
      "Plug & Cord Construction (Grounded 3-prong, 14 AWG wire)",
      "Manufacturer & Canadian Distributor Transparency",
    ],
    outputsPreview: [
      "Legitimate Canadian electrical mark confirmation",
      "Provincial inspection & ESA registry routing",
      "Missing specification warnings",
      "Printable & downloadable pre-purchase audit",
    ],
    companionGuideSlug: "charger-safety-canada",
    companionGuideTitle: "Buy Safe in Canada: Charger Safety Checks",
    shopCategory: "Power",
  },
  {
    id: "charger-wattage-calculator",
    name: "Charger Wattage & Fast-Charging Calculator",
    category: "Power",
    status: "coming-soon",
    path: "/tools/#charger-wattage-calculator",
    badge: "Coming Soon",
    tagline: "Match device voltage/wattage curves with USB-PD and GaN power profiles.",
    description:
      "Calculate whether your replacement charger will supply full operating power to your laptop, tablet, and smartphone simultaneously under maximum CPU/GPU workloads.",
    inputsPreview: [
      "Host Device Model & Factory Power Supply Wattage",
      "Simultaneous Devices Connected (Laptop + Phone + Earbuds)",
      "Charger Output Port Allocation (e.g. 65W + 30W dynamic sharing)",
    ],
    outputsPreview: [
      "Net wattage delivered to primary laptop port",
      "Battery drain warnings under heavy computing load",
      "Recommended GaN charger capacity rating",
    ],
    companionGuideSlug: "why-is-my-phone-charging-slowly",
    companionGuideTitle: "Why Is My Phone Charging Slowly?",
    shopCategory: "Power",
  },
  {
    id: "usbc-cable-checker",
    name: "USB-C Cable Capability & E-Marker Checker",
    category: "Connect",
    status: "coming-soon",
    path: "/tools/#usbc-cable-checker",
    badge: "Coming Soon",
    tagline: "Determine whether a USB-C cord supports 240W charging, 40 Gbps data, or 4K video.",
    description:
      "Enter the stamped cable logos, length, and generation to discover whether your cord is restricted to slow 480 Mbps USB 2.0 or supports high-speed display and EPR charging.",
    inputsPreview: [
      "Cable Connector Markings (Standard USB, SS 10, 20, 40, Thunderbolt)",
      "Cable Length (0.8m, 1m, 2m, 3m)",
      "Intended Job (Laptop charging, external monitor, SSD transfer)",
    ],
    outputsPreview: [
      "Maximum supported wattage (60W vs 100W vs 240W EPR)",
      "Video transmission support (DP Alt Mode vs USB 2.0 only)",
      "Recommended replacement cable specification",
    ],
    companionGuideSlug: "why-usb-c-cables-work-differently",
    companionGuideTitle: "Why USB-C Cables Work Differently",
    shopCategory: "Connect",
  },
  {
    id: "dual-monitor-hub-checker",
    name: "Dual Monitor Hub & DisplayBandwidth Calculator",
    category: "Connect",
    status: "live",
    path: "/tools/usb-c-dock-checker/",
    badge: "Active via Dock Suite",
    tagline: "Calculate display lane allocation across DisplayPort 1.2, 1.4 (DSC), and Thunderbolt.",
    description:
      "Integrated directly within the CANOD Dock Suite. Evaluates whether your laptop GPU and hub support dual extended displays without down-clocking refresh rates to 30Hz.",
    inputsPreview: [
      "DisplayPort Revision (DP 1.2, DP 1.4, DP 1.4 with DSC)",
      "Resolution Combination (1080p + 1080p, 4K + 4K, 1440p 144Hz)",
      "Host Graphics Processor (Intel, AMD, Apple Silicon, Nvidia)",
    ],
    outputsPreview: [
      "Display bandwidth headroom percentage",
      "MST vs SST operating system warnings",
      "Optimal cable and port connection sequence",
    ],
    companionGuideSlug: "seven-things-usb-c-dock",
    companionGuideTitle: "USB-C Hubs & Two Monitors: What to Check",
    shopCategory: "Connect",
  },
  {
    id: "wifi-coverage-calculator",
    name: "Wi-Fi Coverage & Node Placement Calculator",
    category: "Connect",
    status: "coming-soon",
    path: "/tools/#wifi-coverage-calculator",
    badge: "Coming Soon",
    tagline: "Model home square footage, floor count, and wall materials to choose router vs mesh.",
    description:
      "Calculate optimal router and mesh node positions based on Canadian residential home construction (wood frame, brick, concrete firewall, lathe & plaster).",
    inputsPreview: [
      "Home Layout & Square Footage (Condo, 2-Story Detached, Split Level)",
      "Wall Materials & Furnace Ducts in Signal Line",
      "Internet Gateway Location & Availability of In-Wall Ethernet",
    ],
    outputsPreview: [
      "Recommended architecture (Single Router vs 2-Pack vs 3-Pack Mesh)",
      "Optimal node placement distance guidelines",
      "Wired backhaul necessity indicator",
    ],
    companionGuideSlug: "router-or-mesh-system",
    companionGuideTitle: "Do I Need a Router, Wi-Fi Extender or Mesh System?",
    shopCategory: "Connect",
  },
  {
    id: "backup-storage-calculator",
    name: "Backup Storage Capacity Calculator",
    category: "Store & Protect",
    status: "coming-soon",
    path: "/tools/#backup-storage-calculator",
    badge: "Coming Soon",
    tagline: "Estimate backup drive sizes based on raw data, growth rate, and version retention.",
    description:
      "Calculate the exact portable drive or NAS capacity you need to maintain 12 to 36 months of versioned Time Machine or Windows File History snapshots.",
    inputsPreview: [
      "Current Stored Data (Photos, Documents, Videos, System OS)",
      "Estimated Annual Growth Rate (GB / Year)",
      "Desired Snapshot History Retention (6 Months, 1 Year, 3 Years)",
    ],
    outputsPreview: [
      "Minimum recommended raw drive capacity (GB / TB)",
      "Overhead buffer for file system formatting and parity",
      "3-2-1 strategy media sizing",
    ],
    companionGuideSlug: "how-much-backup-storage",
    companionGuideTitle: "How Much Backup Storage Do I Need?",
    shopCategory: "Store & Protect",
  },
  {
    id: "nas-capacity-calculator",
    name: "NAS RAID Usable Capacity & Redundancy Calculator",
    category: "Store & Protect",
    status: "coming-soon",
    path: "/tools/#nas-capacity-calculator",
    badge: "Coming Soon",
    tagline: "Calculate actual usable storage across RAID 1, RAID 5, and SHR configurations.",
    description:
      "Calculate true usable storage after disk formatting, RAID redundancy allocation, and system reserve overhead across 2-bay, 4-bay, and multi-bay enclosures.",
    inputsPreview: [
      "Number of Drive Bays (2-Bay, 4-Bay, 6-Bay)",
      "Installed Hard Drive Capacities (e.g. 4TB, 8TB, 12TB)",
      "RAID Array Level (RAID 0, RAID 1 Mirror, RAID 5 Parity, SHR)",
    ],
    outputsPreview: [
      "True usable data storage volume",
      "Space dedicated to hardware failure redundancy",
      "Rebuild risk factor for large capacity drives",
    ],
    companionGuideSlug: "choosing-a-home-nas",
    companionGuideTitle: "Choosing a Home NAS: Storage & Backups",
    shopCategory: "Store & Protect",
  },
];
