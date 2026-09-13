import Link from "next/link";
import type { Guide } from "./guides";

export const backupPhotosGuide: Guide = {
  slug: "backup-photos-without-cloud",
  title: "How to Back Up Photos Without Paying for Cloud Storage",
  category: "Store & Protect",
  pillar: "storage",
  description: "Tired of monthly $3 to $15 iCloud or Google Photos bills? Here is how to transfer full-resolution photos directly from your iPhone or Android to a computer or USB-C drive.",
  date: "2026-09-13",
  reviewed: "2026-09-13",
  scope: "Step-by-step consumer tutorial for exporting photos and 4K videos from iOS (iPhone/iPad) and Android smartphones directly to local storage (Windows PC, Mac, external SSD, or USB flash drive).",
  methodology: "Tested across iOS 17/18 and Android 14/15 native file export tools, Apple Image Capture, Windows Photos Import, and direct USB-C On-The-Go (OTG) external drive connections.",
  related: [
    { title: "External SSD vs Hard Drive: Which Should You Buy?", href: "/guides/external-ssd-vs-hard-drive/" },
    { title: "External Hard Drive, Cloud or NAS: Which Do You Need?", href: "/guides/choosing-a-home-nas/" },
    { title: "How Much Backup Storage Do I Actually Need?", href: "/guides/how-much-backup-storage/" },
  ],
  sections: [
    {
      id: "the-problem",
      title: "The Problem",
      content: (
        <>
          <p>
            You take a photo of your kids, pet, or dinner, and your screen pops up with a persistent red banner: <strong>&ldquo;iCloud Storage Is Full&rdquo;</strong> or <strong>&ldquo;Google Account Storage Almost Out.&rdquo;</strong>
          </p>
          <p>
            Apple gives you only 5GB of free storage (which fills up in a month), and Google gives you 15GB shared across Gmail and Drive. To keep taking photos, tech companies push you into a perpetual monthly subscription: $3.99/month, then $12.99/month, year after year.
          </p>
          <p>
            Over 5 years, you spend over $400 CAD on cloud fees, yet you still don&apos;t hold a physical copy of your own family photos. Here is how to take control of your photos locally for zero monthly fees.
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
            <p className="font-semibold mb-1">Did you know? If you have an iPhone 15/16 or modern Android phone:</p>
            <p className="text-sm">
              You can plug an <strong>external USB-C SSD or USB flash drive directly into the bottom of your phone</strong>. Open the built-in <em>Files</em> app (iPhone) or <em>My Files</em> app (Samsung/Android), select your photos, and tap &ldquo;Copy to USB Drive.&rdquo; No computer or cloud needed!
            </p>
          </div>
          <p className="text-sm">
            If you have an older iPhone with a Lightning port, you can plug the charging cable into any Mac or Windows PC to transfer the original, uncompressed photo files in 5 minutes using free built-in apps.
          </p>
        </>
      ),
    },
    {
      id: "step-by-step",
      title: "Step-by-Step: How to Move Photos to an External Drive",
      content: (
        <>
          <div className="space-y-4 my-3">
            <div className="p-4 rounded-xl border bg-card">
              <p className="font-bold text-sm text-primary mb-1">Method 1: iPhone Direct to USB-C SSD (No Computer Needed)</p>
              <ol className="list-decimal pl-5 space-y-1 text-xs text-muted-foreground mt-2">
                <li>Plug a portable USB-C SSD (or USB-C thumb drive) into your iPhone 15 or 16.</li>
                <li>Open the <strong>Photos</strong> app ➔ tap <strong>Select</strong> ➔ choose the photos/videos you want to back up.</li>
                <li>Tap the <strong>Share</strong> button (square with an arrow pointing up) ➔ scroll down and tap <strong>&ldquo;Save to Files&rdquo;</strong>.</li>
                <li>Tap <strong>Browse</strong>, select your external USB drive name, create a folder (e.g. &ldquo;2026 Photos Backup&rdquo;), and tap <strong>Save</strong>. Done!</li>
              </ol>
            </div>

            <div className="p-4 rounded-xl border bg-card">
              <p className="font-bold text-sm text-primary mb-1">Method 2: iPhone to Windows PC via Cable</p>
              <ol className="list-decimal pl-5 space-y-1 text-xs text-muted-foreground mt-2">
                <li>Unlock your iPhone and connect it to your PC with your regular charging cable.</li>
                <li>If prompted on the iPhone screen, tap <strong>&ldquo;Trust This Computer&rdquo;</strong> and enter your passcode.</li>
                <li>Open the built-in <strong>Windows Photos</strong> app ➔ click <strong>Import</strong> in the top-right corner ➔ select <strong>From a connected device</strong>.</li>
                <li>Select the photos you want, choose your external hard drive as the destination folder, and click Import.</li>
              </ol>
            </div>

            <div className="p-4 rounded-xl border bg-card">
              <p className="font-bold text-sm text-primary mb-1">Method 3: iPhone to Mac via Built-in &ldquo;Image Capture&rdquo;</p>
              <ol className="list-decimal pl-5 space-y-1 text-xs text-muted-foreground mt-2">
                <li>Connect your iPhone to your Mac with a cable and unlock the phone.</li>
                <li>Press <kbd className="bg-muted px-1 rounded">Cmd + Space</kbd> to open Spotlight, type <strong>Image Capture</strong>, and press Enter.</li>
                <li>Select your iPhone in the left sidebar. Set &ldquo;Import To&rdquo; at the bottom to your connected external hard drive or SSD.</li>
                <li>Click <strong>&ldquo;Download All&rdquo;</strong>. It copies original raw photos and videos directly to your drive without cluttering your Mac&apos;s internal storage!</li>
              </ol>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "the-sync-trap",
      title: "The #1 Cloud Trap: 'Sync' Is NOT a Backup!",
      content: (
        <>
          <p>
            Millions of people make this tragic mistake:
          </p>
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-900 dark:text-red-200 my-2">
            <p className="font-semibold text-sm">Deleting Photos to &ldquo;Free Up Space&rdquo;:</p>
            <p className="text-xs mt-1">
              Apple iCloud and Google Photos are <strong>syncing services</strong>, not standalone backup lockers. If your phone storage is full and you delete 1,000 photos from your phone gallery, <strong>iCloud immediately deletes them from the cloud as well</strong>!
            </p>
          </div>
          <p className="text-sm mt-2">
            By copying your photos to an <strong>external physical SSD</strong>, you create a true independent archive. Once the files are safely confirmed on your external drive, you can safely delete them from your phone to reclaim gigabytes of storage.
          </p>
        </>
      ),
    },
    {
      id: "what-you-need",
      title: "What You Need: The Best Portable Photo Drives",
      content: (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Samsung T7 Shield 1TB / 2TB</p>
              <p className="text-xs text-muted-foreground mt-1">
                The gold standard for photo backups. High-speed USB-C, drop-proof rubber armor, works directly on phones, Macs, and PCs without special drivers. ~$120 CAD.
              </p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">SanDisk Ultra Dual Drive USB-C</p>
              <p className="text-xs text-muted-foreground mt-1">
                A tiny $30 CAD thumb drive with a USB-C plug on one side (for your phone) and a standard USB-A plug on the other (for older PCs). Perfect for vacation backups.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "ssd-guide-link",
      title: "Not Sure Which External Drive to Buy?",
      content: (
        <>
          <p>
            Read our straightforward guide comparing portable solid state drives (SSDs) and traditional mechanical hard drives:
          </p>
          <div className="mt-3">
            <Link
              href="/guides/external-ssd-vs-hard-drive/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Read External SSD vs Hard Drive Guide →
            </Link>
          </div>
        </>
      ),
    },
    {
      id: "why-this-happens",
      title: "How to Organize Your Photo Archive",
      content: (
        <>
          <p>
            When you export 5,000 photos onto an external hard drive, don&apos;t dump them all into one messy folder. Use this simple, foolproof folder structure:
          </p>
          <div className="p-3 rounded-lg border bg-muted/40 font-mono text-xs my-2 space-y-1">
            <p>📁 My Photos Archive</p>
            <p className="pl-4">📁 2025</p>
            <p className="pl-8">📁 2025-07 Banff Vacation</p>
            <p className="pl-8">📁 2025-12 Christmas</p>
            <p className="pl-4">📁 2026</p>
            <p className="pl-8">📁 2026-06 High School Graduation</p>
          </div>
          <p className="text-xs text-muted-foreground">
            Using the year-month format (e.g. <code>2025-07</code>) ensures your computer automatically sorts your folders in exact chronological order on both Mac and Windows.
          </p>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Note: Avoid Heavy Mobile Data Charges",
      content: (
        <>
          <p>
            Backing up full-resolution photos and 4K videos over cellular networks on Canadian carrier plans can quickly consume 30GB to 50GB of mobile data, triggering expensive speed throttling or overage charges.
          </p>
          <p>
            In your phone settings, always toggle <em>&ldquo;Cellular Data Off&rdquo;</em> for photo syncing, or adopt local cable transfers to keep your data use at zero.
          </p>
        </>
      ),
    },
  ],
  sources: [
    { title: "Apple: Transfer photos and videos from your iPhone, iPad, or iPod touch to your Mac or PC", url: "https://support.apple.com/en-ca/102430" },
    { title: "Google: Download all photos and videos from Google Photos using Google Takeout", url: "https://support.google.com/photos/answer/7652919" },
  ],
};
