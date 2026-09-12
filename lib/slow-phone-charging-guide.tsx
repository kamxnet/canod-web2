import Link from "next/link";
import type { Guide } from "./guides";

const sources = {
  healthCanada: {
    title: "Health Canada: lithium-ion battery safety",
    url: "https://www.canada.ca/en/health-canada/services/household-products/battery-safety/lithium-ion.html",
  },
  recalls: {
    title: "Government of Canada: recalls and safety alerts",
    url: "https://recalls-rappels.canada.ca/en",
  },
  appleTroubleshooting: {
    title: "Apple Canada: if an iPhone will not charge or charges slowly",
    url: "https://support.apple.com/en-ca/108805",
  },
  appleFastCharge: {
    title: "Apple Canada: fast-charge requirements for iPhone",
    url: "https://support.apple.com/en-ca/102574",
  },
  googleCharging: {
    title: "Google: charge a Pixel phone",
    url: "https://support.google.com/pixelphone/answer/7106961?hl=en",
  },
  googleTroubleshooting: {
    title: "Google: fix a Pixel phone that will not charge",
    url: "https://support.google.com/pixelphone/answer/7167687?hl=en",
  },
  googleWireless: {
    title: "Google: fix slow wireless charging on a Pixel phone",
    url: "https://support.google.com/pixelphone/answer/12816122?hl=en-GB",
  },
  samsungCharging: {
    title: "Samsung Canada: enable fast charging on a Galaxy device",
    url: "https://www.samsung.com/ca/support/mobile-devices/my-galaxy-device-is-not-fast-charging-how-do-i-fix-it/",
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

export const slowPhoneChargingGuide: Guide = {
  slug: "why-is-my-phone-charging-slowly",
  title: "Why Is My Phone Charging Slowly?",
  category: "Power",
  pillar: "travel",
  description:
    "Isolate the charger, cable, phone and wireless setup, then check whether heat, use or a battery setting is intentionally limiting the rate.",
  date: "2026-09-11",
  reviewed: "2026-09-11",
  scope:
    "A practical diagnostic guide for personal phones, not a charging-speed, compatibility, battery-health or safety guarantee. CANOD cannot inspect your device, charger, cable, outlet or battery. Follow the exact phone maker's instructions and use qualified service for damage or unresolved faults.",
  methodology:
    "We reviewed current Health Canada battery-safety guidance, USB-IF power documentation and primary Apple, Google and Samsung support pages. Manufacturer examples describe only the models and software they name; use the instructions for your exact phone. The timed baseline test below is a CANOD troubleshooting worksheet, not a laboratory benchmark.",
  related: [
    {
      title: "Check charger safety in Canada",
      href: "/guides/charger-safety-canada/",
    },
    {
      title: "Match a USB-C cable to the job",
      href: "/guides/why-usb-c-cables-work-differently/",
    },
    {
      title: "Choose a power-bank capacity",
      href: "/guides/what-size-power-bank-do-i-need/",
    },
  ],
  sections: [
    {
      id: "problem",
      title: "The problem",
      content: (
        <>
          <p>
            A phone&apos;s charging percentage shows the net result of energy
            entering the battery while the phone is also using energy. A weak
            power source, an unsuitable or damaged cable, heat, screen use,
            background activity, wireless misalignment or a battery-protection
            setting can all make that percentage rise slowly.
          </p>
          <p>
            A larger wattage number is not a diagnosis. The phone, charger and
            cable must support a compatible charging method, and the phone
            controls how much power it accepts.{" "}
            <a href={sources.googleCharging.url}>
              Google notes that supported Pixel phones can charge faster when
              the battery is low because it can accept a higher charging current
            </a>
            , while some phones deliberately pause or limit charging to manage
            heat or battery ageing.
          </p>
        </>
      ),
    },
    {
      id: "answer",
      title: "The 30-second answer",
      content: (
        <>
          <p>
            Let the phone reach room temperature. Connect it directly to a wall
            outlet with a known-compatible charger and cable, turn the screen
            off and note the battery percentage after 15 minutes. If that
            baseline is faster, add back one change at a time: your usual cable,
            charger, power source, case or wireless pad.
          </p>
          <p>
            If the baseline is still unexpectedly slow, check the phone&apos;s
            charging status, battery limit and temperature message; inspect the
            cable and port for visible damage or obstruction; then follow the
            exact model&apos;s support steps. Stop using damaged or unusually
            hot equipment and arrange manufacturer-authorized service when the
            problem persists.
          </p>
        </>
      ),
    },
    {
      id: "checks",
      title: "What to check",
      content: (
        <ul>
          <li>
            <strong>Expected rate:</strong> find the exact phone model&apos;s
            supported wired or wireless charging method, required adapter and
            any model-specific maximum.
          </li>
          <li>
            <strong>Power source:</strong> a computer, vehicle port, hub or
            older USB-A adapter may provide a different rate from a suitable
            wall charger.{" "}
            <a href={sources.googleCharging.url}>
              Google notes that a wall outlet can charge supported Pixel models
              faster than a laptop port
            </a>
            .
          </li>
          <li>
            <strong>Charger:</strong> compare its per-port output profiles with
            the phone maker&apos;s requirements. On a shared charger, check the
            output available while other devices are connected.
          </li>
          <li>
            <strong>Cable and port:</strong> look for cuts, bent parts,
            looseness, moisture alerts or visible obstruction.{" "}
            <a href={sources.appleTroubleshooting.url}>
              Apple tells users troubleshooting slow charging to check the cable
              and adapter for damage, make firm connections and check the phone
              port for debris
            </a>
            .
          </li>
          <li>
            <strong>Temperature and use:</strong> direct sun, a hot vehicle, a
            demanding app, a bright screen or poor cellular coverage can reduce
            the net gain.{" "}
            <a href={sources.googleWireless.url}>
              Google&apos;s wireless-charging guidance recommends cooling the
              phone, darkening the screen and checking background activity and
              connectivity
            </a>
            .
          </li>
          <li>
            <strong>Battery settings:</strong> look for an optimized, adaptive
            or charge-limit message before assuming there is a fault. The name
            and behaviour vary by model and software version.
          </li>
          <li>
            <strong>Wireless setup:</strong> confirm the phone supports the
            charger, centre it as the manufacturer directs and test without a
            thick or incompatible case or magnetic attachment.
          </li>
        </ul>
      ),
    },
    {
      id: "solution",
      title: "Step-by-step solution",
      content: (
        <ol>
          <li>
            Record the phone model, starting battery percentage, charging
            message and whether the problem is wired, wireless or both. Compare
            at roughly the same starting percentage; a nearly full battery is
            not a useful speed baseline.
          </li>
          <li>
            Check for a charging limit, optimized-charging schedule or
            temperature warning.{" "}
            <a href={sources.appleTroubleshooting.url}>
              Apple documents optimized charging, user-set limits and
              temperature-related charging limits on supported iPhones
            </a>
            .{" "}
            <a href={sources.googleWireless.url}>
              Google similarly says adaptive charging can make slower charging
              above 80% expected on supported Pixel phones
            </a>
            .
          </li>
          <li>
            Let the phone and charger cool to room temperature in a dry, visible
            place. Remove a case only for the test if the phone maker recommends
            it. Do not chill the phone or charge it in a hot or cold vehicle.
          </li>
          <li>
            Use a working wall outlet and connect the phone directly with a
            charger and cable listed as compatible by the phone maker.
            Disconnect hubs, adapters and other devices from a shared charger
            for this baseline.
          </li>
          <li>
            Turn off the screen and avoid demanding apps for 15 minutes. Record
            the percentage change. This is a comparison with your usual setup,
            not a promised charge rate.
          </li>
          <li>
            If the baseline improves, substitute one component at a time. A
            change after swapping only the cable, charger or power source
            identifies the part of the path to investigate; it does not prove
            why that part underperformed.
          </li>
          <li>
            For wireless charging, check alignment and case compatibility, then
            compare with a wired baseline.{" "}
            <a href={sources.samsungCharging.url}>
              Samsung Canada notes that coil position varies by model and
              thicker cases can lengthen wireless charging time
            </a>
            .
          </li>
          <li>
            If both baselines remain slow, follow the exact phone maker&apos;s
            current troubleshooting and service route.{" "}
            <a href={sources.googleTroubleshooting.url}>
              Google recommends checking connections, obstruction and alternate
              compatible accessories before support
            </a>
            . Do not dismantle a sealed phone or probe its port.
          </li>
        </ol>
      ),
    },
    {
      id: "mistakes",
      title: "Common mistakes",
      content: (
        <ul>
          <li>
            Judging speed near 100% against a low-battery fast-charge claim.
          </li>
          <li>
            Assuming the largest number printed on a charger is available from
            every port at the same time.
          </li>
          <li>
            Replacing the charger before testing the cable, outlet, phone
            settings and temperature.
          </li>
          <li>
            Using the phone heavily during a speed test, so much of the incoming
            energy is consumed immediately.
          </li>
          <li>
            Assuming every USB-C or wireless charger supports the phone&apos;s
            required fast-charge method.
          </li>
          <li>
            Turning off a battery-protection feature without first deciding
            whether a full charge now matters more than the feature&apos;s
            intended benefit.
          </li>
          <li>
            Inserting metal tools or applying unapproved liquids or compressed
            air to a charging port.
          </li>
          <li>
            Continuing to test equipment that is damaged, swollen, dented,
            recalled or becoming unusually hot.
          </li>
        </ul>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian compatibility or safety note",
      content: (
        <>
          <p>
            <a href={sources.healthCanada.url}>
              Health Canada advises charging lithium-ion devices at room
              temperature where they can be seen, away from soft surfaces that
              trap heat, and according to manufacturer instructions
            </a>
            . It says not to use batteries that are swollen, dented or otherwise
            damaged.
          </p>
          <p>
            For a replacement wall charger, Health Canada recommends a trusted
            source, compatible voltage and current, and a recognized Canadian
            certification mark such as CSA, cUL or cETL. A marketplace image of
            a mark is not proof for the exact product; CANOD cannot authenticate
            it. Use the{" "}
            <Link href="/guides/charger-safety-canada/#approval">
              Canadian approval-information checks
            </Link>{" "}
            for the mains-powered part of the setup.
          </p>
          <p>
            Search the exact phone, charger and power-bank model in the{" "}
            <a href={sources.recalls.url}>
              Government of Canada recalls and safety alerts database
            </a>
            . No result is not proof of safety. Follow any matching recall
            instructions instead of continuing the test.
          </p>
        </>
      ),
    },
    {
      id: "specifications",
      title: "Recommended specifications",
      content: (
        <>
          <p>
            Start with the phone maker&apos;s specification for the exact model:
            connector, supported charging protocol, adapter output profile,
            recommended cable and wireless standard. For USB-C fast charging,
            require compatible USB Power Delivery—and Programmable Power Supply,
            or PPS, when the phone maker specifies it—across the phone, adapter
            and cable.
          </p>
          <p>
            <a href={sources.usbPower.url}>
              USB-IF explains that USB Power Delivery lets devices request the
              power they require
            </a>
            . A charger with more available watts does not force all of them
            into the phone, but a high headline wattage also does not prove the
            required profile is present. Check the per-port table, not only the
            front label.
          </p>
          <p>
            Requirements differ by model.{" "}
            <a href={sources.appleFastCharge.url}>
              Apple&apos;s current fast-charge page specifies USB Power Delivery
              adapters and model-dependent wattage for supported iPhones
            </a>
            ;{" "}
            <a href={sources.googleTroubleshooting.url}>
              Google specifies USB PD or PPS options for supported Pixel phones
            </a>
            . Use these as examples of why the exact manufacturer page matters,
            not as universal shopping rules.
          </p>
          <p>
            For wireless charging, require explicit compatibility with the exact
            phone, the needed adapter and cable, clear placement instructions,
            and the output level the phone can use. A wired connection is the
            cleaner diagnostic baseline when wireless charging is uncertain.
          </p>
        </>
      ),
    },
    {
      id: "products",
      title: "Where to check suitable products",
      content: (
        <>
          <p>
            Begin with the phone maker&apos;s Canadian support or specification
            page. Write down the exact adapter protocol, output profile, cable
            connection and wireless standard it names. Then compare those fields
            with the exact charger and cable model on the maker&apos;s page or
            manual.
          </p>
          <p>
            <a href={sources.usbProducts.url}>
              USB-IF&apos;s product search lists products certified to bear its
              logo
            </a>
            . Search the exact model and read the listing limits; USB
            certification does not replace Canadian electrical approval checks
            for an outlet-powered charger.
          </p>
          <p>
            At a Canadian retailer, match the model number to the documentation,
            inspect the actual product label, check the recall database and
            understand the return and warranty process. No product or retailer
            link in this guide is an affiliate recommendation. A working charger
            and cable that meet the phone maker&apos;s requirements may not need
            replacement.
          </p>
          <p>
            Continue with CANOD&apos;s{" "}
            <Link href="/guides/why-usb-c-cables-work-differently/">
              USB-C cable capability guide
            </Link>
            ,{" "}
            <Link href="/guides/charger-safety-canada/">
              Canadian charger-safety checks
            </Link>{" "}
            or{" "}
            <Link href="/guides/what-size-power-bank-do-i-need/">
              power-bank sizing worksheet
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
  sources: Object.values(sources),
};
