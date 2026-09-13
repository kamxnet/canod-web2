import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { LearnHub } from "@/components/learn-hub";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";
import "@/app/learn.css";

export const metadata = pageMetadata(
  "Technology Buying Guides",
  "Unbiased pre-purchase research and specification checks for USB-C docks, power banks, home NAS servers, and tech organizers.",
  "/learn/buying-guides/",
);

export default function BuyingGuidesPage() {
  return (
    <div className="publication-page learn-page">
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/learn/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>All Research Guides</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">Buying Guides</span>
      </nav>

      <PageIntro
        label="CANOD Learn / Buying Guides"
        title="Unbiased research. Pre-purchase criteria."
      >
        <p>
          Before spending money on docks, chargers, or network storage, check protocol compatibility, host power headroom, and airline watt-hour restrictions.
        </p>
      </PageIntro>

      <section className="section-space">
        <div className="site-container">
          <LearnHub defaultIntent="buying-guides" />
        </div>
      </section>
    </div>
  );
}
