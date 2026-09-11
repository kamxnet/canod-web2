import Link from "next/link";
import { ArrowRight, Cable, ClipboardList } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import { dockToolPath } from "@/lib/dock-sources";
import { safetyToolPath } from "@/lib/safety-sources";

export const metadata = pageMetadata("CANOD Tools", "Practical tools for technology decisions: USB-C dock compatibility and an educational Canadian electrical-product safety checklist.", "/tools/");

export default function ToolsPage() {
  return <div className="publication-page"><PageIntro label="CANOD tools" title="A clearer starting point."><p>Small, practical tools for the details worth checking before you buy.</p></PageIntro><section className="section-space"><div className="site-container tools-index">
    <div className="tool-index-art" aria-hidden="true"><Cable strokeWidth={.7} /><span>01</span></div>
    <div><p className="eyebrow">Available now / Free to use</p><h2>USB-C Dock Compatibility Checker</h2><p>Describe your device, display and charging needs. Get an educational checklist of requirements, limitations and questions to verify, with a downloadable copy.</p><Link className="text-link" href={dockToolPath}>Open the checker <ArrowRight size={18} aria-hidden="true" /></Link><p className="tool-index-note">No account or personal details. Not a compatibility guarantee.</p></div>
  </div></section><section className="section-space tools-safety-index"><div className="site-container tools-index">
    <div className="tool-index-art" aria-hidden="true"><ClipboardList strokeWidth={.7} /><span>02</span></div>
    <div><p className="eyebrow">Safety &amp; standards / Free to use</p><h2>Canadian Electrical Product Safety Checklist</h2><p>Record what you know about a charger, battery, cord or powered accessory. Separate confirmed information, unanswered questions and potential concerns before buying.</p><Link className="text-link" href={safetyToolPath}>Create a safety checklist <ArrowRight size={18} aria-hidden="true" /></Link><p className="tool-index-note">Educational only. No product certification, legal-compliance determination or safety verdict.</p></div>
  </div></section></div>;
}
