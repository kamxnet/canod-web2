import Link from "next/link";
import { ArrowRight, ShieldCheck, Scale, FileText } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { LearnHub } from "@/components/learn-hub";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";
import "@/app/learn.css";

export const metadata = pageMetadata(
  "Learn & Technology Guides",
  "Research-based Canadian guides to Wi-Fi, mesh networks, USB-C docks, portable power, backups, and electrical safety standards.",
  "/learn/",
);

export default function LearnPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CANOD Learn: Practical Technology Guides",
    description:
      "Deep research-based guides on home networking, USB-C connectivity, backup architecture, and Canadian electrical safety standards.",
    url: "https://canod.ca/learn/",
    publisher: {
      "@type": "Organization",
      name: "CANOD",
      url: "https://canod.ca",
    },
  };

  return (
    <div className="publication-page learn-page">
      <PageIntro
        label="CANOD / Knowledge Center"
        title="Clear guidance. Real trade-offs."
      >
        <p>
          We research the questions product listings don&apos;t answer. From dual-monitor bandwidth limits to Canadian electrical approval marks, explore our research-backed guides.
        </p>
      </PageIntro>

      {/* Trust & Methodology Strip */}
      <section className="learn-method-strip">
        <div className="site-container method-grid">
          <div className="method-item">
            <Scale size={20} className="text-maple" aria-hidden="true" />
            <div>
              <h3>Primary Source Citations</h3>
              <p>Direct references to USB-IF, VESA, Health Canada, and Ontario ESA.</p>
            </div>
          </div>
          <div className="method-item">
            <ShieldCheck size={20} className="text-maple" aria-hidden="true" />
            <div>
              <h3>Zero Unlabelled Affiliate Links</h3>
              <p>Strictly independent research. No paid product placements.</p>
            </div>
          </div>
          <div className="method-item">
            <FileText size={20} className="text-maple" aria-hidden="true" />
            <div>
              <h3>Canadian Regulatory Context</h3>
              <p>ISED radio guidelines, CATSA air travel thresholds, and provincial codes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Guides Explorer */}
      <section className="section-space">
        <div className="site-container">
          <LearnHub />
        </div>
      </section>

      {/* Editorial Standards Callout */}
      <section className="section-space bg-paper">
        <div className="site-container editorial-split">
          <div>
            <p className="eyebrow text-maple">Editorial Integrity</p>
            <h2>How we evaluate technology.</h2>
          </div>
          <div className="text-stack">
            <p>
              Our guides combine technical specification analysis with practical daily considerations. We distinguish certified facts from manufacturer marketing, and provide Canadian context for availability, warranties, and electrical safety.
            </p>
            <p>
              Found an outdated specification or want to suggest a topic? Read our standards or send a note.
            </p>
            <div className="actions">
              <Link href="/editorial-standards/" className="button button-light">
                Editorial Standards <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/contact/" className="text-link">
                Send a Correction <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
