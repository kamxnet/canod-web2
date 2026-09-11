import type { Guide } from "./guides";

const sources = {
  usbC: {
    title: "USB-IF: USB Type-C cables and connectors",
    url: "https://www.usb.org/cable_connector",
  },
  usbPower: {
    title: "USB-IF: USB Power Delivery",
    url: "https://www.usb.org/usb-charger-pd",
  },
  usbProducts: {
    title: "USB-IF: certified product search",
    url: "https://www.usb.org/products",
  },
  appleCables: {
    title: "Apple Canada: Thunderbolt Pro cable capabilities",
    url: "https://support.apple.com/en-ca/118204",
  },
  microsoftUsbC: {
    title: "Microsoft: fix USB-C problems in Windows",
    url: "https://support.microsoft.com/en-ca/windows/hardware/usb/fix-usb-c-problems-in-windows",
  },
  displayPort: {
    title: "VESA: DisplayPort over USB-C FAQ",
    url: "https://www.displayport.org/faq/",
  },
  healthCanada: {
    title: "Health Canada: electrical product safety",
    url: "https://www.canada.ca/en/health-canada/services/home-safety/electrical-products.html",
  },
} as const;

export const usbCCableGuide: Guide = {
  slug: "why-usb-c-cables-work-differently",
  title: "Why Does One USB-C Cable Work While Another Does Not?",
  category: "Connect",
  pillar: "work",
  description: "The plug shape is only the beginning. Match power, data and video capabilities to the job before replacing a device.",
  date: "2026-09-11",
  reviewed: "2026-09-11",
  scope: "A practical guide to USB-C-to-USB-C cables used for charging, data, displays and docks. The devices and cable all affect the result; CANOD has not tested the products mentioned.",
  methodology: "We reviewed current USB-IF certification and power guidance, primary Apple and Microsoft support documents, VESA display guidance and Health Canada electrical-safety advice. Advertised maximums are capability ceilings, not promised real-world performance.",
  related: [
    { title: "Check a USB-C dock before buying", href: "/tools/usb-c-dock-checker/" },
    { title: "Check laptop charger safety in Canada", href: "/guides/charger-safety-canada/#usb-c" },
  ],
  sections: [
    { id: "problem", title: "The problem", content: <>
      <p>Two cables can have the same reversible USB-C plugs but different wiring, electronics and tested capabilities. One may charge a laptop, another may transfer only basic USB data, and another may carry high-speed data and display signals. The connector shape alone does not identify those functions.</p>
      <p><a href={sources.appleCables.url}>Apple gives a concrete example: its USB-C Charge Cable transfers data at up to 480 Mbps and does not support video, while its Thunderbolt cables support much faster data and display connections</a>. A cable working for charging therefore does not prove it can run a monitor or a fast SSD.</p>
    </> },
    { id: "answer", title: "The 30-second answer", content: <>
      <p>Match the cable to the task in three columns: required charging watts, required data rate and required video or Thunderbolt support. Then confirm that the computer or phone port, the cable, and the connected device all support that capability. The connection operates at the lowest supported level in the path.</p>
      <p>For a new USB-C-to-USB-C cable, prefer a trustworthy maker and explicit watt and data-rate markings. <a href={sources.usbC.url}>USB-IF requires certified cables to show 60W or 240W, plus a supported data rate except on USB 2.0 cables</a>. A vague listing that says only “USB-C” is not enough.</p>
    </> },
    { id: "checks", title: "What to check", content: <ul>
      <li><strong>Job:</strong> charging, phone sync, external storage, a dock, or a display. Do not shop from the plug shape alone.</li>
      <li><strong>Host port:</strong> the exact computer or phone model and which USB-C port supports charging, USB4, Thunderbolt or DisplayPort Alt Mode.</li>
      <li><strong>Connected device:</strong> its required cable standard, power input and display or data limit.</li>
      <li><strong>Cable markings:</strong> a stated 60W or 240W power rating, a stated data rate such as 5, 10, 20, 40 or 80 Gbps, and any required USB or Thunderbolt certification.</li>
      <li><strong>Condition:</strong> bent plugs, loose connector shells, cuts, crushing, scorching or unusual heat. Stop using a damaged cable.</li>
    </ul> },
    { id: "solution", title: "Step-by-step solution", content: <ol>
      <li>Write down the failed task and the exact models at both ends. Check their manuals for the required power, data and display features.</li>
      <li>Connect directly, without a dock, extension or adapter where possible. Try the manufacturer-supplied cable for that device. If it works, the replaced part of the path is the leading suspect.</li>
      <li>Read the printing on the cable ends and its original specification page. Do not infer capability from thickness, colour, price or a USB-C label alone.</li>
      <li>For charging, compare the device requirement with both the charger output and cable watt rating. <a href={sources.usbPower.url}>USB-IF says USB Power Delivery can reach 240W only with a cable and connector that support it</a>; the cable cannot make an undersized charger deliver more power.</li>
      <li>For data, choose a cable whose stated rate is at least the rate supported by both devices. If a drive connects but is unexpectedly slow, check whether the cable is USB 2.0 before replacing the drive.</li>
      <li>For video, confirm the source port, cable and display or dock support the same display path. <a href={sources.displayPort.url}>VESA says DisplayPort Alt Mode support should be stated in device documentation and may be identified by a DP logo</a>.</li>
      <li>When the working combination is known, label the cable by capability and keep it with the device. Retest one change at a time if the problem returns.</li>
    </ol> },
    { id: "mistakes", title: "Common mistakes", content: <ul>
      <li>Assuming every cable that charges is also a full-featured data and display cable.</li>
      <li>Comparing watts and gigabits per second as though they describe the same feature.</li>
      <li>Checking the cable but not the capabilities of the USB-C ports and connected device.</li>
      <li>Assuming a 240W cable forces 240W into a device; USB Power Delivery negotiates among compatible equipment.</li>
      <li>Adding an extension, adapter or unpowered hub before establishing a direct working connection.</li>
      <li>Buying from a listing that omits the exact model, data rate, power rating or required display support.</li>
    </ul> },
    { id: "canadian-note", title: "Canadian compatibility or safety note", content: <>
      <p>A USB-IF or Thunderbolt certification identifies interface capabilities; it is not a Canadian electrical approval mark. For the wall charger in the same setup, <a href={sources.healthCanada.url}>Health Canada advises Canadians to use a compatible charger bearing a recognized Canadian certification mark such as CSA, cUL or cETL</a>. The mark should be on the product, not merely claimed in an online listing.</p>
      <p>Use the device maker&apos;s charging instructions, keep connectors dry and unobstructed, and replace a cable that is damaged or becomes unusually hot. If a charger, cable or device has been recalled, follow the recall instructions rather than continuing to test it.</p>
    </> },
    { id: "specifications", title: "Recommended specifications", content: <>
      <p>For ordinary charging and basic phone data, choose a certified cable with a power rating at or above the device requirement; 60W may be enough when the device needs no more than that. For a laptop or dock requiring more than 60W, choose a clearly marked 240W USB-C-to-USB-C cable and confirm the charger and device support the required USB Power Delivery profile.</p>
      <p>For an SSD, dock or other high-speed device, match the marked USB data rate to both endpoints instead of paying for an unsupported maximum. For video, require explicit support for the display connection described by the host and display makers. For a Thunderbolt device, use the Thunderbolt generation and cable type its documentation requires.</p>
      <p><a href={sources.microsoftUsbC.url}>Microsoft recommends a certified USB4 cable for USB4 equipment and says the computer, connected device and cable must support the same required USB-C features</a>. A higher-rated cable can be useful for reuse, but it cannot add a feature missing from a port or accessory.</p>
    </> },
    { id: "products", title: "Where to check suitable products", content: <>
      <p>Start with the support page for the exact computer, phone, dock, display or drive. Look for its required cable type, maximum charging input, USB or Thunderbolt data rate and video mode. If the manufacturer specifies an included or replacement cable, use that specification as the baseline.</p>
      <p>Then compare the exact cable model on the maker&apos;s Canadian page or datasheet. Look for clear watt and Gbps ratings, connector type, length, certification, warranty and return terms. <a href={sources.usbProducts.url}>USB-IF&apos;s product search is limited to products certified to bear its logo</a>; search the exact model rather than relying on a logo image in a marketplace listing.</p>
      <p>No product or retailer link in this guide is an affiliate recommendation. If a labelled cable you already own meets the documented requirement and works in a direct test, a new cable may not solve the problem.</p>
    </> },
  ],
  sources: Object.values(sources),
};
