import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";

export const metadata = pageMetadata(
  "Canadian Warranty & Hardware Protection",
  "Understanding manufacturer warranties, statutory consumer protection in Canadian provinces, and RMA service coverage for tech hardware.",
  "/support/warranty/",
);

export default function WarrantySupportPage() {
  return (
    <div className="publication-page support-page">
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/support/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Support Hub</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">Warranty Guidance</span>
      </nav>

      <PageIntro
        label="Support / Warranty"
        title="Hardware guarantees &amp; Canadian protection."
      >
        <p>
          Buying technology in Canada comes with statutory consumer protections and manufacturer warranty obligations.
          Here is how to ensure your investment is covered when hardware develops a defect.
        </p>
      </PageIntro>

      <section className="section-space">
        <div className="site-container" style={{ maxWidth: "840px" }}>
          <div className="article-body">
            <h2>1. Canadian Authorized Distributor Warranty Rights</h2>
            <p>
              Hardware brands enforce strict &quot;grey market&quot; policies. If you purchase equipment from an unauthorized offshore seller on a marketplace, the manufacturer may void the North American warranty. Every product featured on CANOD is vetted for authorized Canadian distribution, guaranteeing valid manufacturer warranty coverage.
            </p>

            <h2>2. Standard Coverage Periods</h2>
            <ul>
              <li><strong>Thunderbolt 4 &amp; USB4 Docks:</strong> 2 to 3 years standard manufacturer replacement warranty.</li>
              <li><strong>GaN Chargers &amp; Desktop Power Hubs:</strong> 12 to 24 months defect warranty with surge protection guarantees.</li>
              <li><strong>Portable NVMe Enclosures &amp; SSDs:</strong> 3 to 5 years limited hardware warranty.</li>
              <li><strong>Cables &amp; Passive Adapters:</strong> Lifetime or 2-year warranty against build defects.</li>
            </ul>

            <h2>3. Provincial Statutory Consumer Protection</h2>
            <p>
              Under Canadian provincial law (such as the Ontario Consumer Protection Act and Quebec Consumer Protection Act legal warranty provisions), goods sold must be durable for a reasonable period considering the price paid and the nature of the product.
            </p>

            <h2>4. What to Do If Hardware Fails</h2>
            <ol>
              <li>Retain your proof of purchase (invoice or receipt from the authorized Canadian partner).</li>
              <li>Check serial number labels on the bottom of the device or power brick.</li>
              <li>Reach out to the manufacturer&apos;s Canadian support desk or contact <a href="mailto:hello@canod.ca">hello@canod.ca</a> if you need assistance identifying the Canadian RMA portal.</li>
            </ol>
          </div>

          <div className="actions" style={{ marginTop: "3rem", borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
            <Link href="/support/contact/" className="button button-dark">
              Ask a Warranty Question <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/shop/" className="button button-light">
              Browse Curated Canadian Hardware <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
