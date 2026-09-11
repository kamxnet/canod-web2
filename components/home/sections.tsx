import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { KineticHero } from "@/components/kinetic-hero";
import { productCategories } from "@/lib/product-categories";
import { guides } from "@/lib/guides";
import { categoryHref } from "@/lib/home-navigation";
import { readingMinutes } from "@/lib/guide-reading";
import { RecommendationProcess } from "./recommendation-process";
import {
  BrandNetwork,
  TechnicalScene,
  TrustContours,
} from "./illustrations";

const chapters = [
  ["Your starting point", "your-start"],
  ["Product interests", "product-interests"],
  ["Buying guides", "buying-guides"],
  ["Find your next step", "starting-point"],
] as const;

function ChapterLabel({
  children,
  number,
}: {
  children: ReactNode;
  number: string;
}) {
  return (
    <p className="eyebrow chapter-label">
      <span aria-hidden="true">{number}</span>
      {children}
    </p>
  );
}

export function HomeHero() {
  return (
    <section
      className="hero-shell home-hero home-dark"
      data-story-chapter="hero"
      aria-labelledby="home-heading"
    >
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-fine-grid" />
      </div>
      <svg className="hero-signal-lead" viewBox="0 0 1000 550" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
        <path className="hero-lead-desktop" pathLength="1" d="M840 405v95q0 30-30 30H20q-20 0-20 20" />
        <path className="hero-lead-mobile" pathLength="1" d="M750 405v95q0 30-30 30H20q-20 0-20 20" />
      </svg>
      <KineticHero />
      <div className="site-container hero-content">
        <div className="hero-intro">
          <p className="eyebrow">CANOD / Canadian-owned online retail</p>
          <h1 id="home-heading">
            Good finds. <br />
            Better days.
          </h1>
          <p className="hero-description">
            A little more order. A better everyday setup. We look for useful
            things that make technology, work, travel and daily life feel
            simpler.
          </p>
          <div className="actions">
            <Link className="button button-dark" href="/interests/">
              Explore product interests{" "}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/guides/">
              Read the buying guides
            </Link>
          </div>
        </div>
      </div>
      <nav
        className="site-container home-chapter-nav"
        aria-label="Homepage sections"
      >
        {chapters.map(([label, id], index) => (
          <a href={`#${id}`} key={id}>
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

export function HomeInterests() {
  return (
    <section
      id="product-interests"
      className="home-interests home-light home-section"
      data-story-chapter="interests"
      aria-labelledby="interests-heading"
    >
      <div className="site-container">
        <div className="home-section-heading home-reveal">
          <div>
            <ChapterLabel number="02">Product interests</ChapterLabel>
            <h2 id="interests-heading">Useful in more ways than one.</h2>
          </div>
          <p>
            From a tidier desk to a better-packed bag, our interests follow
            everyday needs. These are categories we are exploring, not products
            currently available to buy.
          </p>
        </div>
        <div className="home-interest-grid">
          {productCategories.map(({ name, description }, index) => (
            <Link
              href={categoryHref(index)}
              id={`interest-${index}`}
              className={`home-module home-reveal module-${index}`}
              key={name}
            >
              <span className="module-number" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="module-visual">
                <TechnicalScene kind={index} id={`interest-scene-${index}`} />
              </div>
              <div className="module-copy">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <span className="module-link">
                <span>
                  Explore <span className="sr-only">{name.toLowerCase()}</span>
                </span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeGuides() {
  return (
    <section
      id="buying-guides"
      className="home-guides home-dark home-section"
      data-story-chapter="guides"
      aria-labelledby="guides-heading"
    >
      <div className="site-container home-guides-layout">
        <div className="home-guide-intro home-reveal">
          <ChapterLabel number="03">Buying guides</ChapterLabel>
          <h2 id="guides-heading">A clearer choice starts here.</h2>
          <p>
            Practical reading on fit, trade-offs and the details worth checking
            before you buy.
          </p>
          <nav className="guide-sequence" aria-label="Featured buying guides">
            {guides.map((guide, index) => (
              <a href={`#home-guide-${guide.slug}`} key={guide.slug}>
                <span aria-hidden="true">0{index + 1}</span>
                {guide.category}
                <ArrowDown size={14} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
        <div className="home-guide-stories">
          {guides.map((guide, index) => (
            <article
              id={`home-guide-${guide.slug}`}
              className={`home-guide home-reveal ${index === 0 ? "home-guide-feature" : "home-guide-secondary"}`}
              key={guide.slug}
            >
              <div className="home-guide-art">
                <TechnicalScene
                  kind={index === 0 ? 5 : 0}
                  id={`guide-scene-${index}`}
                />
              </div>
              <div className="home-guide-copy">
                <div className="home-guide-meta">
                  <p className="eyebrow">{guide.category}</p>
                  <span className="guide-reading-time" title="Estimated reading time">~{readingMinutes(guide.sections)} min read</span>
                  <time dateTime={guide.date}>
                    {new Date(`${guide.date}T12:00:00Z`).toLocaleDateString(
                      "en-CA",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC",
                      },
                    )}
                  </time>
                </div>
                <h3>
                  <Link href={`/guides/${guide.slug}/`}>{guide.title}</Link>
                </h3>
                <p>{guide.description}</p>
                <Link
                  className="text-link"
                  href={`/guides/${guide.slug}/`}
                  aria-label={`Read the guide: ${guide.title}`}
                >
                  Read the guide <ArrowRight size={18} aria-hidden="true" />
                </Link>
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
        <div className="home-perspective-intro home-reveal">
          <ChapterLabel number="05">Our point of view</ChapterLabel>
          <h2 id="perspective-heading">
            Good products earn their place in your day.
          </h2>
          <div className="text-stack">
            <p>
              We start with a simple question: what does this make easier?
              Useful design, understandable details and a good fit for the way
              people live matter more than a longer feature list.
            </p>
            <p>
              CANOD brings that practical approach to product discovery and
              responsible sourcing for Canadian online retail.
            </p>
          </div>
          <Link className="text-link" href="/about/">
            Meet CANOD <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <RecommendationProcess />
      </div>
    </section>
  );
}

export function HomePartners() {
  return (
    <>
      <section
        id="for-brands"
        className="home-partners home-light home-section"
        data-story-chapter="partners"
        aria-label="For brands and distributors"
      >
        <div className="site-container home-partner-layout">
          <div className="home-partner-copy home-reveal">
            <ChapterLabel number="06">For brands and distributors</ChapterLabel>
            <p>
              We welcome conversations with brands and wholesale suppliers whose
              products fit everyday needs. CANOD&apos;s sales channels include
              Amazon.ca; marketplace permissions are agreed with suppliers
              before listing.
            </p>
            <Link className="text-link" href="/partners/">For brands and distributors <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="home-reveal">
            <BrandNetwork />
          </div>
        </div>
      </section>
      <section
        className="home-finale home-dark"
        data-story-chapter="finale"
        aria-labelledby="finale-heading"
      >
        <div className="site-container home-finale-inner home-reveal">
          <svg className="finale-signal" viewBox="0 0 1248 120" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false"><path pathLength="1" d="M0 0v25q0 24 24 24h1100q24 0 24 24v47" /><circle cx="1148" cy="117" r="3" /></svg>
          <h2 id="finale-heading">Have something useful in mind?</h2>
          <Link className="button button-dark" href="/partners/">
            Work with CANOD <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
