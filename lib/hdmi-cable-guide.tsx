import type { Guide } from "./guides";

export const hdmiCableGuide: Guide = {
  slug: "which-hdmi-cable-do-i-need",
  title: "Which HDMI Cable Do I Actually Need? (Don't Overpay)",
  category: "Monitors & docks",
  pillar: "work",
  description: "Cut through HDMI 2.0, HDMI 2.1, 4K, 8K, and 120Hz jargon. Learn which cable your TV, soundbar, or gaming console actually needs, and why you should never spend $60 on an HDMI cable.",
  date: "2026-09-13",
  reviewed: "2026-09-13",
  scope: "Consumer buying guide for HDMI cables connecting TVs, soundbars (eARC), computers, and gaming consoles (PlayStation 5, Xbox Series X, Nintendo Switch).",
  methodology: "We reviewed official HDMI Licensing Administrator (HDMI LA) cable certification specifications, HDMI 2.0b and HDMI 2.1a bandwidth data rates (18 Gbps vs 48 Gbps), and audio return channel standards (ARC vs eARC).",
  related: [
    { title: "Why Won't My Laptop Detect My Monitor?", href: "/guides/laptop-wont-detect-monitor/" },
    { title: "How to Connect Two Monitors to a Laptop (Mac & PC)", href: "/guides/seven-things-usb-c-dock/" },
    { title: "USB-C Dock & Dual Monitor Compatibility Checker", href: "/tools/usb-c-dock-checker/" },
    { title: "Why USB-C Cables Work Differently", href: "/guides/why-usb-c-cables-work-differently/" },
  ],
  sections: [
    {
      id: "the-problem",
      title: "The Problem",
      content: (
        <>
          <p>
            You buy a shiny new 4K TV, gaming monitor, soundbar, or PlayStation 5. The salesperson at the retail store insists you must buy their $70 &ldquo;ultra-pure copper, gold-plated, diamond-shielded HDMI cable&rdquo; or else your picture will look blurry and your sound will lag.
          </p>
          <p>
            Meanwhile, you have three old HDMI cables in a drawer at home. Can you just use those? What is the difference between HDMI 2.0 and HDMI 2.1, and how do you avoid getting ripped off?
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
            <p className="font-semibold mb-1">The Digital Reality Check:</p>
            <p className="text-sm">
              HDMI is a <strong>digital signal</strong> of ones and zeros. A $70 gold-plated cable will NOT make your picture sharper, colors richer, or blacks deeper than a $15 certified cable. The cable either delivers all the bits, or your screen flickers black. There is no middle ground.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-bold text-sm text-foreground">For 90% of TVs &amp; Monitors (HDMI 2.0)</p>
              <p className="text-primary font-semibold text-sm mt-1">Premium High Speed (18 Gbps)</p>
              <p className="text-muted-foreground mt-1">Supports 4K at 60Hz, HDR, Apple TV 4K, Roku, Nintendo Switch, and standard office monitors. Costs <strong>~$10–$14 CAD</strong>.</p>
            </div>
            <div className="p-3 rounded-lg border border-primary/30 bg-primary/5">
              <p className="font-bold text-sm text-foreground">For PS5, Xbox Series X, &amp; 120Hz TVs (HDMI 2.1)</p>
              <p className="text-primary font-semibold text-sm mt-1">Ultra High Speed (48 Gbps)</p>
              <p className="text-muted-foreground mt-1">Supports 4K at 120Hz, VRR (Variable Refresh Rate), and uncompressed Dolby Atmos eARC soundbars. Costs <strong>~$15–$20 CAD</strong>.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "try-this-first",
      title: "Which Cable Matches Your Device?",
      content: (
        <>
          <p>Find your device below to see the exact cable you need:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-sm">
            <li>
              <strong>Nintendo Switch, Cable Box, Blu-ray, or 1080p Monitor:</strong>
              <br />
              <span className="text-muted-foreground">➔ Any HDMI cable in your drawer will work. Even a 10-year-old &ldquo;High Speed&rdquo; cable handles 1080p easily.</span>
            </li>
            <li>
              <strong>Apple TV 4K, Fire TV 4K, Roku 4K, or 4K Computer Monitor:</strong>
              <br />
              <span className="text-muted-foreground">➔ You need a <strong>Premium High Speed HDMI Cable (18 Gbps)</strong>. If you use a cable that is too old, Netflix and Disney+ will drop from 4K HDR down to 1080p SDR or flicker occasionally.</span>
            </li>
            <li>
              <strong>PlayStation 5, Xbox Series X, or 144Hz/240Hz PC Gaming:</strong>
              <br />
              <span className="text-muted-foreground">➔ You need an <strong>Ultra High Speed HDMI 2.1 Cable (48 Gbps)</strong> to unlock 4K gaming at 120 frames per second with VRR. (Note: Both the PS5 and Xbox Series X include a genuine Ultra High Speed cable in the console box — don&apos;t buy a replacement unless yours is lost!).</span>
            </li>
            <li>
              <strong>Sonos / Bose / Samsung Soundbar with eARC:</strong>
              <br />
              <span className="text-muted-foreground">➔ You need an <strong>Ultra High Speed cable with Ethernet</strong> to carry lossless Dolby TrueHD and Dolby Atmos audio without sync delays.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "hologram-check",
      title: "How to Spot a Real Certified Cable (The Hologram)",
      content: (
        <>
          <p>
            Because any cheap factory can print &ldquo;8K HDMI 2.1&rdquo; on plastic packaging, the official HDMI Licensing Administrator created an anti-counterfeit program:
          </p>
          <div className="p-4 rounded-xl border bg-muted/30 my-3">
            <p className="font-semibold text-sm text-foreground">Look for the Official Holographic QR Label:</p>
            <p className="text-xs text-muted-foreground mt-1">
              Legitimate HDMI 2.1 cables carry an official silver holographic sticker on the box labeled <strong>&ldquo;Ultra Certified Cable&rdquo;</strong> with a scannable QR code. You can scan it with the free <em>HDMI Cable Certification</em> smartphone app to verify the manufacturer name before opening the box.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "what-you-need",
      title: "What to Buy: Honest Brands Under $20 CAD",
      content: (
        <>
          <p>Never spend more than $20 CAD for a 6-foot or 10-foot HDMI cable. Buy these proven certified brands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Anker</p>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Anker Ultra High Speed HDMI 2.1</strong> (Certified 48 Gbps). Extremely reliable braided build, official QR tag. ~$18 CAD on Amazon.ca.
              </p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Cable Matters</p>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Cable Matters 48Gbps HDMI 2.1</strong>. Industry standard for home theater and gaming setups. 3-pack available for ~$32 CAD.
              </p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">PrimeCables / Monoprice</p>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Monoprice Certified Premium</strong> or PrimeCables Ultra. Perfect budget workhorses from Canadian warehouses. ~$8–$14 CAD.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "why-this-happens",
      title: "Why 'Gold Plating' Is a Sales Gimmick",
      content: (
        <>
          <p>
            In the 1990s, analog audio cables (RCA and composite video) carried raw electrical waveforms. Lowering corrosion with gold flash could slightly reduce static buzz.
          </p>
          <p>
            In modern digital video, information is sent as microsecond voltage pulses representing binary numbers. The monitor receives binary packets, decrypts them, and renders the image. Gold plating on the outer plug shell does not speed up the electrons, brighten colors, or improve clarity. Spend your money on verified bandwidth certification (18 Gbps or 48 Gbps), not gold decorative plating.
          </p>
        </>
      ),
    },
    {
      id: "technical-details",
      title: "Technical Details: The 'Sparkles' & Blackout Effect",
      content: (
        <>
          <p>
            What actually happens if your HDMI cable is too old or low quality?
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
            <li><strong>Digital &ldquo;Sparkles&rdquo;:</strong> Tiny white or colored pixels dancing randomly across dark scenes on your TV screen. This means bit errors are occurring over high-frequency channels.</li>
            <li><strong>Intermittent Blackouts (Handshake Loss):</strong> The TV screen randomly goes black for 2 to 4 seconds during intense gaming or movie action, then recovers. This indicates the cable cannot sustain the 18 Gbps or 48 Gbps data rate and dropped the HDCP encryption key.</li>
          </ul>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Note: Avoid Big-Box Retail Checkout Traps",
      content: (
        <>
          <p>
            When purchasing a new TV at Canadian electronics retailers, sales staff are heavily incentivized to bundle high-margin cables and accessories. It is common to see 6-foot cables priced between $49.99 and $89.99 CAD at checkout.
          </p>
          <p>
            Politely decline the checkout add-on. Order a certified cable online or pick up an in-house certified cable from Canadian specialty computer retailers (Canada Computers, Memory Express, or PrimeCables in Montreal) for under $15 CAD.
          </p>
        </>
      ),
    },
  ],
  sources: [
    { title: "HDMI Licensing Administrator: Cable Certification Program", url: "https://www.hdmi.org/spec/premiumcable" },
    { title: "HDMI LA: Ultra High Speed HDMI Cable Specification (HDMI 2.1a)", url: "https://www.hdmi.org/spec21sub/ultrahighspeedcable" },
  ],
};
