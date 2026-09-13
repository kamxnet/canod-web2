"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Search,
  X,
  BookOpen,
  Wrench,
  ShoppingBag,
  Layers,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { guides } from "@/lib/guides";
import { canodToolsList } from "@/lib/tools-data";
import { shopItems } from "@/lib/shop-data";
import { customerProblems } from "@/lib/problems-data";
import { solutionBlueprints } from "@/lib/solutions-data";

export function GlobalSearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  const matchedProblems = cleanQuery
    ? customerProblems.filter(
        (p) =>
          p.title.toLowerCase().includes(cleanQuery) ||
          p.simpleAnswer.toLowerCase().includes(cleanQuery) ||
          p.tag.toLowerCase().includes(cleanQuery),
      )
    : [];

  const matchedGuides = cleanQuery
    ? guides.filter(
        (g) =>
          g.title.toLowerCase().includes(cleanQuery) ||
          g.description.toLowerCase().includes(cleanQuery) ||
          g.category.toLowerCase().includes(cleanQuery),
      )
    : [];

  const matchedTools = cleanQuery
    ? canodToolsList.filter(
        (t) =>
          t.name.toLowerCase().includes(cleanQuery) ||
          t.question.toLowerCase().includes(cleanQuery) ||
          t.description.toLowerCase().includes(cleanQuery) ||
          t.tagline.toLowerCase().includes(cleanQuery),
      )
    : [];

  const matchedProducts = cleanQuery
    ? shopItems.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.description.toLowerCase().includes(cleanQuery) ||
          p.category.toLowerCase().includes(cleanQuery) ||
          p.subcategory.toLowerCase().includes(cleanQuery),
      )
    : [];

  const matchedSolutions = cleanQuery
    ? solutionBlueprints.filter(
        (s) =>
          s.consumerTitle.toLowerCase().includes(cleanQuery) ||
          s.title.toLowerCase().includes(cleanQuery) ||
          s.problemSolved.toLowerCase().includes(cleanQuery) ||
          s.tagline.toLowerCase().includes(cleanQuery),
      )
    : [];

  const totalResults =
    matchedProblems.length +
    matchedGuides.length +
    matchedTools.length +
    matchedProducts.length +
    matchedSolutions.length;

  return (
    <div
      className="search-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Search CANOD"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="search-modal-container">
        <div className="search-input-header">
          <Search size={20} className="search-header-icon" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            aria-label="Search articles, tools, problems, and products"
            placeholder="Search guides, tools, products, or problems (e.g., dual monitors, Wi-Fi, GaN)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-modal-input"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear query"
              className="search-clear-btn"
              onClick={() => setQuery("")}
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
          <button
            type="button"
            aria-label="Close search"
            className="search-close-btn"
            onClick={onClose}
          >
            ESC
          </button>
        </div>

        <div className="search-modal-body">
          {cleanQuery === "" ? (
            <div className="search-quick-starts">
              <p className="eyebrow text-muted">Common Inquiries</p>
              <div className="quick-tags">
                {[
                  "Dual 4K Monitors",
                  "Why is Wi-Fi slow",
                  "Charger Safety in Canada",
                  "CATSA Power Bank",
                  "Thunderbolt vs USB-C",
                  "3-2-1 Backup Strategy",
                ].map((term) => (
                  <button
                    key={term}
                    type="button"
                    className="quick-tag-btn"
                    onClick={() => setQuery(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="search-empty-state">
              <p>No results found for &ldquo;{query}&rdquo;.</p>
              <p className="empty-subtext">
                Try searching for a hardware category like &ldquo;dock&rdquo;, a problem like &ldquo;Wi-Fi&rdquo;, or a standard like &ldquo;cUL&rdquo;.
              </p>
            </div>
          ) : (
            <div className="search-results-stream">
              {/* Problems */}
              {matchedProblems.length > 0 && (
                <div className="search-category-group">
                  <p className="search-group-title">
                    <HelpCircle size={15} aria-hidden="true" />
                    <span>Problems &amp; Solutions</span>
                  </p>
                  {matchedProblems.map((item) => (
                    <Link
                      key={item.id}
                      href={`/guides/${item.guideSlug}/`}
                      className="search-result-item"
                      onClick={onClose}
                    >
                      <span className="result-badge problem-badge">{item.tag}</span>
                      <div className="result-content">
                        <h4>{item.title}</h4>
                        <p>{item.simpleAnswer}</p>
                      </div>
                      <ArrowRight size={15} className="result-arrow" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Tools */}
              {matchedTools.length > 0 && (
                <div className="search-category-group">
                  <p className="search-group-title">
                    <Wrench size={15} aria-hidden="true" />
                    <span>Tools &amp; Calculators</span>
                  </p>
                  {matchedTools.map((item) => (
                    <Link
                      key={item.id}
                      href={item.path}
                      className="search-result-item"
                      onClick={onClose}
                    >
                      <span className="result-badge tool-badge">{item.badge}</span>
                      <div className="result-content">
                        <h4>{item.name}</h4>
                        <p>{item.tagline}</p>
                      </div>
                      <ArrowRight size={15} className="result-arrow" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Guides */}
              {matchedGuides.length > 0 && (
                <div className="search-category-group">
                  <p className="search-group-title">
                    <BookOpen size={15} aria-hidden="true" />
                    <span>Research Guides</span>
                  </p>
                  {matchedGuides.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/guides/${item.slug}/`}
                      className="search-result-item"
                      onClick={onClose}
                    >
                      <span className="result-badge guide-badge">{item.category}</span>
                      <div className="result-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                      <ArrowRight size={15} className="result-arrow" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Products */}
              {matchedProducts.length > 0 && (
                <div className="search-category-group">
                  <p className="search-group-title">
                    <ShoppingBag size={15} aria-hidden="true" />
                    <span>Curated Products</span>
                  </p>
                  {matchedProducts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/shop/${item.slug}/`}
                      className="search-result-item"
                      onClick={onClose}
                    >
                      <span className="result-badge product-badge">{item.category}</span>
                      <div className="result-content">
                        <h4>{item.name}</h4>
                        <p>{item.tagline}</p>
                      </div>
                      <ArrowRight size={15} className="result-arrow" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Blueprints */}
              {matchedSolutions.length > 0 && (
                <div className="search-category-group">
                  <p className="search-group-title">
                    <Layers size={15} aria-hidden="true" />
                    <span>Setup Blueprints</span>
                  </p>
                  {matchedSolutions.map((item) => (
                    <Link
                      key={item.id}
                      href={`/solutions/#${item.id}`}
                      className="search-result-item"
                      onClick={onClose}
                    >
                      <span className="result-badge solution-badge">{item.badge}</span>
                      <div className="result-content">
                        <h4>{item.title}</h4>
                        <p>{item.tagline}</p>
                      </div>
                      <ArrowRight size={15} className="result-arrow" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
