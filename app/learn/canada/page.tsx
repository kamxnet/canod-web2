import Link from "next/link";
import { ArrowLeft, ShieldCheck, Wrench } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { LearnHub } from "@/components/learn-hub";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";
import "@/app/learn.css";

export const metadata = pageMetadata(
  "Canadian Tech & Electrical Safety",
  "Understanding Canadian electrical safety marks (cUL, CSA, cETL), provincial electrical codes, CATSA air travel thresholds, and consumer safety rules.",
  "/learn/canada/",
);

export default function CanadianTechSafetyPage() {
  return (
    <div className="publication-page learn-page">
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/learn/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>All Research Guides</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">Canadian Tech &amp; Safety</span>
      </nav>

      <PageIntro
        label="CANOD Learn / Canadian Standards"
        title="Canadian standards. Electrical safety."
      >
        <p>
          Canada enforces strict provincial electrical safety regulations. Learn how to verify authentic cUL, CSA, and cETL marks, inspect power adapters, and protect your home insurance.
        </p>
      </PageIntro>

      {/* Safety Notice Banner */}
      <section className="site-container" style={{ marginTop: "2rem" }}>
        <div className="safety-statutory-notice">
          <ShieldCheck size={26} className="text-maple" aria-hidden="true" />
          <div>
            <h3>Canadian Regulatory Safety Guidance</h3>
            <p>
              In Ontario (ESA Rule 2-024) and across Canadian provinces, all electrical equipment plugged into mains wall outlets must bear an accredited certification mark. Uncertified chargers sold on third-party marketplaces pose fire hazards and risk invalidating homeowner insurance policies.
            </p>
            <div className="statutory-links">
              <Link href="/tools/canadian-electrical-safety-checklist/" className="button button-light">
                <Wrench size={16} aria-hidden="true" />
                Launch Electrical Safety Checklist
              </Link>
              <Link href="/guides/charger-safety-canada/" className="text-link">
                Read Full Canadian Charger Safety Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <LearnHub defaultIntent="canada" />
        </div>
      </section>
    </div>
  );
}
