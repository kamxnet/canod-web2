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

export function ShopCatalog() {
  const [activeCategory, setActiveCategory] = useState<ShopCategory>("All");
  const [activeSubcategory, setActiveSubcategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (category: ShopCategory) => {
    setActiveCategory(category);
    setActiveSubcategory("All");
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
      {/* Primary Category Switcher */}
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
            aria-label="Filter products by name or spec"
            placeholder="Search ports, wattage, standards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
                  <Link href={`/shop/${item.slug}/`} className="shop-card-title-link">
                    {item.name}
                  </Link>
                </h2>
                <p className="shop-card-tagline">{item.tagline}</p>
              </div>

              <div className="shop-card-body">
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
                >
                  <span>View Specifications &amp; Compatibility</span>
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
