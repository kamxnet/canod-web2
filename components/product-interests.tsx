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
    id: "storage-connectivity-cases",
    category: "Storage & connectivity",
    title: "Keep devices and essentials organized.",
    name: "Storage and connectivity cases",
    description:
      "Practical cases, organizers, and small-format storage products for cables, adapters, drives, and daily carry.",
    detail: "Compact storage · Clear use cases",
  },
  {
    id: "connectivity-accessories",
    category: "Storage & connectivity",
    title: "Help the right connector stay close.",
    name: "Connectivity accessories",
    description:
      "Useful accessories for organizing or supporting everyday connectivity needs without making unsupported compatibility promises.",
    detail: "Customer clarity · Useful formats",
  },
  {
    id: "non-powered-tech",
    category: "Tech accessories",
    title: "Simple accessories around the devices people already use.",
    name: "Non-powered technology accessories",
    description:
      "Non-powered device-adjacent accessories where material quality, dimensions, and fit can be communicated clearly.",
    detail: "No electronics claims · Practical utility",
  },
  {
    id: "device-stands",
    category: "Tech accessories",
    title: "Make work surfaces easier to use.",
    name: "Device stands and supports",
    description:
      "Desk-friendly stands, risers, and supports that improve everyday work setups with clear sizing and compatibility information.",
    detail: "Stable design · Clear dimensions",
  },
  {
    id: "desk-cable-organization",
    category: "Desk & cable",
    title: "Reduce clutter without making the desk feel busy.",
    name: "Desk and cable organization",
    description:
      "Cable clips, trays, wraps, labels, and small desk organizers that keep frequent-use spaces more orderly.",
    detail: "Small footprint · Repeat use",
  },
  {
    id: "workday-organization",
    category: "Desk & cable",
    title: "Give small work tools a proper place.",
    name: "Workday organization",
    description:
      "Low-profile organization products for stationery, adapters, notebooks, and small work essentials.",
    detail: "Easy setup · Everyday routine",
  },
  {
    id: "packing-organization",
    category: "Travel",
    title: "Pack with a little more order.",
    name: "Travel organization",
    description:
      "Packing cubes, pouches, toiletry organizers, and travel-ready storage that make movement easier to manage.",
    detail: "Lightweight · Easy to inspect",
  },
  {
    id: "travel-accessory-storage",
    category: "Travel",
    title: "Keep the small travel pieces together.",
    name: "Travel accessory storage",
    description:
      "Small organizers for documents, cables, toiletries, and other essentials that need to stay close in transit.",
    detail: "Versatile sizes · Clear materials",
  },
  {
    id: "everyday-practical",
    category: "Everyday",
    title: "Make routine errands a little simpler.",
    name: "Everyday practical products",
    description:
      "Useful household, carry, and organization products with simple value, clear instructions, and broad everyday appeal.",
    detail: "Practical value · Easy to explain",
  },
  {
    id: "packable-carry",
    category: "Everyday",
    title: "Room for the unplanned.",
    name: "Packable carry and organization",
    description:
      "Reusable carry and small organization products that are convenient to keep nearby when plans change.",
    detail: "Packable · Durable utility",
  },
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
              .map((item, index) => {
                const isSelected = selected.includes(item.id);
                return (
                  <article className={`interest-card${isSelected ? " is-selected" : ""}`} key={item.id}>
                    <div className="interest-illustration" aria-hidden="true">
                      <span className="interest-shape" />
                      <span className="interest-shape" />
                      <span className="interest-shape" />
                    </div>
                    <p className="eyebrow text-maple">
                      {item.category} / 0{(index % 2) + 1}
                    </p>
                    <h2 className="mt-7 text-3xl font-semibold leading-tight">{item.title}</h2>
                    <p className="mt-5 leading-7 text-ink/75">{item.description}</p>
                    <p className="mt-5 text-sm leading-6 text-ink/70">{item.detail}</p>
                    <button
                      type="button"
                      className="interest-toggle mt-7"
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
        <p className="eyebrow text-maple">Share useful categories</p>
        <h2 id="your-interests" className="mt-5 text-3xl font-semibold">
          Your interests
        </h2>
        <p className="mt-3 text-sm leading-6 text-ink/70" aria-live="polite" aria-atomic="true">
          {chosen.length === 0
            ? "Choose a sourcing area that would be useful in your day."
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
          Opens your email app. Nothing is sent until you send the email. Your selections are not
          saved when you leave this page.
        </p>
        <p className="mt-5 border-t border-ink/15 pt-5 text-sm leading-6 text-ink/75">
          These are sourcing interests, not current inventory, product listings, confirmed brands,
          or stock notifications. Prefer a direct conversation?{" "}
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
