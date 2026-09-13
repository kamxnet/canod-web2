import Link from "next/link";
import type { Guide } from "./guides";

export const ssdVsHddGuide: Guide = {
  slug: "external-ssd-vs-hard-drive",
  title: "External SSD vs Hard Drive: Which Should You Buy?",
  category: "Store & Protect",
  pillar: "storage",
  description: "They both store your files, but one is 8x faster and won't shatter if you drop it. Learn whether a portable Solid State Drive or traditional mechanical Hard Drive fits your budget.",
  date: "2026-09-13",
  reviewed: "2026-09-13",
  scope: "Consumer storage comparison for backing up laptops (Mac and PC), storing photo/video collections, and expanding gaming console storage (PS5, Xbox).",
  methodology: "We analyzed real-world file transfer benchmarks across sequential 100GB photo/video workloads, shock/drop resilience data, and historical drive reliability metrics from Backblaze Drive Stats.",
  related: [
    { title: "External Hard Drive, Cloud or NAS: Which Do You Need?", href: "/guides/choosing-a-home-nas/" },
    { title: "How to Back Up Photos Without Paying for Cloud", href: "/guides/backup-photos-without-cloud/" },
    { title: "How Much Backup Storage Do I Actually Need?", href: "/guides/how-much-backup-storage/" },
  ],
  sections: [
    {
      id: "the-problem",
      title: "The Problem",
      content: (
        <>
          <p>
            You need extra storage to back up your computer or empty out your phone&apos;s photo library. You look online and see two portable rectangles that look nearly identical:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm my-2">
            <li>An <strong>External Hard Drive (HDD)</strong> offering <strong>2 Terabytes for $79 CAD</strong>.</li>
            <li>An <strong>External Solid State Drive (SSD)</strong> offering <strong>2 Terabytes for $189 CAD</strong>.</li>
          </ul>
          <p>
            Why is the SSD more than double the price for the exact same amount of storage? Is it a marketing gimmick, or is it actually worth the extra money?
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
            <p className="font-semibold mb-1">Buy an External SSD if:</p>
            <p className="text-sm">
              You travel, carry it in a backpack, or plug it into a laptop frequently. SSDs have <strong>zero moving parts</strong> (they survive drops on hardwood floors) and are <strong>8 to 10 times faster</strong>. Copying 50GB of family photos takes under 1 minute on an SSD vs 10 to 15 minutes on a hard drive.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-muted/40 border text-foreground">
            <p className="font-semibold mb-1">Buy an External Hard Drive (HDD) ONLY if:</p>
            <p className="text-sm">
              You need massive capacity (4TB, 8TB, or 16TB) on a tight budget for &ldquo;cold&rdquo; archives that sit motionless on a desk at home and rarely get moved.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "side-by-side",
      title: "Side-by-Side Comparison: Real-World Differences",
      content: (
        <>
          <div className="overflow-x-auto my-3">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b bg-muted/50 text-left">
                  <th className="p-2 font-semibold">Feature</th>
                  <th className="p-2 font-semibold text-primary">External SSD</th>
                  <th className="p-2 font-semibold">Traditional Hard Drive (HDD)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-2 font-medium">Real Transfer Speed</td>
                  <td className="p-2 text-primary font-semibold">800 – 1,050 MB/s (Instant)</td>
                  <td className="p-2 text-muted-foreground">100 – 130 MB/s (Slow)</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">100GB Vacation Photos</td>
                  <td className="p-2 text-primary font-semibold">~90 seconds</td>
                  <td className="p-2 text-muted-foreground">~16 minutes</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Drop Resistance</td>
                  <td className="p-2 text-primary font-semibold">Survives 2-meter drops onto concrete</td>
                  <td className="p-2 text-destructive font-semibold">One drop off a desk can destroy all data</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Physical Size</td>
                  <td className="p-2">Credit-card sized, ultra-light</td>
                  <td className="p-2 text-muted-foreground">Thick, heavy, vibrates while running</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Cost for 1TB / 2TB</td>
                  <td className="p-2 font-mono">~$110 / ~$180 CAD</td>
                  <td className="p-2 font-mono text-emerald-700 dark:text-emerald-300">~$60 / ~$85 CAD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "the-drop-test",
      title: "The Drop Test: Why Mechanical Hard Drives Die",
      content: (
        <>
          <p>
            Inside a traditional hard drive (HDD), metal disc platters spin at <strong>5,400 revolutions per minute</strong>. Microscopic magnetic read heads float just <em>nanometers</em> above the spinning surface — closer than the width of a fingerprint smudge.
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 my-2">
            <p className="font-semibold text-sm">The Coffee Table Accident:</p>
            <p className="text-xs mt-1">
              If your laptop pulls on the cord and knocks a running mechanical drive off a 2-foot coffee table onto a rug, the read head crashes directly into the spinning disc. This physical &ldquo;head crash&rdquo; permanently scratches the magnetic coating, destroying your photos forever. Cleanroom data recovery costs between $800 and $2,500 CAD with no guarantee.
            </p>
          </div>
          <p className="text-sm mt-2">
            An external SSD contains <strong>NAND flash memory chips</strong> (the same technology inside your smartphone). If you drop it down a flight of stairs or accidentally step on it, the data remains 100% intact.
          </p>
        </>
      ),
    },
    {
      id: "what-you-need",
      title: "What to Buy: Recommended Portable SSDs",
      content: (
        <>
          <p>When buying an external SSD, choose reputable models with thermal heat dissipation and ruggedized shells:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Samsung T7 Shield (Top Pick)</p>
              <p className="text-xs text-muted-foreground mt-1">
                Rugged rubber outer sleeve, IP65 water and dust resistance, 1,050 MB/s speed. Includes both USB-C and USB-A cables in the box. 1TB is ~$120 CAD; 2TB is ~$190 CAD.
              </p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Crucial X9 Pro</p>
              <p className="text-xs text-muted-foreground mt-1">
                Extremely compact anodized aluminum chassis, fits on a keychain, ultra-fast 1,050 MB/s read/write. Outstanding value for Mac Time Machine backups.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "photo-backup-link",
      title: "Step-by-Step: How to Move Photos to Your New Drive",
      content: (
        <>
          <p>
            Once you have your external SSD, follow our simple step-by-step guide to export photos off iPhone, Android, Mac, or Windows:
          </p>
          <div className="mt-3">
            <Link
              href="/guides/backup-photos-without-cloud/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Read the Photo Backup Guide →
            </Link>
          </div>
        </>
      ),
    },
    {
      id: "technical-details",
      title: "Technical Details: The 'Drive Not Recognized' Formatting Trap",
      content: (
        <>
          <p>
            When you plug a brand-new external drive into a Mac, it might be formatted as <strong>NTFS</strong> (Windows default). The Mac can read the files, but cannot save or copy anything onto it.
          </p>
          <p>
            <strong>The universal solution:</strong> Format the drive as <strong>exFAT</strong>. exFAT is natively read and written by both Windows 10/11 and Apple macOS, as well as modern iPads and Android tablets.
          </p>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Note: Winter Commutes & Condensation",
      content: (
        <>
          <p>
            In Canadian winters, bringing a mechanical hard drive inside after walking through -20°C weather creates microscopic moisture condensation on the cold steel platters inside the casing. If you power up a spinning mechanical drive while cold condensation is present, the read head can hydroplane and damage the discs.
          </p>
          <p>
            Portable SSDs are hermetically sealed silicon and are immune to platter condensation, making them far safer for Canadian student and business commutes.
          </p>
        </>
      ),
    },
  ],
  sources: [
    { title: "Backblaze: Hard Drive and SSD Reliability Report", url: "https://www.backblaze.com/blog/backblaze-drive-stats-for-2023/" },
    { title: "Apple: Erase and reformat a storage device in Disk Utility on Mac", url: "https://support.apple.com/en-ca/guide/disk-utility/dskutl14079/mac" },
  ],
};
