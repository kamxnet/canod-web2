export type SolutionBlueprint = {
  id: string;
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
    title: "The Dual-Screen Hybrid Workstation",
    badge: "Most Popular Setup",
    tagline: "One cable into your laptop. Two high-resolution displays, full 96W charging, and wired network speed.",
    problemSolved: "Eliminates morning cable friction, monitor flicker, and incompatible display adapters between Windows and Mac laptops.",
    targetAudience: "Remote workers, analysts, developers, and creators docking MacBook Pro or Windows ultrabooks.",
    coreComponents: [
      {
        item: "Thunderbolt 4 / USB4 Host Dock",
        role: "Central connectivity hub",
        specNote: "96W+ Power Delivery to power host laptop; dedicated DisplayPort/HDMI 2.0+ outputs.",
      },
      {
        item: "Dual VESA Monitor Arm",
        role: "Floating screen ergonomics",
        specNote: "Frees up desk space and conceals display cables through internal routing channels.",
      },
      {
        item: "Under-Desk Steel Cable Tray",
        role: "Power & brick management",
        specNote: "Houses the dock power brick, display power bricks, and 8-outlet surge bar cleanly off the floor.",
      },
      {
        item: "Certified 40 Gbps Thunderbolt Cable",
        role: "Single-drop host tether",
        specNote: "Supplied 0.8m cable guaranteed for full 40 Gbps data, dual 4K video, and 100W PD.",
      },
    ],
    verificationSteps: [
      "Check whether your laptop USB-C port supports DisplayPort Alt Mode or Thunderbolt (Macs require Thunderbolt for dual independent extended displays; Windows uses MST).",
      "Verify total monitor power draw and laptop power supply ratings.",
      "Confirm both external monitors have native DisplayPort or HDMI inputs to avoid active conversion latency.",
    ],
    guideSlug: "seven-things-usb-c-dock",
    guideTitle: "Read the 7-Point Dock Buying Guide",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Check Your Dock & Display Compatibility",
    shopCategory: "Docks & Hubs",
  },
  {
    id: "mobile-professional-carry",
    title: "The One-Bag Travel & Remote Work Kit",
    badge: "Travel Tested",
    tagline: "Ultra-compact charging and connectivity that fits in any backpack and clears CATSA airport security.",
    problemSolved: "Replaces heavy OEM power bricks, messy tangled cables, and battery anxiety during flights and café work sessions.",
    targetAudience: "Consultants, hybrid commuters, business travelers, and digital nomads across Canada.",
    coreComponents: [
      {
        item: "100W GaN Multiport Wall Charger",
        role: "All-in-one power source",
        specNote: "Dual USB-C ports with intelligent power allocation; certified cUL/CSA mark for Canadian travel.",
      },
      {
        item: "74 Wh (20,000 mAh) USB-C Power Bank",
        role: "In-transit backup battery",
        specNote: "Legibly marked 74 Wh rating safely below CATSA's strict 100 Wh carry-on restriction.",
      },
      {
        item: "Clamshell Weatherproof Tech Pouch",
        role: "Internal bag organization",
        specNote: "Opens flat on airplane tray tables; separated elastic loops for daily cables and flash drives.",
      },
      {
        item: "USB-IF Certified 240W EPR Silicone Cable",
        role: "Universal power connection",
        specNote: "Flexible, tangle-free jacket tested to high bend cycles with integrated E-Marker protection.",
      },
    ],
    verificationSteps: [
      "Confirm the Watt-hour (Wh) rating is stamped permanently on your power bank casing before packing for Canadian airports.",
      "Check your laptop's minimum charging threshold (many modern ultrabooks require at least 45W or 65W to charge while operating).",
    ],
    guideSlug: "what-size-power-bank-do-i-need",
    guideTitle: "Guide: What Size Power Bank Do I Need?",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Run Electrical Safety & Battery Checklist",
    shopCategory: "Charging & Power",
  },
  {
    id: "canadian-321-backup-architecture",
    title: "The Canadian 3-2-1 Data Protection Plan",
    badge: "Cyber Safety Standard",
    tagline: "Three copies of your files, on two different media types, with one copy stored securely offsite.",
    problemSolved: "Protects personal photos, tax records, and business files from ransomware, drive failure, fire, and accidental deletion.",
    targetAudience: "Photographers, small business owners, freelancers, and Canadian households managing multi-device file archives.",
    coreComponents: [
      {
        item: "Fast Portable NVMe SSD (Local Copy 1)",
        role: "Immediate daily backup",
        specNote: "2TB+ capacity formatted for local Time Machine or Windows File History snapshots.",
      },
      {
        item: "2-Bay Network Attached Storage (Local Copy 2)",
        role: "Automated network archive",
        specNote: "Configured in RAID 1 mirror; automatically pulls hourly backups from all home computers.",
      },
      {
        item: "Encrypted Canadian Cloud Repository (Offsite)",
        role: "Disaster recovery layer",
        specNote: "Zero-knowledge encrypted cloud storage guarding against theft, water damage, or residential fire.",
      },
    ],
    verificationSteps: [
      "Remember: RAID is redundancy against hardware failure, NOT an independent backup.",
      "Regularly test file restoration: pick 3 random files from 6 months ago and verify they open properly.",
      "Verify offsite backup encryption keys are saved securely in your password manager.",
    ],
    guideSlug: "how-much-backup-storage",
    guideTitle: "Guide: How Much Backup Storage Do I Need?",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Check Power & Storage Safety",
    shopCategory: "Storage & Enclosures",
  },
  {
    id: "safe-home-office-electrical",
    title: "The Safe Canadian Home Office Power Foundation",
    badge: "Electrical Safety",
    tagline: "Properly rated surge suppression, heavy-gauge copper wiring, and certified electrical compliance.",
    problemSolved: "Prevents electrical fire risks, breaker trips, and expensive hardware damage caused by uncertified direct-import power strips.",
    targetAudience: "Anyone powering computers, monitors, printers, and chargers on a single Canadian residential circuit.",
    coreComponents: [
      {
        item: "2160 Joule Canadian Surge Suppressor",
        role: "Primary line protection",
        specNote: "CSA or cUL certified, heavy-duty 14 AWG conductor, integrated 15A thermal circuit breaker.",
      },
      {
        item: "Heavy-Gauge Cord Channel & Clips",
        role: "Physical cable protection",
        specNote: "Prevents cord pinching behind heavy furniture and stops cord degradation from foot traffic.",
      },
      {
        item: "cUL/CSA Approved GaN Multi-Charger",
        role: "Low-voltage device distribution",
        specNote: "Consolidates up to 3 individual power adapters into a single certified cool-running plug.",
      },
    ],
    verificationSteps: [
      "Check your wall outlet for a functioning equipment ground (test with a 3-prong outlet tester if needed).",
      "Never daisy-chain power bars or plug a surge protector into an extension cord.",
      "Calculate total wattage: a standard Canadian 15A residential circuit supports max 1,800W across all room outlets.",
    ],
    guideSlug: "power-bar-or-surge-protector-canada",
    guideTitle: "Guide: Power Bar vs Surge Protector in Canada",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Inspect Your Power Setup with the Safety Checklist",
    shopCategory: "Charging & Power",
  },
  {
    id: "whole-home-wifi-wired-backbone",
    title: "The Low-Latency Home Network & Wi-Fi Backbone",
    badge: "Connectivity & Speed",
    tagline: "Reliable, dead-zone-free Wi-Fi paired with wired Gigabit Ethernet backhaul for work and backup devices.",
    problemSolved: "Fixes bedroom Wi-Fi dropouts, video call freezing, slow NAS file transfers, and thick Canadian plaster/drywall interference.",
    targetAudience: "Multi-story Canadian homes, apartments with dense interference, and hybrid workers needing rock-solid Zoom/Teams calls.",
    coreComponents: [
      {
        item: "Tri-Band Mesh System or Wi-Fi 6E/7 Router",
        role: "Wireless broadcast mesh",
        specNote: "Dedicated backhaul spectrum band to maintain full speed across remote node access points.",
      },
      {
        item: "Cat6 Pure Copper Patch Cables",
        role: "Wired workstation & NAS uplink",
        specNote: "Solid copper 24 AWG conductors supporting full 1 Gbps / 2.5 Gbps with low latency.",
      },
      {
        item: "Gigabit Unmanaged Desktop Switch",
        role: "Desk port expansion",
        specNote: "Allows laptop dock, NAS, and desktop PC to share a single high-speed wired wall run.",
      },
    ],
    verificationSteps: [
      "Position mesh nodes midway between your primary gateway and the dead zone, not inside the dead zone itself.",
      "Prioritize wired Ethernet backhaul between nodes whenever possible to bypass floor/wall radio loss.",
      "Check Canadian ISED frequency band allocations (especially 5 GHz and 6 GHz channels) for indoor equipment.",
    ],
    guideSlug: "wifi-slow-in-one-room",
    guideTitle: "Guide: Why is My Wi-Fi Slow in One Room?",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Check Computer Connectivity & Ethernet Support",
    shopCategory: "Docks & Hubs",
  },
];
