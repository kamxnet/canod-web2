"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, RotateCcw, Check } from "lucide-react";
import { categoryHref, intents, places, priorities, startingPoint, type GuidePreview, type Place, type Priority } from "@/lib/home-navigation";
import { productCategories } from "@/lib/product-categories";
import { useJourney } from "./journey-provider";

export function StartingPoint({ guides }: { guides: GuidePreview[] }) {
  const { intent } = useJourney();
  // Remount only the form when the visitor deliberately changes their initial intent.
  return <StartingPointForm key={intent} intent={intent} guides={guides} />;
}

function StartingPointForm({ intent, guides }: { intent: string; guides: GuidePreview[] }) {
  const initial = intents.find(item => item.id === intent) ?? intents[0];
  const [place, setPlace] = useState<Place>(initial.place);
  const [priority, setPriority] = useState<Priority>(initial.priority);
  const [result, setResult] = useState<ReturnType<typeof startingPoint> | null>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const category = result ? productCategories[result.category] : null;
  const guide = guides.find(item => item.slug === result?.guide?.slug);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(startingPoint(place, priority));
    requestAnimationFrame(() => resultHeading.current?.focus({ preventScroll: false }));
  }
  function reset() {
    setPlace(initial.place);
    setPriority(initial.priority);
    setResult(null);
    form.current?.querySelector<HTMLSelectElement>("select")?.focus();
  }

  return <section id="starting-point" className="home-starting-point home-light home-section" data-story-chapter="navigator" aria-labelledby="navigator-heading">
    <noscript><style>{".home-story .navigator-form{display:none}.home-story .navigator-layout{grid-template-columns:1fr}.home-story .navigator-result{border:0;padding:1.5rem 0;min-height:0}"}</style></noscript>
    <div className="site-container">
      <div className="navigator-heading">
        <p className="eyebrow chapter-label"><span aria-hidden="true">04</span>A practical next step</p>
        <h2 id="navigator-heading">Find your practical-tech starting point.</h2>
      </div>
      <div className="navigator-layout">
        <form ref={form} action="/interests/" method="get" onSubmit={submit} className="navigator-form">
          <div className="navigator-field">
            <span aria-hidden="true">01</span>
            <label htmlFor="navigator-place">Where will you use it?</label>
            <select id="navigator-place" name="place" value={place} onChange={event => { setPlace(event.target.value as Place); setResult(null); }}>
              {places.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </div>
          <div className="navigator-field">
            <span aria-hidden="true">02</span>
            <label htmlFor="navigator-priority">What needs attention?</label>
            <select id="navigator-priority" name="priority" value={priority} onChange={event => { setPriority(event.target.value as Priority); setResult(null); }}>
              {priorities.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </div>
          <div className="navigator-actions">
            <button type="submit" className="button button-dark">Find my starting point <ArrowRight size={18} aria-hidden="true" /></button>
            <button type="button" className="navigator-reset" onClick={reset} aria-label="Reset your starting point" title="Reset your starting point"><RotateCcw size={18} aria-hidden="true" /></button>
          </div>
        </form>
        <div className="navigator-result" data-has-result={Boolean(result)}>
          {category && result ? <>
            <p className="eyebrow navigator-result-label"><Check size={16} aria-hidden="true" />Your starting point</p>
            <h3 ref={resultHeading} tabIndex={-1}>{category.name}</h3>
            <p>{category.description}</p>
            <Link href={categoryHref(result.category)} className="text-link">Explore sourcing interests <ArrowUpRight size={18} aria-hidden="true" /></Link>
            {guide && result.guide && <div className="navigator-guide">
              <p className="eyebrow">Related reading</p>
              <Link href={`/guides/${guide.slug}/#${result.guide.anchor}`}>{guide.title}<ArrowRight size={18} aria-hidden="true" /></Link>
              <p>{guide.description}</p>
            </div>}
          </> : <>
            <p className="eyebrow">Product interests</p>
            <div className="navigator-index">
              {productCategories.map((category, index) => <Link key={category.name} href={categoryHref(index)}><span aria-hidden="true">0{index + 1}</span>{category.name}<ArrowUpRight size={17} aria-hidden="true" /></Link>)}
            </div>
          </>}
        </div>
      </div>
    </div>
  </section>;
}
