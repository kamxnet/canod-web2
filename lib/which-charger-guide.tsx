import Link from "next/link";
import type { Guide } from "./guides";

export const whichChargerGuide: Guide = {
  slug: "which-charger-do-i-need",
  title: "Which Charger Do I Need for My Phone and Laptop?",
  category: "Power & cables",
  pillar: "work",
  description: "Cut through confusing wattage numbers (20W, 45W, 65W, 100W). Learn what size charger your phone, tablet, and laptop actually need, and whether a 100W charger can fry your phone.",
  date: "2026-09-13",
  reviewed: "2026-09-13",
  scope: "Practical consumer buying guide for modern USB-C wall chargers powering smartphones, tablets, and laptops. Covers USB Power Delivery standards.",
  methodology: "We tested and cross-referenced official manufacturer charging specifications across Apple, Samsung, Google Pixel, Dell, Lenovo, HP, and USB-IF Power Delivery 3.0/3.1 standards.",
  related: [
    { title: "Charger Wattage Calculator", href: "/tools/charger-wattage-calculator/" },
    { title: "Why Won't My Laptop Charge?", href: "/guides/my-laptop-wont-charge/" },
    { title: "Is This Charger Safe to Buy in Canada?", href: "/guides/charger-safety-canada/" },
    { title: "Why Is My Phone Charging Slowly?", href: "/guides/why-is-my-phone-charging-slowly/" },
  ],
  sections: [
    {
      id: "the-problem",
      title: "The Problem",
      content: (
        <>
          <p>
            When you buy a new smartphone or tablet today, it rarely comes with a charging brick in the box. You walk into an electronics store or search online and find hundreds of chargers: <strong>20W, 30W, 45W, 65W, 100W, and 140W</strong>.
          </p>
          <p>
            Some cost $15, while others cost $90. If you buy one that&apos;s too small, your laptop won&apos;t charge or your phone charges at a snail&apos;s pace. But if you buy a powerful 100W charger, will it fry your iPhone battery?
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
            <p className="font-semibold mb-1">The Golden Rule of USB-C:</p>
            <p className="text-sm">
              <strong>Your device controls the power, not the charger.</strong> A phone will only pull the exact wattage it needs. Plugging a 20W iPhone into a 100W MacBook charger is 100% safe — it will only draw ~20W to 27W and will never get damaged.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2 rounded-lg border bg-card">
              <p className="font-bold text-foreground">Phones</p>
              <p className="text-primary font-semibold text-base mt-1">20W – 30W</p>
              <p className="text-muted-foreground mt-1">iPhone, Galaxy S, Pixel</p>
            </div>
            <div className="p-2 rounded-lg border bg-card">
              <p className="font-bold text-foreground">iPads / Tablets</p>
              <p className="text-primary font-semibold text-base mt-1">30W – 45W</p>
              <p className="text-muted-foreground mt-1">iPad Air, Pro, Tab S9</p>
            </div>
            <div className="p-2 rounded-lg border bg-card">
              <p className="font-bold text-foreground">13&quot;–14&quot; Laptops</p>
              <p className="text-primary font-semibold text-base mt-1">65W</p>
              <p className="text-muted-foreground mt-1">MacBook Air, XPS, ThinkPad</p>
            </div>
            <div className="p-2 rounded-lg border bg-card">
              <p className="font-bold text-foreground">15&quot;–16&quot; Laptops</p>
              <p className="text-primary font-semibold text-base mt-1">100W – 140W</p>
              <p className="text-muted-foreground mt-1">MacBook Pro 16, Dell XPS 16</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "try-this-first",
      title: "The &ldquo;One Charger to Rule Them All&rdquo; Solution",
      content: (
        <>
          <p>
            Instead of carrying three separate charging bricks for your phone, tablet, and laptop, you only need <strong>one dual-port 65W GaN charger</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>When charging your laptop alone:</strong> It pumps a full 65W through Port 1, charging your MacBook Air or PC laptop at maximum speed.
            </li>
            <li>
              <strong>When charging your phone and laptop together:</strong> Modern multi-port chargers automatically split the power (typically 45W for the laptop + 20W for the phone). Both charge simultaneously from one wall outlet.
            </li>
            <li>
              <strong>What is &ldquo;GaN&rdquo;?</strong> GaN stands for Gallium Nitride. It is a modern semiconductor material that runs much cooler than traditional silicon, allowing a 65W or 100W charger to fit in the palm of your hand without overheating.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "multi-port-trap",
      title: "Watch Out: The Multi-Port Power Splitting Trap",
      content: (
        <>
          <p>
            Here is the single most common consumer confusion with multi-port chargers:
          </p>
          <p>
            When a box says <strong>&ldquo;65W 3-Port Charger,&rdquo;</strong> that 65W is the <em>total shared capacity</em> across all ports combined — NOT 65W on every port at the same time.
          </p>
          <div className="p-3 rounded-lg border bg-muted/40 my-3 text-xs space-y-1">
            <p className="font-semibold text-foreground">Example of a typical 65W 2-Port Charger:</p>
            <p>• 1 device plugged in (Port 1): <strong>65W</strong> (Full laptop speed)</p>
            <p>• 2 devices plugged in (Port 1 + Port 2): <strong>45W + 20W</strong> (Laptop + Phone)</p>
          </div>
          <p className="text-sm">
            If you need to charge a 15-inch or 16-inch laptop (which needs 65W–100W continuously) while also charging two phones, you should step up to a <strong>100W or 140W 3-port charger</strong>.
          </p>
        </>
      ),
    },
    {
      id: "what-you-need",
      title: "What to Buy: Recommended Models & Brands",
      content: (
        <>
          <div className="space-y-3 my-3">
            <div className="p-3 rounded-lg border bg-card">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">Best All-Rounder: 65W Dual USB-C GaN Charger</span>
                <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded">~$40–$55 CAD</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Recommended:</strong> Anker Prime 67W, Ugreen Nexode 65W, or Belkin BoostCharge Pro 65W. Powers any phone, iPad, and 13-inch/14-inch laptop. Small enough to fit in a pocket.
              </p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">Best for Power Users: 100W–140W Multi-Port GaN</span>
                <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded">~$75–$110 CAD</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Recommended:</strong> Ugreen Nexode 100W 4-Port or Anker 737 Charger (120W). Powers a 16-inch MacBook Pro or Dell XPS plus two phones simultaneously.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "calculator-tool",
      title: "Calculate Your Household's Charging Needs",
      content: (
        <>
          <p>
            Select your devices in our free interactive calculator to see the exact minimum and recommended charger wattage:
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
      title: "Why Apple & Samsung Stopped Including Chargers",
      content: (
        <>
          <p>
            Starting with the iPhone 12 and Galaxy S21, major phone manufacturers stopped bundling charging cubes in retail boxes. While advertised as an environmental initiative to reduce e-waste, it created massive consumer confusion.
          </p>
          <p>
            Many people continued using old 5W USB-A square cubes with a USB-A to USB-C adapter cable. These 5W cubes take 3.5 to 4 hours to charge a modern smartphone, leading people to believe their new phone has battery problems. Upgrading to an inexpensive 20W–30W USB-C PD brick drops charging time from 4 hours to roughly 70 minutes.
          </p>
        </>
      ),
    },
    {
      id: "technical-details",
      title: "Technical Details: PPS (Programmable Power Supply)",
      content: (
        <>
          <p>
            If you own a recent Samsung phone (Galaxy S20 through S24 Ultra), look for the letters <strong>PPS</strong> on the charger box.
          </p>
          <p>
            PPS allows the phone to micro-adjust voltage in 20-millivolt increments as the battery heats up. Without PPS, a 65W charger will still charge your Samsung phone, but it will cap out at 15W instead of the phone&apos;s full 25W or 45W &ldquo;Super Fast Charging 2.0&rdquo; capability. Most modern Anker and Ugreen GaN chargers now include PPS by default.
          </p>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Note: Certification Marks & Warranty",
      content: (
        <>
          <p>
            Before buying any charger on Amazon.ca or at retail in Canada, flip the charger over to ensure it has a recognized Canadian certification mark (<strong>cULus</strong>, <strong>CSA</strong>, or <strong>cETLus</strong>).
          </p>
          <p>
            Cheap grey-market imports that only feature a CE stamp have not been tested to Canadian electrical safety codes and can void your home insurance coverage in the event of an electrical fire.
          </p>
        </>
      ),
    },
  ],
  sources: [
    { title: "Apple: About Apple USB power adapters", url: "https://support.apple.com/en-ca/102574" },
    { title: "Samsung: How to fast charge your Galaxy phone", url: "https://www.samsung.com/ca/support/mobile-devices/how-to-fast-charge-your-galaxy-phone/" },
    { title: "USB-IF: USB Power Delivery Overview", url: "https://www.usb.org/usb-charger-pd" },
  ],
};
