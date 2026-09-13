import Link from "next/link";
import type { Guide } from "./guides";

export const monitorDetectionGuide: Guide = {
  slug: "laptop-wont-detect-monitor",
  title: "Why Won't My Laptop Detect My Monitor? (Fix 'No Signal')",
  category: "Monitors & docks",
  pillar: "work",
  description: "Your monitor says 'No Signal' or stays completely black when plugged into your laptop. Walk through the 5 fastest checks to fix it on Windows and Mac.",
  date: "2026-09-13",
  reviewed: "2026-09-13",
  scope: "Troubleshooting guide for connecting external computer displays, TVs, and monitors to Windows laptops and MacBooks using HDMI, DisplayPort, USB-C, or docking stations.",
  methodology: "We compiled diagnostic steps across Microsoft Windows Display subsystem, Apple macOS display architecture, VESA DisplayPort Alt Mode specifications, and HDMI Handshake (EDID/HDCP) protocols.",
  related: [
    { title: "USB-C Dock & Dual Monitor Compatibility Checker", href: "/tools/usb-c-dock-checker/" },
    { title: "How to Connect Two Monitors to a Laptop (Mac & PC)", href: "/guides/seven-things-usb-c-dock/" },
    { title: "Which HDMI Cable Do I Actually Need?", href: "/guides/which-hdmi-cable-do-i-need/" },
    { title: "Why USB-C Cables Work Differently", href: "/guides/why-usb-c-cables-work-differently/" },
  ],
  sections: [
    {
      id: "the-problem",
      title: "The Problem",
      content: (
        <>
          <p>
            You plugged your laptop into an external monitor or TV with an HDMI or USB-C cable. Instead of seeing your desktop screen, the monitor flashes blue or black, displays a frustrating floating box that says <strong>&ldquo;No Signal&rdquo;</strong> or <strong>&ldquo;Check Signal Cable,&rdquo;</strong> and then goes to sleep.
          </p>
          <p>
            You unplug and replug the cable, but nothing changes. Your laptop doesn&apos;t make a connection chime, and your settings show only one display.
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
            <p className="font-semibold mb-1">The 3 most common quick fixes:</p>
            <ol className="list-decimal pl-5 text-sm space-y-1 mt-1">
              <li><strong>Check Monitor Input Source:</strong> Use the physical buttons on your monitor to manually select <em>HDMI 1</em> or <em>USB-C</em>. Many monitors do not switch inputs automatically.</li>
              <li><strong>The Secret Windows Shortcut:</strong> Press <kbd className="bg-muted px-1.5 py-0.5 rounded font-mono">Win + P</kbd> on your keyboard and select <strong>Extend</strong> or <strong>Duplicate</strong>.</li>
              <li><strong>The Cable Trap:</strong> If using a USB-C cable, make sure it is a <strong>video cable</strong>. The white charging cable that came with your laptop or phone carries power, but <em>zero video signal</em>.</li>
            </ol>
          </div>
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
              <strong>1. The Physical Monitor Button (Input Selection):</strong> Look on the bottom or back of your monitor for a tiny joystick or buttons. Open the monitor&apos;s on-screen menu and verify the input matches your cable (e.g. if plugged into HDMI 2, switch from HDMI 1 to HDMI 2).
            </li>
            <li>
              <strong>2. Unplug Monitor Power from the Wall for 30 Seconds:</strong> Modern monitors run microcontrollers that can freeze when establishing a digital handshake (HDCP). Unplug the monitor&apos;s power cable from the wall outlet, wait 30 seconds to drain internal capacitors, and plug it back in.
            </li>
            <li>
              <strong>3. Force Windows to Detect the Screen:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                <li>Press <kbd className="bg-muted px-1 py-0.5 rounded font-mono">Win + Ctrl + Shift + B</kbd> to restart your graphics driver (your screen will flicker and beep).</li>
                <li>Go to <strong>Settings ➔ System ➔ Display</strong> and click <strong>Detect</strong> under Multiple Displays.</li>
              </ul>
            </li>
            <li>
              <strong>4. Force a Mac to Detect the Screen:</strong> Open <strong>System Settings ➔ Displays</strong>. Hold down the <kbd className="bg-muted px-1 py-0.5 rounded font-mono">Option</kbd> key on your keyboard. A hidden button labeled <strong>&ldquo;Detect Displays&rdquo;</strong> will appear in the bottom right corner. Click it.
            </li>
            <li>
              <strong>5. Check if Your Laptop&apos;s USB-C Port Actually Supports Video:</strong> On Windows laptops, not all USB-C ports can send video. Look closely at the icon next to the port:
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                <li><strong>Lightning bolt icon:</strong> Thunderbolt port. Supports video, data, and charging.</li>
                <li><strong>&ldquo;D&rdquo; icon (DisplayPort):</strong> DP Alt Mode port. Supports video.</li>
                <li><strong>USB icon or battery icon only:</strong> Data or charging only — cannot output video to a monitor.</li>
              </ul>
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "the-cable-trap",
      title: "The #1 Trap: White Charging Cables Don't Carry Video",
      content: (
        <>
          <p>
            This catches thousands of people every week:
          </p>
          <p>
            You buy a monitor that has a USB-C input port. You take the white USB-C cable that came in your Apple MacBook box or iPad box, plug it between the laptop and the monitor, and the monitor says &ldquo;No Signal.&rdquo;
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 my-2">
            <p className="font-semibold text-sm">Why it doesn&apos;t work:</p>
            <p className="text-xs mt-1">
              The charging cable included in laptop and phone boxes only contains power wires and USB 2.0 data wires (480 Mbps). It physically lacks the high-speed wiring pairs required for video. To connect a monitor over USB-C, you must buy a dedicated <strong>USB-C Video Cable (USB4, Thunderbolt 4, or USB 3.2 Gen 2 rated for 10Gbps–40Gbps)</strong>.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "what-you-need",
      title: "What You May Need: Reliable Video Cables",
      content: (
        <>
          <p>If your cable or adapter is broken or missing video capabilities:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">USB-C to HDMI / DisplayPort Cable</p>
              <p className="text-xs text-muted-foreground mt-1">
                If your monitor has HDMI or DisplayPort, use a direct <strong>USB-C to HDMI 2.1</strong> or <strong>USB-C to DP 1.4</strong> cable (Cable Matters, Anker, or Uni). Avoid chaining cheap plastic dongles.
              </p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Certified HDMI 2.0 / 2.1 Cable</p>
              <p className="text-xs text-muted-foreground mt-1">
                For standard HDMI connections, buy an <strong>Ultra High Speed HDMI Certified</strong> cable ($12–$18 CAD). Eliminates screen flickering and audio dropouts.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "dock-checker-link",
      title: "Planning to Connect Two Monitors?",
      content: (
        <>
          <p>
            If you are trying to connect two monitors to a single laptop or docking station, check your laptop compatibility first (especially on MacBooks, which don&apos;t support two extended screens over standard USB-C hubs):
          </p>
          <div className="mt-3">
            <Link
              href="/tools/usb-c-dock-checker/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Open USB-C Dock &amp; Dual Monitor Checker →
            </Link>
          </div>
        </>
      ),
    },
    {
      id: "why-this-happens",
      title: "Why 'No Signal' Happens: The Digital Handshake",
      content: (
        <>
          <p>
            When you plug in an HDMI or DisplayPort cable, the laptop and monitor exchange digital metadata called <strong>EDID (Extended Display Identification Data)</strong>. The monitor tells the laptop: <em>&ldquo;I am a 4K 60Hz monitor made by LG, and here are my supported resolutions.&rdquo;</em>
          </p>
          <p>
            If the cable is slightly loose, damaged, or poor quality, that handshake fails. Rather than showing a distorted picture, the monitor immediately shuts off the panel to protect its circuits and displays &ldquo;No Signal.&rdquo;
          </p>
        </>
      ),
    },
    {
      id: "technical-details",
      title: "Technical Details: Refresh Rate Mismatch",
      content: (
        <>
          <p>
            If you recently connected your laptop to a 144Hz or 240Hz gaming monitor, the laptop may try to output an unsupported refresh rate over a basic HDMI 1.4 port.
          </p>
          <p>
            To fix this: Open Windows Display Settings ➔ <em>Advanced Display</em>. Lower the refresh rate manually to <strong>60Hz</strong>. Once the image appears reliably, you can test higher refresh rates (120Hz or 144Hz) depending on your cable&apos;s bandwidth rating.
          </p>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Note: Avoid Overpriced Retail Cables",
      content: (
        <>
          <p>
            Big-box electronics stores in Canada frequently mark up standard HDMI and monitor cables by 500% to 1,000% (selling basic 6-foot cables for $50 to $70 CAD at the checkout counter).
          </p>
          <p>
            Digital signals do not benefit from &ldquo;gold-plated&rdquo; luxury snake oil. A $15 CAD certified cable from Memory Express, Canada Computers, or PrimeCables performs identically to a $60 branded cable over distances under 10 feet.
          </p>
        </>
      ),
    },
  ],
  sources: [
    { title: "Microsoft: Troubleshoot external monitor connections in Windows", url: "https://support.microsoft.com/en-us/windows/troubleshoot-external-monitor-connections-in-windows-5c3e34f8-f97fb37a-4299-b567-3a13fbc323d6" },
    { title: "Apple: If your external display is dark or low resolution", url: "https://support.apple.com/en-ca/102390" },
    { title: "HDMI Licensing Administrator: Verification of HDMI cables", url: "https://www.hdmi.org/spec/premiumcable" },
  ],
};
