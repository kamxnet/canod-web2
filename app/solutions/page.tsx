import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  ShoppingBag,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { solutionBlueprints } from "@/lib/solutions-data";
import { pageMetadata } from "@/lib/metadata";
import { TrackSolutionView } from "@/components/analytics-trackers";
import "@/app/solutions.css";

export const metadata = pageMetadata(
  "Setup Solutions & Blueprints",
  "Turnkey setup blueprints for dual-monitor workstations, hybrid travel carry, 3-2-1 backup systems, and safe home office electrical foundations.",
  "/solutions/",
);

export default function SolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CANOD Setup Solutions & Blueprints",
    description:
      "Integrated technology blueprints combining verified hardware, step-by-step verification, and primary research.",
    url: "https://canod.ca/solutions/",
    publisher: {
      "@type": "Organization",
      name: "CANOD",
      url: "https://canod.ca",
    },
  };

  return (
    <div className="publication-page solutions-page">
      <TrackSolutionView solutionName="All Setup Solutions" solutionId="solutions-hub" />
      <PageIntro
        label="CANOD / Setup Solutions"
        title="Tested setups. Zero guesswork."
      >
        <p>
          Technology works best when planned as an integrated system. These blueprints bring together the dock, cables, power, and backup components that belong together.
        </p>
      </PageIntro>

      {/* Solutions Philosophy Banner */}
      <section className="solutions-intro-strip">
        <div className="site-container intro-strip-inner">
          <div className="strip-badge">
            <Layers size={22} className="text-maple" aria-hidden="true" />
            <span>Integrated Architecture</span>
          </div>
          <p className="strip-text">
            Each blueprint pairs <strong>curated hardware</strong> with <strong>verification tools</strong> and <strong>deep-dive guides</strong>, preventing costly return friction and incompatible setups.
          </p>
        </div>
      </section>

      {/* Blueprints Stack */}
      <section className="section-space">
        <div className="site-container solutions-stack">
          {solutionBlueprints.map((blueprint, index) => (
            <article key={blueprint.id} id={blueprint.id} className="solution-card">
              <div className="solution-card-sidebar">
                <span className="solution-number">0{index + 1}</span>
                <span className="solution-badge">{blueprint.badge}</span>
              </div>

              <div className="solution-card-main">
                <div className="solution-heading-block">
                  <h2>{blueprint.consumerTitle}</h2>
                  <p className="eyebrow text-muted" style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    Blueprint: {blueprint.title}
                  </p>
                  <p className="solution-tagline">{blueprint.tagline}</p>
                </div>

                <div className="solution-problem-box">
                  <p className="eyebrow text-maple">Problem Solved</p>
                  <p>{blueprint.problemSolved}</p>
                  <p className="solution-target">
                    <strong>Best for:</strong> {blueprint.targetAudience}
                  </p>
                </div>

                {/* Architecture Breakdown Table/List */}
                <div className="solution-components-block">
                  <p className="eyebrow text-muted">Core Blueprint Components</p>
                  <div className="components-table">
                    {blueprint.coreComponents.map((comp, cIdx) => (
                      <div key={cIdx} className="component-row">
                        <div className="comp-item">
                          <CheckCircle2 size={16} className="text-maple" aria-hidden="true" />
                          <div>
                            <strong>{comp.item}</strong>
                            <span className="comp-role">{comp.role}</span>
                          </div>
                        </div>
                        <div className="comp-spec">{comp.specNote}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pre-purchase Verification Checklist */}
                <div className="solution-verification-block">
                  <p className="eyebrow text-muted">Verification Checklist</p>
                  <ul className="verification-list">
                    {blueprint.verificationSteps.map((step, sIdx) => (
                      <li key={sIdx}>
                        <span className="check-bullet" aria-hidden="true">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Links */}
                <div className="solution-actions-row">
                  <Link
                    href={`/shop/`}
                    className="button button-dark"
                  >
                    <ShoppingBag size={16} aria-hidden="true" />
                    Browse {blueprint.shopCategory} Gear
                  </Link>

                  {blueprint.toolPath && (
                    <Link
                      href={blueprint.toolPath}
                      className="button button-light"
                    >
                      <Wrench size={16} aria-hidden="true" />
                      {blueprint.toolTitle ?? "Run Verification Tool"}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  )}

                  <Link
                    href={`/guides/${blueprint.guideSlug}/`}
                    className="text-link"
                  >
                    <Sparkles size={16} aria-hidden="true" />
                    {blueprint.guideTitle}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Small Business / Enterprise Sourcing Banner */}
      <section className="section-space bg-paper">
        <div className="site-container editorial-split">
          <div>
            <p className="eyebrow text-maple">Commercial &amp; Teams</p>
            <h2>Workstation deployments for teams.</h2>
          </div>
          <div className="text-stack">
            <p>
              Setting up multiple workstations or provisioning a distributed Canadian team?
              We help Canadian businesses identify standardized docks, chargers, and backup policies that minimize IT tickets.
            </p>
            <p>
              Explore our small-business roadmap or discuss wholesale brand partnerships.
            </p>
            <div className="actions">
              <Link href="/partners/" className="button button-dark">
                Wholesale &amp; Brand Inquiries <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/guides/#business" className="text-link">
                Small Business Tech Roadmap <ArrowRight size={16} aria-hidden="true" />
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
