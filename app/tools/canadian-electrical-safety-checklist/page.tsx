import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { SafetyChecker } from "@/components/safety-checker";
import { pageMetadata } from "@/lib/metadata";
import { safetyDisclaimer, safetyGuidePath, safetyReviewDate, safetySources, safetyToolPath } from "@/lib/safety-sources";
import "@/app/safety.css";

export const metadata = pageMetadata("Canadian Electrical Product Safety Checklist", "An educational pre-purchase checklist for chargers, powered accessories, cords and batteries. Record confirmed information, unknowns and potential concerns, without a safety verdict.", safetyToolPath);

export default function SafetyChecklistPage() {
  return <div className="publication-page safety-tool-page">
    <PageIntro label="CANOD tool / Safety & standards" title="Canadian Electrical Product Safety Checklist"><p>Know what to ask before you connect. Record the details you have, the information still missing and the questions to resolve.</p></PageIntro>
    <section className="section-space"><div className="site-container">
      <h2 className="sr-only">Your product and pre-purchase checklist</h2><SafetyChecker />
      <div className="safety-tool-notes article-body">
        <p>{safetyDisclaimer}</p>
        <p>For smoke, fire or immediate danger, move away and contact emergency services. Do not test or handle a hazardous item. For non-urgent product concerns, contact the manufacturer or <a href={safetySources.report.url}>report an incident to Health Canada</a>.</p>
        <p>Federal consumer guidance and Ontario approval requirements are identified separately in the <Link href={safetyGuidePath}>seven-check charger guide</Link>. Requirements in other provinces and territories should be confirmed with the relevant electrical safety authority.</p>
        <p>Last reviewed <time dateTime={safetyReviewDate}>September 11, 2026</time>. Based on <Link href={safetyGuidePath + "#sources"}>official sources and the published methodology</Link>. No product inspection or automatic recall search. Answers stay in the open page; downloads are created locally. Printing uses your browser&apos;s print dialog.</p>
      </div>
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", name: "CANOD Canadian Electrical Product Safety Checklist", url: "https://canod.ca" + safetyToolPath, applicationCategory: "UtilitiesApplication", operatingSystem: "Web browser", browserRequirements: "Requires JavaScript for the interactive checklist; a written guide is available without it", description: safetyDisclaimer, isAccessibleForFree: true, publisher: { "@type": "Organization", name: "CANOD", url: "https://canod.ca" } }) }} /></div>;
}
