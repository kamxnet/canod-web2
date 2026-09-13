import type { ReactNode } from "react";
import type { PillarId } from "./editorial";
import { backupStorageGuide } from "./backup-storage-guide";
import { backupPhotosGuide } from "./backup-photos-guide";
import { dockGuide } from "./dock-guide";
import { hdmiCableGuide } from "./hdmi-cable-guide";
import { homeStorageGuide } from "./home-storage-guide";
import { laptopChargingGuide } from "./laptop-charging-guide";
import { monitorDetectionGuide } from "./monitor-detection-guide";
import { powerBankGuide } from "./power-bank-guide";
import { powerBarSurgeProtectorGuide } from "./power-bar-surge-protector-guide";
import { routerMeshGuide } from "./router-mesh-guide";
import { safetyGuide } from "./safety-guide";
import { slowPhoneChargingGuide } from "./slow-phone-charging-guide";
import { ssdVsHddGuide } from "./ssd-vs-hdd-guide";
import { travelChargersGuide } from "./travel-chargers-guide";
import { usbCCableGuide } from "./usb-c-cable-guide";
import { whichChargerGuide } from "./which-charger-guide";
import { wifiRoomGuide } from "./wifi-room-guide";

export type Guide = {
  slug: string;
  title: string;
  category: string;
  pillar: PillarId | "safety";
  description: string;
  date: string;
  reviewed?: string;
  scope?: string;
  methodology?: string;
  related?: { title: string; href: string }[];
  sections: { id: string; title: string; content: ReactNode }[];
  sources: { title: string; url: string }[];
};

const organizerSource = "https://www.peakdesign.com/products/tech-pouch";

export const guides: Guide[] = [
  // Priority everyday-problem guides (surfaced first)
  laptopChargingGuide,
  whichChargerGuide,
  monitorDetectionGuide,
  hdmiCableGuide,
  ssdVsHddGuide,
  backupPhotosGuide,
  travelChargersGuide,

  // Existing high-value guides
  safetyGuide,
  dockGuide,
  powerBarSurgeProtectorGuide,
  homeStorageGuide,
  backupStorageGuide,
  wifiRoomGuide,
  routerMeshGuide,
  usbCCableGuide,
  powerBankGuide,
  slowPhoneChargingGuide,

  // Niche / lifestyle guide
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
];
