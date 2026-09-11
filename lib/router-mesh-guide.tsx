import Link from "next/link";
import type { Guide } from "./guides";

const sources = {
  rogersPlacement: {
    title: "Rogers: modem placement and home Wi-Fi coverage",
    url: "https://www.rogers.com/support/internet/where-to-put-your-modem",
  },
  rogersPods: {
    title: "Rogers: what mesh Wi-Fi pods do and do not change",
    url: "https://www.rogers.com/support/internet/about-rogers-xfinity-wi-fi-boost-pods",
  },
  googlePlacement: {
    title: "Google: where to place Wi-Fi routers and mesh points",
    url: "https://support.google.com/googlehome/answer/7183150?hl=en-CA",
  },
  googleDoubleNat: {
    title: "Google: double NAT and bridge mode with an ISP gateway",
    url: "https://support.google.com/googlehome/answer/6277579?hl=en-CA",
  },
  appleSettings: {
    title: "Apple Canada: recommended settings for Wi-Fi routers and access points",
    url: "https://support.apple.com/en-ca/102766",
  },
  asusBackhaul: {
    title: "ASUS Canada: wired Ethernet backhaul for a mesh system",
    url: "https://www.asus.com/ca-en/support/faq/1035140/",
  },
  isedCertification: {
    title: "ISED: wireless certification and the Radio Equipment List",
    url: "https://ised-isde.canada.ca/site/certification-engineering-bureau/en/wireless-program",
  },
} as const;

export const routerMeshGuide: Guide = {
  slug: "router-or-mesh-system",
  title: "Do I Need a Router or Mesh System?",
  category: "Connect",
  pillar: "work",
  description: "Choose one well-placed router, a mesh system or wired access points by mapping the weak areas in your home first.",
  date: "2026-09-11",
  reviewed: "2026-09-11",
  scope: "A practical home-network planning guide. Coverage depends on the building, equipment, devices and radio environment; CANOD has not measured your home or tested the products mentioned.",
  methodology: "We reviewed current ISED requirements, Canadian provider guidance and primary manufacturer documentation for placement, security, backhaul and gateway configuration. We have not verified a product for your home or internet service.",
  related: [
    { title: "Diagnose one slow room before buying more Wi-Fi equipment", href: "/guides/wifi-slow-in-one-room/" },
    { title: "Separate local network speed from internet speed in the home NAS guide", href: "/guides/choosing-a-home-nas/#network-speed" },
  ],
  sections: [
    { id: "problem", title: "The problem", content: <>
      <p>A single router is simple, but its signal must cross every wall and floor between it and your devices. A mesh system adds Wi-Fi points around the home, but each point still needs a good connection back to the main router. Buying more nodes cannot fix a slow internet service, a poorly placed main router or one faulty device.</p>
      <p>Start with the coverage problem, not the product label. <a href={sources.rogersPlacement.url}>Rogers recommends trying a central, open and elevated gateway location</a> and notes that layout, materials and interference can change the result. If that placement provides usable service everywhere you need it, one router is the smaller and simpler system.</p>
    </> },
    { id: "answer", title: "The 30-second answer", content: <>
      <p>Choose one router when a central location covers the home reliably. Consider mesh when several rooms or floors remain weak after placement and device checks, and you can put each point partway toward those areas. If Ethernet already reaches the weak areas, compare wired access points or a mesh system with wired backhaul before relying on extra wireless hops.</p>
      <p>A mesh system extends coverage; it does not increase the speed entering the home. <a href={sources.rogersPods.url}>Rogers makes that distinction for its mesh pods</a>. Test the existing service near the gateway before replacing anything.</p>
    </> },
    { id: "checks", title: "What to check", content: <ul>
      <li><strong>Coverage map:</strong> which rooms are weak, on which devices, and whether the same devices improve beside the router.</li>
      <li><strong>Router location:</strong> whether the modem or gateway can move to an open, central position without blocking ventilation.</li>
      <li><strong>Building path:</strong> the floors, concrete, brick, metal, cabinets and appliances between the router and each weak area.</li>
      <li><strong>Wiring:</strong> Ethernet between floors or rooms can carry the connection to a wired access point or mesh node.</li>
      <li><strong>Provider setup:</strong> whether the ISP gateway must remain, supports bridge mode or offers compatible managed Wi-Fi points.</li>
      <li><strong>Devices and ports:</strong> the Wi-Fi versions your important devices support and the Ethernet ports needed for computers, televisions or switches.</li>
    </ul> },
    { id: "solution", title: "Step-by-step solution", content: <ol>
      <li>Use the same device and test beside the router and in every important room. Repeat with a second device. Record weak areas instead of relying on one speed result.</li>
      <li>Move the existing router to a central, open, elevated position if the provider connection and cabling allow it. Retest before buying hardware.</li>
      <li>If coverage is now reliable, keep one router. If one wired room remains weak, compare a wired access point. If several separated areas remain weak and wiring is impractical, compare mesh systems.</li>
      <li>Before installing a retail router or mesh kit behind an ISP gateway, read both setup guides. <a href={sources.googleDoubleNat.url}>Google explains that two active routers can create double NAT and directs users to the ISP&apos;s bridge-mode instructions</a>. Do not change gateway mode unless your provider supports the intended setup.</li>
      <li>Install the main router first and confirm service beside it. Add one point at a time, partway toward a weak area rather than inside it. <a href={sources.googlePlacement.url}>Google&apos;s mesh guidance requires a strong connection between points and recommends testing after placement</a>.</li>
      <li>Where supported, connect nodes by Ethernet and follow the exact wiring diagram for that system. <a href={sources.asusBackhaul.url}>ASUS documents both wireless and wired backhaul and says wired backhaul can improve the connection between its router and nodes</a>.</li>
      <li>Update the system, retest the original locations and return unnecessary nodes. Keep a record of the final gateway mode, network name and administrator access.</li>
    </ol> },
    { id: "mistakes", title: "Common mistakes", content: <ul>
      <li>Choosing by a square-foot coverage claim without considering floors, walls, placement and interference.</li>
      <li>Putting a wireless mesh point in the dead zone, where its own connection is already weak.</li>
      <li>Adding nodes before testing; more points are not automatically better.</li>
      <li>Assuming different models or generations will join the same mesh without checking the manufacturer&apos;s compatibility list.</li>
      <li>Leaving both the ISP gateway and new system routing without understanding double NAT and which device controls the network.</li>
      <li>Expecting mesh to raise the internet-plan speed delivered to the home.</li>
    </ul> },
    { id: "canadian-note", title: "Canadian compatibility or safety note", content: <>
      <p>Wireless equipment used in Canada must meet Canadian technical requirements. <a href={sources.isedCertification.url}>ISED describes wireless certification and links to its Radio Equipment List</a>. Verify the exact hardware model or certification identifier, especially for equipment bought from a foreign marketplace.</p>
      <p>Confirm that the system works with your Canadian internet provider, gateway type and service features before purchase. Use the included Canadian-market power adapters, keep vents clear and follow indoor-placement instructions. For adapter and electrical-mark checks, see CANOD&apos;s <Link href="/guides/charger-safety-canada/#approval">Canadian electrical approval guidance</Link>.</p>
    </> },
    { id: "specifications", title: "Recommended specifications", content: <>
      <p>For new hardware, look for Wi-Fi 6 or newer, 2.4 GHz and 5 GHz support, WPA3 Personal or WPA2/WPA3 transition security, automatic firmware updates and automatic channel selection. <a href={sources.appleSettings.url}>Apple&apos;s current router guidance recommends these security and update settings and enabling supported bands</a>. Confirm compatibility with older printers, smart-home devices and computers before changing security modes.</p>
      <p>For mesh, require a published node-compatibility list, an in-app or web connection-quality test and Ethernet backhaul support if you may wire the nodes. Check the speed of every Ethernet port against the internet plan and wired devices. Count the ports left after the modem and backhaul connections, and include a compatible switch in the plan if needed.</p>
    </> },
    { id: "products", title: "Where to check suitable products", content: <>
      <p>Start with your internet provider&apos;s gateway documentation, supported-router instructions and managed mesh or extender options. Provider equipment may be simpler to support, but check rental cost, return requirements, available settings and whether it solves the mapped coverage problem.</p>
      <p>For retail systems, use the manufacturer&apos;s Canadian specification, support, update-policy and compatibility pages for the exact model. Compare the number of included nodes, backhaul options, Ethernet-port speeds, supported operating modes, required app or account, warranty and Canadian return terms. Verify the exact wireless model through the <a href={sources.isedCertification.url}>ISED certification resources</a>.</p>
      <p>No product or retailer link in this guide is an affiliate recommendation. Buy only after the placement test shows what one router cannot cover.</p>
    </> },
  ],
  sources: Object.values(sources),
};
