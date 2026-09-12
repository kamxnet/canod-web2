import Link from "next/link";
import type { Guide } from "./guides";

const sources = {
  catsa: {
    title: "CATSA: guidelines for travelling with batteries",
    url: "https://www.catsa-acsta.gc.ca/en/what-can-bring/guidelines-batteries",
  },
  healthCanada: {
    title: "Health Canada: lithium-ion battery safety",
    url: "https://www.canada.ca/en/health-canada/services/household-products/battery-safety/lithium-ion.html",
  },
  transportCanada: {
    title: "Transport Canada: prohibition of recalled power banks",
    url: "https://tc.canada.ca/en/aviation/reference-centre/civil-aviation-safety-alerts/prohibition-recalled-power-banks-civil-aviation-safety-alert-casa-no-2025-10",
  },
  recalls: {
    title: "Government of Canada: recalls and safety alerts",
    url: "https://recalls-rappels.canada.ca/en",
  },
  usbPower: {
    title: "USB-IF: USB Power Delivery",
    url: "https://www.usb.org/usb-charger-pd",
  },
  usbProducts: {
    title: "USB-IF: certified product search",
    url: "https://www.usb.org/products",
  },
} as const;

export const powerBankGuide: Guide = {
  slug: "what-size-power-bank-do-i-need",
  title: "What Size Power Bank Do I Need?",
  category: "Power",
  pillar: "travel",
  description: "Size a portable charger in watt-hours, then check output power, ports and Canadian air-travel rules before buying.",
  date: "2026-09-11",
  reviewed: "2026-09-11",
  scope: "A planning guide for personal electronics, not a battery-life, charging-speed, compatibility or safety guarantee. Conversion losses, temperature, cable losses, battery condition and device use all affect the result; CANOD has not tested the products mentioned.",
  methodology: "We reviewed current CATSA and Transport Canada air-travel guidance, Health Canada lithium-ion safety advice and USB-IF power documentation. The 65% to 80% usable-energy range is a conservative CANOD planning assumption, not a manufacturer rating or measured result for a particular power bank.",
  related: [
    { title: "Diagnose slow phone charging", href: "/guides/why-is-my-phone-charging-slowly/" },
    { title: "Check charger safety in Canada", href: "/guides/charger-safety-canada/" },
    { title: "Match a USB-C cable to charging power", href: "/guides/why-usb-c-cables-work-differently/#specifications" },
  ],
  sections: [
    { id: "problem", title: "The problem", content: <>
      <p>Power banks are usually marketed in milliamp-hours, or mAh, while device batteries, airline limits and useful energy are easier to compare in watt-hours, or Wh. A 10,000 mAh label does not mean 10,000 mAh arrives at the phone: the cells store energy at one voltage and the USB output delivers it at another, with energy lost along the way.</p>
      <p>Capacity also does not determine charging speed. A large power bank can still charge slowly when its output protocol, port or cable does not match the device. Start with the energy you need, then check the output separately.</p>
    </> },
    { id: "answer", title: "The 30-second answer", content: <>
      <p>Find your device battery capacity in watt-hours. Multiply it by the number of full charges you want, then divide by 0.65 and 0.80. The two results form a practical range for the power bank&apos;s rated watt-hours:</p>
      <p><strong>Required power-bank Wh = device battery Wh × desired charges ÷ usable-energy assumption.</strong></p>
      <p>For a 13 Wh phone and two full charges, the range is about 33 to 40 Wh. A power bank labelled 37 Wh sits inside that planning range. This estimate assumes the phone is not being used heavily while charging and does not promise two complete charges from every 37 Wh model.</p>
    </> },
    { id: "checks", title: "What to check", content: <ul>
      <li><strong>Device energy:</strong> use the exact model&apos;s battery Wh from its manual or support page. If only mAh and nominal voltage are given, calculate Wh = V × (mAh ÷ 1,000).</li>
      <li><strong>Power-bank energy:</strong> prefer the Wh printed on the product or its exact-model documentation. Do not convert mAh without the maker&apos;s stated nominal voltage.</li>
      <li><strong>Number of charges:</strong> decide whether you need an emergency top-up, one full day, a weekend or laptop-class energy.</li>
      <li><strong>Output:</strong> compare each port&apos;s watts and supported charging profiles with the device maker&apos;s requirements.</li>
      <li><strong>Cable:</strong> confirm the connector and power rating. A suitable power bank cannot overcome an unsuitable cable.</li>
      <li><strong>Shared output:</strong> check whether using two ports reduces the power available to either device.</li>
      <li><strong>Recharging input:</strong> a higher-capacity bank can take longer to refill unless its input, cable and wall charger support an appropriate rate.</li>
    </ul> },
    { id: "solution", title: "Step-by-step solution", content: <ol>
      <li>Write down each device&apos;s battery Wh and the number of full charges you want. Count a half charge as 0.5. Add the energy goals when more than one device will share the bank.</li>
      <li>Divide the total by 0.80 for the lower end and by 0.65 for the higher end. For a 30 Wh tablet needing one full charge, that is roughly 38 to 46 Wh of rated power-bank capacity.</li>
      <li>Compare candidates by their labelled Wh. <a href={sources.catsa.url}>CATSA gives the same conversion formula for air travel: Wh = V × (mAh ÷ 1,000)</a>.</li>
      <li>When a label uses a 3.7 V nominal cell voltage, 5,000 mAh equals 18.5 Wh, 10,000 mAh equals 37 Wh, 20,000 mAh equals 74 Wh and 27,000 mAh equals 99.9 Wh. These examples apply only at 3.7 V; use the voltage and Wh stated for the exact product.</li>
      <li>Check charging power after capacity. <a href={sources.usbPower.url}>USB-IF explains that USB Power Delivery negotiates power between compatible equipment</a>. Match the power bank, device and cable to the device maker&apos;s required profiles and watts.</li>
      <li>Choose the smallest capacity range that covers the plan with acceptable size, weight and recharge time. Extra capacity can be useful, but it is not free to carry.</li>
      <li>Confirm the exact model&apos;s instructions, warranty and recall status before use. Recalculate when the device list or trip changes.</li>
    </ol> },
    { id: "mistakes", title: "Common mistakes", content: <ul>
      <li>Dividing the power bank&apos;s mAh by the phone&apos;s mAh and calling the result guaranteed full charges.</li>
      <li>Buying by capacity alone and overlooking the required USB Power Delivery profile or output wattage.</li>
      <li>Reading a multi-port total as the power available from every port at the same time.</li>
      <li>Assuming a high-wattage cable makes a low-output port charge faster.</li>
      <li>Choosing a bank close to an air-travel limit without checking its printed Wh and the airline&apos;s current policy.</li>
      <li>Continuing to use a power bank that is swollen, dented, damaged, recalled or becoming unusually hot.</li>
    </ul> },
    { id: "canadian-note", title: "Canadian compatibility or safety note", content: <>
      <p><a href={sources.catsa.url}>CATSA says power banks should be in carry-on baggage and notes that most airlines typically allow up to 100 Wh without special approval, while 100 to 160 Wh typically requires airline approval</a>. Airline policies can be more restrictive and can change. Check both CATSA and the operating airline before every trip, and remove the power bank if a carry-on bag is checked at the gate.</p>
      <p><a href={sources.healthCanada.url}>Health Canada advises charging lithium-ion products at room temperature where they can be seen, away from soft surfaces, and not using batteries that are swollen, dented or otherwise damaged</a>. Follow the exact product&apos;s instructions. If a separate wall charger is used, check its voltage and current compatibility and its recognized Canadian certification mark.</p>
      <p><a href={sources.transportCanada.url}>Transport Canada has warned air operators about recalled power banks</a>. Search the exact brand, model and any batch or serial identifier in the <a href={sources.recalls.url}>Government of Canada recalls database</a>; a search with no result is not proof that a unit is safe.</p>
    </> },
    { id: "specifications", title: "Recommended specifications", content: <>
      <p>Require a clearly stated Wh rating, mAh rating and nominal voltage; an exact model number; per-port output profiles and watts; total shared output; input charging profiles and watts; included-cable capability; dimensions and weight; operating and storage instructions; and Canadian warranty and support information.</p>
      <p>For a phone or tablet, choose capacity from the worksheet and an output that matches the device maker&apos;s supported charging standard. For a USB-C laptop, confirm that the laptop accepts USB-C charging and that the bank and cable provide the required USB Power Delivery profile and wattage. A capacity estimate does not establish laptop compatibility.</p>
      <p>For routine air travel, staying at or below a clearly marked 100 Wh simplifies the capacity check, but it does not replace the airline&apos;s current rules. Larger is not automatically more suitable.</p>
    </> },
    { id: "products", title: "Where to check suitable products", content: <>
      <p>Start with the exact device maker&apos;s battery and charging specifications. Then open the power-bank maker&apos;s Canadian page or manual for the exact model and compare labelled Wh, output profiles, input power, shared-port behaviour, cable requirements, dimensions, warranty and safety instructions.</p>
      <p>For USB claims, <a href={sources.usbProducts.url}>USB-IF&apos;s product search covers products certified to bear its logo</a>. Search the exact model; a logo image or marketplace description is not enough. Also check the Government of Canada recall database and, for travel, CATSA and the operating airline.</p>
      <p>At a retailer, confirm the model number matches the documentation, inspect return conditions and compare the total price in Canadian dollars. No product or retailer link in this guide is an affiliate recommendation. If a bank you already own has clear ratings, is in good condition and covers the worksheet, replacing it may add no practical value.</p>
      <p>For the rest of the charging path, use CANOD&apos;s <Link href="/guides/charger-safety-canada/">Canadian charger-safety checks</Link> and <Link href="/guides/why-usb-c-cables-work-differently/">USB-C cable capability guide</Link>.</p>
    </> },
  ],
  sources: Object.values(sources),
};
