import Link from "next/link";
import type { Guide } from "./guides";

export const travelChargersGuide: Guide = {
  slug: "travel-chargers-adapters-converters",
  title: "Travel Chargers, Adapters, and Converters: What Canadians Actually Need",
  category: "Work & travel",
  pillar: "travel",
  description: "Going abroad? Learn the difference between a plug adapter and a voltage converter, which countries work fine with your existing charger, and which ones need extra equipment.",
  date: "2026-09-13",
  reviewed: "2026-09-13",
  scope: "Consumer travel guide for Canadians travelling internationally with laptops, phones, tablets, and small appliances. Does not cover high-power appliances (hair dryers, curling irons), industrial equipment, or medical devices.",
  methodology: "We cross-referenced IEC 60083 international outlet standards, country electrical specification databases, and USB-IF Power Delivery 3.0 universal voltage documentation.",
  related: [
    { title: "Which Charger Do I Need for My Phone and Laptop?", href: "/guides/which-charger-do-i-need/" },
    { title: "Is This Charger Safe to Buy in Canada?", href: "/guides/charger-safety-canada/" },
    { title: "Charger Wattage Calculator", href: "/tools/charger-wattage-calculator/" },
  ],
  sections: [
    {
      id: "the-problem",
      title: "The Problem",
      content: (
        <>
          <p>
            You are packing your bag for a trip to the UK, France, Japan, or Australia and notice your Canadian plug has two flat parallel blades (Type A). The hotels abroad have round-hole or three-pronged recessed sockets. You search online and see products called &ldquo;adapters,&rdquo; &ldquo;converters,&rdquo; and &ldquo;transformers&rdquo; — all promising to save your devices.
          </p>
          <p>
            Which do you actually need? Could the wrong one destroy your MacBook?
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
            <p className="font-semibold mb-1">Great news for most modern travellers:</p>
            <p className="text-sm">
              Almost all modern smartphone chargers, laptop chargers, and GaN bricks are already <strong>universal voltage (100V–240V)</strong>. Look at the fine print on your charging brick: if it says <code className="text-xs bg-emerald-200/50 px-1 rounded">Input: 100–240V ~ 50/60Hz</code>, you only need a simple and cheap <strong>plug adapter</strong> (changes the blade shape) — not a converter.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200">
            <p className="font-semibold mb-1 text-sm">Only buy a voltage converter if:</p>
            <p className="text-xs">
              Your device says <code>Input: 120V ONLY</code> (such as older North American hair dryers, certain electric shavers, or cheap kitchen appliances). Using a 120V-only device on 220V will immediately burn it out.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "three-things",
      title: "The 3 Products Explained in Plain English",
      content: (
        <>
          <div className="space-y-3 my-3">
            <div className="p-4 rounded-xl border bg-card">
              <div className="flex justify-between items-start">
                <p className="font-bold text-sm text-foreground">1. Plug Adapter (Travel Adapter)</p>
                <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded">~$10–$25 CAD</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>What it does:</strong> Changes the physical blade shape so your Canadian plug fits into foreign wall sockets. Does NOT change voltage or wattage.
              </p>
              <p className="text-xs text-primary mt-1 font-semibold">You need this for every international trip if carrying original Canadian-plug chargers.</p>
            </div>
            <div className="p-4 rounded-xl border bg-card">
              <div className="flex justify-between items-start">
                <p className="font-bold text-sm text-foreground">2. Voltage Converter (Step-Down Transformer)</p>
                <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded">~$30–$80 CAD</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>What it does:</strong> Converts 220–240V (Europe/Asia/UK) down to 120V for devices that cannot accept higher voltage.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Who needs this:</strong> Only people bringing older North American appliances rated 120V only (older hair dryers, certain electric shavers or beard trimmers).
              </p>
            </div>
            <div className="p-4 rounded-xl border bg-card">
              <div className="flex justify-between items-start">
                <p className="font-bold text-sm text-foreground">3. The Smart Solution: Universal GaN Charger</p>
                <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded">~$45–$70 CAD</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>The best travel investment:</strong> A dual-port 65W GaN USB-C charger with swappable international plug heads (or foldable blade) eliminates the need to carry adapters at all. Works in Canada, USA, UK, Europe, Australia, and Japan with the same brick.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "country-guide",
      title: "Quick Country Guide: What Canadian Travellers Need",
      content: (
        <>
          <div className="overflow-x-auto my-3">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b bg-muted/50 text-left">
                  <th className="p-2 font-semibold">Destination</th>
                  <th className="p-2 font-semibold">Voltage</th>
                  <th className="p-2 font-semibold">Plug Type</th>
                  <th className="p-2 font-semibold">What You Need</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-2 font-medium">USA / Mexico</td>
                  <td className="p-2">120V</td>
                  <td className="p-2">Type A / B (same as Canada)</td>
                  <td className="p-2 text-emerald-600 dark:text-emerald-400 font-semibold">Nothing — plug works directly</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">UK / Ireland</td>
                  <td className="p-2">230V</td>
                  <td className="p-2">Type G (3-prong rectangular)</td>
                  <td className="p-2">Type G adapter (for universal chargers)</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Europe (France, Germany, Italy, Spain)</td>
                  <td className="p-2">230V</td>
                  <td className="p-2">Type C / E / F (round pins)</td>
                  <td className="p-2">Type C / E adapter</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Japan</td>
                  <td className="p-2">100V</td>
                  <td className="p-2">Type A (same blade shape)</td>
                  <td className="p-2 text-amber-600 dark:text-amber-400">No adapter needed, but voltage is slightly lower — universal chargers handle this fine</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Australia / New Zealand</td>
                  <td className="p-2">230V</td>
                  <td className="p-2">Type I (angled flat pins)</td>
                  <td className="p-2">Type I adapter</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">India</td>
                  <td className="p-2">230V</td>
                  <td className="p-2">Type D / C (round, varies by region)</td>
                  <td className="p-2">Universal travel adapter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "what-you-need",
      title: "The Ideal Travel Charging Kit for Canadians",
      content: (
        <>
          <p>For a typical 2-week international trip carrying a laptop and phone, pack:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>1× Universal GaN 65W Dual-Port Charger</strong> with built-in international plugs or an adapter set.
              <br />
              <span className="text-xs text-muted-foreground">Try: Anker 735 (GaN Prime, 65W), Ugreen 65W with international plug heads, or Satechi 108W Travel Charger.</span>
            </li>
            <li>
              <strong>1× Universal Travel Adapter Kit (150-country compatible)</strong> if keeping your existing Canadian charger instead of buying a new one.
              <br />
              <span className="text-xs text-muted-foreground">Try: Epicka Universal Adapter or NEWVANGA International All-in-One Adapter. Avoid cheap no-brand adapters — loose contacts cause arcing.</span>
            </li>
            <li>
              <strong>1× High-quality 100W USB-C Cable</strong> to charge your laptop and phone from the same brick.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "calculator-link",
      title: "Confirm Your Charger is Universal Voltage",
      content: (
        <>
          <p>
            Check the exact wattage rating of your phone and laptop chargers to confirm compatibility with any country&apos;s power grid:
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
      title: "Why Modern USB-C Chargers Work Everywhere",
      content: (
        <>
          <p>
            Unlike appliances with electric motors (which are tuned to specific frequencies), USB-C GaN chargers contain an internal <strong>switch-mode power supply (SMPS)</strong> that electronically converts any input voltage — whether it&apos;s 100V AC from Japan or 240V AC from Australia — into the stable 5V, 9V, or 20V DC output your device needs.
          </p>
          <p>
            This is why 100–240V universal chargers are considered the single biggest quality-of-life improvement for international travellers in the past decade.
          </p>
        </>
      ),
    },
    {
      id: "technical-details",
      title: "Technical Details: When Plug Adapters Alone Are Dangerous",
      content: (
        <>
          <p>
            Avoid universal adapters with too many outlets or built-in surge protection strips. When combined with a hotel or hostel outlet with loose contacts, daisy-chaining multiple devices through a cheap universal adapter creates overheating risks that have caused fires in hotel rooms.
          </p>
          <p>
            The safest international setup is one quality adapter per outlet, or ideally a single multi-port GaN brick that handles all your devices from a single port.
          </p>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Note: CATSA and Airport Security",
      content: (
        <>
          <p>
            Travel adapters and plug converters raise zero security concerns with Canadian Air Transport Security Authority (CATSA) screening or international customs. They are not restricted items and can be packed in carry-on bags without declaration.
          </p>
          <p>
            However, if you are carrying a high-capacity portable power bank (over 27,000 mAh / 100Wh), Transport Canada requires it in carry-on luggage only — never in checked baggage. Most consumer power banks under 20,000 mAh are well within permitted limits.
          </p>
        </>
      ),
    },
  ],
  sources: [
    { title: "Health Canada: Buying electrical products while travelling abroad", url: "https://www.canada.ca/en/health-canada/services/home-safety/electrical-products.html" },
    { title: "Transport Canada: Lithium batteries in carry-on and checked baggage", url: "https://tc.canada.ca/en/dangerous-goods/information-travellers/lithium-batteries-carry-checked-baggage" },
    { title: "USB-IF: USB Power Delivery standard for universal voltage", url: "https://www.usb.org/usb-charger-pd" },
  ],
};
