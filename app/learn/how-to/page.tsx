import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { LearnHub } from "@/components/learn-hub";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";
import "@/app/learn.css";

export const metadata = pageMetadata(
  "How-To Technology Guides",
  "Actionable step-by-step troubleshooting and configuration guides for Canadian home Wi-Fi, USB-C power diagnostics, and backup storage sizing.",
  "/learn/how-to/",
);

export default function HowToGuidesPage() {
  return (
    <div className="publication-page learn-page">
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/learn/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>All Research Guides</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">How-To Guides</span>
      </nav>

      <PageIntro
        label="CANOD Learn / How-To"
        title="Actionable steps. Tested solutions."
      >
        <p>
          Troubleshooting slow room Wi-Fi, diagnosing USB-C charging problems, and sizing backup storage.
          Numbered engineering procedures designed to fix the problem without buying unnecessary equipment.
        </p>
      </PageIntro>

      <section className="section-space">
        <div className="site-container">
          <LearnHub defaultIntent="how-to" />
        </div>
      </section>
    </div>
  );
}
