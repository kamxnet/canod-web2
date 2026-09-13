import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Radio,
  Zap,
  HardDrive,
  Laptop,
  Search,
} from "lucide-react";
import { KineticHero } from "@/components/kinetic-hero";
import { DockChecker } from "@/components/dock-checker";
import { EditorialScene } from "@/components/editorial-scene";
import { guides } from "@/lib/guides";
import { dockGuidePath, dockToolPath } from "@/lib/dock-sources";
import { readingMinutes } from "@/lib/guide-reading";
import { solutionBlueprints } from "@/lib/solutions-data";
import { shopItems, shopCategoryDescriptions } from "@/lib/shop-data";
import { ProblemSolver } from "@/components/problem-solver";
import { RecommendationProcess } from "./recommendation-process";
import { TrustContours } from "./illustrations";

function ChapterLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow chapter-label">
      <span aria-hidden="true">{number}</span>
      {children}
    </p>
  );
}

export function HomeHero() {
  const chapters = [
    ["Common Problems", "how-we-help"],
    ["Check Compatibility", "starting-point"],
    ["Simple Guides", "buying-guides"],
    ["Shop by Need", "your-start"],
    ["Clean Setups", "home-solutions"],
    ["Canadian Safety", "buy-safe-canada"],
  ];

  return (
    <section
      className="hero-shell home-hero home-dark"
      data-story-chapter="hero"
      aria-labelledby="home-heading"
    >
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-fine-grid" />
      </div>
      <svg
        className="hero-signal-lead"
        viewBox="0 0 1000 550"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="hero-lead-desktop"
          pathLength="1"
          d="M840 405v95q0 30-30 30H20q-20 0-20 20"
        />
        <path
          className="hero-lead-mobile"
          pathLength="1"
          d="M750 405v95q0 30-30 30H20q-20 0-20 20"
        />
      </svg>
      <KineticHero />
      <div className="site-container hero-content">
        <div className="hero-intro">
          <p className="eyebrow">CANOD • Tech help for everyday life</p>
          <h1 id="home-heading">
            Tech problems, <br />
            made simple.
          </h1>
          <p className="hero-description">
            Technology should work together. Simple answers for slow Wi-Fi, confusing chargers, cables, monitors, and backups.
          </p>
          <div className="actions">
            <a className="button button-dark" href="#how-we-help">
              Find a solution <ArrowDown size={18} aria-hidden="true" />
            </a>
            <Link className="button button-light" href="/learn/">
              Browse guides <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="text-link" href="#starting-point">
              Try a CANOD tool <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Prominent Question / Search Bar */}
          <div className="hero-search-container">
            <div className="hero-search-input-wrapper">
              <Search size={18} className="hero-search-icon" aria-hidden="true" />
              <input
                type="text"
                placeholder="What do you need help with?"
                aria-label="What do you need help with?"
                className="hero-search-input"
              />
            </div>
            <div className="hero-search-suggestions">
              <span className="suggestions-label">Try asking:</span>
              <a href="#how-we-help" className="suggestion-chip">Why is my Wi-Fi slow?</a>
              <a href="#how-we-help" className="suggestion-chip">Which charger do I need?</a>
              <a href="#how-we-help" className="suggestion-chip">How do I connect two monitors?</a>
            </div>
          </div>
        </div>
      </div>
      <nav className="site-container home-chapter-nav" aria-label="Homepage sections">
        {chapters.map(([label, id], index) => (
          <a href={"#" + id} key={id}>
            <span className="chapter-nav-number" aria-hidden="true">
              0{index + 1}
            </span>
            <span>{label}</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </section>
  );
}

export function HomeShopCategories() {
  const needs = [
    { label: "I need to charge my laptop", href: "/shop/?category=Power" },
    { label: "I need to connect a monitor", href: "/shop/?category=Connect" },
    { label: "I need better Wi-Fi", href: "/shop/?category=Connect" },
    { label: "I need more backup storage", href: "/shop/?category=Store+%26+Protect" },
    { label: "I need travel tech", href: "/shop/?category=Store+%26+Protect" },
  ];

  const categories = [
    {
      num: "01",
      title: "Connect",
      slug: "Connect",
      icon: Radio,
      summary: shopCategoryDescriptions.Connect.summary,
      items: ["USB-C Cables", "Display Cables", "Adapters", "USB-C Hubs", "Docking Stations", "Wi-Fi & Networking"],
    },
    {
      num: "02",
      title: "Power",
      slug: "Power",
      icon: Zap,
      summary: shopCategoryDescriptions.Power.summary,
      items: ["USB-C Chargers", "GaN Fast Chargers", "Laptop Chargers", "Power Banks", "Charging Cables", "Travel Power"],
    },
    {
      num: "03",
      title: "Store & Protect",
      slug: "Store & Protect",
      icon: HardDrive,
      summary: shopCategoryDescriptions["Store & Protect"].summary,
      items: ["Tech Organizers", "Laptop Sleeves", "Cable Organizers", "SSD / Drive Cases", "Travel Cases"],
    },
    {
      num: "04",
      title: "Work Anywhere",
      slug: "Work Anywhere",
      icon: Laptop,
      summary: shopCategoryDescriptions["Work Anywhere"].summary,
      items: ["Laptop Stands", "Portable Monitors", "Hubs & Docks", "Travel Accessories", "Desk Accessories", "Mobile Work Essentials"],
    },
  ];

  return (
    <section
      id="your-start"
      className="home-interests home-light home-section"
      data-story-chapter="categories"
      aria-labelledby="categories-heading"
    >
      <div className="site-container">
        <div className="home-section-heading">
          <div>
            <ChapterLabel number="04">Shop by what you need</ChapterLabel>
            <h2 id="categories-heading">
              Practical tech.<br />Verified for Canada.
            </h2>
          </div>
          <div className="tool-heading-copy">
            <p>
              Browse hardware by the problem you want to solve. Every item is verified for Canadian wall voltage, accredited safety marks, and everyday durability.
            </p>
            <Link href="/shop/" className="text-link">
              View all curated hardware <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Consumer Need Pills */}
        <div style={{ marginBottom: "2rem", display: "flex", flexWrap: "wrap", gap: "0.6rem", alignItems: "center" }}>
          <span style={{ fontSize: "0.8125rem", color: "var(--muted)", fontWeight: "600" }}>
            Common needs:
          </span>
          {needs.map((need) => (
            <Link
              key={need.label}
              href={need.href}
              style={{
                fontSize: "0.85rem",
                padding: "0.4rem 0.85rem",
                borderRadius: "999px",
                border: "1px solid var(--line)",
                background: "var(--surface)",
                color: "var(--heading)",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              {need.label}
            </Link>
          ))}
        </div>

        <div className="category-overview" style={{ borderBottom: "none", marginBottom: "0" }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                href="/shop/"
                className="category-item"
                style={{ padding: "2rem 1.5rem" }}
              >
                <div className="category-graphic">
                  <span className="category-number">{cat.num}</span>
                  <Icon size={32} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>{cat.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.55, marginBottom: "1rem" }}>{cat.summary}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.25rem" }}>
                  {cat.items.slice(0, 4).map((sub) => (
                    <span
                      key={sub}
                      style={{
                        fontSize: "0.72rem",
                        padding: "0.15rem 0.45rem",
                        borderRadius: "3px",
                        background: "var(--surface-hover)",
                        color: "var(--muted)",
                        border: "1px solid var(--line)",
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
                <span className="category-arrow">
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeProblemSolver() {
  return (
    <section
      id="solve-a-problem"
      className="home-solutions home-dark home-section"
      data-story-chapter="problem-solver"
      aria-labelledby="problem-solver-heading"
    >
      <div className="site-container">
        <div className="home-section-heading">
          <div>
            <ChapterLabel number="01">How can we help?</ChapterLabel>
            <h2 id="problem-solver-heading">
              Got a tech problem?<br />Start here.
            </h2>
          </div>
          <div className="tool-heading-copy">
            <p>
              Don&apos;t waste hours guessing which adapter, cord, or setting you need. Choose your problem below to get a 30-second answer, easy steps to try first, and tested hardware recommendations.
            </p>
          </div>
        </div>

        <ProblemSolver />
      </div>
    </section>
  );
}

export function HomeDockTool() {
  return (
    <section
      id="starting-point"
      className="home-dock home-light home-section"
      data-story-chapter="tool"
      aria-labelledby="dock-heading"
    >
      <div className="site-container">
        <div className="home-section-heading">
          <div>
            <ChapterLabel number="02">Free compatibility checker</ChapterLabel>
            <h2 id="dock-heading">
              Will two monitors work <br />
              with my laptop?
            </h2>
          </div>
          <div className="tool-heading-copy">
            <p>
              USB-C Dock &amp; Dual Monitor Compatibility Checker. Answer 3 quick questions about your laptop and screens to check compatibility in 30 seconds before spending money on hubs.
            </p>
            <div className="actions" style={{ marginTop: "0.5rem" }}>
              <Link href={dockToolPath} className="button button-dark">
                Run 30-Second Checker <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/tools/" className="text-link">
                Explore all free CANOD tools <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <DockChecker />
      </div>
    </section>
  );
}

export function HomeGuides() {
  const guide = guides.find((item) => item.slug === "seven-things-usb-c-dock")!;
  return (
    <section
      id="buying-guides"
      className="home-guides home-dark home-section"
      data-story-chapter="guides"
      aria-labelledby="guides-heading"
    >
      <div className="site-container featured-layout">
        <div className="featured-intro">
          <ChapterLabel number="03">Popular simple guides</ChapterLabel>
          <h2 id="guides-heading">
            One cable.<br />
            Seven things to check.
          </h2>
          <p>
            7 Things to Check Before Connecting Dual Monitors. Plain-English guidance on ports, charging, and display adapters that product listings leave out.
          </p>
        </div>
        <article className="featured-story">
          <div className="featured-art">
            <EditorialScene kind="work" id="featured-dock" />
            <span className="featured-seven" aria-hidden="true">
              07
            </span>
          </div>
          <div className="featured-meta">
            <span>Work &amp; connectivity</span>
            <span>~{readingMinutes(guide.sections)} min read</span>
            <span>Research-based</span>
          </div>
          <h3>
            <Link href={dockGuidePath}>{guide.title}</Link>
          </h3>
          <p>{guide.description}</p>
          <nav
            className="featured-topics"
            aria-label="Topics in this guide"
          >
            {[
              ["Computer & ports", "computer-and-port"],
              ["Connecting screens", "displays"],
              ["Laptop charging", "power-delivery"],
              ["Cables & adapters", "ports-and-cables"],
              ["Windows vs. Mac", "operating-system"],
              ["Display adapters", "displaylink"],
              ["Buying in Canada", "canadian-purchase"],
            ].map(([label, anchor], index) => (
              <Link key={anchor} href={dockGuidePath + "#" + anchor}>
                <span aria-hidden="true">0{index + 1}</span>
                {label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </article>
      </div>
    </section>
  );
}

export function HomeSolutions() {
  const featured = solutionBlueprints.slice(0, 3);
  return (
    <section
      id="home-solutions"
      className="home-solutions home-light home-section"
      data-story-chapter="solutions"
      aria-labelledby="solutions-heading"
    >
      <div className="site-container">
        <div className="home-section-heading">
          <div>
            <ChapterLabel number="05">Clean setup blueprints</ChapterLabel>
            <h2 id="solutions-heading">
              Complete setups.<br />
              Planned to work together.
            </h2>
          </div>
          <div className="tool-heading-copy">
            <p>
              Turnkey desk and travel setups that take the guesswork out of cables, power, and monitors.
            </p>
            <Link href="/solutions/" className="text-link">
              Explore all blueprints <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="home-solutions-grid">
          {featured.map((item) => (
            <article key={item.id} className="home-solution-card">
              <div className="home-solution-card-top">
                <span className="home-solution-badge">{item.badge}</span>
                <span className="home-solution-category">
                  {item.shopCategory}
                </span>
              </div>
              <h3>
                <Link href={`/solutions/#${item.id}`}>{item.consumerTitle}</Link>
              </h3>
              <p className="home-solution-tagline">{item.tagline}</p>
              <div className="home-solution-links">
                <Link
                  href={`/solutions/#${item.id}`}
                  className="button button-light"
                >
                  View Setup Details <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeSelectedProducts() {
  const selected = [
    shopItems.find((i) => i.slug === "tb4-dual-display-dock")!,
    shopItems.find((i) => i.slug === "gan-100w-multiport-charger")!,
    shopItems.find((i) => i.slug === "rugged-portable-nvme-ssd")!,
    shopItems.find((i) => i.slug === "aluminum-ergonomic-laptop-stand")!,
  ].filter(Boolean);

  return (
    <section
      id="selected-products"
      className="home-interests home-dark home-section"
      data-story-chapter="products"
      aria-labelledby="selected-products-heading"
    >
      <div className="site-container">
        <div className="home-section-heading">
          <div>
            <ChapterLabel number="06">Selected Hardware</ChapterLabel>
            <h2 id="selected-products-heading">
              Curated gear.<br />Verified for Canada.
            </h2>
          </div>
          <div className="tool-heading-copy">
            <p>
              Genuine technical specifications without fake marketing claims. Backed by Canadian safety certifications and practical compatibility tools.
            </p>
            <Link href="/shop/" className="text-link">
              Browse full curated shop <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="related-products-grid">
          {selected.map((item) => (
            <article
              key={item.slug}
              className="related-product-card"
              style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
            >
              <div className="related-card-category-strip">
                <span className="rel-category">
                  {item.category} • {item.subcategory}
                </span>
                {item.badge && <span className="rel-badge">{item.badge}</span>}
              </div>
              <h3 className="rel-name">
                <Link href={`/shop/${item.slug}/`} style={{ color: "inherit", textDecoration: "none" }}>
                  {item.name}
                </Link>
              </h3>
              <p className="rel-tagline">{item.tagline}</p>

              <div style={{ marginBottom: "1rem", fontSize: "0.8125rem", color: "var(--muted)" }}>
                <strong style={{ color: "var(--heading)" }}>Best For:</strong> {item.bestFor}
              </div>

              <div className="rel-footer">
                <Link href={`/shop/${item.slug}/`} className="rel-action">
                  View Specs &amp; Compatibility
                </Link>
                <ArrowRight size={16} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePerspective() {
  return (
    <section
      id="point-of-view"
      className="home-perspective home-dark home-section point-of-view"
      data-story-chapter="perspective"
      aria-labelledby="perspective-heading"
    >
      <TrustContours />
      <div className="site-container home-perspective-layout">
        <div className="home-perspective-intro">
          <ChapterLabel number="08">How we reach a useful answer</ChapterLabel>
          <h2 id="perspective-heading">
            Good products earn their place in your day.
          </h2>
          <div className="text-stack">
            <p>We start with a simple question: what does this make easier?</p>
            <p>
              Our current guides are research-based, not hands-on product tests. We make that distinction clear.
            </p>
          </div>
          <Link className="text-link" href="/editorial-standards/">
            Our editorial standards <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <RecommendationProcess />
      </div>
    </section>
  );
}

export function HomeReading() {
  return (
    <section
      className="home-reading home-light home-section"
      data-story-chapter="reading"
      aria-labelledby="reading-heading"
    >
      <div className="site-container">
        <div className="home-section-heading">
          <div>
            <ChapterLabel number="09">Keep following your curiosity</ChapterLabel>
            <h2 id="reading-heading">
              Useful now.<br />
              More to explore.
            </h2>
          </div>
          <div className="tool-heading-copy">
            <p>
              Practical reading on fit, trade-offs, and the details worth checking before you buy.
            </p>
            <Link href="/learn/" className="text-link">
              Visit the Learn Hub <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="reading-grid">
          {guides.map((guide) => (
            <article className="reading-card" key={guide.slug}>
              <p className="eyebrow">
                {guide.category}
                <span>~{readingMinutes(guide.sections)} min</span>
              </p>
              <h3>
                <Link href={"/guides/" + guide.slug + "/"}>
                  {guide.title}
                  <ArrowUpRight size={22} aria-hidden="true" />
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeBrief() {
  return (
    <section
      className="home-brief home-light home-section"
      data-story-chapter="brief"
      aria-labelledby="brief-heading"
    >
      <div className="site-container brief-layout">
        <div className="brief-title">
          <Mail size={24} strokeWidth={1.25} aria-hidden="true" />
          <p className="eyebrow">The next useful thing</p>
          <h2 id="brief-heading">Practical Tech Brief</h2>
        </div>
        <div className="brief-status">
          <p className="coming-label">Coming soon</p>
          <p>
            A considered note on practical technology, useful guides, and CANOD tools. Subscriptions are not open yet.
          </p>
        </div>
      </div>
    </section>
  );
}

export function HomeFinale() {
  return (
    <section
      className="home-finale home-dark"
      data-story-chapter="finale"
      aria-labelledby="finale-heading"
    >
      <div className="site-container home-finale-inner">
        <svg
          className="finale-signal"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            pathLength="1"
            d="M0 5h870q35 0 35 35v35h260"
          />
          <circle cx="1165" cy="75" r="3" />
        </svg>
        <div>
          <p className="eyebrow">Follow a more useful signal.</p>
          <h2 id="finale-heading">Make the next connection a good one.</h2>
        </div>
        <div className="finale-actions">
          <Link className="button button-dark" href="/shop/">
            Explore Curated Shop <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="button button-light" href="/learn/">
            Learn &amp; Guides <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="text-link" href="/solutions/">
            Setup Solutions <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link className="text-link" href={dockToolPath}>
            Try a CANOD tool <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
