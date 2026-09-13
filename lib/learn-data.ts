export type LearnIntent =
  | "how-to"
  | "buying-guides"
  | "tech-explained"
  | "canada";

export type LearnIntentInfo = {
  id: LearnIntent;
  path: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  guideSlugs: string[];
};

export const learnIntents: LearnIntentInfo[] = [
  {
    id: "how-to",
    path: "/learn/how-to/",
    title: "How-To Guides",
    shortTitle: "How-To",
    tagline: "Actionable troubleshooting and setup step-by-steps.",
    description:
      "Clear, numbered instructions for diagnosing weak Wi-Fi, diagnosing slow charging, sizing backup storage, and getting hardware configured properly.",
    guideSlugs: [
      "wifi-slow-in-one-room",
      "why-is-my-phone-charging-slowly",
      "how-much-backup-storage",
    ],
  },
  {
    id: "buying-guides",
    path: "/learn/buying-guides/",
    title: "Buying Guides",
    shortTitle: "Buying Guides",
    tagline: "Unbiased pre-purchase research and specification checks.",
    description:
      "Deep evaluation criteria for USB-C docks, airline-compliant power banks, home NAS units, and tech organizers before you spend money.",
    guideSlugs: [
      "seven-things-usb-c-dock",
      "what-size-power-bank-do-i-need",
      "choosing-a-home-nas",
      "choosing-a-tech-organizer",
    ],
  },
  {
    id: "tech-explained",
    path: "/learn/tech-explained/",
    title: "Tech Explained",
    shortTitle: "Tech Explained",
    tagline: "Demystifying complex standards, bandwidths, and protocols.",
    description:
      "Clear engineering breakdowns explaining why USB-C cables differ, how mesh networks compare with extenders, and how surge suppression works.",
    guideSlugs: [
      "why-usb-c-cables-work-differently",
      "router-or-mesh-system",
      "power-bar-or-surge-protector-canada",
    ],
  },
  {
    id: "canada",
    path: "/learn/canada/",
    title: "Canadian Tech & Safety",
    shortTitle: "Canada & Safety",
    tagline: "Electrical approval marks, CATSA regulations, and Canadian consumer protection.",
    description:
      "Understanding cUL, CSA, and cETL electrical markings, Transport Canada battery rules, and provincial electrical safety enforcement.",
    guideSlugs: [
      "charger-safety-canada",
      "power-bar-or-surge-protector-canada",
    ],
  },
];

export type SecondaryCluster =
  | "All"
  | "Connect"
  | "Power"
  | "Store & Protect"
  | "Work Anywhere";

export const guideSecondaryClusterMap: Record<string, Exclude<SecondaryCluster, "All">> = {
  "wifi-slow-in-one-room": "Connect",
  "router-or-mesh-system": "Connect",
  "why-usb-c-cables-work-differently": "Connect",
  "seven-things-usb-c-dock": "Connect",
  "charger-safety-canada": "Power",
  "what-size-power-bank-do-i-need": "Power",
  "why-is-my-phone-charging-slowly": "Power",
  "how-much-backup-storage": "Store & Protect",
  "choosing-a-home-nas": "Store & Protect",
  "choosing-a-tech-organizer": "Work Anywhere",
  "power-bar-or-surge-protector-canada": "Power",
};
