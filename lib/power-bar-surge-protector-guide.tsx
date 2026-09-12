import Link from "next/link";
import type { Guide } from "./guides";

const sources = {
  healthCanada: {
    title: "Health Canada: electrical product safety",
    url: "https://www.canada.ca/en/health-canada/services/home-safety/electrical-products.html",
  },
  complianceReview: {
    title: "Health Canada: extension-cord and power-bar compliance project",
    url: "https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/industry-professionals/enforcement-summary-report/compliance-verification-project-2021-2022-electrical-extension-cords-power-bars.html",
  },
  esaMarks: {
    title: "Ontario ESA: recognized approval marks",
    url: "https://esasafe.com/electrical-products/recognized-certification-marks/",
  },
  esaCordBulletin: {
    title:
      "Ontario ESA: hazards from misuse of extension cords and power bars (PDF)",
    url: "https://esasafe.com/assets/files/esasafe/pdf/Electrical_Safety_Products/Flash_Notices/19-19-FL.pdf",
  },
  esaIndoorSafety: {
    title: "Ontario ESA: indoor electrical safety",
    url: "https://esasafe.com/safety/home-electrical-safety/indoor-safety/",
  },
  ulGuide: {
    title: "UL Solutions: guide to power strips and surge protectors",
    url: "https://www.ul.com/insights/guide-power-strips-and-surge-protectors",
  },
  outagePreparation: {
    title: "Government of Canada: prepare for power outages",
    url: "https://www.canada.ca/en/services/policing/emergencies/preparedness/get-prepared/hazards-emergencies/power-outages/how-prepare.html",
  },
  recalls: {
    title: "Government of Canada: recalls and safety alerts",
    url: "https://recalls-rappels.canada.ca/en",
  },
  recallExample: {
    title:
      "Health Canada: 2026 power-strip recall involving missing overcurrent protection",
    url: "https://recalls-rappels.canada.ca/en/alert-recall/annquan-brand-power-strips-recalled-due-fire-hazard",
  },
} as const;

export const powerBarSurgeProtectorGuide: Guide = {
  slug: "power-bar-or-surge-protector-canada",
  title: "Power Bar or Surge Protector: What Should Canadians Check?",
  category: "Safety & standards",
  pillar: "safety",
  description:
    "Tell basic outlet expansion from surge protection, then check Canadian approval information, load, cord and protection ratings before buying.",
  date: "2026-09-11",
  reviewed: "2026-09-11",
  scope:
    "A practical pre-purchase and use guide, not a product certification, electrical inspection or guarantee against fire, shock, equipment damage, lightning or every power disturbance. CANOD cannot inspect your product, outlet, wiring or load. Follow the exact product instructions and use a qualified electrician for permanent wiring or unresolved electrical concerns.",
  methodology:
    "We reviewed current Health Canada electrical-product guidance and compliance findings, Government of Canada outage and recall information, Ontario Electrical Safety Authority guidance, and UL Solutions' technical explanation of power strips and surge protectors. Ontario guidance is identified as provincial. Recommendations are conservative selection checks, not laboratory test results or a substitute for requirements in your jurisdiction.",
  related: [
    {
      title: "Check electrical approval information in Canada",
      href: "/guides/charger-safety-canada/#approval",
    },
    {
      title: "Use the Canadian electrical-product safety checklist",
      href: "/tools/canadian-electrical-safety-checklist/",
    },
    {
      title: "Choose a safe laptop or phone charger",
      href: "/guides/charger-safety-canada/",
    },
  ],
  sections: [
    {
      id: "problem",
      title: "The problem",
      content: (
        <>
          <p>
            A power bar and a surge protector can have the same row of outlets,
            switch and indicator light, but those features do not prove they do
            the same job. A basic power bar distributes one outlet among several
            plugs. A surge protector adds components intended to limit short
            voltage surges before they reach connected equipment.
          </p>
          <p>
            <a href={sources.ulGuide.url}>
              UL Solutions describes a power strip as an extension cord with
              multiple outlets and a surge protector as adding a clamping
              element
            </a>
            . Neither name tells you whether the exact model is approved for use
            in Canada, suitable for your total load or intended for the place
            you plan to use it.
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
            Choose a basic power bar only when you need more outlets for
            suitable low-draw devices and do not need surge protection. Choose a
            surge-protecting power bar for electronics when the exact model
            explicitly states surge protection and gives protection ratings—not
            merely a switch, breaker or light.
          </p>
          <p>
            In either case, require a recognized Canadian certification mark on
            the product, confirm the exact model in the certification
            body&apos;s listing when possible, keep the combined load within the
            product rating, plug it directly into a suitable wall outlet, and
            follow the maker&apos;s indoor/outdoor and replacement instructions.
            Do not use a power bar for a portable heater.
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
            <strong>Actual function:</strong> look for the words “surge
            protector” or “surge protective device” plus protection ratings. A
            switch, breaker or light does not establish which kind of protection
            the product provides; read the label and manual.
          </li>
          <li>
            <strong>Canadian approval:</strong> inspect the mark and model on
            the physical product, not only a marketplace image.{" "}
            <a href={sources.healthCanada.url}>
              Health Canada names CSA, cUL and cETL as examples of recognized
              Canadian certification marks
            </a>
            .
          </li>
          <li>
            <strong>Electrical rating:</strong> record the product&apos;s volts,
            amps and/or watts, then add the nameplate loads of everything you
            plan to connect. Outlet count is not load capacity.
          </li>
          <li>
            <strong>Cord and location:</strong> check cord length, conductor
            gauge, grounding, damage and whether the product is intended for
            indoor or outdoor use. A longer cord or a rug over it is not a safe
            substitute for permanent wiring.
          </li>
          <li>
            <strong>Overcurrent protection:</strong> look for the exact
            model&apos;s resettable breaker or other stated overload protection.{" "}
            <a href={sources.recallExample.url}>
              A 2026 Health Canada recall identified a fire risk in specified
              power strips that lacked overcurrent protection
            </a>
            .
          </li>
          <li>
            <strong>Surge information:</strong> for a surge model, look for a
            voltage-protection or suppressed-voltage rating, an energy rating in
            joules when provided, and clear instructions for any protection or
            replacement indicator.
          </li>
          <li>
            <strong>Recall and support:</strong> keep the exact model number,
            check Canadian recalls and confirm who provides warranty support in
            Canada.
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
            List the exact devices that will share the bar. Copy each
            device&apos;s input amps or watts from its label or manual; do not
            estimate from plug size.
          </li>
          <li>
            Remove portable heaters and other equipment whose instructions call
            for a wall outlet.{" "}
            <a href={sources.healthCanada.url}>
              Health Canada says never to plug a portable electric heater into
              an extension cord or power bar
            </a>
            .
          </li>
          <li>
            Decide whether you need only outlet distribution or also surge
            protection. For a computer, television or similar electronics, the{" "}
            <a href={sources.outagePreparation.url}>
              Government of Canada recommends a surge-protecting power bar
            </a>
            .
          </li>
          <li>
            Check the actual product label for a recognized Canadian approval
            mark, exact model and electrical rating. Search the certification
            body&apos;s public database or ask it to confirm the exact model
            when the listing is unclear.
          </li>
          <li>
            Add the intended loads and keep the total within the lower of the
            bar&apos;s rating and any limit in its instructions. If device
            labels use mixed units or the load is uncertain, ask the
            manufacturer or a qualified electrician rather than improvising a
            conversion.
          </li>
          <li>
            For a surge model, compare protection information among otherwise
            suitable products.{" "}
            <a href={sources.ulGuide.url}>
              UL Solutions says a lower suppressed-voltage rating indicates
              better protection against surges
            </a>
            . Treat joules as an energy-handling specification, not a promise
            about protection life or every event, and do not use it as the only
            selection criterion.
          </li>
          <li>
            Put the bar where its cord will remain visible, dry and uncrushed.
            Plug it directly into the wall outlet; do not connect power bars in
            series.{" "}
            <a href={sources.esaCordBulletin.url}>
              Ontario&apos;s ESA does not recommend daisy-chaining power bars
            </a>
            .
          </li>
          <li>
            Search the exact model in the Canadian recalls database. After
            installation, stop using a bar with heat, arcing, a loose plug,
            cracked housing, damaged cord or an indicator that the instructions
            say means protection is no longer active.
          </li>
        </ol>
      ),
    },
    {
      id: "mistakes",
      title: "Common mistakes",
      content: (
        <ul>
          <li>Assuming every power bar includes surge protection.</li>
          <li>
            Counting free outlets instead of adding the connected electrical
            loads.
          </li>
          <li>
            Treating a breaker switch as proof of surge protection, or a surge
            light as proof of overload capacity.
          </li>
          <li>
            Plugging a portable heater, kettle or other high-draw appliance into
            a bar without the appliance maker explicitly permitting it.
          </li>
          <li>
            Daisy-chaining bars, using an indoor bar outdoors or running the
            cord under a rug, through a doorway or beside heat or water.
          </li>
          <li>
            Trusting a certification logo in a listing without checking the
            physical product and exact model.
          </li>
          <li>
            Treating a large joule number as a guarantee against lightning or
            assuming surge protection lasts forever without reading the
            replacement guidance.
          </li>
          <li>
            Resetting a repeatedly tripped breaker without finding and reducing
            the load or addressing the underlying electrical problem.
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
            <a href={sources.complianceReview.url}>
              Health Canada says plug-in electrical products, including power
              bars, must be certified to the applicable Canadian national safety
              standard by an accredited certification body and carry that
              body&apos;s recognized mark
            </a>
            . In its 2021–2022 compliance project, inspectors checked documents
            and certification-body records as well as the visible mark. That is
            why a familiar-looking logo alone should not end your check.
          </p>
          <p>
            Provincial and territorial requirements apply. For Ontario, use the{" "}
            <a href={sources.esaMarks.url}>
              ESA&apos;s recognized approval-mark reference
            </a>
            ; elsewhere, consult the relevant electrical safety authority. CANOD
            cannot authenticate a mark or decide whether a particular product,
            installation or exception complies.
          </p>
          <p>
            Search the exact brand, model and other identifiers in the{" "}
            <a href={sources.recalls.url}>
              Government of Canada recalls and safety alerts database
            </a>
            . Follow any matching notice. No search result is not proof that a
            product is safe.
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
            For any model, require a recognized Canadian certification mark on
            the product; an exact model number; clearly stated voltage and
            current or wattage limits; grounding that matches the intended
            equipment; a resettable overcurrent device or other documented
            overload protection; a cord rated for the intended load and
            location; and clear warranty, indicator and replacement
            instructions.
          </p>
          <p>
            <a href={sources.esaCordBulletin.url}>
              Ontario&apos;s ESA recommends a minimum 14 AWG copper conductor
              for power bars
            </a>
            . Treat that as a conservative Ontario selection preference, not a
            universal declaration that every smaller-number or differently
            designed product is acceptable in every jurisdiction. The complete
            certified product and its stated rating still matter.
          </p>
          <p>
            For surge protection, additionally require an explicit surge claim,
            a voltage-protection or suppressed-voltage rating, a joule rating
            when the maker provides one, and an indicator or documented method
            for knowing when protection is no longer active. Among products that
            already pass the approval, load and fit checks, prefer a lower
            protection-voltage rating. Do not use joules as a stand-alone score
            or compare either number across products using different test
            methods, and do not treat any rating as a guarantee.
          </p>
          <p>
            A plug-in bar has limits. The{" "}
            <a href={sources.outagePreparation.url}>
              Government of Canada says a whole-home surge protector offers
              significantly more protection than a typical surge-protecting
              power bar
            </a>
            . Whole-home equipment and permanent wiring require professional
            advice and are outside this buying guide.
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
            Start with the connected equipment manuals. Record anything that
            must plug directly into a wall outlet, plus the total intended load.
            Then compare the exact power-bar model on the maker&apos;s Canadian
            page or manual—not a family name or a visually similar listing.
          </p>
          <p>
            At a Canadian retailer, inspect a clear image of the product label
            and confirm the model, approval mark, electrical rating, conductor
            gauge, cord length, indoor/outdoor use, overload device and, when
            needed, surge ratings and protection-status instructions. Verify the
            approval listing and recall status independently; save the manual
            and receipt.
          </p>
          <p>
            If you repeatedly need several bars or a breaker trips,{" "}
            <a href={sources.esaIndoorSafety.url}>
              Ontario&apos;s ESA recommends permanent wiring and outlets for
              ongoing power needs
            </a>
            . Ask a qualified electrician about the installation instead of
            expanding it with more temporary connections.
          </p>
          <p>
            No product or retailer link in this guide is an affiliate
            recommendation. Continue with CANOD&apos;s{" "}
            <Link href="/guides/charger-safety-canada/#approval">
              Canadian electrical approval checks
            </Link>{" "}
            or the{" "}
            <Link href="/tools/canadian-electrical-safety-checklist/">
              Canadian electrical-product safety checklist
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
  sources: Object.values(sources),
};
