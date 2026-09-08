"use client";

import { useState } from "react";
import { ArrowRight, Check, Plus, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", "Work", "Travel", "Everyday"] as const;
const interests = [
  { id: "tech-pouches", category: "Work", title: "A place for every cable.", name: "Tech pouches", description: "Compact organization for chargers, cables, and the small things that disappear in a bag.", detail: "Thoughtful compartments · Easy to carry" },
  { id: "desk-organization", category: "Work", title: "A little more desk space.", name: "Desk organization", description: "Simple cable management and small organizers that help keep a working surface clear.", detail: "Small footprint · Everyday utility" },
  { id: "packing-organization", category: "Travel", title: "Pack with a little order.", name: "Packing organization", description: "Lightweight packing cubes and pouches for keeping clothing and travel essentials together.", detail: "Lightweight · Easy to unpack" },
  { id: "travel-pouches", category: "Travel", title: "Ready for the next stop.", name: "Travel pouches", description: "Useful small-bag organization for the essentials you want within reach on the move.", detail: "Accessible storage · Versatile sizes" },
  { id: "key-organization", category: "Everyday", title: "Carry just what matters.", name: "Key & everyday carry", description: "Considered key organization and pocket-sized accessories for the daily routine.", detail: "Compact format · Less clutter" },
  { id: "reusable-carry", category: "Everyday", title: "Room for the unplanned.", name: "Reusable carry", description: "Packable everyday bags that are convenient to keep close when plans change.", detail: "Packable · Useful beyond one trip" },
] as const;

export function ProductInterests() {
  const [selected, setSelected] = useState<string[]>([]);
  const chosen = interests.filter((item) => selected.includes(item.id));
  const toggle = (id: string) => setSelected((previous) => previous.includes(id) ? previous.filter((value) => value !== id) : [...previous, id]);
  const email = `mailto:hello@canod.ca?subject=${encodeURIComponent("Product interests for CANOD")}&body=${encodeURIComponent(`Hello CANOD,\n\nI would be interested in these product categories:\n${chosen.map((item) => `- ${item.name}`).join("\n")}\n\nWhat I look for in these products:\n\nThank you!`)}`;

  return <div className="interest-layout">
    <Tabs defaultValue="All" className="min-w-0">
      <TabsList aria-label="Filter product interests" className="interest-tabs">
        {categories.map((category) => <TabsTrigger className="interest-tab" key={category} value={category}>{category}</TabsTrigger>)}
      </TabsList>
      {categories.map((category) => <TabsContent key={category} value={category} className="interest-grid mt-6">
        {interests.filter((item) => category === "All" || item.category === category).map((item) => {
          const isSelected = selected.includes(item.id);
          return <article className={`interest-card${isSelected ? " is-selected" : ""}`} key={item.id}>
            <p className="eyebrow text-maple">{item.category} / {item.name}</p>
            <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-[-.04em]">{item.title}</h2>
            <p className="mt-5 leading-7 text-ink/75">{item.description}</p>
            <p className="mt-5 text-sm leading-6 text-ink/70">{item.detail}</p>
            <button type="button" className="interest-toggle mt-7" aria-pressed={isSelected} aria-label={`${isSelected ? "Remove" : "Add"} ${item.name} ${isSelected ? "from" : "to"} your interests`} onClick={() => toggle(item.id)}>
              {isSelected ? <Check size={17} aria-hidden="true" /> : <Plus size={17} aria-hidden="true" />}{isSelected ? "Added to interests" : "Add to interests"}
            </button>
          </article>;
        })}
      </TabsContent>)}
    </Tabs>
    <aside className="interest-summary" aria-labelledby="your-interests">
      <p className="eyebrow text-maple">Help shape the collection</p>
      <h2 id="your-interests" className="mt-5 text-3xl font-semibold tracking-[-.04em]">Your interests</h2>
      <p className="mt-3 text-sm leading-6 text-ink/70" aria-live="polite" aria-atomic="true">{chosen.length === 0 ? "Choose a category that would be useful in your day." : `${chosen.length} ${chosen.length === 1 ? "category" : "categories"} selected. Switching filters keeps your choices.`}</p>
      {chosen.length > 0 ? <>
        <ul className="mt-5 divide-y divide-ink/10">{chosen.map((item) => <li className="flex items-center justify-between gap-3 py-2 text-sm" key={item.id}><span>{item.name}</span><button className="remove-interest" type="button" aria-label={`Remove ${item.name}`} onClick={() => toggle(item.id)}><X size={16} aria-hidden="true" /></button></li>)}</ul>
        <button className="text-link mt-3" type="button" onClick={() => setSelected([])}>Clear selection</button>
        <a className="button button-dark mt-7 w-full" href={email}>Email your interests <ArrowRight size={17} aria-hidden="true" /></a>
      </> : <button className="button button-dark mt-7 w-full" type="button" disabled>Select an interest first</button>}
      <p className="mt-4 text-sm leading-6 text-ink/70">Opens your email app. Nothing is sent until you send the email. Your selections are not saved when you leave this page.</p>
      <p className="mt-5 border-t border-ink/15 pt-5 text-sm leading-6 text-ink/75">This is an interest inquiry, not an order or a stock notification signup. Prefer a direct conversation? <a className="underline underline-offset-4" href="mailto:hello@canod.ca">Email hello@canod.ca</a>.</p>
    </aside>
    <noscript><p>To share an interest without JavaScript, email <a href="mailto:hello@canod.ca">hello@canod.ca</a> with the categories you like: tech pouches, desk organization, packing organization, travel pouches, key organization, or reusable carry.</p></noscript>
  </div>;
}
