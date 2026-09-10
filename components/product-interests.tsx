"use client";

import { useState } from "react";
import { ArrowRight, Check, Plus, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  "All",
  "Storage & connectivity",
  "Tech accessories",
  "Desk & cable",
  "Travel",
  "Everyday",
] as const;

const interests = [
  {
    "id": "storage-connectivity-cases",
    "category": "Storage & connectivity",
    "name": "Drive and cable cases",
    "description": "Compact cases for portable drives, adapters and spare cables. We look for useful compartment sizes and a fit that is easy to check."
  },
  {
    "id": "connectivity-accessories",
    "category": "Storage & connectivity",
    "name": "Home storage and connectivity",
    "description": "Storage systems, drive enclosures, cables and adapters for everyday files and devices. Clear compatibility information matters."
  },
  {
    "id": "non-powered-tech",
    "category": "Tech accessories",
    "name": "Device sleeves and pouches",
    "description": "Simple sleeves and pouches for the devices you carry. Dimensions, lining and closures help determine a useful fit."
  },
  {
    "id": "device-stands",
    "category": "Tech accessories",
    "name": "Device stands and supports",
    "description": "Laptop risers, tablet stands and phone supports for a comfortable setup. We consider footprint, adjustment and device fit."
  },
  {
    "id": "desk-cable-organization",
    "category": "Desk & cable",
    "name": "Cable clips and wraps",
    "description": "Clips, ties, sleeves and labels that keep frequently used cables in order, at a desk or inside a bag."
  },
  {
    "id": "workday-organization",
    "category": "Desk & cable",
    "name": "Desk trays and organizers",
    "description": "Low-profile trays and holders for stationery, small tools and everyday work essentials, without taking over the desk."
  },
  {
    "id": "packing-organization",
    "category": "Travel",
    "name": "Packing cubes and pouches",
    "description": "Packing cubes, toiletry bags and flexible pouches to separate what you carry and make unpacking easier."
  },
  {
    "id": "travel-accessory-storage",
    "category": "Travel",
    "name": "Travel tech organizers",
    "description": "Organizers for chargers, earbuds, adapters and cables. A useful layout balances quick access with space for bulkier items."
  },
  {
    "id": "everyday-practical",
    "category": "Everyday",
    "name": "Everyday home organization",
    "description": "Small bins, drawer dividers and simple storage for the things that need a regular place around the home."
  },
  {
    "id": "packable-carry",
    "category": "Everyday",
    "name": "Packable bags and carry",
    "description": "Reusable bags and compact carry accessories that fit into daily errands and fold away when they are not needed."
  }
] as const;

export function ProductInterests() {
  const [selected, setSelected] = useState<string[]>([]);
  const chosen = interests.filter((item) => selected.includes(item.id));
  const toggle = (id: string) =>
    setSelected((previous) =>
      previous.includes(id) ? previous.filter((value) => value !== id) : [...previous, id],
    );
  const email = `mailto:hello@canod.ca?subject=${encodeURIComponent("Product interests for CANOD")}&body=${encodeURIComponent(`Hello CANOD,\n\nI would be interested in these sourcing areas:\n${chosen.map((item) => `- ${item.name}`).join("\n")}\n\nWhat I look for in these products:\n\nThank you!`)}`;

  return (
    <div className="interest-layout">
      <Tabs defaultValue="All" className="min-w-0">
        <TabsList aria-label="Filter product interests" className="interest-tabs">
          {categories.map((category) => (
            <TabsTrigger className="interest-tab" key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="interest-grid mt-6">
            {interests
              .filter((item) => category === "All" || item.category === category)
              .map((item) => {
                const isSelected = selected.includes(item.id);
                return (
                  <article className={`interest-card${isSelected ? " is-selected" : ""}`} key={item.id}>
                    <p className="eyebrow text-maple">{item.category}</p>
                    <h2>{item.name}</h2>
                    <p className="interest-card-description">{item.description}</p>
                    <button
                      type="button"
                      className="interest-toggle"
                      aria-pressed={isSelected}
                      aria-label={`${isSelected ? "Remove" : "Add"} ${item.name} ${isSelected ? "from" : "to"} your interests`}
                      onClick={() => toggle(item.id)}
                    >
                      {isSelected ? <Check size={17} aria-hidden="true" /> : <Plus size={17} aria-hidden="true" />}
                      {isSelected ? "Added" : "Add interest"}
                    </button>
                  </article>
                );
              })}
          </TabsContent>
        ))}
      </Tabs>
      <aside className="interest-summary" aria-labelledby="your-interests">
        <p className="eyebrow text-maple">Your selection</p>
        <h2 id="your-interests" className="mt-5 text-3xl font-semibold">
          Your interests
        </h2>
        <p className="mt-3 text-sm leading-6 text-ink/70" aria-live="polite" aria-atomic="true">
          {chosen.length === 0
            ? "Choose the categories you would like to hear more about."
            : `${chosen.length} ${chosen.length === 1 ? "area" : "areas"} selected. Switching filters keeps your choices.`}
        </p>
        {chosen.length > 0 ? (
          <>
            <ul className="mt-5 divide-y divide-ink/10">
              {chosen.map((item) => (
                <li className="flex items-center justify-between gap-3 py-2 text-sm" key={item.id}>
                  <span>{item.name}</span>
                  <button
                    className="remove-interest"
                    type="button"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => toggle(item.id)}
                  >
                    <X size={16} aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
            <button className="text-link mt-3" type="button" onClick={() => setSelected([])}>
              Clear selection
            </button>
            <a className="button button-dark mt-7 w-full" href={email}>
              Email your interests <ArrowRight size={17} aria-hidden="true" />
            </a>
          </>
        ) : (
          <button className="button button-dark mt-7 w-full" type="button" disabled>
            Select an interest first
          </button>
        )}
        <p className="mt-4 text-sm leading-6 text-ink/70">
          Opens your email app. Nothing is sent automatically. Your selections are not
          saved when you leave this page.
        </p>
        <p className="mt-5 border-t border-ink/15 pt-5 text-sm leading-6 text-ink/75">
          Prefer a direct conversation?{" "}
          <a className="underline underline-offset-4" href="mailto:hello@canod.ca">
            Email hello@canod.ca
          </a>
          .
        </p>
      </aside>
      <noscript>
        <p>
          To share an interest without JavaScript, email{" "}
          <a href="mailto:hello@canod.ca">hello@canod.ca</a> with the sourcing categories you like.
        </p>
      </noscript>
    </div>
  );
}
