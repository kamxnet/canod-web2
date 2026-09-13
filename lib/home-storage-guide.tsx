import Link from "next/link";
import type { Guide } from "./guides";

const raidSource = "https://blog.qnap.com/en/raid-backup/";
const backupSource = "https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf";
const synologySource = "https://kb.synology.com/en-my/DSM/tutorial/What_RAID_type_is_best_for_my_storage";
const appleTimeMachineSource = "https://support.apple.com/en-ca/104984";

export const homeStorageGuide: Guide = {
  slug: "choosing-a-home-nas",
  title: "External Hard Drive, Cloud or NAS: Which Do You Need?",
  category: "Store & Protect",
  pillar: "storage",
  description: "Stop paying for storage you don't understand. Compare external portable SSDs, cloud plans (iCloud/Google One), and home network storage (NAS) in plain English.",
  date: "2026-09-10",
  reviewed: "2026-09-13",
  scope: "Practical consumer storage comparison for personal and family files, photos, and backups. We do not provide IT systems administration or enterprise consulting.",
  methodology: "We compared retail pricing in Canada, real-world transfer speeds across USB and home networks, subscription lifecycle costs over 5 years, and published cybersecurity backup guidelines (CISA 3-2-1 framework).",
  related: [
    { title: "How to Back Up Photos Without Paying for Cloud", href: "/guides/backup-photos-without-cloud/" },
    { title: "External SSD vs Hard Drive: Which Should You Buy?", href: "/guides/external-ssd-vs-hard-drive/" },
    { title: "How Much Backup Storage Do I Actually Need?", href: "/guides/how-much-backup-storage/" },
  ],
  sections: [
    {
      id: "the-problem",
      title: "The Problem",
      content: (
        <>
          <p>
            Your phone says &ldquo;iCloud Storage Is Full,&rdquo; or your laptop is down to its last 15 gigabytes of space. You need a safe place for 10 years of family photos, tax documents, and personal projects.
          </p>
          <p>
            When you search online, tech enthusiasts tell you to buy a $600 &ldquo;NAS&rdquo; (Network Attached Storage) with multiple hard drives and RAID arrays. Other people say to just pay Apple or Google $4 a month forever. What is the most practical choice for a normal household?
          </p>
        </>
      ),
    },
    {
      id: "quick-answer",
      title: "The 30-Second Answer",
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
            <div className="p-4 rounded-xl border bg-card">
              <p className="font-bold text-sm text-primary">1. Portable External SSD</p>
              <p className="text-xs text-muted-foreground mt-1 mb-2 font-mono">~$100–$160 CAD (One-time)</p>
              <p className="text-xs text-foreground">
                <strong>Best for:</strong> Backing up a laptop (Mac Time Machine or Windows Backup) quickly with no monthly fees. Plugs straight in with a cable.
              </p>
            </div>
            <div className="p-4 rounded-xl border bg-card">
              <p className="font-bold text-sm text-primary">2. Cloud (iCloud / Google One)</p>
              <p className="text-xs text-muted-foreground mt-1 mb-2 font-mono">~$3–$15 CAD / month</p>
              <p className="text-xs text-foreground">
                <strong>Best for:</strong> Seamless phone photos. Automatic backup in the background whenever on Wi-Fi, viewable from any device anywhere.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-primary/30 bg-primary/5">
              <p className="font-bold text-sm text-primary">3. Home NAS Box</p>
              <p className="text-xs text-muted-foreground mt-1 mb-2 font-mono">~$600–$1,200+ CAD</p>
              <p className="text-xs text-foreground">
                <strong>Best for:</strong> Huge media libraries (10TB+), video editors, or multiple household computers backing up over Wi-Fi without plugging in cords.
              </p>
            </div>
          </div>
          <p className="text-sm">
            <strong>Verdict:</strong> 90% of consumers do not need a NAS. A $120 external portable SSD paired with a modest $3/month cloud plan for phone photos gives you bulletproof protection at a fraction of the cost and complexity.
          </p>
        </>
      ),
    },
    {
      id: "try-this-first",
      title: "Which One Should You Choose?",
      content: (
        <>
          <p>Answer these three questions to find your match:</p>
          <ul className="list-disc pl-5 space-y-3 mt-2">
            <li>
              <strong>Are you mostly backing up an iPhone or Android phone?</strong>
              <br />
              <span className="text-sm text-muted-foreground">
                ➔ <strong>Choose Cloud Storage.</strong> Pluggable drives are inconvenient on phones. Apple iCloud+ (200GB for $3.99/mo CAD) or Google One (100GB for $2.79/mo CAD) backs up automatically every night while you sleep.
              </span>
            </li>
            <li>
              <strong>Are you backing up a laptop or home computer?</strong>
              <br />
              <span className="text-sm text-muted-foreground">
                ➔ <strong>Choose an External Portable SSD.</strong> A 1TB or 2TB USB-C SSD (like a Samsung T7 or Crucial X9) will complete a full backup in 10 to 20 minutes, is pocket-sized, and has no moving parts to break if dropped.
              </span>
            </li>
            <li>
              <strong>Do you have 3+ computers, 15TB of 4K drone/camera footage, or hate monthly subscriptions?</strong>
              <br />
              <span className="text-sm text-muted-foreground">
                ➔ <strong>Choose a Home NAS.</strong> It plugs into your Wi-Fi router with an Ethernet cable. All family laptops can back up silently over your home network without physically plugging in drives.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "warning-signs",
      title: "The &ldquo;RAID Is Not a Backup&rdquo; Mistake",
      content: (
        <>
          <p>
            If you do decide to buy a 2-bay or 4-bay NAS, avoid the most common mistake made by new owners:
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 my-2">
            <p className="font-semibold text-sm">A 2-Drive Mirror (RAID 1) Is NOT a Backup:</p>
            <p className="text-xs mt-1">
              Having two mirrored hard drives inside a NAS only protects you if one physical hard drive dies. It does <em>not</em> protect you if you accidentally delete a photo album, if ransomware encrypts your network, if your basement floods, or if a burglar steals the box.
            </p>
          </div>
          <p className="text-sm mt-2">
            Always follow the simple <strong>3-2-1 Rule</strong>: Keep 3 copies of your most precious memories, across 2 different devices (e.g. laptop + external drive), with at least 1 copy off-site (e.g. cloud storage or a drive at work).
          </p>
        </>
      ),
    },
    {
      id: "what-you-need",
      title: "Recommended Hardware & Pricing",
      content: (
        <>
          <div className="space-y-3 my-3">
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Best Portable External SSDs (Recommended for Everyone)</p>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Samsung T7 Shield</strong> or <strong>Crucial X9 Pro</strong>. Fast (1,050 MB/s), durable rubber/aluminum casing, works seamlessly on both Mac and Windows. 1TB is ~$120 CAD; 2TB is ~$190 CAD.
              </p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <p className="font-semibold text-sm">Best Beginner NAS (If You Genuinely Need Network Storage)</p>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Synology DiskStation DS224+ (2-Bay)</strong>. Industry-leading, easy-to-use software. Pair with two 4TB <strong>Western Digital Red Plus</strong> or <strong>Seagate IronWolf</strong> NAS hard drives. Total setup cost: ~$750 CAD.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "photo-backup-link",
      title: "Want to Back Up Photos Without Cloud Fees?",
      content: (
        <>
          <p>
            If you want to pull photos off your iPhone or Android onto a physical hard drive without paying monthly Apple or Google subscriptions:
          </p>
          <div className="mt-3">
            <Link
              href="/guides/backup-photos-without-cloud/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Read the Step-by-Step Photo Backup Guide →
            </Link>
          </div>
        </>
      ),
    },
    {
      id: "why-this-happens",
      title: "Why Internal Laptop Storage Fills Up So Fast",
      content: (
        <>
          <p>
            Modern phones shoot 4K video at 60 frames per second, which consumes about 400 megabytes per minute of footage. A single family vacation can easily generate 50 gigabytes of media.
          </p>
          <p>
            At the same time, laptop manufacturers (especially Apple) charge exorbitant fees ($250 to $500 CAD) to upgrade built-in storage from 512GB to 1TB or 2TB at purchase time. As a result, most people buy base models and quickly run out of room. An external drive or small cloud subscription solves this without overpaying on the laptop.
          </p>
        </>
      ),
    },
    {
      id: "technical-details",
      title: "Technical Details: Local Speed vs Internet Speed",
      content: (
        <>
          <p>
            If you do use a home NAS, remember: <strong>transferring files across your home Wi-Fi does not use your internet bandwidth</strong>.
          </p>
          <p>
            A computer wired with an Ethernet cable to your router can transfer files to a NAS at roughly 110 megabytes per second (1 Gigabit Ethernet). However, if you are transferring over Wi-Fi from upstairs through a couple of drywall walls, transfer speeds might drop to 30–50 MB/s. By contrast, a portable USB-C SSD plugged directly into your laptop transfers at 800–1,000 MB/s — over 15 times faster!
          </p>
        </>
      ),
    },
    {
      id: "canadian-note",
      title: "Canadian Note: Cloud Subscriptions & Hard Drive Sourcing",
      content: (
        <>
          <p>
            Apple iCloud+ and Google One subscriptions in Canada are billed in Canadian dollars, but remember that provincial taxes (GST/HST and PST in provinces like BC, Saskatchewan, and Quebec) are added on top of the advertised monthly price.
          </p>
          <p>
            If buying mechanical hard drives for a NAS or desktop backup, buy from authorized Canadian distributors (Memory Express, Canada Computers, or direct from Western Digital Canada) to ensure full Canadian warranty coverage; grey-market OEM drives sold by unauthorized third parties often carry voided manufacturer warranties.
          </p>
        </>
      ),
    },
  ],
  sources: [
    { title: "QNAP: RAID and backup distinction", url: raidSource },
    { title: "CISA: Data Backup Options (3-2-1 Framework)", url: backupSource },
    { title: "Synology: choosing a RAID type for home", url: synologySource },
    { title: "Apple: back up a Mac with Time Machine", url: appleTimeMachineSource },
  ],
};
