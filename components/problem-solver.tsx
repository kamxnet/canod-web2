"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Wrench,
  ShoppingBag,
  Zap,
  Wifi,
  BatteryCharging,
  Monitor,
  Cable,
  HardDrive,
  Plane,
  Laptop,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { customerProblems } from "@/lib/problems-data";

const iconMap = {
  Wifi: Wifi,
  BatteryCharging: BatteryCharging,
  Monitor: Monitor,
  Cable: Cable,
  HardDrive: HardDrive,
  Plane: Plane,
  Laptop: Laptop,
  ShieldCheck: ShieldCheck,
};

export function ProblemSolver() {
  const [selectedId, setSelectedId] = useState<string>(customerProblems[0].id);

  const activeProblem =
    customerProblems.find((p) => p.id === selectedId) ?? customerProblems[0];

  return (
    <div className="problem-solver-experience" id="how-we-help">
      {/* 8 Large Friendly Problem Cards */}
      <div
        className="popular-problems-grid"
        role="tablist"
        aria-label="Common technology problems"
      >
        {customerProblems.map((problem) => {
          const Icon = iconMap[problem.iconName] || Zap;
          const isSelected = problem.id === activeProblem.id;

          return (
            <button
              key={problem.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              id={`problem-card-${problem.id}`}
              aria-controls={`problem-solution-${problem.id}`}
              className={`problem-card-btn ${isSelected ? "is-selected" : ""}`}
              onClick={() => setSelectedId(problem.id)}
            >
              <div className="problem-card-icon-wrapper">
                <Icon size={28} strokeWidth={1.5} className="problem-icon" aria-hidden="true" />
              </div>
              <div className="problem-card-content">
                <span className="problem-card-tag">{problem.tag}</span>
                <h3 className="problem-card-title">{problem.title}</h3>
              </div>
              <span className="problem-card-action">
                {isSelected ? "Showing solution" : "Get answer"}
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </div>

      {/* Progressive Disclosure Resolution Panel */}
      <div
        className="problem-solution-card"
        role="tabpanel"
        id={`problem-solution-${activeProblem.id}`}
        aria-labelledby={`problem-card-${activeProblem.id}`}
      >
        {/* Header with Problem Title */}
        <div className="solution-hero-header">
          <div className="solution-meta-badge">
            <span className="solution-tag">{activeProblem.tag}</span>
            <span className="solution-indicator">Step-by-step help</span>
          </div>
          <h3 className="solution-main-heading">{activeProblem.title}</h3>
        </div>

        {/* Level 1: 30-Second Answer */}
        <div className="level-box quick-answer-box">
          <div className="level-badge">
            <Sparkles size={16} className="text-maple" aria-hidden="true" />
            <span>The 30-Second Answer</span>
          </div>
          <p className="quick-answer-text">{activeProblem.simpleAnswer}</p>
        </div>

        {/* Level 2: Try This First (Actionable Steps) */}
        <div className="level-box try-first-box">
          <div className="level-badge">
            <CheckCircle2 size={16} className="text-maple" aria-hidden="true" />
            <span>Try This First</span>
          </div>
          <ol className="try-first-list">
            {activeProblem.tryThisFirst.map((step, index) => (
              <li key={index} className="try-first-item">
                <span className="step-number" aria-hidden="true">
                  {index + 1}
                </span>
                <span className="step-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Level 3: Guided Troubleshooting & Hardware */}
        <div className="level-box next-steps-box">
          <div className="next-steps-grid">
            {/* Interactive Tool Check */}
            <div className="next-step-card tool-card">
              <div className="next-step-header">
                <Wrench size={18} className="text-maple" aria-hidden="true" />
                <span className="next-step-label">Interactive Checker</span>
              </div>
              <h4 className="next-step-title">{activeProblem.toolTitle}</h4>
              <p className="next-step-desc">
                Answer a few simple questions to verify your devices before spending money on new parts.
              </p>
              <Link href={activeProblem.toolPath} className="next-step-btn button button-light">
                <span>Check My Setup</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>

            {/* Recommended Hardware */}
            <div className="next-step-card gear-card">
              <div className="next-step-header">
                <ShoppingBag size={18} className="text-maple" aria-hidden="true" />
                <span className="next-step-label">What You May Need</span>
              </div>
              <h4 className="next-step-title">
                {activeProblem.featuredProductName ?? `${activeProblem.shopCategory} Gear`}
              </h4>
              <p className="next-step-desc">{activeProblem.productHelpText}</p>
              <div className="gear-links">
                {activeProblem.featuredProductSlug && (
                  <Link
                    href={`/shop/${activeProblem.featuredProductSlug}/`}
                    className="button button-dark"
                  >
                    <span>View Tested Hardware</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                )}
                <Link
                  href={activeProblem.shopCategoryHref}
                  className="text-link"
                >
                  <span>Browse all {activeProblem.shopCategory}</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* In-Depth Guide */}
            <div className="next-step-card guide-card">
              <div className="next-step-header">
                <BookOpen size={18} className="text-maple" aria-hidden="true" />
                <span className="next-step-label">Free Plain-English Guide</span>
              </div>
              <h4 className="next-step-title">{activeProblem.guideTitle}</h4>
              <p className="next-step-desc">
                Step-by-step troubleshooting, common traps to avoid, and Canadian buying advice.
              </p>
              <Link
                href={`/guides/${activeProblem.guideSlug}/`}
                className="text-link read-guide-link"
              >
                <span>Read the simple guide</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Level 4: Collapsible Deeper Technical Explanation */}
        <details className="progressive-details">
          <summary className="progressive-summary">
            <span className="summary-title">
              {activeProblem.technicalDetails.heading}
            </span>
            <span className="summary-hint">
              <span>For enthusiasts &amp; engineers</span>
              <ChevronDown size={16} className="chevron-icon" aria-hidden="true" />
            </span>
          </summary>
          <div className="progressive-details-content">
            <p className="tech-explanation-text">
              {activeProblem.technicalDetails.explanation}
            </p>
            <div className="tech-standards-list">
              <strong className="standards-label">Associated Engineering Standards:</strong>
              <ul>
                {activeProblem.technicalDetails.standards.map((std, i) => (
                  <li key={i}>{std}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
