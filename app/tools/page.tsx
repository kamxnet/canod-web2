import Link from "next/link";
import {
  ArrowRight,
  Cable,
  ClipboardList,
  Clock,
  Wrench,
  Sparkles,
  Zap,
  Wifi,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import { dockToolPath } from "@/lib/dock-sources";
import { safetyToolPath } from "@/lib/safety-sources";
import { canodToolsList } from "@/lib/tools-data";
import "@/app/tools.css";

export const metadata = pageMetadata(
  "CANOD Interactive Tools & Calculators — Everyday Tech Problem Solvers",
  "Simple, browser-based tools for everyday technology questions: charger wattage, dual monitor laptop compatibility, and Wi-Fi coverage.",
  "/tools/",
);

export default function ToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CANOD Tools: Practical Technology Calculators",
    description:
      "Browser-based educational compatibility, charging, and Wi-Fi tools for Canadian technology buyers.",
    url: "https://canod.ca/tools/",
    publisher: {
      "@type": "Organization",
      name: "CANOD",
      url: "https://canod.ca",
    },
  };

  return (
    <div className="publication-page tools-page">
      <PageIntro label="CANOD / Tools Suite" title="Tech problems, solved in seconds.">
        <p>
          Free, interactive tools to answer your everyday questions before you buy.
          Our calculators run entirely client-side in your browser with zero tracking, account requirements, or data collection.
        </p>
      </PageIntro>

      {/* Primary Flagship Tools Spotlight */}
      <section className="section-space">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow text-maple">Flagship Problem Solvers</p>
              <h2>Instant Browser Tools</h2>
            </div>
            <p>
              Fully functioning browser-based evaluators. Fast answers with zero sales pressure.
            </p>
          </div>

          <div className="tools-featured-stack">
            {/* Live Tool 1: Charger Calculator */}
            <div className="tool-featured-card">
              <div className="tool-featured-art" aria-hidden="true">
                <Zap size={44} strokeWidth={1.25} color="#2563eb" />
                <span className="tool-featured-num">01</span>
              </div>
              <div className="tool-featured-content">
                <div className="tool-status-row">
                  <span className="tool-active-badge">Free Instant Calculator</span>
                  <span className="tool-category-badge">Power &amp; Charging</span>
                </div>
                <h3>Which charger do I need for my phone and laptop?</h3>
                <p className="eyebrow text-muted" style={{ marginBottom: "0.75rem", fontSize: "0.8rem" }}>
                  Charger Wattage &amp; Fast-Charging Calculator
                </p>
                <p>
                  Find out exactly how many watts your charger needs so your laptop stays charged during heavy use while simultaneously fast-charging your phone without slowing down.
                </p>
                <div className="tool-inputs-summary">
                  <strong>What it calculates:</strong> Single vs multi-port wattage splitting, GaN size tiers (30W, 65W, 100W, 140W), and cable wattage limits (60W vs 100W/240W).
                </div>
                <div className="actions">
                  <Link className="button button-dark" href="/tools/charger-wattage-calculator/">
                    Calculate Charger Size Now <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className="text-link" href="/guides/which-charger-do-i-need/">
                    Read Charger Guide <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <p className="tool-featured-note">Client-side calculator. Solves the multi-device travel charger dilemma.</p>
              </div>
            </div>

            {/* Live Tool 2: Dock Checker */}
            <div className="tool-featured-card">
              <div className="tool-featured-art" aria-hidden="true">
                <Cable size={44} strokeWidth={1.25} color="#2563eb" />
                <span className="tool-featured-num">02</span>
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
                  Select your laptop model and monitors to immediately see whether your computer can show two different extended screens, whether DisplayLink is required on a Mac, and if your laptop will charge at full speed.
                </p>
                <div className="tool-inputs-summary">
                  <strong>What it checks:</strong> Apple Silicon MacBook single-screen limits, Windows MST dual extended display support, and laptop power delivery.
                </div>
                <div className="actions">
                  <Link className="button button-dark" href={dockToolPath}>
                    Check Monitor Compatibility <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className="text-link" href="/guides/seven-things-usb-c-dock/">
                    Read Dual Monitor Guide <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <p className="tool-featured-note">Updated with consumer laptop presets (MacBook Air, Pro, Dell, Lenovo, Surface).</p>
              </div>
            </div>

            {/* Live Tool 3: Wi-Fi Calculator */}
            <div className="tool-featured-card">
              <div className="tool-featured-art" aria-hidden="true">
                <Wifi size={44} strokeWidth={1.25} color="#059669" />
                <span className="tool-featured-num">03</span>
              </div>
              <div className="tool-featured-content">
                <div className="tool-status-row">
                  <span className="tool-active-badge">Free Instant Tool</span>
                  <span className="tool-category-badge">Home Wi-Fi</span>
                </div>
                <h3>How can I improve my Wi-Fi coverage?</h3>
                <p className="eyebrow text-muted" style={{ marginBottom: "0.75rem", fontSize: "0.8rem" }}>
                  Wi-Fi Coverage &amp; Node Placement Tool
                </p>
                <p>
                  Find out whether repositioning your existing router, upgrading to Wi-Fi 6, or investing in a 2-node mesh system will eliminate dead zones upstairs and in the basement.
                </p>
                <div className="tool-inputs-summary">
                  <strong>What it checks:</strong> Home square footage, floor penetration, modem location, and the golden node placement rule to avoid dead zone traps.
                </div>
                <div className="actions">
                  <Link className="button button-dark" href="/tools/wifi-coverage-calculator/">
                    Check My Wi-Fi Coverage <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className="text-link" href="/guides/wifi-slow-in-one-room/">
                    Read Wi-Fi Guide <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <p className="tool-featured-note">Diagnoses the real wireless bottleneck before you spend money on equipment.</p>
              </div>
            </div>

            {/* Live Tool 4: Safety Checklist */}
            <div className="tool-featured-card">
              <div className="tool-featured-art" aria-hidden="true">
                <ClipboardList size={44} strokeWidth={1.25} />
                <span className="tool-featured-num">04</span>
              </div>
              <div className="tool-featured-content">
                <div className="tool-status-row">
                  <span className="tool-active-badge">Free Safety Audit</span>
                  <span className="tool-category-badge">Canadian Electrical Safety</span>
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
                <p className="tool-featured-note">Educational checklist. Does not physically test hardware or authenticate marks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Tools Suite Grid */}
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
                        <span>Coming soon — verified calculation engine in development.</span>
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
