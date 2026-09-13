import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";

export const metadata = pageMetadata(
  "Returns & Hardware Replacements Policy",
  "Policy guidance on returns, defective unit replacements, RMA procedures, and pre-return compatibility testing for Canadian tech gear.",
  "/support/returns/",
);

export default function ReturnsSupportPage() {
  return (
    <div className="publication-page support-page">
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/support/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Support Hub</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">Returns &amp; Replacements</span>
      </nav>

      <PageIntro
        label="Support / Returns"
        title="Fair return policies. Verified hardware."
      >
        <p>
          We believe returns should be straightforward when hardware fails or doesn&apos;t match your expectations.
          Here is how returns, warranty RMAs, and compatibility troubleshooting work on CANOD-featured products.
        </p>
      </PageIntro>

      <section className="section-space">
        <div className="site-container" style={{ maxWidth: "840px" }}>
          <div className="article-body">
            <h2>1. Retail Partner Return Windows</h2>
            <p>
              When purchasing curated products through our authorized Canadian partner retailers, your transaction is protected by their standard return policies — typically <strong>30 days from delivery</strong> for unopened or gently evaluated technology hardware.
            </p>

            <h2>2. Compatibility Troubleshooting Before Returning</h2>
            <p>
              A substantial number of returned USB-C docks and cables are not actually broken; rather, they are experiencing protocol mismatches (such as connecting an MST hub to an Apple Silicon Mac, or using an unpowered USB-C cable for high-refresh video).
            </p>
            <p>
              Before packing up equipment for return, we strongly recommend:
            </p>
            <ul>
              <li>Running our free <Link href="/tools/usb-c-dock-checker/">USB-C Dock Compatibility Checker</Link> to diagnose host GPU bandwidth and OS limitations.</li>
              <li>Testing with another known-good USB-C cable (look for the 40 Gbps or 100W logo).</li>
              <li>Testing on a different computer port to confirm whether a specific Thunderbolt controller is encountering sleep-state lockup.</li>
            </ul>

            <h2>3. Defective Units &amp; Warranty RMAs</h2>
            <p>
              If a product purchased through authorized Canadian channels suffers a hardware failure (e.g. failing HDMI port, overheating GaN charger), it is protected by Canadian statutory consumer warranty guidelines and the manufacturer&apos;s warranty (typically 12 to 36 months).
            </p>
            <p>
              Need help locating the Canadian warranty service center for a featured brand? Send an email to <a href="mailto:hello@canod.ca">hello@canod.ca</a> with your product details and we will direct you to the authorized Canadian RMA contact.
            </p>
          </div>

          <div className="actions" style={{ marginTop: "3rem", borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
            <Link href="/tools/usb-c-dock-checker/" className="button button-light">
              <Wrench size={16} aria-hidden="true" />
              Check Compatibility Tool
            </Link>
            <Link href="/support/contact/" className="button button-dark">
              Contact Support Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
