import Link from "next/link";
import { ArrowLeft, Search, ArrowRight, Info } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";

export const metadata = pageMetadata(
  "Track Sourcing & Orders",
  "Track Canadian technology orders, check team procurement status, or submit tracking inquiries to CANOD.",
  "/support/track-order/",
);

export default function TrackOrderPage() {
  return (
    <div className="publication-page support-page">
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/support/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Support Hub</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">Track Order</span>
      </nav>

      <PageIntro
        label="Support / Tracking"
        title="Check order &amp; sourcing status."
      >
        <p>
          Find tracking details for your Canadian hardware shipments, bulk sourcing bundles, or team hardware inquiries.
        </p>
      </PageIntro>

      <section className="section-space">
        <div className="site-container" style={{ maxWidth: "760px" }}>
          <div className="order-note-alert" style={{ marginBottom: "2.5rem", padding: "1.25rem 1.5rem", background: "var(--surface)", border: "1px solid var(--line)" }}>
            <Info size={22} className="text-maple" aria-hidden="true" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ color: "var(--heading)", display: "block", marginBottom: "0.25rem" }}>
                How Tracking Works on CANOD
              </strong>
              <p style={{ margin: 0, fontSize: "0.9375rem", color: "var(--ink)", lineHeight: 1.6 }}>
                If you purchased through an authorized Canadian retail partner (e.g. Memory Express, Canada Computers, Amazon.ca, or brand direct), carrier tracking was issued directly in your confirmation email from that retailer.
              </p>
            </div>
          </div>

          <div className="suite-tool-card" style={{ padding: "2rem" }}>
            <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--heading)" }}>
              Team Procurement &amp; Sourcing Status Inquiry
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              If you submitted a team hardware sourcing request or wholesale introduction with CANOD, our engineering team manages order status directly with Canadian distributors.
            </p>

            <form
              action="mailto:hello@canod.ca"
              method="get"
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <input type="hidden" name="subject" value="Order / Sourcing Status Request" />
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--heading)", marginBottom: "0.4rem" }}>
                  Reference Number or Organization Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. CANOD-TEAM-1042 or Acme Corp"
                  className="shop-search-input"
                  required
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--heading)", marginBottom: "0.4rem" }}>
                  Contact Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@domain.ca"
                  className="shop-search-input"
                  required
                />
              </div>

              <button type="submit" className="button button-dark" style={{ width: "fit-content" }}>
                <Search size={16} aria-hidden="true" />
                Submit Tracking Status Request
              </button>
            </form>
          </div>

          <div className="actions" style={{ marginTop: "2.5rem", borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
            <Link href="/support/faq/" className="text-link">
              Read Common Questions in our FAQ <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
