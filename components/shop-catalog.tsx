"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Wrench,
  Search,
  Filter,
} from "lucide-react";
import {
  shopCategories,
  shopItems,
  shopCategoryDescriptions,
  type ShopCategory,
} from "@/lib/shop-data";
import { trackProductClick } from "@/lib/analytics";

const consumerNeeds = [
  { id: "all", label: "Show all products", category: "All" as const, search: "" },
  { id: "charge-laptop", label: "I need to charge my laptop", category: "Power" as const, search: "laptop" },
  { id: "connect-monitor", label: "I need to connect a monitor", category: "Connect" as const, search: "display" },
  { id: "better-wifi", label: "I need better Wi-Fi", category: "Connect" as const, search: "cable" },
  { id: "more-storage", label: "I need more storage & backups", category: "Store & Protect" as const, search: "ssd" },
  { id: "organize-cables", label: "I need to organize my cables", category: "Store & Protect" as const, search: "organizer" },
  { id: "travel-tech", label: "I need travel tech", category: "Store & Protect" as const, search: "travel" },
];

export function ShopCatalog() {
  const [activeNeed, setActiveNeed] = useState("all");
  const [activeCategory, setActiveCategory] = useState<ShopCategory>("All");
  const [activeSubcategory, setActiveSubcategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleNeedChange = (need: typeof consumerNeeds[number]) => {
    setActiveNeed(need.id);
    setActiveCategory(need.category);
    setActiveSubcategory("All");
    setSearchQuery(need.search);
  };

  const handleCategoryChange = (category: ShopCategory) => {
    setActiveCategory(category);
    setActiveSubcategory("All");
    setActiveNeed("all");
    setSearchQuery("");
  };

  const availableSubcategories =
    activeCategory !== "All"
      ? shopCategoryDescriptions[activeCategory]?.subcategories ?? []
      : [];

  const filteredItems = shopItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSubcategory =
      activeSubcategory === "All" || item.subcategory === activeSubcategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bestFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specifications.some(
        (s) =>
          s.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.value.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  return (
    <div className="shop-catalog">
      {/* 1. Need-Driven Browsing Bar */}
      <div className="shop-needs-bar" style={{ marginBottom: "1.5rem" }}>
        <p className="eyebrow text-muted" style={{ marginBottom: "0.65rem", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Browse by what you need:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {consumerNeeds.map((need) => {
            const isSelected = activeNeed === need.id;
            return (
              <button
                key={need.id}
                type="button"
                onClick={() => handleNeedChange(need)}
                style={{
                  padding: "0.45rem 0.9rem",
                  fontSize: "0.85rem",
                  borderRadius: "999px",
                  border: isSelected ? "1px solid var(--maple)" : "1px solid var(--line)",
                  background: isSelected ? "var(--maple)" : "var(--surface)",
                  color: isSelected ? "var(--on-accent)" : "var(--heading)",
                  fontWeight: isSelected ? "600" : "400",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {need.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Secondary Category Switcher */}
      <div className="shop-filter-bar">
        <div
          className="shop-categories"
          role="tablist"
          aria-label="Product categories"
        >
          {shopCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`shop-category-btn ${
                activeCategory === category ? "is-active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="shop-search-wrapper">
          <input
            type="search"
            aria-label="Filter products by need or device"
            placeholder="Search by device, need, or problem..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveNeed("all");
            }}
            className="shop-search-input"
          />
        </div>
      </div>

      {/* Category Overview & Subcategories */}
      {activeCategory !== "All" && (
        <div className="shop-category-spotlight">
          <p className="spotlight-summary">
            {shopCategoryDescriptions[activeCategory].summary}
          </p>

          {availableSubcategories.length > 0 && (
            <div className="shop-subcategories" aria-label="Subcategory filters">
              <span className="subcat-label">
                <Filter size={13} aria-hidden="true" />
                <span>Filter by type:</span>
              </span>
              <button
                type="button"
                className={`subcat-chip ${
                  activeSubcategory === "All" ? "is-active" : ""
                }`}
                onClick={() => setActiveSubcategory("All")}
              >
                All {activeCategory}
              </button>
              {availableSubcategories.map((subcat) => (
                <button
                  key={subcat}
                  type="button"
                  className={`subcat-chip ${
                    activeSubcategory === subcat ? "is-active" : ""
                  }`}
                  onClick={() => setActiveSubcategory(subcat)}
                >
                  {subcat}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Results Meta */}
      <div className="shop-results-meta">
        <p>
          Showing <strong>{filteredItems.length}</strong> vetted{" "}
          {filteredItems.length === 1 ? "hardware item" : "hardware items"}{" "}
          {activeCategory !== "All" && `in ${activeCategory}`}
          {activeSubcategory !== "All" && ` › ${activeSubcategory}`}
        </p>
        <span className="shop-canadian-pill">
          <ShieldCheck size={16} aria-hidden="true" />
          Canadian Sourcing &amp; Standards Included
        </span>
      </div>

      {/* Product Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="shop-empty-state">
          <Search size={32} className="text-muted" aria-hidden="true" />
          <h3>No hardware matching your criteria</h3>
          <p>
            Try resetting your filters or search query to browse all curated
            Canadian recommendations.
          </p>
          <button
            type="button"
            className="button button-light"
            onClick={() => {
              setActiveCategory("All");
              setActiveSubcategory("All");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="shop-grid">
          {filteredItems.map((item) => (
            <article key={item.slug} className="shop-card">
              <div className="shop-card-header">
                <div className="shop-card-category-row">
                  <span className="shop-card-category">
                    {item.category} • {item.subcategory}
                  </span>
                  {item.badge && (
                    <span className="shop-card-badge">{item.badge}</span>
                  )}
                </div>
                <h2 className="shop-card-title">
                  <Link
                    href={`/shop/${item.slug}/`}
                    className="shop-card-title-link"
                    onClick={() =>
                      trackProductClick({
                        product_name: item.name,
                        product_id: item.slug,
                        category: item.category,
                        destination: `/shop/${item.slug}/`,
                      })
                    }
                  >
                    {item.name}
                  </Link>
                </h2>
                <p className="shop-card-tagline">{item.tagline}</p>
              </div>

              <div className="shop-card-body">
                <div style={{
                  padding: "0.6rem 0.85rem",
                  background: "var(--surface-hover)",
                  borderRadius: "6px",
                  border: "1px solid var(--line)",
                  marginBottom: "1rem",
                  fontSize: "0.85rem",
                  color: "var(--heading)",
                  lineHeight: 1.45
                }}>
                  <strong style={{ color: "var(--maple)" }}>What this solves:</strong> {item.bestFor}
                </div>

                <p className="shop-card-desc">{item.whyCanodRecommends}</p>

                <div className="shop-card-specs">
                  <p className="eyebrow text-muted">Key Specifications</p>
                  <ul>
                    {item.specifications.slice(0, 3).map((spec, i) => (
                      <li key={i}>
                        <CheckCircle2
                          size={15}
                          className="spec-icon"
                          aria-hidden="true"
                        />
                        <span>
                          <strong>{spec.label}:</strong> {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shop-card-advisory">
                  <p className="eyebrow text-maple">Canadian Standards</p>
                  <p className="advisory-text">{item.canadianInformation}</p>
                  <p className="availability-text">
                    <strong>Pricing:</strong> {item.priceDisplay}
                  </p>
                </div>
              </div>

              <div className="shop-card-footer">
                <Link
                  href={`/shop/${item.slug}/`}
                  className="shop-action-link view-details-link"
                  onClick={() =>
                    trackProductClick({
                      product_name: item.name,
                      product_id: item.slug,
                      category: item.category,
                      destination: `/shop/${item.slug}/`,
                    })
                  }
                >
                  <span>View Product &amp; Compatibility</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>

                <div className="shop-card-sublinks">
                  {item.toolPath && (
                    <Link
                      href={item.toolPath}
                      className="shop-sublink tool-sublink"
                    >
                      <Wrench size={14} aria-hidden="true" />
                      <span>{item.toolTitle ?? "Check Compatibility"}</span>
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </Link>
                  )}
                  {item.guideSlug && (
                    <Link
                      href={`/guides/${item.guideSlug}/`}
                      className="shop-sublink guide-sublink"
                    >
                      <Sparkles size={14} aria-hidden="true" />
                      <span>{item.guideTitle ?? "Companion Guide"}</span>
                      <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Sourcing & Brand Partnership Callout */}
      <section className="shop-sourcing-banner">
        <div className="sourcing-content">
          <PackageCheck size={28} className="text-maple" aria-hidden="true" />
          <div>
            <h3>Looking for Brand Distribution or Canadian Wholesale?</h3>
            <p>
              CANOD evaluates tech products for purpose, fit, and Canadian
              regulatory compliance. Browse our sourcing interests or introduce
              your hardware range.
            </p>
          </div>
        </div>
        <div className="sourcing-actions">
          <Link href="/interests/" className="button button-light">
            Sourcing Interests <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/partners/" className="button button-dark">
            Brand Enquiries <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
