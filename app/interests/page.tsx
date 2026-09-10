import type { Metadata } from "next";
import { ProductInterests } from "@/components/product-interests";

export const metadata: Metadata = {
  title: "Product Interests",
  description:
    "Explore practical product sourcing interests CANOD is evaluating for Canadian online retail.",
};

export default function InterestsPage() {
  return <>
    <section className="page-hero interests-hero"><div className="site-container">
      <p className="eyebrow page-kicker">Product interests</p>
      <h1 className="page-title">Practical categories worth evaluating.</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">Explore the sourcing areas CANOD is evaluating for Canadian online retail. These interests guide conversations with customers, brands, and distributors.</p>
    </div></section>
    <section className="bg-paper py-12 md:py-20"><div className="site-container">
      <p className="interest-notice mb-8"><strong>Sourcing interests, not inventory claims.</strong> These are areas CANOD is evaluating, not current product listings, confirmed brands, or available inventory.</p>
      <ProductInterests />
    </div></section>
  </>;
}
