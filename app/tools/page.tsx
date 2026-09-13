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
                  <span className="tool-active-badge">Active Tool</span>
                  <span className="tool-category-badge">Connectivity &amp; Displays</span>
                </div>
                <h3>USB-C Dock &amp; Dual Monitor Compatibility Checker</h3>
                <p>
                  Describe your device, operating system, host port, and monitor setup.
                  Our rule engine evaluates 25,200 hardware combinations to generate an instant compatibility report of requirements, limitations, and questions to verify.
                </p>
                <div className="tool-inputs-summary">
                  <strong>Evaluates:</strong> Apple Silicon vs Intel/AMD GPU limits, DisplayPort 1.2 vs 1.4 bandwidth, macOS MST vs Thunderbolt dual display requirements, and 45W to 100W+ charging headroom.
                </div>
                <div className="actions">
                  <Link className="button button-dark" href={dockToolPath}>
                    Launch Dock Compatibility Checker <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className="text-link" href="/guides/seven-things-usb-c-dock/">
                    Read Companion Research Guide <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <p className="tool-featured-note">Runs locally in your browser. Downloadable .txt verification report included.</p>
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
                  <span className="tool-active-badge">Active Tool</span>
                  <span className="tool-category-badge">Canadian Standards &amp; Safety</span>
                </div>
                <h3>Canadian Electrical Product Safety Checklist</h3>
                <p>
                  Record what you know about a charger, power bar, cord, or battery before purchasing.
                  Evaluates 183,708 product inspection permutations to separate confirmed SCC-accredited marks (cUL, CSA, cETL), missing specifications, and potential fire red flags.
                </p>
                <div className="tool-inputs-summary">
                  <strong>Evaluates:</strong> SCC accredited test laboratory markings, genuine manufacturer model transparency, Canadian 120V mains ratings, and provincial electrical code requirements.
                </div>
                <div className="actions">
                  <Link className="button button-dark" href={safetyToolPath}>
                    Create Electrical Safety Checklist <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className="text-link" href="/guides/charger-safety-canada/">
                    Read Canadian Charger Safety Guide <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <p className="tool-featured-note">Educational only. Does not inspect hardware, authenticate marks, or query recall databases.</p>
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
              <p className="eyebrow text-maple">CANOD Engineering Architecture</p>
              <h2>Hardware Calculators &amp; Checkers</h2>
            </div>
            <p>
              Purpose-built tools designed to solve specific Canadian technology problems.
              We never fake calculator results — tools in development are marked clearly as &quot;Coming Soon&quot;.
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

                  <h3 className="suite-tool-name">{tool.name}</h3>
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
