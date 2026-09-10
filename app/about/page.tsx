import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About CANOD", "Meet CANOD, a Canadian-owned online retailer with a practical approach to technology, work, travel, organization and everyday products.", "/about/");

export default function AboutPage() {
  return <>
    <PageIntro label="About CANOD" title="A practical point of view."><p>CANOD is a Canadian-owned online retailer focused on useful products for technology, work, travel, organization and everyday life.</p></PageIntro>
    <section className="section-space bg-paper"><div className="site-container editorial-split">
      <div><p className="eyebrow text-maple">The idea</p><h2>Make the everyday a little easier.</h2></div>
      <div className="text-stack">
        <p>A pouch that fits the things you carry. A place for the cables on your desk. Storage that makes sense for your household. CANOD is built around ordinary needs that deserve a thoughtful answer.</p>
        <p>Our interests span categories because useful products do, too. We look at purpose, dimensions, materials and the details that help someone decide whether a product belongs in their life.</p>
        <p>That same approach shapes our buying guides: explain the trade-offs, check the facts and leave room for the answer to be &ldquo;you may not need this.&rdquo;</p>
        <Link className="text-link" href="/guides/">Explore the buying guides <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </div></section>
    <section className="section-space"><div className="site-container editorial-split">
      <div><p className="eyebrow text-maple">Responsible sourcing</p><h2>Useful products. Clear relationships.</h2></div>
      <div className="text-stack">
        <p>Our purpose is straightforward: build a Canadian retail business around practical products and clear, useful information.</p>
        <p>CANOD seeks relationships with brands and authorized wholesale suppliers who share that focus. Careful research and straightforward conversations are the starting point.</p>
        <a className="text-link" href="mailto:hello@canod.ca">Contact CANOD <ArrowRight size={18} aria-hidden="true" /></a>
      </div>
    </div></section>
  </>;
}
