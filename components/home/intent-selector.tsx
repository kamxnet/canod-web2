"use client";

import Link from "next/link";
import { ArrowRight, Check, HardDrive, Laptop, Luggage, BriefcaseBusiness } from "lucide-react";
import { editorialIntents as intents } from "@/lib/editorial";
import { useJourney } from "./journey-provider";

const icons = [Laptop, HardDrive, Luggage, BriefcaseBusiness];

export function IntentSelector() {
  const { chooseIntent } = useJourney();
  return (
    <section id="your-start" className="home-intent home-light home-section" data-story-chapter="intent" aria-labelledby="intent-heading">
      <div className="site-container intent-layout">
        <div className="intent-intro">
          <p className="eyebrow chapter-label"><span aria-hidden="true">01</span>Your starting point</p>
          <h2 id="intent-heading">What are you trying to make easier?</h2>
          <svg className="intent-circuit" viewBox="0 0 420 180" fill="none" aria-hidden="true" focusable="false">
            <path className="circuit-track" d="M0 90h80q20 0 20-20V30h70m-70 40v60q0 20 20 20h50M100 90h70M190 30h70q25 0 25 25v35h100M190 150h70q25 0 25-25V90M190 90h195" />
            {[30, 90, 150].map((y, index) => <g key={y} className={`circuit-node circuit-node-${index}`}><circle cx="180" cy={y} r="8" /><path d={`M177 ${y}h6m-3-3v6`} /></g>)}
            <path className="circuit-output" pathLength="1" d="M0 90h385" />
            <path d="m377 82 8 8-8 8" />
          </svg>
        </div>
        <div className="intent-selector">
          <fieldset>
            <legend className="sr-only">What are you trying to make easier?</legend>
            {intents.map((intent, index) => {
              const Icon = icons[index];
              return <label className="intent-option" key={intent.id}>
                <input type="radio" name="visitor-intent" value={intent.id} defaultChecked={index === 0} aria-controls={`intent-result-${intent.id}`} aria-describedby={`intent-description-${intent.id}`} onChange={() => chooseIntent(intent.id)} />
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                <span>{intent.label}</span>
                <Check className="intent-check" size={18} aria-hidden="true" />
              </label>;
            })}
          </fieldset>
          <div className="intent-results">
            {intents.map(intent => {
              return <div className="intent-result" id={`intent-result-${intent.id}`} data-intent-result={intent.id} key={intent.id}>
                <p id={`intent-description-${intent.id}`}>{intent.description}</p>
                <Link href={intent.href} className="text-link">{intent.cta} <ArrowRight size={17} aria-hidden="true" /></Link>
                <Link href={`#${intent.section}`} className="intent-direct">{intent.secondary} <ArrowRight size={14} aria-hidden="true" /></Link>
              </div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
