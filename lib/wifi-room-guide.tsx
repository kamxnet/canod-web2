import type { Guide } from "./guides";

const sources = {
  isedInterference: {
    title: "ISED: troubleshooting interference with Wi-Fi and other licence-exempt devices",
    url: "https://www.ised-isde.canada.ca/site/spectrum-management-telecommunications/en/safety-and-compliance/cutting-through-interference-wi-fi-bluetooth-global-positioning-systems-gps-and-other-licence-exempt",
  },
  rogersOptimization: {
    title: "Rogers: improve home Wi-Fi and troubleshoot a slow connection",
    url: "https://www.rogers.com/support/internet/how-to-optimize-your-wi-fi-and-fix-a-slow-internet-connection",
  },
  rogersBands: {
    title: "Rogers: modem placement and 2.4 GHz versus 5 GHz coverage",
    url: "https://www.rogers.com/support/internet/where-to-put-your-modem",
  },
  appleSettings: {
    title: "Apple: recommended settings for Wi-Fi routers and access points",
    url: "https://support.apple.com/en-ca/102766",
  },
  ciraTest: {
    title: "CIRA: Internet Performance Test",
    url: "https://performance.cira.ca/",
  },
  isedCompliance: {
    title: "ISED: compliance information for wireless routers and other radio equipment",
    url: "https://ised-isde.canada.ca/site/certification-engineering-bureau/en/publications/compliance-information",
  },
  googlePlacement: {
    title: "Google: where to place Wi-Fi routers and mesh points",
    url: "https://support.google.com/googlehome/answer/7183150?hl=en-CA",
  },
} as const;

export const wifiRoomGuide: Guide = {
  slug: "wifi-slow-in-one-room",
  title: "Why Is My Wi-Fi Slow in One Room?",
  category: "Connect",
  pillar: "work",
  description: "Find out whether the room, device or internet service is the bottleneck before you replace your router or buy a faster plan.",
  date: "2026-09-11",
  reviewed: "2026-09-11",
  scope: "A practical home-network troubleshooting guide. Results vary with the home, equipment, devices and radio environment; CANOD has not measured your network or tested the products mentioned.",
  methodology: "We reviewed current ISED consumer guidance, Canadian provider troubleshooting, CIRA's Canadian performance test and primary manufacturer documentation. We have not measured a particular home or verified a product for your setup.",
  related: [{ title: "Separate local network speed from internet speed in the home NAS guide", href: "/guides/choosing-a-home-nas/#network-speed" }],
  sections: [
    { id: "problem", title: "The problem", content: <>
      <p>Video calls or downloads work near the router but stall in one bedroom, office or basement. When the problem follows the room, the wireless path is a stronger suspect than the speed of the internet plan. Distance, walls, furniture, nearby equipment and the band in use can all affect that path.</p>
      <p>Do not assume the room is the only cause yet. <a href={sources.isedInterference.url}>ISED recommends checking whether other Wi-Fi devices work and moving the affected device closer to the router</a>. Those two comparisons help separate a device problem from a local coverage problem.</p>
    </> },
    { id: "answer", title: "The 30-second answer", content: <>
      <p>Test the same device beside the router and in the slow room, then repeat with a second device. If both devices improve near the router, first move the router to a central, open, elevated location and retest. If only one device is slow, update and troubleshoot that device. If every location is slow, check the internet service or contact the provider before buying more Wi-Fi equipment.</p>
    </> },
    { id: "checks", title: "What to check", content: <ul>
      <li><strong>Pattern:</strong> one room, one device, one app or the whole home.</li>
      <li><strong>Path:</strong> the distance and the walls, floors, cabinets, large furniture or appliances between the router and room. <a href={sources.rogersOptimization.url}>Rogers recommends a central, open position off the floor and away from common obstructions</a>.</li>
      <li><strong>Band:</strong> <a href={sources.rogersBands.url}>Rogers describes 2.4 GHz as the longer-range, lower-speed option and 5 GHz as faster with less coverage</a>. The best result depends on the room and device.</li>
      <li><strong>Load:</strong> downloads, cloud backups, updates or other busy devices that could change a speed-test result.</li>
      <li><strong>Software:</strong> current router firmware, operating system and Wi-Fi drivers from the manufacturer.</li>
    </ul> },
    { id: "solution", title: "Step-by-step solution", content: <ol>
      <li>Restart the affected device. Restart the modem or router only by following the provider or manufacturer instructions; do not factory-reset it.</li>
      <li>Use one device and the same test near the router, halfway to the room and in the room. Record the location, time, Wi-Fi band and result. <a href={sources.ciraTest.url}>CIRA&apos;s Internet Performance Test</a> is one Canadian testing option.</li>
      <li>Repeat the room and near-router checks with a second device. One slow device points to that device; two devices that weaken along the same path point more strongly to coverage or interference.</li>
      <li>Move the router, if permitted, toward the area where Wi-Fi is used most. Keep it in the open and off the floor. Change one thing at a time, then repeat the same tests.</li>
      <li>Install current firmware and device updates. If you administer the router, back up its settings before making changes. <a href={sources.appleSettings.url}>Apple recommends automatic channel selection and enabling supported bands</a>; use the router maker&apos;s instructions for your model.</li>
      <li>If the room is still weak, compare a wired access point, a compatible mesh system or a wired connection. A wireless point needs a good link back to the router, so do not place it at the deepest part of the dead zone. <a href={sources.googlePlacement.url}>Google&apos;s placement guidance recommends an open position partway toward the weak area for its systems</a>; check the instructions for the system you are considering.</li>
    </ol> },
    { id: "mistakes", title: "Common mistakes", content: <ul>
      <li>Paying for a faster internet tier before checking whether the bottleneck is only the Wi-Fi path.</li>
      <li>Testing different devices, servers or times and treating the numbers as a clean comparison.</li>
      <li>Changing channels, bands and placement at once, which hides what helped.</li>
      <li>Putting an extender or mesh point inside the dead zone where its own connection is already weak.</li>
      <li>Using a factory reset as the first step without the provider&apos;s instructions or a record of the settings.</li>
    </ul> },
    { id: "canadian-note", title: "Canadian compatibility or safety note", content: <>
      <p>Wi-Fi routers and other radio equipment sold or used in Canada must meet Canadian technical requirements. <a href={sources.isedCompliance.url}>ISED tells Canadian consumers to verify wireless routers in its Radio Equipment List</a> and explains that certified Category I equipment carries a certification number and hardware model identifier.</p>
      <p>Match the exact model or hardware version, not only the retail family name. Equipment intended for another country can use different radio settings. Follow the product&apos;s placement and power instructions; do not open or modify the router.</p>
    </> },
    { id: "specifications", title: "Recommended specifications", content: <>
      <p>If testing shows that replacement hardware is justified, <a href={sources.appleSettings.url}>look for Wi-Fi 6 or newer, both 2.4 GHz and 5 GHz, current WPA3 Personal or WPA2/WPA3 transition security, automatic firmware updates and automatic channel selection</a>. Confirm that your existing devices and internet provider support the chosen model.</p>
      <p>For added coverage, look for access-point or mesh support and Ethernet ports for wired backhaul where practical. A 6 GHz band can add capacity for compatible devices, but it should not be treated as the fix for a distant room. Coverage claims are estimates; the building and point placement still matter.</p>
    </> },
    { id: "products", title: "Where to check suitable products", content: <>
      <p>Start with your internet provider&apos;s supported gateway, extender and bring-your-own-router information. Then read the router manufacturer&apos;s specification, security-update policy, setup guide and compatibility notes for the exact model. Verify its Canadian certification number or hardware model in the <a href={sources.isedCompliance.url}>ISED Radio Equipment List linked from the compliance page</a>.</p>
      <p>For retail offers, compare the exact model number, included power supply, Canadian warranty, return window and total price. No retailer or product link in this article is an affiliate recommendation. If repositioning fixes the room, suitable new hardware may be no hardware at all.</p>
      <p>For the next buying decision, CANOD&apos;s roadmap separates this diagnosis from the question of whether a single router or a mesh system fits the home.</p>
    </> },
  ],
  sources: Object.values(sources),
};
