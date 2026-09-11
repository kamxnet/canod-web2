import Link from "next/link";
import type { Guide } from "./guides";
import { dockSources as sources, dockSourceCheckDate, dockToolPath } from "./dock-sources";

export const dockGuide: Guide = {
  slug: "seven-things-usb-c-dock",
  title: "Seven Things to Check Before Buying a USB-C Dock",
  category: "Work & connectivity",
  pillar: "work",
  description: "One cable is the idea. Compatibility is the detail. Check your displays, charging and operating system before choosing a dock.",
  date: dockSourceCheckDate,
  sections: [
    { id: "computer-and-port", title: "1. Start with the computer, not the dock", content: <>
      <p>Write down your computer&apos;s exact model and the port you intend to use. A connector that fits does not establish which data, display or charging features are available. <a href={sources.windows.url}>Microsoft&apos;s USB-C guidance</a> identifies mismatches between the host, cable and connected device as common causes of limited functionality.</p>
      <p>Look for the manufacturer&apos;s port specification: USB data speed, DisplayPort Alt Mode, USB4 or the Thunderbolt generation, as applicable. If a feature is not stated, treat it as unverified. Ask the dock maker about that exact host and port rather than relying on a broad &ldquo;USB-C compatible&rdquo; label.</p>
      <p>A dock can simplify a setup, but a direct monitor connection and a small hub may already cover your needs. Start with the missing function, not the largest port count.</p>
    </> },
    { id: "displays", title: "2. Plan the complete display arrangement", content: <>
      <p>Record the number of external screens, the resolution and refresh rate of each, and whether you need separate desktops or mirrored content. A statement such as &ldquo;4K support&rdquo; does not answer all of those questions.</p>
      <p>Check the computer&apos;s total external-display limit as well as the dock&apos;s simultaneous-output table. <a href={sources.mac.url}>Apple&apos;s MacBook Pro guidance</a> makes clear that supported display combinations depend on the model, resolution and refresh rate; a supported Thunderbolt hub does not raise the computer&apos;s native maximum. Other Mac models need their own specification page.</p>
      <p>For a dock that uses DisplayPort Multi-Stream Transport (MST), ask whether the exact computer and operating system support the desired extended-display arrangement. Count the built-in screen too when the manufacturer&apos;s instructions require it. Do not assume that two sockets mean two independent desktops.</p>
    </> },
    { id: "power-delivery", title: "3. Check the power that reaches the computer", content: <>
      <p>Compare your computer&apos;s USB-C charging requirements with the dock&apos;s stated power delivery <em>to the host</em>, not just a number printed on its power adapter. Confirm whether the required adapter is included. Ask about operation under your normal workload, not just charging while idle.</p>
      <p>The computer, charger and cable must support the needed charging standard and power level. <a href={sources.windows.url}>Microsoft explains why insufficient power or the wrong charging port can prevent charging or cause slow charging</a>. Keep the original power supply available if the manufacturer requires it.</p>
    </> },
    { id: "ports-and-cables", title: "4. Trace every cable and shared connection", content: <>
      <p>List the connections you actually need: monitor inputs, USB devices, Ethernet, storage and audio. Separate upstream ports that connect to the computer from downstream ports for peripherals. Check which ports carry video or power; a USB-C socket may have a different job from the one beside it.</p>
      <p><a href={sources.displayport.url}>VESA describes how DisplayPort, USB data and power can share USB-C</a>. Ask the dock maker which simultaneous display and USB-data combinations it supports. One port&apos;s maximum is not a promise that every port can run at its maximum together.</p>
      <p>Use the specified host cable and check any replacement cable&apos;s data and power capabilities. <a href={sources.usb.url}>USB-IF notes that a certified cable does not add capabilities to the products it connects</a>. Include the cost and length of the cables you will actually use.</p>
    </> },
    { id: "operating-system", title: "5. Verify the operating system and daily behaviour", content: <>
      <p>Check the dock maker&apos;s support page for your operating system, version, computer architecture and firmware requirements. Read any model-specific notes for display outputs, Ethernet and audio.</p>
      <p>For a managed work computer, ask IT whether required software and permissions are allowed. Request confirmation of the everyday behaviours you need: waking screens, reconnecting after sleep, lid-closed use and switching between computers. These are verification questions, not promises this guide can make for an unspecified dock.</p>
    </> },
    { id: "displaylink", title: "6. Know when DisplayLink is involved", content: <>
      <p>DisplayLink is USB graphics technology, not another name for DisplayPort Alt Mode or Thunderbolt. <a href={sources.displaylink.url}>Synaptics describes its display-expansion approach and supported platforms</a>. A dock may mix different display paths, so find out which output uses which technology.</p>
      <p>Confirm the exact dock, operating system and required software before buying. On macOS, <a href={sources.permissions.url}>DisplayLink Manager requires Screen Recording permission to access the pixels used for connected displays</a>. That can matter on a work-managed computer.</p>
      <p>There are trade-offs to check. <a href={sources.protectedVideo.url}>DisplayLink documents restrictions on some protected video on macOS while DisplayLink screens are connected</a>. Ask about your applications, content and performance needs instead of treating software-driven displays as an unconditional substitute for native video.</p>
    </> },
    { id: "canadian-purchase", title: "7. Check the Canadian purchase, not just the price", content: <>
      <p>Compare the total in Canadian dollars, including applicable tax, delivery, any import charges, missing cables and a required power adapter. Confirm who is selling the dock and who handles support.</p>
      <p>Read the seller&apos;s return window, opened-package conditions, restocking fees and return-shipping terms before purchase. Request written confirmation of your intended setup. Keep that response and the exact listing you ordered from. A practical return route matters when the remaining uncertainty can only be resolved with your equipment.</p>
    </> },
    { id: "your-checklist", title: "Turn the questions into your checklist", content: <>
      <p>Gather the computer model, port specification, operating system, display arrangement and charging requirement. Then compare the same requirements against each dock&apos;s official documentation.</p>
      <p>The <Link href={dockToolPath}>CANOD USB-C Dock Compatibility Checker</Link> turns those broad choices into an educational checklist. It does not inspect your hardware, compare a specific dock, recommend a product or guarantee compatibility.</p>
    </> },
  ],
  sources: Object.values(sources),
};
