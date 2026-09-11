import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { KineticHero } from "@/components/kinetic-hero";
import { DockChecker } from "@/components/dock-checker";
import { EditorialScene } from "@/components/editorial-scene";
import { pillars } from "@/lib/editorial";
import { guides } from "@/lib/guides";
import { dockGuidePath, dockToolPath } from "@/lib/dock-sources";
import { readingMinutes } from "@/lib/guide-reading";
import { RecommendationProcess } from "./recommendation-process";
import { TrustContours } from "./illustrations";

function ChapterLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="eyebrow chapter-label"><span aria-hidden="true">{number}</span>{children}</p>;
}

export function HomeHero() {
  const chapters = [["Find your direction", "your-start"], ["Explore the connections", "product-interests"], ["The dock buying guide", "buying-guides"], ["Check your setup", "starting-point"]];
  return <section className="hero-shell home-hero home-dark" data-story-chapter="hero" aria-labelledby="home-heading">
    <div className="hero-atmosphere" aria-hidden="true"><div className="hero-fine-grid" /></div>
    <svg className="hero-signal-lead" viewBox="0 0 1000 550" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
      <path className="hero-lead-desktop" pathLength="1" d="M840 405v95q0 30-30 30H20q-20 0-20 20" />
      <path className="hero-lead-mobile" pathLength="1" d="M750 405v95q0 30-30 30H20q-20 0-20 20" />
    </svg>
    <KineticHero />
    <div className="site-container hero-content"><div className="hero-intro">
      <p className="eyebrow">CANOD / Practical technology for Canada</p>
      <h1 id="home-heading">Technology should <br />work together.</h1>
      <p className="hero-description">Clear Canadian guidance for choosing compatible, practical technology for work, storage and life on the move.</p>
      <div className="actions"><Link className="button button-dark" href="/guides/">Explore practical guides <ArrowRight size={18} aria-hidden="true" /></Link><Link className="text-link" href="#starting-point">Try a CANOD tool <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
    </div></div>
    <nav className="site-container home-chapter-nav" aria-label="Homepage sections">{chapters.map(([label, id], index) => <a href={"#" + id} key={id}><span className="chapter-nav-number" aria-hidden="true">0{index + 1}</span><span>{label}</span><ArrowDown size={15} aria-hidden="true" /></a>)}</nav>
  </section>;
}

export function HomeInterests() {
  return <section id="product-interests" className="home-interests home-light home-section" data-story-chapter="interests" aria-labelledby="interests-heading">
    <div className="site-container">
      <div className="home-section-heading"><div><ChapterLabel number="02">The connections that matter</ChapterLabel><h2 id="interests-heading">A better setup.<br />Wherever work happens.</h2></div><p>A desk, a backup plan, a bag ready to go. Start with what needs to work together, then choose the technology around it.</p></div>
      <div className="editorial-scenes">{pillars.map(pillar => <article id={pillar.id} className={"editorial-module editorial-module-" + pillar.id} key={pillar.id}>
        <div className="editorial-art"><EditorialScene kind={pillar.id} id={"home-" + pillar.id} /></div>
        <div className="editorial-module-copy"><p className="eyebrow">{pillar.number} / {pillar.title}</p><h3>{pillar.description}</h3><p>{pillar.detail}</p><Link className="text-link" href={"/guides/" + pillar.guide + "/"}>{pillar.cta} <ArrowRight size={17} aria-hidden="true" /></Link></div>
      </article>)}</div>
    </div>
  </section>;
}

export function HomeGuides() {
  const guide = guides.find(item => item.slug === "seven-things-usb-c-dock")!;
  return <section id="buying-guides" className="home-guides home-dark home-section" data-story-chapter="guides" aria-labelledby="guides-heading">
    <div className="site-container featured-layout">
      <div className="featured-intro"><ChapterLabel number="03">The CANOD field guide</ChapterLabel><h2 id="guides-heading">One cable.<br />Seven things to check.</h2><p>A clearer choice starts with the details that a product listing can leave out.</p></div>
      <article className="featured-story">
        <div className="featured-art"><EditorialScene kind="work" id="featured-dock" /><span className="featured-seven" aria-hidden="true">07</span></div>
        <div className="featured-meta"><span>Work &amp; connectivity</span><span>~{readingMinutes(guide.sections)} min read</span><span>Research-based</span></div>
        <h3><Link href={dockGuidePath}>{guide.title}</Link></h3>
        <p>{guide.description}</p>
        <nav className="featured-topics" aria-label="Topics in this guide">{[["Compatibility", "computer-and-port"], ["Displays", "displays"], ["Power delivery", "power-delivery"], ["Ports & cables", "ports-and-cables"], ["Operating systems", "operating-system"], ["DisplayLink", "displaylink"], ["Buying in Canada", "canadian-purchase"]].map(([label, anchor], index) => <Link key={anchor} href={dockGuidePath + "#" + anchor}><span aria-hidden="true">0{index + 1}</span>{label}<ArrowUpRight size={15} aria-hidden="true" /></Link>)}</nav>
      </article>
    </div>
  </section>;
}

export function HomeDockTool() {
  return <section id="starting-point" className="home-dock home-light home-section" data-story-chapter="tool" aria-labelledby="dock-heading">
    <div className="site-container">
      <div className="home-section-heading"><div><ChapterLabel number="04">A little clarity before you buy</ChapterLabel><h2 id="dock-heading">USB-C Dock <br />Compatibility Checker</h2></div><div className="tool-heading-copy"><p>Turn your device, display and charging needs into the questions worth asking before choosing a dock.</p><Link href={dockToolPath} className="text-link">Open the standalone tool <ArrowUpRight size={16} aria-hidden="true" /></Link></div></div>
      <DockChecker />
    </div>
  </section>;
}

export function HomePerspective() {
  return <section id="point-of-view" className="home-perspective home-dark home-section point-of-view" data-story-chapter="perspective" aria-labelledby="perspective-heading">
    <TrustContours />
    <div className="site-container home-perspective-layout">
      <div className="home-perspective-intro"><ChapterLabel number="06">How we reach a useful answer</ChapterLabel><h2 id="perspective-heading">Good products earn their place in your day.</h2><div className="text-stack"><p>We start with a simple question: what does this make easier?</p><p>Our current guides are research-based, not hands-on product tests. We make that distinction clear.</p></div><Link className="text-link" href="/editorial-standards/">Our editorial standards <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
      <RecommendationProcess />
    </div>
  </section>;
}

export function HomeReading() {
  return <section className="home-reading home-light home-section" data-story-chapter="reading" aria-labelledby="reading-heading"><div className="site-container">
    <div className="home-section-heading"><div><ChapterLabel number="07">Keep following your curiosity</ChapterLabel><h2 id="reading-heading">Useful now.<br />More to explore.</h2></div><p>Practical reading on fit, trade-offs and the details worth checking before you buy.</p></div>
    <div className="reading-grid">{guides.map(guide => <article className="reading-card" key={guide.slug}><p className="eyebrow">{guide.category}<span>~{readingMinutes(guide.sections)} min</span></p><h3><Link href={"/guides/" + guide.slug + "/"}>{guide.title}<ArrowUpRight size={22} aria-hidden="true" /></Link></h3></article>)}</div>
    <div id="business" className="business-preview"><p className="eyebrow">Planned coverage / Small business</p><div><p>Website builders, business email, productivity, scheduling and invoicing. The same focus on fit and total cost.</p><Link className="text-link" href="/guides/#business">Start with the essentials <ArrowRight size={17} aria-hidden="true" /></Link></div></div>
  </div></section>;
}

export function HomeBrief() {
  return <section className="home-brief home-light home-section" data-story-chapter="brief" aria-labelledby="brief-heading"><div className="site-container brief-layout">
    <div className="brief-title"><Mail size={24} strokeWidth={1.25} aria-hidden="true" /><p className="eyebrow">The next useful thing</p><h2 id="brief-heading">Practical Tech Brief</h2></div>
    <div className="brief-status"><p className="coming-label">Coming soon</p><p>A considered note on practical technology, useful guides and CANOD tools. Subscriptions are not open yet.</p></div>
  </div></section>;
}

export function HomeFinale() {
  return <section className="home-finale home-dark" data-story-chapter="finale" aria-labelledby="finale-heading"><div className="site-container home-finale-inner">
    <svg className="finale-signal" viewBox="0 0 1200 80" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false"><path pathLength="1" d="M0 5h870q35 0 35 35v35h260" /><circle cx="1165" cy="75" r="3" /></svg>
    <div><p className="eyebrow">Follow a more useful signal.</p><h2 id="finale-heading">Make the next connection a good one.</h2></div><div className="finale-actions"><Link className="button button-dark" href="/guides/">Explore practical guides <ArrowRight size={17} aria-hidden="true" /></Link><Link className="text-link" href={dockToolPath}>Try a CANOD tool <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
  </div></section>;
}
