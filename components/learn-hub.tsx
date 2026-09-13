"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Wrench,
  Filter,
} from "lucide-react";
import { guides } from "@/lib/guides";
import { readingMinutes } from "@/lib/guide-reading";
import {
  learnIntents,
  guideSecondaryClusterMap,
  type LearnIntent,
  type SecondaryCluster,
} from "@/lib/learn-data";

export function LearnHub({ defaultIntent }: { defaultIntent?: LearnIntent }) {
  const [selectedIntent, setSelectedIntent] = useState<LearnIntent | "all">(
    defaultIntent ?? "all",
  );
  const [selectedCluster, setSelectedCluster] =
    useState<SecondaryCluster>("All");
  const [searchFilter, setSearchFilter] = useState("");

  const filteredGuides = guides.filter((guide) => {
    // Check intent match
    let matchesIntent = true;
    if (selectedIntent !== "all") {
      const intentObj = learnIntents.find((i) => i.id === selectedIntent);
      matchesIntent = intentObj ? intentObj.guideSlugs.includes(guide.slug) : true;
    }

    // Check secondary cluster match
    let matchesCluster = true;
    if (selectedCluster !== "All") {
      const cluster = guideSecondaryClusterMap[guide.slug] ?? "Connect";
      matchesCluster = cluster === selectedCluster;
    }

    // Check search filter
    const matchesSearch =
      searchFilter.trim() === "" ||
      guide.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchFilter.toLowerCase());

    return matchesIntent && matchesCluster && matchesSearch;
  });

  return (
    <div className="learn-hub">
      {/* Primary Intent Navigation Bar */}
      <div className="learn-intent-nav" role="tablist" aria-label="Browse by Intent">
        <button
          type="button"
          role="tab"
          aria-selected={selectedIntent === "all"}
          className={`intent-tab-btn ${selectedIntent === "all" ? "is-active" : ""}`}
          onClick={() => setSelectedIntent("all")}
        >
          All Guides ({guides.length})
        </button>
        {learnIntents.map((intent) => {
          const isSelected = selectedIntent === intent.id;
          return (
            <button
              key={intent.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`intent-tab-btn ${isSelected ? "is-active" : ""}`}
              onClick={() => setSelectedIntent(intent.id)}
            >
              {intent.shortTitle} ({intent.guideSlugs.length})
            </button>
          );
        })}
      </div>

      {/* Intent Cards Overview (When on "All Guides") */}
      {selectedIntent === "all" && searchFilter === "" && selectedCluster === "All" && (
        <div className="learn-intent-grid">
          {learnIntents.map((intent) => (
            <Link
              key={intent.id}
              href={intent.path}
              className="learn-intent-card"
            >
              <div className="intent-card-header">
                <span className="intent-card-badge">{intent.shortTitle}</span>
                <span className="intent-count">
                  {intent.guideSlugs.length} Guides
                </span>
              </div>
              <h3 className="intent-card-title">{intent.title}</h3>
              <p className="intent-card-desc">{intent.description}</p>
              <div className="intent-card-footer">
                <span>Browse {intent.shortTitle}</span>
                <ArrowRight size={15} aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Secondary Topic Filters & Search */}
      <div className="learn-filter-toolbar">
        <div className="secondary-topic-filters" aria-label="Topic filters">
          <span className="topic-filter-label">
            <Filter size={13} aria-hidden="true" />
            <span>Filter by topic:</span>
          </span>
          {(["All", "Connect", "Power", "Store & Protect", "Work Anywhere"] as const).map(
            (cluster) => (
              <button
                key={cluster}
                type="button"
                className={`topic-chip ${
                  selectedCluster === cluster ? "is-active" : ""
                }`}
                onClick={() => setSelectedCluster(cluster)}
              >
                {cluster}
              </button>
            ),
          )}
        </div>

        <div className="learn-search-box">
          <input
            type="search"
            aria-label="Filter guides by keyword"
            placeholder="Search guides (Wi-Fi, USB-C, 3-2-1...)"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="learn-search-input"
          />
        </div>
      </div>

      {/* Results Meta */}
      <div className="learn-results-meta">
        <p>
          Showing <strong>{filteredGuides.length}</strong> research{" "}
          {filteredGuides.length === 1 ? "guide" : "guides"}
          {selectedIntent !== "all" &&
            ` in ${learnIntents.find((i) => i.id === selectedIntent)?.title}`}
          {selectedCluster !== "All" && ` › ${selectedCluster}`}
        </p>
        {(selectedIntent !== "all" ||
          selectedCluster !== "All" ||
          searchFilter !== "") && (
          <button
            type="button"
            className="clear-filters-btn"
            onClick={() => {
              setSelectedIntent("all");
              setSelectedCluster("All");
              setSearchFilter("");
            }}
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Guides Grid */}
      <div className="learn-guides-grid">
        {filteredGuides.map((guide) => {
          const cluster = guideSecondaryClusterMap[guide.slug] ?? "Connect";
          const intent = learnIntents.find((i) =>
            i.guideSlugs.includes(guide.slug),
          );
          const minutes = readingMinutes(guide.sections);

          return (
            <article key={guide.slug} className="learn-guide-card">
              <div className="guide-card-meta">
                <div className="guide-meta-pills">
                  {intent && (
                    <span className="guide-intent-pill">{intent.shortTitle}</span>
                  )}
                  <span className="guide-cluster-pill">{cluster}</span>
                </div>
                <span className="guide-reading-time">
                  <Clock size={14} aria-hidden="true" />
                  {minutes} min read
                </span>
              </div>

              <h2 className="guide-card-title">
                <Link href={`/guides/${guide.slug}/`} className="guide-title-link">
                  {guide.title}
                </Link>
              </h2>

              <p className="guide-card-desc">{guide.description}</p>

              <div className="guide-card-footer">
                <Link
                  href={`/guides/${guide.slug}/`}
                  className="guide-read-link"
                >
                  <span>Read Guide</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>

                {guide.slug === "seven-things-usb-c-dock" && (
                  <Link
                    href="/tools/usb-c-dock-checker/"
                    className="guide-tool-chip"
                  >
                    <Wrench size={13} aria-hidden="true" />
                    <span>Run Dock Checker</span>
                  </Link>
                )}

                {guide.slug === "charger-safety-canada" && (
                  <Link
                    href="/tools/canadian-electrical-safety-checklist/"
                    className="guide-tool-chip"
                  >
                    <ShieldCheck size={13} aria-hidden="true" />
                    <span>Safety Checklist</span>
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
