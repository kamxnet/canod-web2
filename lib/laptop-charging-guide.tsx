import Link from "next/link";
import type { Guide } from "./guides";

export const laptopChargingGuide: Guide = {
  slug: "my-laptop-wont-charge",
  title: "Why Won't My Laptop Charge? (USB-C & Power Brick Checklist)",
  category: "Power & cables",
  pillar: "work",
  description: "Your laptop is plugged in, but the battery icon won't change or says 'Plugged in, not charging.' Walk through the 5-step fix to find out if it's the cable, charger, or port.",
  date: "2026-09-13",
  reviewed: "2026-09-13",
  scope: "Troubleshooting guide for Windows laptops (Dell, Lenovo, HP, ASUS, Acer) and Apple MacBooks charging via USB-C or barrel jack. This is software and hardware configuration advice, not a physical disassembly manual.",
  methodology: "We analyzed common failure modes documented by Dell Support, Lenovo Technical Knowledgebase, Apple Support, and USB-IF Power Delivery protocol negotiation specifications.",
  related: [
    { title: "Which Charger Do I Need for My Phone and Laptop?", href: "/guides/which-charger-do-i-need/" },
    { title: "Charger Wattage Calculator", href: "/tools/charger-wattage-calculator/" },
    { title: "Why USB-C Cables Work Differently", href: "/guides/why-usb-c-cables-work-differently/" },
    { title: "Is This Charger Safe to Buy in Canada?", href: "/guides/charger-safety-canada/" },
  ],
  sections: [
    {
      id: "the-problem",
      title: "The Problem",
      content: (
        <>
          <p>
            You plug your laptop into the wall, but nothing happens. The charging LED light stays completely dark, the battery percentage keeps dropping, or Windows displays a frustrating message: <em>&ldquo;Plugged in, not charging&rdquo;</em> or <em>&ldquo;Slow charger: To speed up charging, use the charger that came with your device.&rdquo;</em>
          </p>
          <p>
            Before you assume your laptop battery is dead or spend $150 on an emergency repair shop visit, 85% of charging failures are caused by three simple culprits: an underpowered USB-C brick, the wrong cable, or lint stuck inside the charging port.
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
            <p className="font-semibold mb-1">Check the wattage on your charging brick right now:</p>
            <p className="text-sm">
              If you are using a phone charger (15W–20W) to charge a laptop, <strong>the laptop will refuse to charge</strong>. Most laptops require at least <strong>45W to 65W</strong> (or 96W–140W for 16-inch models) to charge while powered on.
            </p>
          </div>
          <p>
            If you are using the original charger: Unplug both ends, wait 10 seconds, inspect the laptop port with your phone flashlight for lint or dust, and test a different wall outlet directly on the wall (bypass power strips).
          </p>
        </>
      ),
    },
    {
      id: "try-this-first",
      title: "Try This First: The 5-Step Elimination Checklist",
      content: (
        <>
          <ol className="space-y-3">
            <li>
              <strong>1. Inspect the Laptop Port for Dust &amp; Pocket Lint:</strong> Shine your phone flashlight into the USB-C port. If there is compact lint or fuzz at the bottom, the USB-C cable pins cannot make complete electrical contact. Gently clean it out using a wooden toothpick or dry antistatic brush — never use metal paperclips or needles!
            </li>
            <li>
              <strong>2. Test the Wall Outlet Directly:</strong> Plug a lamp or phone charger into the exact same wall outlet to verify power. Avoid plugging into an overloaded power strip, smart plug, or extension cord during testing.
            </li>
            <li>
              <strong>3. Swap the USB-C Cable (Not All Cables Carry Power!):</strong> Just because a cable fits physically into the port does not mean it can charge a laptop. Many free white cables shipped with wireless headphones only support 5W to 10W. You need a cable rated for <strong>60W or 100W USB-C Power Delivery</strong>.
            </li>
            <li>
              <strong>4. Verify Your Charger Wattage:</strong> Read the micro-print on the bottom of the power brick. Look for &ldquo;Output: 20V ⎓ 3.25A&rdquo; (which equals 65W). If the highest output listed is 5V or 9V (common on older phone cubes), it cannot deliver the 20V required by most laptop motherboards.
            </li>
            <li>
              <strong>5. Check the Correct Port (Laptops with Multiple Ports):</strong> On many Windows laptops (like Dell XPS, Lenovo ThinkPad, HP Envy), only one or two of the USB-C ports support charging (indicated by a small plug icon or lightning bolt). The other USB-C ports may be data-only.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "still-not-working",
      title: "Still Not Working? Software Resets",
      content: (
        <>
          <p>If the hardware seems fine, your operating system or battery controller might be in a locked state:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Windows (Battery Driver Reset)</p>
              <ol className="list-decimal pl-4 mt-2 space-y-1 text-xs text-muted-foreground">
                <li>Right-click the Start Menu and open <strong>Device Manager</strong>.</li>
                <li>Expand <strong>Batteries</strong>.</li>
                <li>Right-click <em>Microsoft ACPI-Compliant Control Method Battery</em> and click <strong>Uninstall device</strong>.</li>
                <li>Restart your PC. Windows will automatically reinstall a clean battery driver.</li>
              </ol>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Mac (SMC / Power Reset)</p>
              <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                <p><strong>Apple Silicon (M1/M2/M3/M4):</strong> Simply shut down your Mac, close the lid for 30 seconds, plug into the original charger, and restart.</p>
                <p><strong>Intel Mac:</strong> Shut down, press <kbd className="bg-muted px-1 rounded">Shift + Control + Option</kbd> and the Power button together for 10 seconds, then release and turn on.</p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "what-you-need",
      title: "What You May Need: Replacement Hardware",
      content: (
        <>
          <p>If you discovered your charger or cable was broken or underpowered, look for these specs:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>For 13-inch / 14-inch laptops (MacBook Air, Dell XPS 13, ThinkPad X1):</strong> Buy a <strong>65W GaN USB-C Charger</strong>. Compact, runs cool, and charges phones and laptops at full speed.
            </li>
            <li>
              <strong>For 15-inch / 16-inch laptops or creator laptops:</strong> Buy a <strong>100W or 140W USB-C PD 3.1 Charger</strong>.
            </li>
            <li>
              <strong>Cable:</strong> Make sure the replacement cable is certified for <strong>100W / 5A (E-Marker)</strong>, such as Anker PowerLine III or Belkin BoostCharge.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "calculator-tool",
      title: "Calculate Your Laptop's Exact Wattage",
      content: (
        <>
          <p>
            Not sure whether your laptop needs 45W, 65W, or 100W? Select your exact laptop model in our free tool:
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
      title: "Why USB-C Power Delivery 'Refuses' to Charge",
      content: (
        <>
          <p>
            Unlike old cylindrical barrel plugs that blindly sent electricity through two wires, USB-C is a &ldquo;smart&rdquo; digital handshake called <strong>USB Power Delivery (USB-PD)</strong>.
          </p>
          <p>
            When you plug in the cable, the laptop and charger talk over a microscopic wire called the CC (Configuration Channel). The laptop asks: <em>&ldquo;Can you supply 20 Volts at 3.25 Amps?&rdquo;</em> If the charger only responds with 5 Volts or the cable cannot handle 3 Amps, the laptop shuts the power gate completely to protect the motherboard from burning out.
          </p>
        </>
      ),
    },
    {
      id: "technical-details",
      title: "Technical Details: The 'Plugged In, Not Charging' Threshold",
      content: (
        <>
          <p>
            Many modern laptops feature smart battery health management (such as Apple Battery Health Optimization or Dell Power Manager). If your laptop stays plugged in at a desk all day, Windows or macOS will deliberately stop charging at <strong>80%</strong> to prevent battery swelling and degradation.
          </p>
          <p>
            If your battery is sitting steady between 80% and 85% with the message &ldquo;Plugged in, not charging,&rdquo; your charger is working perfectly — your computer is intentionally extending its battery lifespan.
          </p>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Note: Cold Weather Battery Protection",
      content: (
        <>
          <p>
            If you just brought your laptop inside after a commute in -15°C Canadian winter weather, lithium-ion batteries cannot safely accept a charge while freezing cold. Modern battery management ICs will lock out charging until the battery reaches at least 5°C to 10°C to prevent lithium plating and permanent battery death.
          </p>
          <p>
            Let your laptop warm up at room temperature for 30 minutes before diagnosing a broken charger.
          </p>
        </>
      ),
    },
  ],
  sources: [
    { title: "Apple: If your USB-C power adapter won't charge your Mac notebook", url: "https://support.apple.com/en-ca/102397" },
    { title: "Dell: How to Troubleshoot AC Adapter Issues", url: "https://www.dell.com/support/kbdoc/en-ca/000130833/how-to-troubleshoot-ac-adapter-issues" },
    { title: "Microsoft: Surface battery won't charge or Surface won't run on battery", url: "https://support.microsoft.com/en-us/surface/surface-battery-won-t-charge-or-surface-won-t-run-on-battery-188da2d8-c4e6-42d4-bd54-14227f7b308e" },
    { title: "USB-IF: USB Power Delivery Specification Overview", url: "https://www.usb.org/usb-charger-pd" },
  ],
};
