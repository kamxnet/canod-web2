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
    title: "Ontario ESA: hazards from misuse of extension cords and power bars (PDF)",
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
    title: "Health Canada: power-strip recall involving missing overcurrent protection",
    url: "https://recalls-rappels.canada.ca/en/alert-recall/annquan-brand-power-strips-recalled-due-fire-hazard",
  },
} as const;

export const powerBarSurgeProtectorGuide: Guide = {
  slug: "power-bar-or-surge-protector-canada",
  title: "Power Bar vs Surge Protector: Which Do You Actually Need?",
  category: "Safety & standards",
  pillar: "safety",
  description: "They look identical, but only one protects your expensive electronics from power spikes. Here is how to choose the right one and avoid a house fire.",
  date: "2026-09-11",
  reviewed: "2026-09-13",
  scope: "A practical consumer buying and safety guide, not an electrical inspection or guarantee against lightning strikes or utility-grade power anomalies. Follow manufacturer guidelines and consult a licensed electrician for permanent home wiring.",
  methodology: "We reviewed Health Canada electrical-product safety compliance data, Ontario Electrical Safety Authority bulletins, UL Solutions technical standards (UL 1449 and UL 1363), and Canadian Fire Prevention recommendations.",
  related: [
    { title: "Is This Charger Safe to Buy in Canada?", href: "/guides/charger-safety-canada/" },
    { title: "Canadian Electrical Product Safety Checklist", href: "/tools/canadian-electrical-safety-checklist/" },
    { title: "Charger Wattage Calculator", href: "/tools/charger-wattage-calculator/" },
  ],
  sections: [
    {
      id: "the-problem",
      title: "The Problem",
      content: (
        <>
          <p>
            You walk down the aisle at Canadian Tire, Walmart, or Home Depot, and you see rows of long plastic strips with six outlets and a power switch. Some cost $12; others cost $45.
          </p>
          <p>
            From the outside, a basic <strong>power bar</strong> and a true <strong>surge protector</strong> look identical. But plugging your $2,000 gaming PC, MacBook, or OLED TV into a cheap basic power bar provides zero protection against lightning strikes, utility transformer blowouts, or household voltage spikes.
          </p>
        </>
      ),
    },
    {
      id: "quick-answer",
      title: "The 30-Second Answer",
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl border bg-muted/30">
              <p className="font-bold text-base text-foreground mb-1">Basic Power Bar (Power Strip)</p>
              <p className="text-sm text-muted-foreground mb-2"><strong>What it is:</strong> Just an extension cord with multiple plugs.</p>
              <p className="text-sm text-muted-foreground mb-2"><strong>Does it protect your devices?</strong> No. Zero surge defense.</p>
              <p className="text-sm text-foreground"><strong>Use for:</strong> Desk lamps, phone chargers, fans, alarm clocks.</p>
            </div>
            <div className="p-4 rounded-xl border border-primary/40 bg-primary/5">
              <p className="font-bold text-base text-primary mb-1">Surge Protector</p>
              <p className="text-sm text-muted-foreground mb-2"><strong>What it is:</strong> Multiple outlets PLUS sacrificial surge-diverting components (MOVs).</p>
              <p className="text-sm text-muted-foreground mb-2"><strong>Does it protect your devices?</strong> Yes. Absorbs harmful voltage spikes.</p>
              <p className="text-sm text-foreground"><strong>Use for:</strong> TVs, computers, game consoles, monitors, audio systems, routers.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200">
            <p className="font-bold text-sm">Critical Life-Safety Rule:</p>
            <p className="text-xs mt-1">
              <strong>NEVER plug a portable electric space heater, portable air conditioner, microwave, or kettle into any power bar or surge protector.</strong> High-draw heating appliances draw 1,500W continuously, overheating strip terminals and causing house fires. Plug heaters directly into dedicated wall outlets.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "try-this-first",
      title: "Try This First: How to Tell What You Have",
      content: (
        <>
          <p>Check the underside label of the unit you currently own:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Look for a Joule rating:</strong> If the box or back sticker says &ldquo;1,080 Joules&rdquo; or &ldquo;Surge Protective Device (SPD)&rdquo;, it is a surge protector. If it only says &ldquo;Relocatable Power Tap&rdquo; or lists only volts and amps (e.g. 125V, 15A), it is a plain power strip with no protection.
            </li>
            <li>
              <strong>Check the &ldquo;Protected&rdquo; light:</strong> Most real surge protectors have two small LED lights: &ldquo;Grounded&rdquo; and &ldquo;Protected&rdquo;. If the &ldquo;Protected&rdquo; light is off, the internal surge components have absorbed their limit and sacrificed themselves. The outlets still provide electricity, but your equipment is now completely exposed.
            </li>
            <li>
              <strong>Look for Canadian safety marks:</strong> Ensure the bottom has a <strong>cULus</strong>, <strong>CSA</strong>, or <strong>cETLus</strong> stamp. Health Canada regularly issues recalls on cheap marketplace power bars lacking internal circuit breakers.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "warning-signs",
      title: "Surge Protectors Expire: The 3-to-5 Year Rule",
      content: (
        <>
          <p>
            Many people don&apos;t realize that surge protectors have an expiration date.
          </p>
          <p>
            Inside every surge protector are components called <strong>Metal Oxide Varistors (MOVs)</strong>. Every time your refrigerator compressor kicks on, or a nearby lightning storm strikes the power grid, the MOVs absorb a tiny bit of that energy. Over 3 to 5 years, their capacity degrades until they can no longer clamp voltage.
          </p>
          <p>
            <strong>When to replace:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
            <li>If the &ldquo;Protected&rdquo; light turns off or flashes.</li>
            <li>If your home survived a major neighbourhood power outage, transformer blowout, or lightning strike.</li>
            <li>If the unit is older than 5 years.</li>
          </ul>
        </>
      ),
    },
    {
      id: "what-you-need",
      title: "What Joules Rating Do You Actually Need?",
      content: (
        <>
          <p>
            When shopping for a new surge protector, buy based on the value of the equipment you are protecting:
          </p>
          <div className="space-y-3 my-3">
            <div className="p-3 rounded-lg border bg-card">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">Entry Level: 1,000 – 1,500 Joules</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded font-mono">~$20–$30 CAD</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Good for: Desktop computer peripherals, basic Wi-Fi routers, home office lamps, printers, and phone docks.
              </p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">High Protection: 2,000 – 4,000+ Joules</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded font-mono">~$35–$65 CAD</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Good for: 4K OLED TVs, home theater AV receivers, gaming PCs, console setups (PS5 / Xbox Series X), and network storage devices.
              </p>
            </div>
          </div>
          <p className="text-sm">
            <strong>Recommended Brands:</strong> APC (Schneider Electric), Tripp Lite (Eaton), CyberPower, Belkin, and Anker.
          </p>
        </>
      ),
    },
    {
      id: "safety-checklist-link",
      title: "Check Your Whole Setup for Electrical Safety",
      content: (
        <>
          <p>
            Ensure your extension cords, power bricks, and outlet strips comply with Canadian residential safety codes:
          </p>
          <div className="mt-3">
            <Link
              href="/tools/canadian-electrical-safety-checklist/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Open Canadian Electrical Safety Checklist →
            </Link>
          </div>
        </>
      ),
    },
    {
      id: "why-this-happens",
      title: "Why Power Spikes Happen Inside Your House",
      content: (
        <>
          <p>
            Most people think power surges only happen during dramatic lightning storms. In reality, up to 80% of power disturbances are generated <em>inside your own home</em>.
          </p>
          <p>
            Every time high-draw motor loads turn on and off — your refrigerator compressor, air conditioner, furnace blower motor, or washing machine — they introduce small inductive voltage spikes into your home wiring. Over months and years, these micro-spikes weaken delicate semiconductor chips inside computers and TVs until they suddenly stop turning on.
          </p>
        </>
      ),
    },
    {
      id: "technical-details",
      title: "Technical Details: Clamping Voltage Explained",
      content: (
        <>
          <p>
            If you look at detailed specifications for a quality surge protector (under standard <strong>UL 1449</strong>), you may see a specification called <strong>VPR (Voltage Protection Rating)</strong> or <strong>Clamping Voltage</strong>.
          </p>
          <p>
            Canadian household power runs at 120 volts AC. Clamping voltage is the threshold where the surge protector starts diverting extra electricity into the ground wire:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
            <li><strong>330V VPR:</strong> Excellent response. Diverts spikes very early.</li>
            <li><strong>400V – 500V VPR:</strong> Good standard consumer performance.</li>
            <li><strong>600V+ VPR:</strong> Weak protection; allows too much excess voltage to reach your device before reacting.</li>
          </ul>
          <p className="text-xs text-muted-foreground mt-2">
            <em>Rule of thumb: Lower clamping voltage numbers mean tighter, better protection.</em>
          </p>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Note: Daisy Chaining & Insurance",
      content: (
        <>
          <p>
            Under the Canadian Electrical Code and provincial safety rules, &ldquo;daisy chaining&rdquo; (plugging one power bar or extension cord into another) is a direct fire hazard violation.
          </p>
          <p>
            Connecting multiple strips in series increases electrical resistance, causes terminal contacts to overheat under normal loads, and voids manufacturer equipment-protection warranties. If you do not have enough outlets or the cord cannot reach comfortably, have a licensed electrician add a wall outlet rather than stringing power strips together.
          </p>
        </>
      ),
    },
  ],
  sources: Object.values(sources),
};
