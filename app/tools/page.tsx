import Link from "next/link";
import { ArrowRight, Cable } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import { dockToolPath } from "@/lib/dock-sources";

export const metadata = pageMetadata("CANOD Tools", "Practical tools for technology decisions. Start with the free USB-C Dock Compatibility Checker and create an educational buying checklist.", "/tools/");

export default function ToolsPage() {
  return <div className="publication-page"><PageIntro label="CANOD tools" title="A clearer starting point."><p>Small, practical tools for the details worth checking before you buy.</p></PageIntro><section className="section-space"><div className="site-container tools-index">
    <div className="tool-index-art" aria-hidden="true"><Cable strokeWidth={.7} /><span>01</span></div>
    <div><p className="eyebrow">Available now / Free to use</p><h2>USB-C Dock Compatibility Checker</h2><p>Describe your device, display and charging needs. Get an educational checklist of requirements, limitations and questions to verify, with a downloadable copy.</p><Link className="text-link" href={dockToolPath}>Open the checker <ArrowRight size={18} aria-hidden="true" /></Link><p className="tool-index-note">No account or personal details. Not a compatibility guarantee.</p></div>
  </div></section></div>;
}
