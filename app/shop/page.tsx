import { ShieldCheck, Wrench, BookOpen } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ShopCatalog } from "@/components/shop-catalog";
import { pageMetadata } from "@/lib/metadata";
import "@/app/shop.css";

export const metadata = pageMetadata(
  "Curated Canadian Tech Shop",
  "Curated hardware, docks, chargers, storage, and desk essentials vetted for Canadian compatibility, electrical standards, and everyday durability.",
  "/shop/",
);

export default function ShopPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CANOD Curated Canadian Tech Shop",
    description:
      "Curated hardware, docks, chargers, storage, and desk essentials vetted for Canadian compatibility and electrical standards.",
    url: "https://canod.ca/shop/",
    publisher: {
      "@type": "Organization",
      name: "CANOD",
      url: "https://canod.ca",
    },
  };

  return (
    <div className="publication-page shop-page">
      <PageIntro
        label="CANOD / Curated Hardware"
        title="Curated tech. Verified for Canada."
      >
        <p>
          Products that earn their place on your desk and in your bag. Every item is
          evaluated against Canadian electrical approvals, genuine compatibility, and practical everyday durability.
        </p>
      </PageIntro>

      {/* Value Proposition Strip */}
      <section className="shop-pillars-strip">
        <div className="site-container pillars-grid">
          <div className="pillar-item">
            <ShieldCheck size={22} className="text-maple" aria-hidden="true" />
            <div>
              <h3>Canadian Safety Vetted</h3>
              <p>cUL, CSA, and cETL electrical verification guidance on all powered gear.</p>
            </div>
          </div>
          <div className="pillar-item">
            <Wrench size={22} className="text-maple" aria-hidden="true" />
            <div>
              <h3>Tool-Backed Compatibility</h3>
              <p>Direct integration with the Dock Checker and Safety Checklist tools.</p>
            </div>
          </div>
          <div className="pillar-item">
            <BookOpen size={22} className="text-maple" aria-hidden="true" />
            <div>
              <h3>Research-Backed Selection</h3>
              <p>No arbitrary recommendations. Each category is grounded in published guides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog */}
      <section className="section-space">
        <div className="site-container">
          <ShopCatalog />
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
