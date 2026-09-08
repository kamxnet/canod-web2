import type { Metadata } from "next";
import { ProductInterests } from "@/components/product-interests";

export const metadata: Metadata = {
  title: "Product Interests",
  description: "Explore the work, travel, and everyday product categories CANOD is considering, and tell us what would be useful to you.",
};

export default function InterestsPage() {
  return <>
    <section className="page-hero interests-hero"><div className="site-container">
      <p className="eyebrow page-kicker">The collection starts with a useful idea</p>
      <h1 className="page-title">What belongs in your day?</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">Explore the product categories we’re considering. Tell us what matters to you, and help shape CANOD’s first collection.</p>
    </div></section>
    <section className="bg-paper py-12 md:py-20"><div className="site-container">
      <p className="interest-notice mb-8"><strong>In development, not yet for sale.</strong> These are areas we’re exploring—not current product listings, confirmed brands, or available inventory.</p>
      <ProductInterests />
    </div></section>
  </>;
}
