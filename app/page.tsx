import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GuideList } from "@/components/guide-list";
import { KineticHero } from "@/components/kinetic-hero";
import { productCategories } from "@/lib/product-categories";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Practical Products for Canada", "CANOD is a Canadian-owned online retailer exploring practical products for technology, work, travel and everyday life. Read useful buying guides and explore our product interests.", "/");

export default function Home() {
  return <>
    <section className="hero-shell">
      <KineticHero />
      <div className="site-container hero-content">
        <div className="hero-intro">
          <p className="eyebrow">CANOD / Canadian-owned online retail</p>
          <h1>Practical products. Thoughtfully selected for Canada.</h1>
          <p className="hero-description">A little more order. A better everyday setup. We look for useful things that make technology, work, travel and daily life feel simpler.</p>
          <div className="actions">
            <Link className="button button-dark" href="/interests/">Explore product interests <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className="text-link" href="/guides/">Read the buying guides</Link>
          </div>
        </div>
      </div>
      <div className="site-container hero-footnote"><p className="image-caption">CANOD / Form study 01</p></div>
    </section>
    <section className="section-space bg-paper"><div className="site-container">
      <div className="section-heading">
        <div><p className="eyebrow text-maple">Product interests</p><h2>Useful in more ways than one.</h2></div>
        <p>From a tidier desk to a better-packed bag, our interests follow everyday needs. These are categories we are exploring, not products currently available to buy.</p>
      </div>
      <div className="category-overview">
        {productCategories.map(({ name, description, icon: Icon }, index) => <Link href="/interests/" className="category-item" key={name}>
          <div className="category-graphic" aria-hidden="true"><span className="category-number">{String(index + 1).padStart(2, "0")}</span><Icon size={32} strokeWidth={1.35} /></div><h3>{name}</h3><p>{description}</p>
          <span className="category-arrow"><ArrowRight size={19} aria-hidden="true" /><span className="sr-only">Explore {name.toLowerCase()}</span></span>
        </Link>)}
      </div>
    </div></section>
    <section className="section-space"><div className="site-container">
      <div className="section-heading">
        <div><p className="eyebrow text-maple">Buying guides</p><h2>A clearer choice starts here.</h2></div>
        <p>Practical reading on fit, trade-offs and the details worth checking before you buy.</p>
      </div>
      <GuideList />
    </div></section>
    <section className="section-space point-of-view"><div className="site-container editorial-split">
      <div><p className="eyebrow text-maple">Our point of view</p><h2>Good products earn their place in your day.</h2></div>
      <div className="text-stack">
        <p>We start with a simple question: what does this make easier? Useful design, understandable details and a good fit for the way people live matter more than a longer feature list.</p>
        <p>CANOD brings that practical approach to product discovery and responsible sourcing for Canadian online retail.</p>
        <Link className="text-link" href="/about/">Meet CANOD <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </div></section>
    <section className="supplier-band"><div className="site-container editorial-split">
      <div><p className="eyebrow">For brands and distributors</p><h2>Have something useful in mind?</h2></div>
      <div className="text-stack">
        <p>We welcome conversations with brands and wholesale suppliers whose products fit everyday needs. CANOD&apos;s sales channels include Amazon.ca; marketplace permissions are agreed with suppliers before listing.</p>
        <Link className="button button-light" href="/partners/">Work with CANOD <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </div></section>
  </>;
}
