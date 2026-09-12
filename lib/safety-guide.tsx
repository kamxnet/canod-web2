import Link from "next/link";
import type { Guide } from "./guides";
import { safetySources as sources, safetyReviewDate, safetyToolPath } from "./safety-sources";
import { dockGuidePath } from "./dock-sources";

export const safetyGuide: Guide = {
  slug: "charger-safety-canada",
  title: "Before Buying a Charger in Canada: Seven Safety Checks",
  category: "Safety & standards",
  pillar: "safety",
  description: "Approval information, electrical ratings and the questions worth resolving before a charger becomes part of your setup.",
  date: safetyReviewDate,
  reviewed: safetyReviewDate,
  scope: "Educational buying considerations, not a product certification or legal, regulatory, engineering or professional safety assessment. CANOD is an independent buying resource, not a testing laboratory or approval body.",
  methodology: "We reviewed current federal consumer guidance, Ontario ESA approval information and USB-IF technical explanations. Ontario requirements are identified as provincial, not presented as a rule for every jurisdiction. We have not inspected, tested or approved a charger. This guide cannot establish the condition or compliance of a particular unit.",
  related: [{ title: "Compare power bars and surge protectors", href: "/guides/power-bar-or-surge-protector-canada/" }, { title: "Diagnose slow phone charging", href: "/guides/why-is-my-phone-charging-slowly/" }, { title: "USB-C dock buying guide", href: dockGuidePath }, { title: "Choose a power-bank capacity", href: "/guides/what-size-power-bank-do-i-need/" }, { title: "Canadian Electrical Product Safety Checklist", href: safetyToolPath }],
  sections: [
    { id: "approval", title: "1. Identify Canadian approval information", content: <>
      <p>For an outlet-powered charger, <a href={sources.electrical.url}>Health Canada recommends looking for a recognized Canadian certification mark</a>, with CSA, cUL and cETL among its examples. These names are references, not logos or a complete list. Ask for a clear view of the actual product label and model.</p>
      <p><strong>Ontario:</strong> the <a href={sources.marks.url}>Electrical Safety Authority explains the province&apos;s approval framework</a> and lists certification and field-evaluation marks. It also distinguishes component recognition from approval of a complete end-use product. A mark on an internal part is not interchangeable with a complete-product approval.</p>
      <p><strong>Elsewhere in Canada:</strong> check with your provincial or territorial electrical safety authority for the applicable requirements. CANOD does not authenticate marks or decide whether an approval or exception applies. A photograph, familiar-looking mark or seller assurance cannot settle every safety question.</p>
    </> },
    { id: "input", title: "2. Read the input rating", content: <>
      <p>Find the charger&apos;s input voltage, marked in volts (V), and frequency, marked in hertz (Hz). These describe its supply requirements, not the voltage delivered to your device. Check that the manufacturer&apos;s stated input range covers the intended supply before buying.</p>
      <p>As a manufacturer-documentation example, <a href={sources.adapterExample.url}>Apple lists line voltage, frequency and output separately</a> for its listed adapters. Those specifications apply only to those adapters, not to an arbitrary charger, and are not evidence of Canadian approval.</p>
      <p><a href={sources.buyingElectrical.url}>Health Canada advises checking both plug type and voltage for international travel</a>. Ask whether the accessory changes only the plug connection or also provides the conversion the equipment needs. Do not assume that a plug fitting establishes voltage or frequency compatibility. If the label is missing or unclear, ask the manufacturer; this guide does not ask you to measure an outlet or alter an installation.</p>
    </> },
    { id: "output", title: "3. Match the device, not just the connector", content: <>
      <p><a href={sources.battery.url}>Health Canada advises using the original charger and checking voltage and current compatibility when replacing it</a>. Compare the device&apos;s instructions with the replacement&apos;s supported outputs. Record the exact model, required connection and charging standard.</p>
      <p>Confirm the battery type as well. <a href={sources.batteryBasics.url}>Health Canada cautions against trying to recharge non-rechargeable batteries</a>.</p>
      <p>Ask the manufacturer to resolve differences rather than experimenting. A headline wattage is not a complete compatibility statement. For higher-voltage battery equipment such as power tools or e-bikes, contact the original manufacturer or retailer for the appropriate replacement; this guide is not a substitute for that process.</p>
    </> },
    { id: "usb-c", title: "4. Check USB-C power delivery and the cable", content: <>
      <p><a href={sources.usb.url}>USB-IF describes Power Delivery as a negotiated power system</a>. Check the charging profiles the charger and device support, the intended port and the manufacturer&apos;s simultaneous-output information. The largest number on a multi-port charger need not describe your chosen connection.</p>
      <p><a href={sources.cable.url}>USB-IF explains that cables have different capabilities</a>. Check the required cable power capability as well as any data needs. USB certification information addresses USB capabilities; it is not a replacement for checking Canadian electrical approval information for a mains charger.</p>
      <p>For a dock-powered workspace, continue with our <Link href={dockGuidePath + "#power-delivery"}>guide to power delivered through a USB-C dock</Link>.</p>
    </> },
    { id: "warning-signs", title: "5. Resolve warning signs before use", content: <>
      <p>Look for visible damage, damaged cables, poorly fitting parts or unclear labels. The <a href={sources.consumer.url}>Ontario ESA&apos;s consumer guidance</a> identifies vague descriptions and typos as reasons to question a product. They may warrant further checking; appearance alone cannot authenticate it.</p>
      <p>If a battery is swollen, dented or damaged, <a href={sources.battery.url}>Health Canada says not to use it</a>. Unexpected heat or other signs of a problem should be raised with the manufacturer. Do not test a questionable charger by plugging it into a device you care about.</p>
      <p>For smoke, fire or immediate danger, move away and contact emergency services. For a non-urgent product concern, contact the manufacturer and <a href={sources.report.url}>report it to Health Canada</a> as appropriate. Questions about wiring or an installation belong with a qualified electrician or the relevant authority.</p>
    </> },
    { id: "placement", title: "6. Plan where charging will happen", content: <>
      <p>Follow the manufacturer&apos;s placement and ventilation instructions. <a href={sources.electrical.url}>Health Canada advises keeping charging products away from combustible material and soft surfaces</a> such as bedding or a couch, which can trap heat.</p>
      <p>Before adding another charger, ask whether your intended location keeps the product dry, visible and unobstructed. A product that cannot be used as instructed may not fit your setup, even if its features sound useful.</p>
    </> },
    { id: "recalls", title: "7. Check recalls and the Canadian purchase", content: <>
      <p>Search the exact brand and model in the <a href={sources.recalls.url}>Government of Canada recall database</a>. Read identifiers, affected batches and the actions in any matching notice. A search with no match is not evidence that a product is safe; keep the model details and check again when relevant.</p>
      <p><a href={sources.shopping.url}>Health Canada recommends checking the seller&apos;s location, contact details and policies</a>. Compare the listing with the manufacturer&apos;s information. Ask who will handle warranty service in Canada, what is covered, where a return goes, whether opened items are accepted and who pays shipping. Keep the receipt and written answers. This is not a statement of legal return rights.</p>
      <p><strong>Federal guidance is not individual approval:</strong> Health Canada states that it does not review or approve consumer products before they reach the market. Availability on a Canadian website should not be treated as Health Canada approval.</p>
    </> },
    { id: "your-checklist", title: "Take the questions with you", content: <>
      <p>Record the exact model, label information, device requirements, seller details and recall search. Keep unknowns visible instead of treating them as a pass.</p>
      <p>The <Link href={safetyToolPath}>Canadian Electrical Product Safety Checklist</Link> organizes your answers into information you report as confirmed, items needing verification and potential concerns. It performs no product inspection or recall lookup and does not issue a safety verdict.</p>
    </> },
  ],
  sources: Object.values(sources).filter(source => source !== sources.batteryBuying),
};
