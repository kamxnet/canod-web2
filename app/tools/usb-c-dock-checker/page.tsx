import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { DockChecker } from "@/components/dock-checker";
import { pageMetadata } from "@/lib/metadata";
import { dockGuidePath, dockToolPath } from "@/lib/dock-sources";
import "@/app/tools.css";

export const metadata = pageMetadata("USB-C Dock Compatibility Checker", "Create a free educational dock checklist for your computer, monitors, operating system and charging needs. No hardware detection or compatibility guarantee.", dockToolPath);

export default function DockCheckerPage() {
  return <div className="publication-page"><PageIntro label="CANOD tool / 01" title="USB-C Dock Compatibility Checker"><p>Check the whole connection before choosing a dock. Your answers create a checklist, not a product recommendation or a guarantee.</p></PageIntro><section className="section-space"><div className="site-container">
    <h2 className="sr-only">Your setup and checklist</h2><DockChecker />
    <p className="tool-source-note">Based on official USB-IF, VESA, Microsoft, Apple and DisplayLink documentation checked September 11, 2026. See the <Link href={dockGuidePath + "#sources"}>sources and research note</Link>. This tool runs in your browser; it does not send your answers to CANOD.</p>
  </div></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", name: "CANOD USB-C Dock Compatibility Checker", url: "https://canod.ca" + dockToolPath, applicationCategory: "UtilitiesApplication", operatingSystem: "Web browser", browserRequirements: "Requires JavaScript for the interactive checklist", description: "An educational checklist for dock requirements, not a compatibility guarantee.", isAccessibleForFree: true, publisher: { "@type": "Organization", name: "CANOD", url: "https://canod.ca" } }) }} /></div>;
}
