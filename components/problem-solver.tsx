"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Wrench,
  ShoppingBag,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { customerProblems } from "@/lib/problems-data";

export function ProblemSolver() {
  const [selectedId, setSelectedId] = useState<string>(customerProblems[0].id);

  const activeProblem =
    customerProblems.find((p) => p.id === selectedId) ?? customerProblems[0];

  return (
    <div className="problem-solver-widget">
      {/* Problem Selection Pills */}
      <div
        className="problem-selector-tabs"
        role="tablist"
        aria-label="Common tech problems"
      >
        {customerProblems.map((problem) => {
          const isSelected = problem.id === activeProblem.id;
          return (
            <button
              key={problem.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              id={`problem-tab-${problem.id}`}
              aria-controls={`problem-panel-${problem.id}`}
              className={`problem-tab-btn ${isSelected ? "is-active" : ""}`}
              onClick={() => setSelectedId(problem.id)}
            >
              <span className="problem-tab-tag">{problem.tag}</span>
              <span className="problem-tab-title">{problem.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Problem Resolution Card */}
      <div
        className="problem-resolution-panel"
        role="tabpanel"
        id={`problem-panel-${activeProblem.id}`}
        aria-labelledby={`problem-tab-${activeProblem.id}`}
      >
        <div className="resolution-header">
          <div className="resolution-title-row">
            <span className="resolution-tag">{activeProblem.tag}</span>
            <span className="resolution-step-badge">CANOD Diagnosis &amp; Solution</span>
          </div>
          <h3 className="resolution-heading">{activeProblem.title}</h3>
        </div>

        <div className="resolution-body">
          {/* Explanation & Practical Fix */}
          <div className="resolution-narrative">
            <div className="narrative-block">
              <h4 className="block-label">
                <HelpCircle size={16} className="text-maple" aria-hidden="true" />
                <span>Why this happens:</span>
              </h4>
              <p className="narrative-text">{activeProblem.shortExplanation}</p>
            </div>

            <div className="narrative-block fix-block">
              <h4 className="block-label">
                <CheckCircle2 size={16} className="text-maple" aria-hidden="true" />
                <span>Recommended practical fix:</span>
              </h4>
              <p className="narrative-text">{activeProblem.practicalFix}</p>
            </div>
          </div>

          {/* Three-Way Integration: Guide + Tool + Product */}
          <div className="resolution-connections">
            {/* 1. Research Guide */}
            <div className="connection-card guide-connection">
              <div className="connection-header">
                <BookOpen size={16} className="text-maple" aria-hidden="true" />
                <span className="eyebrow text-muted">1. Understand the Engineering</span>
              </div>
              <h5 className="connection-title">{activeProblem.guideTitle}</h5>
              <p className="connection-desc">
                Review our comprehensive technical guide detailing pinouts, bandwidth, and standards.
              </p>
              <Link
                href={`/guides/${activeProblem.guideSlug}/`}
                className="connection-cta"
              >
                <span>Read Research Guide</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* 2. Interactive Tool */}
            <div className="connection-card tool-connection">
              <div className="connection-header">
                <Wrench size={16} className="text-maple" aria-hidden="true" />
                <span className="eyebrow text-muted">2. Verify Your Setup</span>
              </div>
              <h5 className="connection-title">{activeProblem.toolTitle}</h5>
              <p className="connection-desc">
                Run our interactive verification tool before buying cables, adapters, or docks.
              </p>
              <Link href={activeProblem.toolPath} className="connection-cta">
                <span>Run Interactive Tool</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* 3. Curated Product & Shop Category */}
            <div className="connection-card product-connection">
              <div className="connection-header">
                <ShoppingBag size={16} className="text-maple" aria-hidden="true" />
                <span className="eyebrow text-muted">3. Vetted Hardware</span>
              </div>
              <h5 className="connection-title">
                {activeProblem.featuredProductName ?? `${activeProblem.shopCategory} Category`}
              </h5>
              <p className="connection-desc">
                Browse tested products certified for Canadian electrical standards.
              </p>
              <div className="connection-links-cluster">
                {activeProblem.featuredProductSlug && (
                  <Link
                    href={`/shop/${activeProblem.featuredProductSlug}/`}
                    className="connection-cta product-primary-cta"
                  >
                    <span>View Product Details</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                )}
                <Link
                  href={activeProblem.shopCategoryHref}
                  className="connection-subcta"
                >
                  <span>Browse all {activeProblem.shopCategory}</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
