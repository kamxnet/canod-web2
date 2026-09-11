import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { KineticHero } from "@/components/kinetic-hero";
import { productCategories } from "@/lib/product-categories";
import { guides } from "@/lib/guides";
import {
  BrandNetwork,
  TechnicalScene,
  TrustContours,
} from "./illustrations";

const chapters = [
  ["Product interests", "product-interests"],
  ["Buying guides", "buying-guides"],
  ["Our point of view", "point-of-view"],
  ["For brands", "for-brands"],
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
            <ChapterLabel number="01">Product interests</ChapterLabel>
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
              href="/interests/"
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
      className="home-guides home-light home-section"
      data-story-chapter="guides"
      aria-labelledby="guides-heading"
    >
      <div className="site-container home-guides-layout">
        <div className="home-guide-intro home-reveal">
          <ChapterLabel number="02">Buying guides</ChapterLabel>
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
              className={`home-guide home-reveal ${index === 0 ? "home-guide-feature home-dark" : "home-guide-secondary"}`}
              key={guide.slug}
            >
              <div className="home-guide-art">
                <TechnicalScene
                  kind={index === 0 ? 2 : 0}
                  id={`guide-scene-${index}`}
                />
              </div>
              <div className="home-guide-copy">
                <div className="home-guide-meta">
                  <p className="eyebrow">{guide.category}</p>
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

const principles = [
  {
    title: "Research and sources",
    description:
      "Our guides help readers understand a product category and make their own choice.",
  },
  {
    title: "Research is different from testing",
    description: "Our current guides are research-based.",
  },
  {
    title: "Commercial relationships",
    description: "Our current buying guides contain no affiliate links.",
  },
];

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
          <ChapterLabel number="03">Our point of view</ChapterLabel>
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
        <div className="home-principles">
          <p className="principles-origin">Canadian-owned online retailer.</p>
          <ol>
            {principles.map(({ title, description }, index) => (
              <li className="home-principle home-reveal" key={title}>
                <span className="principle-node" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link className="text-link" href="/editorial-standards/">
            Editorial standards <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
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
            <ChapterLabel number="04">For brands and distributors</ChapterLabel>
            <p>
              We welcome conversations with brands and wholesale suppliers whose
              products fit everyday needs. CANOD&apos;s sales channels include
              Amazon.ca; marketplace permissions are agreed with suppliers
              before listing.
            </p>
          </div>
          <div className="home-reveal">
            <BrandNetwork />
          </div>
        </div>
      </section>
      <section
        className="home-finale home-light"
        data-story-chapter="finale"
        aria-labelledby="finale-heading"
      >
        <div className="site-container home-finale-inner home-reveal">
          <h2 id="finale-heading">Have something useful in mind?</h2>
          <Link className="button button-dark" href="/partners/">
            Work with CANOD <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
