export type CustomerProblem = {
  id: string;
  title: string;
  tag: string;
  shortExplanation: string;
  practicalFix: string;
  guideSlug: string;
  guideTitle: string;
  toolPath: string;
  toolTitle: string;
  shopCategory: "Connect" | "Power" | "Store & Protect" | "Work Anywhere";
  shopCategoryHref: string;
  featuredProductSlug?: string;
  featuredProductName?: string;
};

export const customerProblems: CustomerProblem[] = [
  {
    id: "slow-wifi",
    title: "My Wi-Fi is slow in one room",
    tag: "Networking",
    shortExplanation:
      "Weak Wi-Fi in specific rooms is usually caused by building material attenuation (dense drywall, plaster, or metal HVAC ducts) or improper router placement rather than your internet service tier.",
    practicalFix:
      "Move the router away from closets or floor corners into an elevated central spot, switch to a mesh network with wired backhaul, or run a direct Cat6 cable for fixed desks.",
    guideSlug: "wifi-slow-in-one-room",
    guideTitle: "Why is My Wi-Fi Slow in One Room?",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Check Dock & Wired Ethernet Support",
    shopCategory: "Connect",
    shopCategoryHref: "/shop/?category=Connect",
    featuredProductSlug: "cat6-solid-copper-patch-cable",
    featuredProductName: "Cat6 Snagless Pure Copper Ethernet Cable",
  },
  {
    id: "two-monitors",
    title: "I need to connect two external monitors",
    tag: "Displays",
    shortExplanation:
      "Driving two displays from one laptop cable requires DisplayPort Alternate Mode and sufficient bandwidth. Windows uses MST (Multi-Stream Transport) for extended screens, while macOS requires Thunderbolt for dual extended displays.",
    practicalFix:
      "Confirm whether your laptop has native Thunderbolt 3/4 or standard USB-C, verify your monitor resolutions, and choose a dock that matches your operating system's display protocol.",
    guideSlug: "seven-things-usb-c-dock",
    guideTitle: "7 Things to Check Before Buying a USB-C Dock",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Run USB-C Dock Compatibility Checker",
    shopCategory: "Connect",
    shopCategoryHref: "/shop/?category=Connect",
    featuredProductSlug: "tb4-dual-display-dock",
    featuredProductName: "Thunderbolt 4 / USB4 Dual Display Dock",
  },
  {
    id: "laptop-not-charging",
    title: "My laptop isn't charging from its charger",
    tag: "Charging",
    shortExplanation:
      "USB-C Power Delivery requires both the charger and the cable to support the exact voltage and wattage profiles required by the laptop. A 20W phone brick will not charge a 65W or 96W laptop under load.",
    practicalFix:
      "Check your laptop's original power supply wattage (e.g. 65W or 100W), verify the charger supports 20V output, and inspect the cable to ensure it has an E-Marker chip for 100W+ transfer.",
    guideSlug: "charger-safety-canada",
    guideTitle: "Buy Safe in Canada: Charger Safety Checks",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Inspect Charger with Safety Checklist",
    shopCategory: "Power",
    shopCategoryHref: "/shop/?category=Power",
    featuredProductSlug: "gan-100w-multiport-charger",
    featuredProductName: "100W GaN Fast Wall Charger",
  },
  {
    id: "right-usbc-cable",
    title: "I need the right USB-C cable for power and video",
    tag: "Cables",
    shortExplanation:
      "All USB-C cables look identical on the outside, but their internal wiring varies radically. A phone charging cable often only carries slow USB 2.0 data (480 Mbps) and no video signal at all.",
    practicalFix:
      "Look for certified logos: 240W EPR for pure high-wattage charging, or Thunderbolt 4 / USB4 (40 Gbps) when you need both high-wattage charging and 4K/8K video transmission.",
    guideSlug: "why-usb-c-cables-work-differently",
    guideTitle: "Why USB-C Cables Work Differently",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Verify Cable & Port Requirements",
    shopCategory: "Connect",
    shopCategoryHref: "/shop/?category=Connect",
    featuredProductSlug: "certified-40gbps-tb4-cable",
    featuredProductName: "Certified 40 Gbps Thunderbolt 4 Cable",
  },
  {
    id: "too-many-cables",
    title: "I travel with too many cables and chargers",
    tag: "Everyday Carry",
    shortExplanation:
      "Carrying individual OEM charging bricks for laptops, phones, and tablets adds unnecessary bag weight, causes tangled cords, and creates outlet crowding in airport lounges and hotels.",
    practicalFix:
      "Consolidate to a single multi-port GaN wall charger, pair it with two high-grade 100W cables, and store everything in a structured clamshell pouch that stands upright on desks.",
    guideSlug: "choosing-a-tech-organizer",
    guideTitle: "Choosing a Tech Organizer: Size & Everyday Use",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Verify Travel Power & Battery Ratings",
    shopCategory: "Store & Protect",
    shopCategoryHref: "/shop/?category=Store+%26+Protect",
    featuredProductSlug: "expandable-clamshell-tech-pouch",
    featuredProductName: "Weatherproof Clamshell Tech Organizer Pouch",
  },
  {
    id: "backup-files",
    title: "I need a safe way to back up my files",
    tag: "Data Protection",
    shortExplanation:
      "Keeping photos, tax documents, and business files solely on your computer leaves you exposed to drive failure, ransomware, or accidental deletion. A single external drive is also not fully safe if stored in the same bag.",
    practicalFix:
      "Implement the proven 3-2-1 backup strategy: 3 copies of your files, on 2 different media types (e.g. fast local SSD + network NAS), with 1 copy stored securely offsite in the cloud.",
    guideSlug: "how-much-backup-storage",
    guideTitle: "How Much Backup Storage Do I Need?",
    toolPath: "/tools/canadian-electrical-safety-checklist/",
    toolTitle: "Check Power & Storage Safety",
    shopCategory: "Store & Protect",
    shopCategoryHref: "/shop/?category=Store+%26+Protect",
    featuredProductSlug: "rugged-portable-nvme-ssd",
    featuredProductName: "Rugged 2TB USB 3.2 Portable NVMe SSD",
  },
  {
    id: "portable-workspace",
    title: "I need a comfortable portable workspace",
    tag: "Ergonomics",
    shortExplanation:
      "Working for hours looking down at a laptop screen resting flat on a café table creates neck and shoulder strain, while blocking bottom cooling vents causes thermal CPU throttling.",
    practicalFix:
      "Use an elevated, folding aluminum laptop riser to bring the display to eye level, pair with a compact wireless mouse and keyboard, and connect peripherals through a single travel hub.",
    guideSlug: "choosing-a-tech-organizer",
    guideTitle: "Everyday Carry & Portable Work Setup",
    toolPath: "/tools/usb-c-dock-checker/",
    toolTitle: "Check Travel Hub Requirements",
    shopCategory: "Work Anywhere",
    shopCategoryHref: "/shop/?category=Work+Anywhere",
    featuredProductSlug: "aluminum-ergonomic-laptop-stand",
    featuredProductName: "Foldable Ventilated Aluminum Laptop Stand",
  },
];
