import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  BookOpen,
  Sparkles,
  ShoppingBag,
  HelpCircle,
  Cpu,
  Layers,
  Info,
} from "lucide-react";
import { shopItems, type ShopItem } from "@/lib/shop-data";
import { pageMetadata } from "@/lib/metadata";
import { ProductClickLink } from "@/components/analytics-trackers";
import "@/app/shop.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return shopItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = shopItems.find((p) => p.slug === slug);
  if (!item) return { title: "Product Not Found | CANOD" };

  return pageMetadata(
    `${item.name} | Curated Hardware`,
    `${item.tagline} Vetted for Canadian compatibility, electrical standards, and practical durability.`,
    `/shop/${item.slug}/`,
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = shopItems.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  // Find related products
  const relatedProducts = (item.relatedProductSlugs ?? [])
    .map((rSlug) => shopItems.find((p) => p.slug === rSlug))
    .filter((p): p is ShopItem => p !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    description: item.description,
    category: item.category,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      description: item.availabilityStatus,
    },
    brand: {
      "@type": "Brand",
      name: "CANOD Vetted Selection",
    },
  };

  return (
    <div className="publication-page product-page">
      {/* Breadcrumbs */}
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/shop/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Back to Curated Shop</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <Link href="/shop/" className="breadcrumb-muted">{item.category}</Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">{item.subcategory}</span>
      </nav>

      {/* Main Product Hero / Overview */}
      <section className="product-hero-section">
        <div className="site-container product-hero-grid">
          {/* Left: Product Schematic Artwork & Visual Badging */}
          <div className="product-visual-card">
            <div className="visual-card-canvas">
              <div className="visual-graphic-badge">
                <Cpu size={44} strokeWidth={1.25} className="text-maple" aria-hidden="true" />
              </div>
              <div className="visual-category-label">
                <span>{item.category}</span>
                <span className="dot">•</span>
                <span>{item.subcategory}</span>
              </div>
              <p className="visual-name-title">{item.name}</p>
              <div className="visual-schematic-footer">
                <span className="schematic-tag">CANOD Engineering Review</span>
                <span className="schematic-tag">Canadian Vetted</span>
              </div>
            </div>

            {/* Quality Seals */}
            <div className="product-trust-strip">
              <div className="trust-item">
                <ShieldCheck size={18} className="text-maple" aria-hidden="true" />
                <span>Verified Canadian Standards</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={18} className="text-maple" aria-hidden="true" />
                <span>Zero Paid Endorsements</span>
              </div>
            </div>
          </div>

          {/* Right: Essential Purchase & Positioning Details */}
          <div className="product-summary-card">
            <div className="product-meta-row">
              <span className="product-category-pill">{item.category}</span>
              {item.badge && <span className="product-badge-pill">{item.badge}</span>}
            </div>

            <h1 className="product-title">{item.name}</h1>
            <p className="product-tagline">{item.tagline}</p>

            <div className="product-best-for-callout">
              <strong className="best-for-label">Best For:</strong>
              <p>{item.bestFor}</p>
            </div>

            {/* Sourcing & Status Box */}
            <div className="product-sourcing-box">
              <div className="sourcing-row">
                <span className="sourcing-label">Availability</span>
                <span className="sourcing-value">{item.availabilityStatus}</span>
              </div>
              <div className="sourcing-row">
                <span className="sourcing-label">Canadian Pricing</span>
                <span className="sourcing-value price-highlight">{item.priceDisplay}</span>
              </div>
            </div>

            {/* Procurement / Order Trigger */}
            <div className="product-action-zone">
              <div className="order-note-alert">
                <Info size={18} className="text-maple" aria-hidden="true" />
                <p>
                  CANOD operates as a research publication and hardware engineering directory.
                  Products are curated for independent purchase across authorized Canadian distributors and partner channels.
                </p>
              </div>

              <div className="product-button-stack">
                <Link
                  href="/interests/"
                  className="button button-dark product-cta-btn"
                >
                  <ShoppingBag size={18} aria-hidden="true" />
                  Request Sourcing / Inquiry
                </Link>
                <Link
                  href="/partners/"
                  className="button button-ghost product-secondary-btn"
                >
                  Brand or Wholesale Enquiries
                </Link>
              </div>
            </div>

            {/* Prominent Compatibility CTA */}
            <div className="product-compatibility-banner">
              <div className="comp-banner-content">
                <HelpCircle size={24} className="text-maple" aria-hidden="true" />
                <div>
                  <h3 className="comp-banner-title">Will this work with my setup?</h3>
                  <p className="comp-banner-desc">
                    Compatibility depends on host port generation (Thunderbolt 4, USB4, or DisplayPort Alt Mode) and laptop power limits.
                  </p>
                </div>
              </div>
              {item.toolPath ? (
                <Link href={item.toolPath} className="button button-light comp-tool-cta">
                  <Wrench size={16} aria-hidden="true" />
                  {item.toolTitle ?? "Launch Compatibility Tool"}
                </Link>
              ) : (
                <Link href="/tools/" className="button button-light comp-tool-cta">
                  <Wrench size={16} aria-hidden="true" />
                  Check CANOD Interactive Tools
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections Tabs / Stacks */}
      <section className="section-space product-details-section">
        <div className="site-container product-detail-layout">
          {/* Main Column */}
          <div className="product-main-content">
            {/* Why CANOD Recommends It */}
            <div className="detail-card">
              <div className="detail-card-header">
                <Sparkles size={20} className="text-maple" aria-hidden="true" />
                <h2>Why CANOD Recommends It</h2>
              </div>
              <div className="detail-card-body">
                <p className="recommendation-text">{item.whyCanodRecommends}</p>
                <p className="recommendation-secondary">{item.description}</p>
              </div>
            </div>

            {/* Compatibility */}
            <div className="detail-card">
              <div className="detail-card-header">
                <CheckCircle2 size={20} className="text-maple" aria-hidden="true" />
                <h2>Compatibility & System Requirements</h2>
              </div>
              <div className="detail-card-body">
                <ul className="compatibility-list">
                  {item.compatibility.map((req, idx) => (
                    <li key={idx} className="comp-item">
                      <span className="comp-check-bullet" aria-hidden="true" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specifications */}
            <div className="detail-card">
              <div className="detail-card-header">
                <Layers size={20} className="text-maple" aria-hidden="true" />
                <h2>Verified Technical Specifications</h2>
              </div>
              <div className="detail-card-body">
                <div className="spec-table">
                  {item.specifications.map((spec, idx) => (
                    <div key={idx} className="spec-table-row">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Canadian Information */}
            <div className="detail-card canadian-standards-card">
              <div className="detail-card-header">
                <ShieldCheck size={20} className="text-maple" aria-hidden="true" />
                <h2>Canadian Information & Electrical Standards</h2>
              </div>
              <div className="detail-card-body">
                <p className="standards-desc">{item.canadianInformation}</p>
                <div className="standards-guidance-box">
                  <strong>Safety Notice:</strong> Under Canadian provincial electrical safety regulations, all plug-in power adapters must bear recognized safety marks (such as CSA, cUL, or cETL). CANOD only recommends power equipment meeting Canadian electrical code requirements.
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Companion Resources */}
          <aside className="product-sidebar">
            {/* Related CANOD Research Guide */}
            {item.guideSlug && (
              <div className="sidebar-widget">
                <div className="widget-header">
                  <BookOpen size={18} className="text-maple" aria-hidden="true" />
                  <p className="eyebrow text-muted">Related CANOD Guide</p>
                </div>
                <h3 className="widget-title">{item.guideTitle}</h3>
                <p className="widget-desc">
                  Understand the underlying engineering trade-offs, port protocols, and buying criteria before purchasing.
                </p>
                <Link
                  href={`/guides/${item.guideSlug}/`}
                  className="widget-link"
                >
                  <span>Read In-Depth Guide</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            )}

            {/* Related CANOD Tool */}
            {item.toolPath && (
              <div className="sidebar-widget tool-widget">
                <div className="widget-header">
                  <Wrench size={18} className="text-maple" aria-hidden="true" />
                  <p className="eyebrow text-muted">Related CANOD Tool</p>
                </div>
                <h3 className="widget-title">{item.toolTitle}</h3>
                <p className="widget-desc">
                  Test your laptop processor, monitor count, and cable specifications interactively before spending money.
                </p>
                <Link href={item.toolPath} className="widget-link">
                  <span>Open Interactive Tool</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            )}

            {/* Canadian Procurement Support */}
            <div className="sidebar-widget support-widget">
              <p className="eyebrow text-maple">Hardware Questions?</p>
              <h3 className="widget-title">Have a specific setup question?</h3>
              <p className="widget-desc">
                Unsure if your laptop GPU or monitor hub will deliver expected refresh rates? Contact CANOD engineering editors.
              </p>
              <Link href="/contact/" className="widget-link">
                <span>Contact Engineering Editors</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="section-space related-products-section bg-paper">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow text-maple">Complementary Gear</p>
                <h2>Related Curated Hardware</h2>
              </div>
              <p>Hardware engineered to integrate seamlessly with the {item.name}.</p>
            </div>

            <div className="related-products-grid">
              {relatedProducts.map((relItem) => (
                <ProductClickLink
                  key={relItem.slug}
                  productName={relItem.name}
                  productId={relItem.slug}
                  category={relItem.category}
                  destination={`/shop/${relItem.slug}/`}
                  className="related-product-card"
                >
                  <div className="related-card-category-strip">
                    <span className="rel-category">{relItem.category}</span>
                    {relItem.badge && <span className="rel-badge">{relItem.badge}</span>}
                  </div>
                  <h3 className="rel-name">{relItem.name}</h3>
                  <p className="rel-tagline">{relItem.tagline}</p>
                  <div className="rel-footer">
                    <span className="rel-action">View Specifications &amp; Compatibility</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </div>
                </ProductClickLink>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
