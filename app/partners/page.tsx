import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { productCategories } from "@/lib/product-categories";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("For Brands & Distributors", "Explore a retail relationship with CANOD. Thoughtful product selection, accurate presentation and clear communication, with Amazon.ca permissions agreed before listing.", "/partners/");

const faqs = [
  ["What products are a good fit?", "Practical products for technology, storage, work, travel and everyday organization. We look for a clear use, understandable specifications and value for Canadian customers."],
  ["Which sales channels does CANOD use?", "CANOD's sales channels include Amazon.ca. Marketplace permissions are agreed with suppliers before listing. A wholesale account alone is not treated as permission to sell on every channel."],
  ["What should I include in an introduction?", "A catalogue or product range, Canadian wholesale pricing, minimum order quantities, shipping information and sales-channel policies are useful starting points. Product dimensions, identifiers and warranty details help with a closer review."],
  ["How do you approach sourcing and brand policies?", "We seek brand-direct and authorized wholesale relationships. Before purchasing, we discuss terms, invoices, permitted channels, brand presentation and any minimum advertised price (MAP) requirements."],
  ["Can you commit to order volumes or placement?", "We discuss orders after reviewing the products and terms. We do not promise sales volumes, advertising spend, marketplace placement or sales results."],
] as const;

export default function PartnersPage() {
  return <>
    <PageIntro label="For brands and distributors" title="Useful products. Thoughtful retail.">
      <p>CANOD is a Canadian-owned online retailer seeking brand-direct and authorized wholesale relationships. Let&apos;s explore where your products could fit.</p>
      <a className="button button-light" href="mailto:hello@canod.ca?subject=Wholesale%20partnership%20with%20CANOD">Introduce your brand <ArrowRight size={18} aria-hidden="true" /></a>
    </PageIntro>
    <section className="section-space bg-paper"><div className="site-container">
      <div className="section-heading">
        <div><p className="eyebrow text-maple">What interests us</p><h2>A practical fit for life in Canada.</h2></div>
        <p>Useful design, clear product information and sensible value are our starting points. We also consider availability, delivery and support for Canadian customers.</p>
      </div>
      <div className="category-overview">
        {productCategories.map(({ name, description, icon: Icon }) => <div className="category-item" key={name}><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><h3>{name}</h3><p>{description}</p></div>)}
      </div>
      <Link className="text-link" href="/interests/">See our sourcing interests <ArrowRight size={18} aria-hidden="true" /></Link>
    </div></section>
    <section className="section-space"><div className="site-container editorial-split">
      <div><p className="eyebrow text-maple">Working together</p><h2>Clear from the first conversation.</h2></div>
      <div className="text-stack">
        <p>We begin with your range and the customers it suits. From there, we discuss product details, wholesale terms and how your brand should be presented.</p>
        <p><strong>CANOD&apos;s sales channels include Amazon.ca.</strong> Marketplace permissions are agreed with suppliers before listing, including any restrictions on products or channels.</p>
        <ol className="approach-list">
          <li><h3>Thoughtful selection</h3><p>A clear reason for each product to belong in the range.</p></li>
          <li><h3>Accurate presentation</h3><p>Product information grounded in the details you provide.</p></li>
          <li><h3>Clear communication</h3><p>Shared expectations on terms, orders and brand requirements.</p></li>
        </ol>
      </div>
    </div></section>
    <section className="section-space bg-paper"><div className="site-container editorial-split">
      <div><p className="eyebrow text-maple">Common questions</p><h2>Before we get started.</h2></div>
      <div className="partner-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </div></section>
    <section className="supplier-band"><div className="site-container editorial-split">
      <div><p className="eyebrow">Start a conversation</p><h2>Tell us about your range.</h2></div>
      <div className="text-stack"><p>Send a short introduction and a catalogue or product overview to CANOD.</p><a className="text-link" href="mailto:hello@canod.ca?subject=Wholesale%20partnership%20with%20CANOD">hello@canod.ca <ArrowRight size={18} aria-hidden="true" /></a></div>
    </div></section>
  </>;
}
