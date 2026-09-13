import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";

export const metadata = pageMetadata(
  "Canadian Shipping & Delivery Information",
  "Transparent delivery guidance for Canadian technology purchases: domestic carriers, zero border customs fees, and authorized distributor fulfillment.",
  "/support/shipping/",
);

export default function ShippingSupportPage() {
  return (
    <div className="publication-page support-page">
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/support/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Support Hub</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">Shipping &amp; Delivery</span>
      </nav>

      <PageIntro
        label="Support / Fulfillment"
        title="Domestic Canadian shipping. Zero surprises."
      >
        <p>
          Unlike international dropshippers that ship from overseas with weeks of delay and surprise CBSA duty invoices,
          CANOD focuses exclusively on hardware with verified Canadian domestic distribution.
        </p>
      </PageIntro>

      <section className="section-space">
        <div className="site-container" style={{ maxWidth: "840px" }}>
          <div className="article-body">
            <h2>1. Domestic Canadian Distribution</h2>
            <p>
              When purchasing hardware featured on CANOD through our verified Canadian retail and distribution partners, products ship directly from warehouses within Canada (typically in the Greater Toronto Area, Greater Vancouver, or Calgary hubs).
            </p>

            <h2>2. No Surprise CBSA Import Duties</h2>
            <p>
              Ordering electronics from unvetted international sellers often results in unexpected import brokerage fees (frequently $20 to $50 CAD from major couriers) plus provincial sales tax collection upon delivery. By focusing on domestic Canadian stock, the price you pay at checkout is final.
            </p>

            <h2>3. Estimated Carrier Timelines</h2>
            <p>
              Authorized Canadian partner shipments generally utilize Canada Post Expedited Parcel, Purolator, UPS Canada, or FedEx Express:
            </p>
            <ul>
              <li><strong>Major Canadian Urban Centers (GTA, Montreal, Ottawa, Calgary, Edmonton, Vancouver):</strong> 1 to 3 business days.</li>
              <li><strong>Regional Centers &amp; Atlantic Canada:</strong> 2 to 5 business days.</li>
              <li><strong>Northern Territories &amp; Remote Communities:</strong> 4 to 8 business days (primarily via Canada Post).</li>
            </ul>

            <h2>4. Team &amp; Bulk Procurement Fulfillment</h2>
            <p>
              For businesses, startups, and remote teams needing multiple workstation bundles or standardized USB-C dock setups, direct bulk distributor shipping with consolidated invoicing is available. Contact our team at <a href="mailto:hello@canod.ca">hello@canod.ca</a> to coordinate logistics.
            </p>
          </div>

          <div className="actions" style={{ marginTop: "3rem", borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
            <Link href="/shop/" className="button button-dark">
              Browse Curated Hardware <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/support/contact/" className="button button-light">
              Contact Support <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
