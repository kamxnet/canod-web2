import type { Guide } from "./guides";

const sources = {
  getCyberSafe: {
    title: "Get Cyber Safe: storage and backup",
    url: "https://www.getcybersafe.gc.ca/en/secure-your-devices/storage-and-backup",
  },
  cyberCentre: {
    title: "Canadian Centre for Cyber Security: tips for backing up your information",
    url: "https://www.cyber.gc.ca/en/guidance/tips-backing-your-information-itsap40002",
  },
  appleStorage: {
    title: "Apple Canada: see used and available storage space on a Mac",
    url: "https://support.apple.com/en-ca/guide/mac-help/syspf9b375b9/mac",
  },
  appleTimeMachine: {
    title: "Apple Canada: back up a Mac with Time Machine",
    url: "https://support.apple.com/en-ca/104984",
  },
  microsoftStorage: {
    title: "Microsoft: storage settings in Windows",
    url: "https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/storage-settings-in-windows",
  },
  microsoftBackup: {
    title: "Microsoft: backup, restore and recovery in Windows",
    url: "https://support.microsoft.com/en-us/windows/experience/backup-recovery/backup-restore-and-recovery-in-windows",
  },
  googleStorage: {
    title: "Google: how Google Account storage works",
    url: "https://support.google.com/googleone/answer/9312312?hl=en",
  },
  microsoftSync: {
    title: "Microsoft: OneDrive Files On-Demand and deletion behaviour",
    url: "https://support.microsoft.com/en-us/onedrive/save-disk-space-with-onedrive-files-on-demand-for-windows",
  },
  capacity: {
    title: "NIST: decimal and binary prefixes for data capacity",
    url: "https://physics.nist.gov/cuu/Units/binary.html",
  },
  electrical: {
    title: "Health Canada: electrical product safety",
    url: "https://www.canada.ca/en/health-canada/services/home-safety/electrical-products.html",
  },
} as const;

export const backupStorageGuide: Guide = {
  slug: "how-much-backup-storage",
  title: "How Much Backup Storage Do I Need?",
  category: "Store & Protect",
  pillar: "storage",
  description: "Measure the files that need protection, allow room for history and growth, and choose a backup destination you can restore from.",
  date: "2026-09-11",
  reviewed: "2026-09-11",
  scope: "A practical sizing guide for personal computers, phones and household files. Actual capacity needs depend on the backup software, selected data, change rate and desired history; CANOD has not tested the products or services mentioned.",
  methodology: "We reviewed current Canadian cyber-safety guidance and primary Apple, Microsoft, Google and measurement-standards documentation. The two-times starting point below is a planning allowance, not a universal technical requirement or a promise of retention time.",
  related: [
    { title: "Plan a NAS and its independent backup", href: "/guides/choosing-a-home-nas/#raid-and-backup" },
    { title: "Check Canadian electrical approval information", href: "/guides/charger-safety-canada/#approval" },
  ],
  sections: [
    { id: "problem", title: "The problem", content: <>
      <p>A computer with a 1 TB drive does not automatically need a 1 TB backup. The drive may hold only 300 GB, while a second computer, phone photos and cloud-only files may add data that the first number misses. Version history and future growth also need space beyond one current copy.</p>
      <p>First decide what recovery means. A file backup protects selected documents, photos and other personal data. A full-system image can include the operating system and applications and may need a different tool and more space. <a href={sources.getCyberSafe.url}>Get Cyber Safe says to protect the files you want to keep and notes that applications and an operating system can be reinstalled</a>; choose a full-system method only when that faster form of recovery is part of your plan.</p>
    </> },
    { id: "answer", title: "The 30-second answer", content: <>
      <p>Add the current size of everything the backup will include. For a personal file-history backup, use at least twice that total as a practical starting capacity, then round up to the next available plan or drive size. This extra room is for changed versions and growth, not a guarantee of how long history will last.</p>
      <p>Follow the backup software&apos;s rule when it is more specific. For example, <a href={sources.appleTimeMachine.url}>Apple says a Time Machine disk should ideally have at least twice the Mac&apos;s storage capacity</a>, not merely twice today&apos;s used space. Keep another independent copy of irreplaceable files, preferably offsite; buying one larger drive does not create another backup.</p>
    </> },
    { id: "checks", title: "What to check", content: <ul>
      <li><strong>Backup set:</strong> documents, photos, videos, projects, email archives, phone data and any cloud-only files you expect to recover.</li>
      <li><strong>Current size:</strong> the amount used by that backup set on every device and service, not the headline capacity of each device.</li>
      <li><strong>Recovery type:</strong> selected files, version history or a restorable image of the whole computer.</li>
      <li><strong>Change rate:</strong> large video projects, virtual machines and frequently edited files can consume history space quickly.</li>
      <li><strong>Retention:</strong> how far back you need to recover a deleted or changed file and what the software removes when space runs low.</li>
      <li><strong>Shared quotas:</strong> whether email, photos, family members or other services consume the same cloud allowance. <a href={sources.googleStorage.url}>Google, for example, counts Drive, Photos, Gmail and Android backup data toward one account quota</a>.</li>
    </ul> },
    { id: "solution", title: "Step-by-step solution", content: <ol>
      <li>List each device and storage service, then mark the folders, libraries and app data that would be difficult or impossible to replace.</li>
      <li>Measure the selected data. In Windows, <a href={sources.microsoftStorage.url}>Settings &gt; System &gt; Storage shows use by category and by drive</a>. On a Mac, <a href={sources.appleStorage.url}>System Settings &gt; General &gt; Storage shows used and available space</a>. Check cloud and phone storage in their own account settings.</li>
      <li>Add those figures once. Do not count the same synced folder from every device, but do include cloud-only files if the backup tool will download or export them.</li>
      <li>For a general personal file-history plan, double the total and round up. If the selected data is 620 GB, twice that is 1.24 TB, so a 2 TB destination provides more room than a 1 TB option. Treat this as a starting estimate and use the platform&apos;s stated requirement where one exists.</li>
      <li>Confirm that the backup application supports the destination and recovery you intend. <a href={sources.microsoftBackup.url}>Microsoft documents File History with an external drive or network location</a>; <a href={sources.appleTimeMachine.url}>Apple documents a compatible external storage device as a Time Machine destination</a>.</li>
      <li>Run the first backup, check its reported size and enable failure or low-space notifications. Leave margin between the estimate and the label: <a href={sources.capacity.url}>NIST distinguishes decimal gigabytes and terabytes from binary gibibytes and tebibytes</a>, so the same byte count can have different numerical expressions.</li>
      <li>Restore several sample files to a different folder and open them. Recheck the backup set, free space and restore test after adding a device, starting a large project or changing services.</li>
    </ol> },
    { id: "mistakes", title: "Common mistakes", content: <ul>
      <li>Sizing from a device&apos;s advertised capacity instead of the data the backup will actually include.</li>
      <li>Buying a destination that holds only one current copy, leaving no room for changed or deleted versions.</li>
      <li>Counting a synced folder as an independent backup without checking deletion and retention behaviour. <a href={sources.microsoftSync.url}>Microsoft notes that deleting an online-only OneDrive file removes it from OneDrive on all devices</a>, with recovery subject to its recycle-bin window.</li>
      <li>Leaving an external backup connected all the time and keeping no separate or offsite copy.</li>
      <li>Assuming RAID, a NAS or a paid cloud account automatically creates all the copies in a recovery plan.</li>
      <li>Checking that a backup completed but never testing whether files can be restored.</li>
    </ul> },
    { id: "canadian-note", title: "Canadian compatibility or safety note", content: <>
      <p><a href={sources.cyberCentre.url}>The Canadian Centre for Cyber Security recommends the 3-2-1 approach</a>: three copies, on two media types, with one copy offsite. It also recommends separating backups from the computer, encrypting sensitive data and testing recovery. Its page is written for organizations, but those checks are useful questions for a household plan too.</p>
      <p>Organizations may have policy or regulatory requirements about where data is stored; confirm those requirements before choosing a cloud region. For a mains-powered external enclosure or NAS, <a href={sources.electrical.url}>Health Canada advises looking for a recognized Canadian certification mark</a>. A bus-powered portable drive has no separate wall adapter, but its cable and connector still need to match the device and manufacturer instructions.</p>
    </> },
    { id: "specifications", title: "Recommended specifications", content: <>
      <p>For a drive or NAS allocation, require enough usable capacity for the calculation above, explicit compatibility with the computer and backup software, a supported file system, encryption support, health or failure reporting, and a Canadian warranty for the exact model. Check whether a quoted NAS capacity is raw or usable after its storage arrangement.</p>
      <p>For cloud backup, choose a quota above the measured backup set and verify what else shares it. Check automatic scheduling, version and deleted-file retention, encryption information, multi-factor authentication, restore or export methods, recovery costs, and what happens when the account reaches its limit. A low monthly price is not useful if the plan cannot hold the first backup or restore the file types you need.</p>
    </> },
    { id: "products", title: "Where to check suitable products", content: <>
      <p>Start with the backup documentation for the exact Windows, macOS, phone or NAS version you use. It should define supported destinations, formats, exclusions, retention and restore steps. Then compare the manufacturer&apos;s Canadian specification, compatibility list, warranty and support page for the exact drive or enclosure model.</p>
      <p>For cloud services, check the provider&apos;s current quota, shared-storage rules, version history, deletion policy, export process, Canadian-dollar price and terms before subscribing. For retail hardware, compare the exact model number, included cable or power supply, return conditions and total price. No product or retailer link in this guide is an affiliate recommendation.</p>
      <p>If the current backup destination already has enough space, completes automatically and passes a restore test, the suitable purchase may be a second independent copy rather than a larger replacement.</p>
    </> },
  ],
  sources: Object.values(sources),
};
