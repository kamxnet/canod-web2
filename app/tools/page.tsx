import Link from "next/link";
import {
  ArrowRight,
  Cable,
  ClipboardList,
  Clock,
  Wrench,
  Sparkles,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import { dockToolPath } from "@/lib/dock-sources";
import { safetyToolPath } from "@/lib/safety-sources";
import { canodToolsList } from "@/lib/tools-data";
import "@/app/tools.css";

export const metadata = pageMetadata(
  "CANOD Interactive Tools & Calculators",
  "Browser-based engineering tools for technology decisions: USB-C dock compatibility, charger wattage curves, Wi-Fi placement, and Canadian electrical safety checklists.",
  "/tools/",
);

export default function ToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CANOD Tools: Practical Technology Calculators",
    description:
      "Browser-based educational compatibility and safety tools for Canadian technology buyers.",
    url: "https://canod.ca/tools/",
    publisher: {
      "@type": "Organization",
      name: "CANOD",
      url: "https://canod.ca",
    },
  };

  return (
    <div className="publication-page tools-page">
      <PageIntro label="CANOD / Tools Suite" title="A clearer starting point.">
        <p>
          Small, practical tools for the engineering details worth checking before you buy.
          Our calculators run entirely client-side in your browser with zero tracking, account requirements, or data collection.
        </p>
      </PageIntro>

      {/* Primary Live Tools Spotlight */}
      <section className="section-space">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow text-maple">Interactive Rule Engines</p>
              <h2>Active Functional Tools</h2>
            </div>
            <p>
              Fully functioning browser-based evaluators. Tested against thousands of hardware permutations.
            </p>
          </div>

          <div className="tools-featured-stack">
            {/* Live Tool 1: Dock Checker */}
            <div className="tool-featured-card">
              <div className="tool-featured-art" aria-hidden="true">
                <Cable size={48} strokeWidth={1} />
                <span className="tool-featured-num">01</span>
              </div>
              <div className="tool-featured-content">
                <div className="tool-status-row">
                  <span className="tool-active-badge">Free Instant Checker</span>
                  <span className="tool-category-badge">Monitors &amp; Docks</span>
                </div>
                <h3>Will two monitors work with my laptop?</h3>
                <p className="eyebrow text-muted" style={{ marginBottom: "0.75rem", fontSize: "0.8rem" }}>
                  USB-C Dock &amp; Dual Monitor Compatibility Checker
                </p>
                <p>
                  Answer a few simple questions about your laptop model, operating system, and screens.
                  Our rule engine checks 25,200 hardware combinations in seconds to tell you whether two screens will work before you buy adapters.
                </p>
                <div className="tool-inputs-summary">
                  <strong>What it checks:</strong> Mac vs. Windows dual screen limits, DisplayPort speeds, whether your laptop will charge at full speed, and required cable types.
                </div>
                <div className="actions">
                  <Link className="button button-dark" href={dockToolPath}>
                    Run 30-Second Compatibility Check <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className="text-link" href="/guides/seven-things-usb-c-dock/">
                    Read Companion Guide <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <p className="tool-featured-note">Runs locally in your browser. Includes a printable pre-purchase checklist.</p>
              </div>
            </div>

            {/* Live Tool 2: Safety Checklist */}
            <div className="tool-featured-card">
              <div className="tool-featured-art" aria-hidden="true">
                <ClipboardList size={48} strokeWidth={1} />
                <span className="tool-featured-num">02</span>
              </div>
              <div className="tool-featured-content">
                <div className="tool-status-row">
                  <span className="tool-active-badge">Free Safety Audit</span>
                  <span className="tool-category-badge">Canadian Safety &amp; Electrical</span>
                </div>
                <h3>Is my charger or power bar safe to plug in?</h3>
                <p className="eyebrow text-muted" style={{ marginBottom: "0.75rem", fontSize: "0.8rem" }}>
                  Canadian Electrical Product Safety Checklist
                </p>
                <p>
                  Record what you see on the back of any charger, power bar, or battery before plugging it in.
                  Separates legitimate Canadian electrical marks (cUL, CSA, cETL) from uncertified imports and dangerous fire hazards.
                </p>
                <div className="tool-inputs-summary">
                  <strong>What it checks:</strong> Recognized Canadian safety approval marks, 3-prong grounding, proper cord thickness, and provincial electrical regulations.
                </div>
                <div className="actions">
                  <Link className="button button-dark" href={safetyToolPath}>
                    Check Product Safety Now <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className="text-link" href="/guides/charger-safety-canada/">
                    Read Canadian Safety Guide <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <p className="tool-featured-note">Educational only. Does not physically test hardware or authenticate marks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete CANOD Tools Suite Grid (Live + Coming Soon) */}
      <section className="section-space bg-paper">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow text-maple">Problem-Solving Tools</p>
              <h2>Simple questions.<br />Accurate answers.</h2>
            </div>
            <p>
              We build free tools to answer normal everyday tech questions without confusing jargon or marketing bias.
            </p>
          </div>

          <div className="tools-full-suite-grid">
            {canodToolsList.map((tool) => {
              const isLive = tool.status === "live";
              return (
                <article
                  key={tool.id}
                  id={tool.id}
                  className={`suite-tool-card ${isLive ? "is-live" : "is-coming-soon"}`}
                >
                  <div className="suite-card-top">
                    <span
                      className={`suite-status-pill ${
                        isLive ? "live-pill" : "soon-pill"
                      }`}
                    >
                      {tool.badge}
                    </span>
                    <span className="suite-category-label">{tool.category}</span>
                  </div>

                  <h3 className="suite-tool-name">{tool.question}</h3>
                  <p className="eyebrow text-muted" style={{ fontSize: "0.75rem", marginBottom: "0.6rem" }}>
                    {tool.name}
                  </p>
                  <p className="suite-tool-tagline">{tool.tagline}</p>
                  <p className="suite-tool-desc">{tool.description}</p>

                  {/* Planned Inputs & Outputs Preview */}
                  <div className="suite-preview-box">
                    <div className="preview-column">
                      <span className="preview-label">Input Parameters:</span>
                      <ul>
                        {tool.inputsPreview.slice(0, 3).map((inp, idx) => (
                          <li key={idx}>{inp}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="preview-column">
                      <span className="preview-label">Generated Results:</span>
                      <ul>
                        {tool.outputsPreview.slice(0, 3).map((out, idx) => (
                          <li key={idx}>{out}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="suite-card-footer">
                    {isLive ? (
                      <Link href={tool.path} className="button button-dark suite-cta-btn">
                        <Wrench size={16} aria-hidden="true" />
                        <span>Launch Tool</span>
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    ) : (
                      <div className="suite-coming-soon-notice">
                        <Clock size={16} className="text-muted" aria-hidden="true" />
                        <span>Architecture planned. Coming soon — no calculation faked.</span>
                      </div>
                    )}

                    <div className="suite-companion-links">
                      <Link
                        href={`/guides/${tool.companionGuideSlug}/`}
                        className="suite-guide-link"
                      >
                        <Sparkles size={14} aria-hidden="true" />
                        <span>Read Companion Guide: {tool.companionGuideTitle}</span>
                        <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
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
