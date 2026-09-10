import type { Metadata } from "next";
import { ArrowRight, Check, PackageSearch, ShieldCheck, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "For Brands & Distributors",
  description:
    "Partner with CANOD for authorized wholesale and brand-direct online retail relationships focused on practical products for Canada.",
};

const productAreas = [
  "Storage and connectivity products",
  "Non-powered technology accessories",
  "Desk and cable organization",
  "Travel organization",
  "Everyday practical products",
];

const offers = [
  {
    icon: PackageSearch,
    title: "Focused catalogue review",
    copy: "We evaluate products for utility, customer fit, pricing, fulfillment, and Canadian-market suitability before purchase.",
  },
  {
    icon: Store,
    title: "Marketplace transparency",
    copy: "CANOD's online sales channels include Amazon.ca, and channel expectations are discussed before listing.",
  },
  {
    icon: ShieldCheck,
    title: "Policy-conscious operation",
    copy: "Approved channels, MAP requirements, brand presentation, and product documentation are treated as requirements.",
  },
];

const process = [
  "Introduction and catalogue review",
  "Product, margin, and Canadian-market fit analysis",
  "Channel authorization and policy confirmation",
  "Wholesale terms, documents, and order requirements",
  "Measured purchase order planning",
  "Accurate online presentation and ongoing communication",
];

const faqs = [
  {
    question: "Which products are the best fit?",
    answer:
      "CANOD is most interested in practical technology accessories, storage and organization, connectivity, work, travel, and everyday products with clear use cases for Canadian customers.",
  },
  {
    question: "Do you sell on Amazon.ca?",
    answer:
      "Yes. CANOD's sales channels include Amazon.ca. We disclose marketplace activity during partnership discussions and respect approved channel requirements.",
  },
  {
    question: "What do you need from a supplier?",
    answer:
      "Helpful starting information includes a current catalogue, Canadian pricing or landed-cost guidance, case quantities, UPCs, dimensions, shipping terms, warranty notes, and channel policies.",
  },
  {
    question: "Do you buy through authorized channels?",
    answer:
      "Yes. CANOD seeks authorized wholesale and brand-direct relationships with proper invoices and clear permission for the intended sales channels.",
  },
  {
    question: "Can you promise volume or placement?",
    answer:
      "No. Product selection, order size, and marketplace presentation depend on fit, economics, availability, documentation, and supplier policies.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <p className="eyebrow page-kicker">For brands and distributors</p>
          <h1 className="page-title">Authorized wholesale relationships for practical products.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
            CANOD is a Canadian-owned online retailer seeking brand-direct and authorized wholesale
            partnerships for products that fit real customer routines.
          </p>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="site-container brand-intro">
          <p className="eyebrow text-maple">Canadian-market focus</p>
          <div>
            <p className="prose-large max-w-5xl">
              We review practical products through the lens of Canadian online customers:
              usefulness, clarity, fulfillment fit, pricing discipline, and brand requirements.
            </p>
            <p className="mt-10 max-w-3xl text-lg leading-8 text-ink/65">
              The goal is a clean operating relationship before inventory is purchased, with
              authorized sourcing, channel clarity, and accurate product presentation agreed up
              front.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow text-maple">Product interests</p>
            <h2 className="display-heading max-w-4xl">Useful categories with clear customer value.</h2>
          </div>
          <div className="category-grid">
            {productAreas.map((area) => (
              <article className="category-card reveal" key={area}>
                <Check size={18} strokeWidth={1.8} aria-hidden="true" />
                <h3>{area}</h3>
              </article>
            ))}
          </div>
          <p className="policy-note">
            These are sourcing interests, not inventory claims or commitments to list any specific
            brand.
          </p>
        </div>
      </section>

      <section className="section-space bg-navy text-white">
        <div className="site-container channel-panel">
          <div>
            <p className="eyebrow text-white/50">Sales channel disclosure</p>
            <h2 className="mt-6 max-w-4xl text-[clamp(2.7rem,5.7vw,5.8rem)] font-semibold leading-[0.98]">
              Amazon.ca is part of the conversation from the start.
            </h2>
          </div>
          <div className="channel-statement">
            <Store size={25} strokeWidth={1.6} aria-hidden="true" />
            <p>
              CANOD&apos;s sales channels include Amazon.ca. We do not treat wholesale account approval
              as blanket marketplace authorization; channel permission and policy requirements are
              confirmed before listing.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow text-maple">What CANOD offers</p>
            <h2 className="display-heading max-w-4xl">A careful retail process, not a race to list.</h2>
          </div>
          <div className="offer-grid">
            {offers.map(({ icon: Icon, title, copy }) => (
              <article className="offer-card reveal" key={title}>
                <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container process-layout">
          <div>
            <p className="eyebrow text-maple">Process</p>
            <h2 className="mt-6 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              Six steps before a product reaches customers.
            </h2>
          </div>
          <div className="process-grid">
            {process.map((step, index) => (
              <article className="process-step reveal" key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="site-container faq-layout">
          <div>
            <p className="eyebrow text-maple">FAQs</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight">
              Clear expectations make better partnerships.
            </h2>
          </div>
          <div className="partner-faq">
            {faqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-navy text-white">
        <div className="site-container grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
          <div>
            <p className="eyebrow text-white/45">Start a conversation</p>
            <h2 className="mt-6 text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[.95]">
              Share your catalogue with CANOD.
            </h2>
          </div>
          <a
            className="button button-light w-fit lg:justify-self-end"
            href="mailto:kam@canod.ca?subject=Wholesale%20partnership%20with%20CANOD"
          >
            Email kam@canod.ca <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
