export type CustomerProblem = {
  id: string;
  title: string;
  tag: string;
  iconName: "Wifi" | "BatteryCharging" | "Monitor" | "Cable" | "HardDrive" | "Plane" | "Laptop" | "ShieldCheck";
  simpleAnswer: string;
  tryThisFirst: string[];
  guideSlug: string;
  guideTitle: string;
  toolPath: string;
  toolTitle: string;
  shopCategory: "Connect" | "Power" | "Store & Protect" | "Work Anywhere";
  shopCategoryHref: string;
  featuredProductSlug?: string;
  featuredProductName?: string;
  productHelpText: string;
  technicalDetails: {
    heading: string;
    explanation: string;
    standards: string[];
  };
};

export const customerProblems: CustomerProblem[] = [
  {
    id: "slow-wifi",
    title: "My Wi-Fi is slow in one room",
    tag: "Wi-Fi & Internet",
    iconName: "Wifi",
    simpleAnswer:
      "Most slow Wi-Fi isn't caused by your internet provider. It's usually thick walls, metal HVAC ducts, or a router tucked away in a cabinet or floor corner blocking the high-speed radio waves.",
    tryThisFirst: [
      "Move your router out into the open and elevate it 3–5 feet off the floor (never inside a closed TV cabinet).",
      "Check if your device is connected to the 5 GHz Wi-Fi band instead of 2.4 GHz when in the same room.",
      "Restart both your internet modem and Wi-Fi router by unplugging them for 30 seconds.",
    ],
    guideSlug: "wifi-slow-in-one-room",
    guideTitle: "Why is My Wi-Fi Slow in One Room? (Simple Guide)",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Check Wi-Fi vs. Wired Ethernet Speeds",
    shopCategory: "Connect",
    shopCategoryHref: "/shop/?category=Connect",
    featuredProductSlug: "cat6-solid-copper-patch-cable",
    featuredProductName: "Pure Copper Cat6 Ethernet Cable (Zero Lag)",
    productHelpText: "A direct wired cable to your desk delivers 100% of your speed with zero wireless dropouts.",
    technicalDetails: {
      heading: "Why this happens (Radio attenuation & frequency)",
      explanation:
        "Modern 5 GHz and 6 GHz Wi-Fi signals offer high bandwidth but have shorter wavelengths that absorb heavily when passing through drywall, plaster, brick, and metal furnace ducting. A signal dropping from -50 dBm to -75 dBm results in automatic protocol fallback and high packet loss.",
      standards: [
        "5 GHz / 6 GHz signal attenuation through drywall: ~3 dB to 10 dB loss",
        "Wi-Fi 6 (802.11ax) OFDMA channel contention",
        "Ethernet standard: TIA-568-C.2 Cat6 pure copper (10 Gbps up to 55m)",
      ],
    },
  },
  {
    id: "laptop-not-charging",
    title: "My laptop or phone won't charge properly",
    tag: "Charging & Power",
    iconName: "BatteryCharging",
    simpleAnswer:
      "Modern laptops and phones need a specific amount of electrical power. A small phone charger does not provide enough power to charge a laptop, and cheap cables can throttle charging speeds to a trickle.",
    tryThisFirst: [
      "Check the tiny wattage number on your charging brick (phones need 20W–30W, laptops need 65W–100W).",
      "Try a different USB-C cable to see if an internal wire has worn out or broken.",
      "Gently inspect your device's charging port for pocket lint using a wooden toothpick.",
    ],
    guideSlug: "why-is-my-phone-charging-slowly",
    guideTitle: "Why Is My Device Charging Slowly? (Simple Fix)",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Is My Charger Safe to Plug In?",
    shopCategory: "Power",
    shopCategoryHref: "/shop/?category=Power",
    featuredProductSlug: "gan-100w-multiport-charger",
    featuredProductName: "100W Fast Wall Charger (Phones & Laptops)",
    productHelpText: "Replaces 3 slow charging bricks with one compact charger that powers laptops and phones at full speed.",
    technicalDetails: {
      heading: "Why this happens (USB-PD voltage negotiation)",
      explanation:
        "USB Power Delivery (USB-PD) requires an active digital handshake between charger and device. If a charger only negotiates 5V/3A (15W), a laptop requiring a 20V/3.25A (65W) contract will refuse to charge or charge only when sleeping. Cables above 60W also require an electronic E-Marker chip.",
      standards: [
        "USB-PD 3.0 Fixed Voltage Profiles (5V, 9V, 15V, 20V)",
        "E-Marker IC requirement for 5 Amp / 100W+ operation",
        "Canadian Electrical Code CSA C22.2 No. 62368-1 safety certification",
      ],
    },
  },
  {
    id: "two-monitors",
    title: "I want to connect another monitor",
    tag: "Monitors & Docks",
    iconName: "Monitor",
    simpleAnswer:
      "Connecting two external screens to one laptop depends on your computer. Windows laptops can usually extend two monitors over one cable, while Apple Mac laptops require specific hardware (Thunderbolt) to show different screens on each display.",
    tryThisFirst: [
      "Check if your laptop port has a lightning bolt icon (Thunderbolt) or a 'D' symbol (DisplayPort).",
      "In Windows or Mac display settings, verify that your display mode is set to 'Extend', not 'Mirror'.",
      "Use our 30-second compatibility checker before buying any hub or adapter to verify compatibility.",
    ],
    guideSlug: "seven-things-usb-c-dock",
    guideTitle: "7 Things to Check Before Connecting Dual Monitors",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Will Two Monitors Work With My Laptop?",
    shopCategory: "Connect",
    shopCategoryHref: "/shop/?category=Connect",
    featuredProductSlug: "tb4-dual-display-dock",
    featuredProductName: "Dual Display Dock (One Cable to Laptop)",
    productHelpText: "Plugs into your laptop with one cable to run dual screens, charge your battery, and connect your keyboard and mouse.",
    technicalDetails: {
      heading: "Why this happens (Display bandwidth & display protocols)",
      explanation:
        "Standard USB-C ports carry DisplayPort Alternate Mode video. Windows supports MST (Multi-Stream Transport) to split one DisplayPort stream into two independent screens. macOS does not support MST; Macs require Thunderbolt (which carries two separate native DisplayPort streams) to drive dual extended displays over a single cable.",
      standards: [
        "DisplayPort 1.4 HBR3 with Display Stream Compression (DSC)",
        "MST (Multi-Stream Transport) vs Apple macOS SST restriction",
        "Thunderbolt 4 / USB4 40 Gbps PCIe/DisplayPort tunneling",
      ],
    },
  },
  {
    id: "right-usbc-cable",
    title: "I don't know which cable I need",
    tag: "Cables & Adapters",
    iconName: "Cable",
    simpleAnswer:
      "All USB-C cables look identical on the outside, but they do completely different jobs. A basic white cable that came with your phone only charges slowly and cannot send video to a monitor.",
    tryThisFirst: [
      "Decide your primary goal: basic charging only, fast file transfers, or connecting to a monitor.",
      "For laptop charging, look for '100W' or '240W' clearly printed on the cable packaging.",
      "For monitors, look for 'USB4' or 'Thunderbolt' (40 Gbps) printed directly on the connector tip.",
    ],
    guideSlug: "why-usb-c-cables-work-differently",
    guideTitle: "Why USB-C Cables Work Differently (Simple Guide)",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Check Your Cable & Port Compatibility",
    shopCategory: "Connect",
    shopCategoryHref: "/shop/?category=Connect",
    featuredProductSlug: "certified-40gbps-tb4-cable",
    featuredProductName: "All-in-One Certified 40 Gbps Cable (Power + Video)",
    productHelpText: "One cable that does everything: charges up to 240W, transfers files at top speed, and connects 4K/8K monitors.",
    technicalDetails: {
      heading: "Why this happens (Internal pinouts & high-speed differential pairs)",
      explanation:
        "A charging-only USB-C cable physically omits high-speed TX/RX twisted wire pairs, retaining only USB 2.0 D+/D- lines (480 Mbps). High-speed cables feature 16 to 24 internal shielded conductors, coaxial wiring, and an internal E-Marker microchip that reports maximum current and protocol capabilities to the host controller.",
      standards: [
        "USB Type-C Specification 2.2 wiring topology",
        "USB-IF USB4 40 Gbps certification (E-Marker CC pin identification)",
        "EPR (Extended Power Range) 48V / 5A 240W ratings",
      ],
    },
  },
  {
    id: "backup-files",
    title: "I need to back up my photos and files",
    tag: "Photos & Backups",
    iconName: "HardDrive",
    simpleAnswer:
      "Keeping your family photos or work documents only on your laptop means one accidental spill or stolen bag could lose them forever. Protecting your files is simple with the easy 3-2-1 backup habit.",
    tryThisFirst: [
      "Keep 3 copies of important files: 1 original on your laptop, 1 on an external drive, and 1 in secure cloud storage.",
      "Turn on automatic backups (Time Machine on Mac, File History or OneDrive on Windows).",
      "Unplug your external drive after backing up so electrical power surges cannot reach it.",
    ],
    guideSlug: "how-much-backup-storage",
    guideTitle: "How Much Backup Storage Do I Need? (Simple Guide)",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Check Backup Storage Safety",
    shopCategory: "Store & Protect",
    shopCategoryHref: "/shop/?category=Store+%26+Protect",
    featuredProductSlug: "rugged-portable-nvme-ssd",
    featuredProductName: "Shockproof Portable 2TB Backup Drive",
    productHelpText: "Blazing fast, drop-tested external SSD that backs up thousands of photos and documents in seconds.",
    technicalDetails: {
      heading: "Why this happens (Data integrity & 3-2-1 redundancy)",
      explanation:
        "Local computer drives rely on flash NAND storage that can suffer sudden bit rot, controller failure, or ransomware encryption. The 3-2-1 principle ensures complete fault isolation by using different storage media and an off-site cloud repository protected against physical burglary or water damage.",
      standards: [
        "3-2-1 Backup Strategy: 3 copies, 2 media types, 1 offsite copy",
        "NVMe PCIe Gen3/Gen4 flash endurance (TBW - Terabytes Written)",
        "AES-256 hardware encryption and write-snapshot immutability",
      ],
    },
  },
  {
    id: "travel-tech",
    title: "I need tech for travelling",
    tag: "Travel & Airport Carry",
    iconName: "Plane",
    simpleAnswer:
      "Travel light by replacing 4 heavy chargers with one compact fast charger, and carry a power bank that safely meets Canadian airline carry-on rules so airport security won't confiscate it.",
    tryThisFirst: [
      "Choose a power bank under 100 Watt-hours (approx. 27,000 mAh) — CATSA allows this in carry-on bags.",
      "Pack one multi-port charger that powers your laptop, phone, and earbuds at the same time.",
      "Keep cords inside a structured travel pouch so they don't tangle or get crushed in your bag.",
    ],
    guideSlug: "what-size-power-bank-do-i-need",
    guideTitle: "What Size Power Bank Can I Take on a Plane?",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Check Power Bank Airport Safety Limits",
    shopCategory: "Store & Protect",
    shopCategoryHref: "/shop/?category=Store+%26+Protect",
    featuredProductSlug: "expandable-clamshell-tech-pouch",
    featuredProductName: "Weatherproof Structured Travel Tech Pouch",
    productHelpText: "Opens flat on airplane tray tables with dedicated elastic slots to keep cords, adapters, and chargers neat.",
    technicalDetails: {
      heading: "Why this happens (Aviation safety & GaN density)",
      explanation:
        "Transport Canada and CATSA enforce strict lithium battery limits under ICAO dangerous goods rules: spare batteries up to 100 Watt-hours (Wh) are permitted in carry-on baggage without airline approval. Modern Gallium Nitride (GaN) power semiconductors dissipate less heat, enabling compact multi-voltage transformers.",
      standards: [
        "CATSA / Transport Canada 100 Wh carry-on lithium battery limit",
        "Universal AC input: 100V–240V, 50/60 Hz compatibility",
        "GaN (Gallium Nitride) high-frequency power switching efficiency",
      ],
    },
  },
  {
    id: "home-office",
    title: "I want a better home-office setup",
    tag: "Desk & Ergonomics",
    iconName: "Laptop",
    simpleAnswer:
      "A great desk setup isn't complicated. Elevate your laptop screen to eye level to save your neck from strain, and organize your cords so plugging in takes just one second every morning.",
    tryThisFirst: [
      "Raise your laptop screen so the top edge is level with your eyes when sitting upright.",
      "Use an external keyboard and mouse so your wrists rest naturally flat on the desk.",
      "Route power and display cables along the back of your desk with adhesive clips so cords don't pull.",
    ],
    guideSlug: "choosing-a-tech-organizer",
    guideTitle: "How to Build a Clean, Pain-Free Desk Setup",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Check Desk Dock & Screen Compatibility",
    shopCategory: "Work Anywhere",
    shopCategoryHref: "/shop/?category=Work+Anywhere",
    featuredProductSlug: "aluminum-ergonomic-laptop-stand",
    featuredProductName: "Adjustable Aluminum Folding Laptop Stand",
    productHelpText: "Brings your laptop display to comfortable eye level and keeps your laptop cool with open ventilation.",
    technicalDetails: {
      heading: "Why this happens (Ergonomics & thermal management)",
      explanation:
        "Looking downward at a desk creates up to 60 lbs of cervical spine torque ('tech neck'). Elevating the chassis also creates convective clearance beneath bottom cooling intake vents, preventing CPU thermal throttling and keeping fan noise silent during video calls.",
      standards: [
        "Canadian Centre for Occupational Health & Safety (CCOHS) visual ergonomics",
        "Passive convective airflow thermal dynamics",
        "Neutral upper extremity wrist postures (100°–110° elbow angle)",
      ],
    },
  },
  {
    id: "choose-accessory",
    title: "I need help choosing an accessory",
    tag: "Safe Accessories",
    iconName: "ShieldCheck",
    simpleAnswer:
      "The most important rule when buying any plug-in tech in Canada is verifying recognized safety marks. Uncertified power bars and cheap online chargers can overheat or create fire hazards.",
    tryThisFirst: [
      "Look for recognized Canadian safety marks on the back of any plug (such as CSA, cUL, or cETL).",
      "Avoid unbranded power strips sold on online third-party marketplaces that omit Canadian marks.",
      "Pick gear that matches your daily habits rather than paying for confusing features you'll never use.",
    ],
    guideSlug: "power-bar-or-surge-protector-canada",
    guideTitle: "Power Bar or Surge Protector: What Canadians Should Check",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Is This Accessory Safe for Canadian Walls?",
    shopCategory: "Power",
    shopCategoryHref: "/shop/?category=Power",
    featuredProductSlug: "heavy-duty-surge-protector-strip",
    featuredProductName: "Heavy-Duty Canadian Certified Surge Protector",
    productHelpText: "Fully certified for Canadian homes with 14 AWG heavy copper wiring and clean outlet spacing.",
    technicalDetails: {
      heading: "Why this happens (Canadian electrical codes & certification)",
      explanation:
        "Under the Canadian Electrical Code (CSA C22.1) and provincial regulations (e.g. Ontario ESA 438/07), all electrical equipment connected to provincial electrical grids must be certified by an SCC-accredited certification body. Cheap imports often carry non-audited CE marks with dangerous undersized 18 AWG wires.",
      standards: [
        "Standards Council of Canada (SCC) accredited testing laboratories",
        "CSA C22.2 No. 269.3 / UL 1449 4th Edition surge suppression standards",
        "14 AWG pure copper conductors rated for 15 Amp / 1875 Watt branch circuits",
      ],
    },
  },
];
