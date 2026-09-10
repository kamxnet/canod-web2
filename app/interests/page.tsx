import { ProductInterests } from "@/components/product-interests";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Product Interests", "Explore the practical product categories CANOD is interested in sourcing. Share your interests by email, from desk organization to travel and technology.", "/interests/");

export default function InterestsPage() {
  return <>
    <PageIntro label="Product interests" title="What would make your day easier?"><p>Explore the categories we are interested in sourcing, and tell us which ones would be useful to you.</p></PageIntro>
    <section className="section-space bg-paper"><div className="site-container">
      <p className="interest-notice"><strong>Sourcing interests.</strong> These are categories we are exploring, not products currently available to buy.</p>
      <ProductInterests />
    </div></section>
  </>;
}
