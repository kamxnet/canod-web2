import Link from "next/link";
import type { Guide } from "./guides";
import { dockSources as sources, dockSourceCheckDate, dockToolPath } from "./dock-sources";

export const dockGuide: Guide = {
  slug: "seven-things-usb-c-dock",
  related: [
    { title: "Diagnose a laptop that won't charge over USB-C", href: "/guides/my-laptop-wont-charge/" },
    { title: "Why does one USB-C cable work while another does not?", href: "/guides/why-usb-c-cables-work-differently/" },
    { title: "USB-C Dock & Dual Monitor Compatibility Checker", href: dockToolPath },
  ],
  title: "How to Connect Two Monitors to a Laptop (Mac & PC)",
  category: "Monitors & Docks",
  pillar: "work",
  description:
    "Connect two external screens with one cable. How to get independent extended desktops on Mac and Windows without duplicate mirrored screens.",
  date: dockSourceCheckDate,
  sections: [
    {
      id: "problem",
      title: "The Problem",
      content: (
        <>
          <p>
            You plug two monitors into a USB-C hub or dock expecting two separate screens, but both monitors display the exact same duplicate image. Or one monitor works while the second remains black.
          </p>
          <p>
            A hub having two HDMI or DisplayPort sockets does not mean your computer can send two different video signals through one cable. Macs and Windows PCs handle multi-monitor video completely differently.
          </p>
        </>
      ),
    },
    {
      id: "answer",
      title: "The 30-Second Answer",
      content: (
        <>
          <p>
            <strong>If you have a Windows laptop:</strong> Any standard dual-display USB-C dock will work. Windows natively supports extending two different screens over one USB-C cable (using Multi-Stream Transport), provided your laptop port supports video output.
          </p>
          <p>
            <strong>If you have a Mac:</strong> Base Apple Silicon laptops (MacBook Air M1, M2, or M3, and base 13&quot;/14&quot; MacBook Pro) natively support only <em>one</em> external monitor. Plugging into a standard hub will only mirror the second screen. To run two independent extended monitors on a MacBook Air, you must use a dock equipped with <strong>DisplayLink</strong> software, or use two separate video cables on a MacBook Pro with an M-Pro or M-Max chip.
          </p>
        </>
      ),
    },
    {
      id: "try-first",
      title: "Try This First",
      content: (
        <ol>
          <li>
            <strong>Check your display settings:</strong> On Windows, press <kbd>Windows Key + P</kbd> and select <strong>Extend</strong> (not Duplicate). On Mac, open <strong>System Settings &gt; Displays</strong> and ensure the secondary screen is set to &ldquo;Extended Display&rdquo;.
          </li>
          <li>
            <strong>Test each monitor individually:</strong> Plug Monitor 1 directly into your laptop. Then unplug it and test Monitor 2. This confirms both screens and cables work before testing the dock.
          </li>
          <li>
            <strong>Plug in the laptop charger:</strong> Running dual 4K screens consumes significant graphics power. If your dock does not supply at least 65W to your laptop, connect your laptop&apos;s original wall charger.
          </li>
        </ol>
      ),
    },
    {
      id: "still-not-working",
      title: "Still Not Working?",
      content: (
        <ul>
          <li>
            <strong>Both screens show the same picture on a Mac:</strong> Your dock uses standard PC Multi-Stream Transport (MST), which macOS does not support over USB-C. You need a dock with DisplayLink technology or a certified Thunderbolt 4 dock on an M-Pro/Max Mac.
          </li>
          <li>
            <strong>One screen flickers or is stuck at 30 Hz:</strong> Your laptop&apos;s USB-C port or dock does not have enough bandwidth for dual 4K at 60 Hz. Lower the resolution to 1080p or 1440p in display settings to test if 60 Hz returns.
          </li>
          <li>
            <strong>Second screen says &ldquo;No Signal&rdquo;:</strong> Check that the input source on the monitor itself is set to HDMI 1 or DisplayPort, and ensure the cable between the dock and monitor is a high-speed video cable.
          </li>
        </ul>
      ),
    },
    {
      id: "what-you-need",
      title: "What You May Need",
      content: (
        <ul>
          <li>
            <strong>For MacBook Air (dual screens):</strong> A <em>DisplayLink-certified docking station</em> (or a DisplayLink USB-to-HDMI adapter) plus the free DisplayLink Manager app for macOS.
          </li>
          <li>
            <strong>For MacBook Pro (M-Pro or M-Max):</strong> A true <em>Thunderbolt 4 dock</em> (e.g. CalDigit, OWC, Kensington) that carries two native Thunderbolt display channels.
          </li>
          <li>
            <strong>For Windows Laptops:</strong> A standard <em>USB-C dual-display hub</em> with two HDMI 2.0 or DisplayPort outputs.
          </li>
          <li>
            <strong>Cables:</strong> Certified HDMI 2.0/2.1 or DisplayPort 1.4 cables. Avoid using passive VGA or DVI converters.
          </li>
        </ul>
      ),
    },
    {
      id: "optional-tool",
      title: "Check Your Laptop (Free Tool)",
      content: (
        <p>
          Not sure what your laptop supports? Run your setup through our free{" "}
          <Link href={dockToolPath} style={{ fontWeight: "700", textDecoration: "underline" }}>
            USB-C Dock &amp; Dual Monitor Compatibility Checker
          </Link>
          . Select your laptop model to instantly see whether you need a standard dock, a Thunderbolt 4 dock, or DisplayLink software.
        </p>
      ),
    },
    {
      id: "why-this-happens",
      title: "Why This Happens",
      content: (
        <>
          <p>
            Sending two video feeds down a single small cable requires the computer and the dock to divide high-speed data lanes.
          </p>
          <p>
            Windows PCs support an industry standard called DisplayPort Multi-Stream Transport (MST), which daisy-chains multiple display signals through one connection. Apple chose not to support MST over standard USB-C in macOS. Instead, macOS requires each native monitor to have its own independent Thunderbolt pipeline—or uses software compression (DisplayLink) to send video as standard USB data.
          </p>
        </>
      ),
    },
    {
      id: "technical-details",
      title: "Technical Details: DP Alt Mode, MST, and DisplayLink",
      content: (
        <>
          <p>
            <strong>DisplayPort Alt Mode (DP Alt Mode):</strong> Uses the physical USB-C pins to transmit native DisplayPort video packets directly from your laptop&apos;s graphics card. High performance, zero lag.
          </p>
          <p>
            <strong>Multi-Stream Transport (MST):</strong> A DisplayPort feature that splits one video signal into multiple independent streams. Supported on Windows and Linux; not supported on macOS over USB-C.
          </p>
          <p>
            <strong>DisplayLink:</strong> A proprietary USB graphics chip and driver that compresses your screen image on the CPU and sends it over ordinary USB data lanes. It bypasses Apple&apos;s single-display limit, but requires &ldquo;Screen Recording&rdquo; permissions on macOS and is not ideal for competitive fast-motion gaming.
          </p>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Purchase Note",
      content: (
        <p>
          When buying docks online in Canada, verify whether the seller accepts open-box returns without a 15% restocking fee. Compatibility quirks with dual displays and workplace-managed laptops are common, so choose retailers with clear return policies. Ensure any mains-powered desktop dock includes a power brick with an accredited Canadian safety mark (cUL, CSA, or cETL).
        </p>
      ),
    },
  ],
  sources: Object.values(sources),
};
