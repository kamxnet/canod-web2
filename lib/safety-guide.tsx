import Link from "next/link";
import type { Guide } from "./guides";
import { safetySources as sources, safetyReviewDate, safetyToolPath } from "./safety-sources";

export const safetyGuide: Guide = {
  slug: "charger-safety-canada",
  title: "Is This Charger Safe to Buy in Canada?",
  category: "Safety & standards",
  pillar: "safety",
  description: "How to check if a wall charger or power adapter bought online is legally safe and won't catch fire or damage your phone.",
  date: safetyReviewDate,
  reviewed: safetyReviewDate,
  scope: "Practical consumer safety guide, not a product certification or legal, regulatory, engineering or professional safety assessment. CANOD is an independent buying resource, not a testing laboratory or approval body.",
  methodology: "We reviewed current Health Canada consumer advisories, provincial Electrical Safety Authority (ESA) guidelines, Standards Council of Canada (SCC) accreditation rules, and international electrical safety standards. Recommendations reflect conservative safety practices for Canadian homes.",
  related: [
    { title: "Power Bar vs Surge Protector: Which Do You Need?", href: "/guides/power-bar-or-surge-protector-canada/" },
    { title: "Which Charger Do I Need for My Phone and Laptop?", href: "/guides/which-charger-do-i-need/" },
    { title: "Why Is My Phone Charging Slowly?", href: "/guides/why-is-my-phone-charging-slowly/" },
    { title: "Charger Wattage Calculator", href: "/tools/charger-wattage-calculator/" },
    { title: "Canadian Electrical Product Safety Checklist", href: safetyToolPath },
  ],
  sections: [
    {
      id: "the-problem",
      title: "The Problem",
      content: (
        <>
          <p>
            Online marketplaces (Amazon third-party sellers, Temu, AliExpress, and social media ads) are flooded with uncertified, dirt-cheap USB wall chargers and laptop power bricks. Many cost less than $10, yet advertise &ldquo;100W Super Fast Charging.&rdquo;
          </p>
          <p>
            The risk is real: poorly insulated transformers, missing internal fuses, and sub-millimetre trace separation can cause electrical arcing, destroy a $1,500 smartphone, or ignite a house fire while you sleep. How do you tell if a charger is genuinely safe before plugging it into your wall?
          </p>
        </>
      ),
    },
    {
      id: "quick-answer",
      title: "The 30-Second Answer",
      content: (
        <>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 mb-4">
            <p className="font-semibold mb-1">Look for a recognized Canadian safety mark on the charger body itself:</p>
            <p className="text-sm">
              The charger must be stamped with <strong>cULus</strong>, <strong>CSA</strong>, or <strong>cETLus</strong>. Notice the small lowercase <strong>&ldquo;c&rdquo;</strong> at the 8 o&apos;clock position — that proves it was tested to Canadian electrical safety standards (CAN/CSA).
            </p>
          </div>
          <p>
            <strong>Crucial warning:</strong> A standalone <strong>&ldquo;CE&rdquo; mark is NOT a Canadian safety certification</strong>. In Europe, CE is a manufacturer self-declaration without independent lab testing, and overseas sellers frequently stamp fake CE logos (&ldquo;China Export&rdquo;) on dangerous products.
          </p>
        </>
      ),
    },
    {
      id: "try-this-first",
      title: "Try This First: The 4-Step Safety Check",
      content: (
        <>
          <ol className="space-y-3">
            <li>
              <strong>1. The &ldquo;c&rdquo; Test:</strong> Examine the printed text on the prongs side of the charger. Look for one of these symbols:
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                <li><strong>cULus</strong> (Underwriters Laboratories with a &lsquo;c&rsquo; to the left)</li>
                <li><strong>CSA</strong> (Canadian Standards Association mark, often with &lsquo;NRTL/C&rsquo; or a &lsquo;c&rsquo;)</li>
                <li><strong>cETLus</strong> (Intertek ETL with a &lsquo;c&rsquo; at the 8 o&apos;clock position)</li>
              </ul>
              If it only has CE, FCC, or RoHS without a certified Canadian mark, it is <em>not legally approved</em> for sale or connection to Canadian mains power.
            </li>
            <li>
              <strong>2. The Weight &amp; Finish Test:</strong> Cheap fire-hazard chargers feel hollow and feather-light because they omit isolation transformers, heat sinks, and electromagnetic shielding. A genuine 65W GaN charger has noticeable heft (usually 100g to 180g) and clean, flush plastic seams.
            </li>
            <li>
              <strong>3. The Traceability Check:</strong> Real certified chargers display:
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                <li>Manufacturer name or registered brand (not an alphabet-soup name like &ldquo;XYXQZ&rdquo;)</li>
                <li>Specific model number matching the box</li>
                <li>Input voltage rating: <code className="text-xs bg-muted px-1.5 py-0.5 rounded">100-240V ~ 50/60Hz</code></li>
                <li>File identification number under the safety mark (e.g. UL file <code className="text-xs bg-muted px-1.5 py-0.5 rounded">E123456</code>)</li>
              </ul>
            </li>
            <li>
              <strong>4. The Price Reality Check:</strong> A safe, multi-port 65W USB-C charger requires GaN (Gallium Nitride) chips, safety fuses, and certified thermistors. If a seller is offering a &ldquo;100W 4-port fast charger&rdquo; for $12 CAD with free shipping, they cut corners on life-safety components.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "warning-signs",
      title: "Warning Signs: Unplug Immediately If...",
      content: (
        <>
          <p>If you already own the charger and notice any of these symptoms, unplug it immediately and dispose of it at an electronic waste depot:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Too hot to touch:</strong> While fast chargers get warm (around 45°C–55°C), you should always be able to firmly hold your fingers on it for 5 seconds without discomfort. If it scalds you or smells like hot plastic, it is dangerous.</li>
            <li><strong>Audible buzzing or high-pitched squealing:</strong> A loud whine or hiss under load indicates vibrating coils or failing capacitor filtering.</li>
            <li><strong>Touchscreen ghosting:</strong> If your phone screen twitches, misses taps, or registers phantom touches while plugged in, severe electrical noise (ripple voltage) is leaking into the phone chassis.</li>
            <li><strong>Loose or sparking prongs:</strong> The wall prongs should be rigid, polarized, and snap securely into the outlet without wobbling.</li>
          </ul>
        </>
      ),
    },
    {
      id: "what-you-need",
      title: "What to Buy: Safe Brands & Canadian Retailers",
      content: (
        <>
          <p>
            You do not need to buy first-party Apple or Samsung chargers at exorbitant prices, but you should buy from reputable third-party accessory makers who maintain legitimate safety testing:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Trusted Third-Party Brands</p>
              <p className="text-xs text-muted-foreground mt-1">
                Anker, Belkin, Ugreen, Satechi, Baseus (official store), Nomad, and Spigen. All consistently carry cULus or cETL certifications.
              </p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Safe Canadian Retailers</p>
              <p className="text-xs text-muted-foreground mt-1">
                Best Buy Canada, Memory Express, Canada Computers, Costco Canada, Apple Store, or manufacturer direct websites. On Amazon.ca, verify &ldquo;Sold by: Brand Official&rdquo; and &ldquo;Ships from Amazon&rdquo;.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "calculator-tool",
      title: "Need to Know What Wattage Your Device Needs?",
      content: (
        <>
          <p>
            Don&apos;t guess whether a 20W, 45W, or 65W charger is right for your phone or laptop. Check our free tool:
          </p>
          <div className="mt-3">
            <Link
              href="/tools/charger-wattage-calculator/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Open Charger Wattage Calculator →
            </Link>
          </div>
        </>
      ),
    },
    {
      id: "why-this-happens",
      title: "Why Fake & Unsafe Chargers Exist",
      content: (
        <>
          <p>
            To legally sell an electrical device in North America, a manufacturer must submit sample units to an independent testing lab (like UL, CSA, or Intertek). This certification process costs tens of thousands of dollars per product line and requires rigorous insulation, flame-retardant plastics, and thermal shutdown cutoffs.
          </p>
          <p>
            Fly-by-night sellers bypass this process by cloning branded chassis plastics, skipping testing fees, and using counterfeit or reject microchips. Because cross-border parcels sent via international mail often bypass physical customs inspection, the burden of safety falls directly on Canadian buyers.
          </p>
        </>
      ),
    },
    {
      id: "technical-details",
      title: "Technical Details: How to Verify Certification Numbers",
      content: (
        <>
          <p>
            Underneath legitimate safety logos, you will almost always find a reference number. You can verify this number for free in public manufacturer databases:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>UL Product iQ:</strong> Search the &ldquo;E-number&rdquo; (e.g. E123456) on UL&apos;s certification directory to confirm the company name matches the brand on the box.
            </li>
            <li>
              <strong>Intertek ETL Directory:</strong> Enter the 7-digit control number on Intertek&apos;s public directory to confirm active compliance.
            </li>
            <li>
              <strong>CSA Group Certification Record:</strong> Search the master contract or file number on CSA Group&apos;s product listing portal.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Note: Law & Recalls",
      content: (
        <>
          <p>
            In Canada, provincial electrical codes (such as the Ontario Electrical Safety Code Rule 2-024 and similar regulations in British Columbia, Alberta, and Quebec) make it illegal to sell or connect unapproved electrical equipment to the electrical grid.
          </p>
          <p>
            Health Canada actively publishes consumer recalls for fire-risk charging bricks and power strips. You can search any brand or model in the official{" "}
            <a
              href={sources.recalls.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary underline font-medium"
            >
              Government of Canada Recalls and Safety Alerts Database
            </a>
            .
          </p>
        </>
      ),
    },
  ],
  sources: Object.values(sources).filter((source) => source !== sources.batteryBuying),
};
