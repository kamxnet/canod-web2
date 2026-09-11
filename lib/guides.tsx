import type { ReactNode } from "react";
import type { PillarId } from "./editorial";
import { dockGuide } from "./dock-guide";

export type Guide = {
  slug: string;
  title: string;
  category: string;
  pillar: PillarId;
  description: string;
  date: string;
  sections: { id: string; title: string; content: ReactNode }[];
  sources: { title: string; url: string }[];
};

const organizerSource = "https://www.peakdesign.com/products/tech-pouch";
const raidSource = "https://blog.qnap.com/en/raid-backup/";
const backupSource = "https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf";
const networkSource = "https://www.qnap.com/en-as/how-to/faq/article/what-transfer-speed-should-i-expect";
const remoteSource = "https://www.qnap.com/en/how-to/faq/article/why-am-i-getting-slow-download-speeds-when-accessing-my-files-from-outside-my-home";

export const guides: Guide[] = [
  dockGuide,
  {
    slug: "choosing-a-tech-organizer",
    title: "Choosing a Tech Organizer: Size, Layout and Everyday Use.",
    category: "Work & travel",
    pillar: "travel",
    description: "Find a useful fit for the things you actually carry, from a single charger to a full workday setup.",
    date: "2026-09-10",
    sections: [
      { id: "start-with-your-carry", title: "Start with what you carry", content: <>
        <p>A tech organizer suits someone who moves cables, chargers and small accessories between bags, desks or destinations. Its job is to make those things easy to find and put away. More pockets are useful only when they match your belongings and habits.</p>
        <p>Empty your current bag onto a table. Separate daily essentials from occasional extras: your regular charger, two cables, earbuds, perhaps a mouse or portable drive. Put the things you rarely use aside. Buy around the everyday group, then decide whether travel extras need a separate pouch.</p>
        <p>This small exercise matters more than a capacity label. An organizer that holds everything you own may be inconvenient to carry on an ordinary workday. Conversely, a very slim pouch can become awkward when one bulky charger takes up most of its depth.</p>
      </> },
      { id: "size-and-fit", title: "Measure the awkward item first", content: <>
        <p>Start with the largest rigid object, usually a power adapter, mouse or drive case. Measure its length, width and depth, including protruding plugs. Then compare those measurements with the usable compartment dimensions, not just the pouch exterior. Padding, seams and dividers all occupy space.</p>
        <p>A litre figure describes volume, not shape. Two organizers with a similar capacity can fit very different objects. Manufacturer pages, such as <a href={organizerSource}>Peak Design&apos;s Tech Pouch specifications</a>, are useful for comparing the stated size and pocket arrangement. Treat product photos as a layout reference, not proof that your particular charger fits.</p>
        <p>Check the space in your bag as well. A paper rectangle matching the pouch footprint helps you compare it with the bag opening. Allow depth for the filled organizer and room to remove it without unpacking everything above it. A slightly smaller pouch may be easier to live with than a tightly packed maximum-capacity option.</p>
      </> },
      { id: "layout-and-access", title: "Choose a layout you will use", content: <>
        <p>Open compartments suit mixed shapes and changing equipment. Elastic loops give individual cables a place, but require you to coil and return each one. Zipped inner pockets can help keep tiny adapters together; too many layers can make a quick retrieval feel like unpacking.</p>
        <p>A clamshell opening makes the contents visible on a desk, but needs room to open. A top-opening pouch may be easier to reach inside a backpack, though objects can collect at the bottom. Think about where you usually need a cable: standing in transit, sitting at a shared desk or unpacking at home.</p>
        <p>For an everyday setup, give the most frequently used items the easiest access. Keep the occasional adapter in a secondary compartment. Consider whether you prefer one all-purpose pouch or two smaller ones for work and travel; the latter can reduce what you carry, but adds another item to remember.</p>
      </> },
      { id: "materials-and-care", title: "Look beyond the fabric description", content: <>
        <p>Read the maker&apos;s information on the lining, closures, padding and care. A structured pouch keeps its shape; a soft one can adapt to an irregular space. Neither feature alone tells you how well it will protect a particular device.</p>
        <p>Do not read &ldquo;water-resistant&rdquo; as permission to immerse a pouch or assume it will keep electronics dry in every situation. Check the exact protection the manufacturer describes, including closures. For fragile items, look for explicit protection information instead of judging by the thickness of the fabric in a photograph.</p>
        <p>Before purchasing in Canada, check the seller&apos;s return conditions, delivery cost and the total in Canadian dollars. A fit problem is easier to resolve when you understand the return process before opening the package.</p>
      </> },
      { id: "buying-checklist", title: "A short buying checklist", content: <ul>
        <li>List the items you carry most days and measure the largest one.</li>
        <li>Check usable pocket dimensions and the opening, not just total capacity.</li>
        <li>Confirm that the filled pouch will fit in your usual bag.</li>
        <li>Choose a layout that works where you normally unpack.</li>
        <li>Read the care, protection and return information for the exact model.</li>
      </ul> },
      { id: "when-to-skip", title: "When you may not need one", content: <>
        <p>If you carry one cable and a compact charger, an existing zipped bag pocket may already do the job. Try that arrangement for a week. An organizer is worthwhile when it solves a repeated problem, such as losing small adapters or moving the same kit between bags. It is less useful when it mainly encourages you to carry more.</p>
      </> },
    ],
    sources: [{ title: "Peak Design: Tech Pouch specifications and pocket layouts", url: organizerSource }],
  },
  {
    slug: "choosing-a-home-nas",
    title: "Choosing a Home NAS: Storage, Backups and Compatibility.",
    category: "Technology & storage",
    pillar: "storage",
    description: "Understand the full setup before choosing network storage: drives, backups, software and the network between them.",
    date: "2026-09-10",
    sections: [
      { id: "who-it-suits", title: "Decide what it needs to do", content: <>
        <p>A network-attached storage device, or NAS, makes storage available to devices on a network. It can suit a household sharing files or looking for a central backup destination. Think of it as a computer with storage to manage, rather than a drive you plug in and forget.</p>
        <p>Write down two or three jobs: keeping a shared photo library, backing up laptops or serving media to a television. Check that the exact model and its software support those jobs. A longer list of applications does not necessarily make the daily tasks you care about easier.</p>
      </> },
      { id: "enclosure-and-drives", title: "Budget for the whole storage setup", content: <>
        <p><strong>Diskless means storage drives are not included.</strong> You buy compatible drives separately. A bundle may include them, but verify the drive models and capacities in that exact offer. <a href="https://store.asustor.com/">ASUSTOR&apos;s store FAQ</a>, for example, distinguishes standard diskless units from drive bundles; other offers should be checked just as carefully.</p>
        <p>Drive bays indicate physical slots, not guaranteed usable capacity. Count your existing files and expected growth, then allow room for backup history. A two-drive mirror, commonly RAID 1, uses the second drive for redundancy rather than doubling usable space. Two equal 4 TB drives therefore provide roughly one drive&apos;s capacity before formatting and system overhead. Check the <a href="https://kb.synology.com/en-my/DSM/tutorial/What_RAID_type_is_best_for_my_storage">manufacturer&apos;s RAID information</a> for the supported arrangement.</p>
        <p>Include drives, a separate backup destination, possible network upgrades, electricity and any software subscriptions in the budget. More bays can provide options, but expansion rules differ. Read how capacity can be increased before assuming that adding a drive later will be simple.</p>
      </> },
      { id: "raid-and-backup", title: "RAID is not a backup", content: <>
        <p>Redundant RAID configurations can help keep data available after certain drive failures. They do not provide an independent copy protected from accidental deletion, theft, fire or every form of corruption. RAID 0 has no drive redundancy. <a href={raidSource}>QNAP&apos;s explanation of RAID and backup</a> makes this distinction explicit.</p>
        <p>A NAS holding the only copy of your photos is primary storage, even if its drives are mirrored. A NAS holding a separate copy of files still on a laptop can be one backup destination. In either case, plan for loss of the NAS itself.</p>
        <p>The <a href={backupSource}>CISA 3-2-1 guidance</a> describes three copies of important data, on two types of media, with one copy offsite. Decide what you will back up, where it will go and how often. Check that you can restore sample files. A schedule alone does not tell you whether recovery will work when needed.</p>
      </> },
      { id: "network-speed", title: "Separate local speed from internet speed", content: <>
        <p>Copying files directly between a computer and NAS on your home network uses that local connection. Buying a faster internet plan will not fix a slow cable, computer network port or Wi-Fi connection on that path.</p>
        <p>A 1 gigabit Ethernet connection has a theoretical ceiling of 125 megabytes per second, before overhead; actual file transfers can be lower. A faster NAS port helps only if the rest of the path and storage can keep up. <a href={networkSource}>QNAP&apos;s transfer-speed guidance</a> explains the role of network links, drives and client devices.</p>
        <p>Access from outside home is different. Your home internet upload speed, the remote connection and the access method can all limit it. <a href={remoteSource}>QNAP&apos;s remote-access guidance</a> explains why advertised download speed is not the right figure for estimating that experience.</p>
      </> },
      { id: "compatibility-and-upkeep", title: "Check compatibility and upkeep", content: <>
        <p>Check the manufacturer&apos;s current <a href="https://www.synology.com/en-us/compatibility">drive compatibility list</a> for the exact NAS model and drive, including capacity and any software-version notes. Do the same for optional memory or expansion hardware. Similar connectors or product names are not enough to establish support.</p>
        <p>Confirm the required apps and operating systems. For example, <a href="https://support.apple.com/en-us/102423">Apple documents Time Machine support for NAS devices that support it over SMB</a>; general file sharing support alone should not be treated as proof. Media playback features also need checking against your files and playback devices.</p>
        <p>Plan a ventilated location, consider fan and drive noise, and read the update and account-management instructions. Remote access is optional, not a prerequisite for local storage. Before enabling it, understand the manufacturer&apos;s current setup guidance and the responsibilities it adds.</p>
      </> },
      { id: "buying-checklist", title: "A short buying checklist", content: <ul>
        <li>Define the household tasks and confirm software support.</li>
        <li>Check what is included, compatible drives and usable capacity.</li>
        <li>Budget for an independent backup and test restores.</li>
        <li>Check the whole network path before paying for faster ports.</li>
        <li>Review expansion, updates, noise and Canadian purchase terms.</li>
      </ul> },
      { id: "when-to-skip", title: "When a simpler option fits", content: <>
        <p>If one computer needs occasional backups, an external drive may be simpler. A suitable cloud service may fit a household that prefers someone else to manage hardware. A NAS makes sense when shared local storage and its software solve a real need, and you are willing to maintain the setup.</p>
      </> },
    ],
    sources: [
      { title: "ASUSTOR: diskless units and drive bundles (store FAQ)", url: "https://store.asustor.com/" },
      { title: "Synology: choosing a RAID type", url: "https://kb.synology.com/en-my/DSM/tutorial/What_RAID_type_is_best_for_my_storage" },
      { title: "QNAP: RAID and backup", url: raidSource },
      { title: "CISA: Data Backup Options (PDF)", url: backupSource },
      { title: "QNAP: expected transfer speeds", url: networkSource },
      { title: "QNAP: remote transfer speeds", url: remoteSource },
      { title: "Synology: hardware compatibility lists", url: "https://www.synology.com/en-us/compatibility" },
      { title: "Apple: backup disks for Time Machine", url: "https://support.apple.com/en-us/102423" },
    ],
  },
];
