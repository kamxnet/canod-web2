import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { LearnHub } from "@/components/learn-hub";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";
import "@/app/learn.css";

export const metadata = pageMetadata(
  "Technology Explained",
  "Demystifying complex hardware standards, USB-C bandwidth allocations, mesh Wi-Fi protocols, and Canadian surge protection.",
  "/learn/tech-explained/",
);

export default function TechExplainedPage() {
  return (
    <div className="publication-page learn-page">
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/learn/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>All Research Guides</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">Tech Explained</span>
      </nav>

      <PageIntro
        label="CANOD Learn / Tech Explained"
        title="Hardware demystified. Engineering truths."
      >
        <p>
          Clear explanations of why identical-looking USB-C cables perform differently, how mesh nodes route backhaul traffic, and how MOV surge suppressors degrade over time.
        </p>
      </PageIntro>

      <section className="section-space">
        <div className="site-container">
          <LearnHub defaultIntent="tech-explained" />
        </div>
      </section>
    </div>
  );
}
