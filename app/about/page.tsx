import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About CANOD", "CANOD is a Canadian-owned practical-technology publication. Research-based guides and useful tools for connected workspaces, storage and portable work.", "/about/");

export default function AboutPage() {
  return <div className="publication-page">
    <PageIntro label="About CANOD" title="A practical point of view."><p>CANOD helps Canadians choose practical technology that works together: at work, on the move and behind the scenes.</p></PageIntro>
    <section className="section-space bg-paper"><div className="site-container editorial-split">
      <div><p className="eyebrow text-maple">The idea</p><h2>Make the everyday a little easier.</h2></div>
      <div className="text-stack">
        <p>A pouch that fits the things you carry. A place for the cables on your desk. Storage that makes sense for your household. CANOD is built around ordinary needs that deserve a thoughtful answer.</p>
        <p>We write for Canadian professionals, remote and hybrid workers, travellers, freelancers and small-business owners. We look at purpose, compatibility and the details that help someone decide whether a product belongs in their life.</p>
        <p>That same approach shapes our buying guides: explain the trade-offs, check the facts and leave room for the answer to be &ldquo;you may not need this.&rdquo;</p>
        <Link className="text-link" href="/guides/">Explore the buying guides <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </div></section>
    <section className="section-space"><div className="site-container editorial-split">
      <div><p className="eyebrow text-maple">A Canadian perspective</p><h2>Useful guidance. Clear relationships.</h2></div>
      <div className="text-stack">
        <p>CANOD is Canadian-owned. Our publication focuses on connected workspaces, storage and backup, and portable work. Canadian availability, pricing and total ownership cost belong in the decision.</p>
        <p>Our current guides are research-based, not hands-on product tests. The free dock checker creates educational questions to verify, not a compatibility guarantee. Dedicated small-business software coverage will be introduced gradually.</p>
        <p>CANOD began with practical product discovery and sourcing interests. Those <Link href="/interests/">sourcing interests</Link> and the <Link href="/partners/">brand enquiry page</Link> remain available, but they are not a shopping catalogue. The publication and its tools are now our primary focus.</p>
        <p>Our current content contains no affiliate links. Future commercial relationships will be identified alongside the affected content; see our <Link href="/affiliate-disclosure/">affiliate disclosure policy</Link>.</p>
        <a className="text-link" href="mailto:hello@canod.ca">Contact CANOD <ArrowRight size={18} aria-hidden="true" /></a>
      </div>
    </div></section>
  </div>;
}
