import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ClipboardCheck,
  MapPin,
  PackageCheck,
  Search,
  ShieldCheck,
  Store,
} from "lucide-react";

const selectionStandards = [
  {
    icon: PackageCheck,
    title: "Practical customer value",
    copy: "Products should solve a recognizable problem or make a daily task simpler.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable product quality",
    copy: "Materials, construction, packaging, and support need to match the customer promise.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear use cases",
    copy: "The right product has an obvious buyer, a clear reason to exist, and accurate information.",
  },
  {
    icon: MapPin,
    title: "Canadian online suitability",
    copy: "Pricing, fulfillment, compliance, and product fit are reviewed for Canadian customers.",
  },
];

const partnershipSteps = [
  "Product and Canadian-market review",
  "Authorized wholesale purchasing",
  "Accurate, brand-consistent presentation",
  "Reliable communication and policy compliance",
];

export default function Home() {
  return (
    <>
      <section className="hero-shell">
        <Image
          src="/canod-hero.png"
          alt="A refined arrangement of practical work and travel accessories"
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="site-container relative z-10 flex min-h-[700px] items-center py-24 md:min-h-[760px]">
          <div className="hero-intro max-w-[760px] pt-12">
            <p className="eyebrow text-white/70">Canadian-owned online retailer</p>
            <h1 className="mt-6 text-[clamp(3.2rem,7.2vw,7rem)] font-semibold leading-[0.9] text-white">
              Practical products. Thoughtfully selected for Canada.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
              CANOD curates useful technology, work, travel, storage, connectivity, and everyday
              products for Canadian online retail.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link className="button button-light" href="/interests">
                Explore Our Product Interests <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="button button-ghost" href="/partners">
                Partner With CANOD
              </Link>
            </div>
            <a className="hero-scroll" href="#standards">
              <ArrowDown size={16} aria-hidden="true" /> View selection standards
            </a>
          </div>
        </div>
        <div className="hero-facts">
          <div className="site-container hero-facts-inner">
            <span>Canada focused</span>
            <span>Authorized wholesale</span>
            <span>Marketplace transparent</span>
          </div>
        </div>
      </section>

      <section id="standards" className="section-space bg-paper">
        <div className="site-container">
          <div className="grid gap-12 border-b border-ink/15 pb-16 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="eyebrow text-maple">What we look for</p>
            <h2 className="display-heading max-w-4xl">
              Products should earn their place in the assortment.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {selectionStandards.map(({ icon: Icon, title, copy }, index) => (
              <article
                key={title}
                className={`focus-card reveal ${index > 0 ? "lg:border-l lg:border-ink/15" : ""}`}
              >
                <div className="focus-icon">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <span className="focus-number">0{index + 1}</span>
                <h3 className="mt-12 text-3xl font-semibold">{title}</h3>
                <p className="mt-5 max-w-sm leading-7 text-ink/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container selection-grid">
          <div className="selection-heading">
            <p className="eyebrow text-maple">How we work with brands</p>
            <h2 className="mt-6 text-[clamp(2.6rem,5.2vw,5.4rem)] font-semibold leading-[.98]">
              Careful sourcing before every listing.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-ink/65">
              CANOD seeks authorized wholesale and brand-direct relationships where products,
              channels, and policies are clear before inventory is purchased.
            </p>
          </div>
          <div className="selection-list">
            {partnershipSteps.map((title, index) => (
              <article className="selection-item reveal" key={title}>
                <span className="selection-index">0{index + 1}</span>
                <Check size={23} strokeWidth={1.6} />
                <div>
                  <h3>{title}</h3>
                  <p>
                    {index === 0
                      ? "We evaluate product fit, category demand, compliance, and Canadian-market suitability."
                      : index === 1
                        ? "Purchases are made through approved wholesale or brand-direct channels with proper documentation."
                        : index === 2
                          ? "Listings and product information should reflect brand standards and customer expectations."
                          : "Supplier policies, MAP requirements, and channel boundaries are treated as operating requirements."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-navy text-white">
        <div className="site-container channel-panel">
          <div>
            <p className="eyebrow text-white/50">Sales channels</p>
            <h2 className="mt-6 max-w-4xl text-[clamp(2.7rem,5.7vw,5.8rem)] font-semibold leading-[0.98]">
              Transparent about marketplace activity.
            </h2>
          </div>
          <div className="channel-statement">
            <Store size={25} strokeWidth={1.6} aria-hidden="true" />
            <p>
              CANOD&apos;s online sales channels include Amazon.ca. We disclose marketplace activity
              during partnership discussions and operate only within approved brand and channel
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container">
          <div className="partnership-panel">
            <div>
              <p className="eyebrow text-maple">For suppliers</p>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.7rem,5vw,5.2rem)] font-semibold leading-[0.98]">
                A focused Canadian retail partner for practical products.
              </h2>
            </div>
            <div className="max-w-lg lg:pt-5">
              <p className="text-lg leading-8 text-ink/65">
                If your catalogue includes practical technology accessories, organization products,
                travel essentials, or useful everyday goods, CANOD can review fit through a clear,
                policy-compliant process.
              </p>
              <ul className="partner-points mt-7">
                <li>
                  <Search size={16} /> Product and catalogue review
                </li>
                <li>
                  <Check size={16} /> Channel confirmation before listing
                </li>
                <li>
                  <ShieldCheck size={16} /> Brand-consistent presentation
                </li>
              </ul>
              <Link className="button button-dark mt-9" href="/partners">
                Supplier partnership details <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
