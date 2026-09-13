import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();
  const metadata = pageMetadata(guide.title.replace(/\.$/, ""), guide.description, `/guides/${slug}/`);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article", publishedTime: guide.date, authors: ["CANOD"] } };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();
  const date = new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(guide.date));
  const reviewed = guide.reviewed ? new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(guide.reviewed)) : date;
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, datePublished: guide.date, dateModified: guide.reviewed ?? guide.date, author: { "@type": "Organization", name: "CANOD", url: "https://canod.ca" }, publisher: { "@type": "Organization", name: "CANOD", url: "https://canod.ca" }, mainEntityOfPage: "https://canod.ca/guides/" + guide.slug + "/", inLanguage: "en-CA" };
  return <article className="publication-page">
    <header className="article-header"><div className="site-container">
      <Link className="breadcrumb" href="/guides/"><ArrowLeft size={17} aria-hidden="true" />All buying guides</Link>
      <p className="eyebrow text-maple">{guide.category}</p>
      <h1>{guide.title}</h1><p className="article-deck">{guide.description}</p>
      <div className="article-meta"><span>By CANOD</span><span>Published <time dateTime={guide.date}>{date}</time></span><span>Research-based guide</span></div>
      {guide.reviewed && <p className="article-review">Last reviewed <time dateTime={guide.reviewed}>{reviewed}</time></p>}
    </div></header>
    <div className="site-container article-layout">
      <aside className="article-nav"><p className="eyebrow">In this guide</p><nav aria-label="In this guide">
        {guide.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
        <a href="#sources">Sources & editorial note</a>
      </nav></aside>
      <div className="article-body">
        {guide.scope && <p className="article-note">{guide.scope}</p>}
        {guide.sections.map((section) => {
          const isQuickAnswer = section.id === "answer" || section.title.toLowerCase().includes("30-second answer");
          const isStepSolution = section.id === "solution" || section.title.toLowerCase().includes("step-by-step");
          const className = isQuickAnswer ? "article-quick-answer-card" : isStepSolution ? "article-step-solution-card" : undefined;
          return (
            <section key={section.id} id={section.id} className={className}>
              <h2>{section.title}</h2>
              {section.content}
            </section>
          );
        })}
        <section id="sources" className="article-sources">
          <h2>Sources & editorial note</h2>
          <div className="article-note"><p>{guide.methodology ?? <>This guide combines CANOD&apos;s practical buying considerations with official sources checked on {date}. It is research-based; CANOD has not hands-on tested products for this article. Manufacturer references support specific facts and do not imply a retail relationship or endorsement.</>}</p>{guide.methodology && <p>Sources checked on {reviewed}. Manufacturer references support specific facts, not a recommendation or commercial relationship.</p>}</div>
          <ol>{guide.sources.map((source) => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ol>
          <p>No affiliate links are included in this guide. See our <Link href="/editorial-standards/">editorial standards</Link> or <a href={`mailto:hello@canod.ca?subject=${encodeURIComponent("Correction: " + guide.title)}`}>send a correction</a>.</p>
        </section>
        {guide.related && <section className="article-related"><h2>Continue your checks</h2><ul>{guide.related.map(item => <li key={item.href}><Link href={item.href}>{item.title}</Link></li>)}</ul></section>}
      </div>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
  </article>;
}
