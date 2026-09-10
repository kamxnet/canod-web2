import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about CANOD, a Canadian-owned online retailer focused on practical products selected for Canadian customers.",
};

const principles = [
  [
    "01",
    "Purpose first",
    "Every product should solve a recognizable problem or improve a familiar routine.",
  ],
  [
    "02",
    "Quality that shows",
    "Materials, construction, packaging, and presentation should support the customer promise.",
  ],
  [
    "03",
    "Clarity always",
    "No inflated promises. We aim to communicate what a product does and who it is for.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <p className="eyebrow page-kicker">About CANOD</p>
          <h1 className="page-title">Useful by design.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
            CANOD is a Canadian-owned online retailer focused on practical products for work,
            travel, organization, connectivity, and everyday life.
          </p>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="site-container grid gap-14 lg:grid-cols-[.55fr_1.45fr]">
          <p className="eyebrow text-maple">Why we exist</p>
          <div>
            <p className="prose-large max-w-5xl">
              The things people use every day should be useful, dependable, and easy to understand.
              CANOD is built around that simple filter.
            </p>
            <div className="mt-16 grid gap-10 md:grid-cols-2">
              <p className="leading-8 text-ink/65">
                We are especially interested in practical technology accessories, storage,
                connectivity, work, travel, and everyday products that fit Canadian online retail.
              </p>
              <p className="leading-8 text-ink/65">
                Supplier relationships matter. CANOD seeks authorized wholesale and brand-direct
                sourcing with clear channel expectations and accurate product presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container">
          <p className="eyebrow text-maple">Our filter</p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {principles.map(([n, title, copy]) => (
              <article className="rule-card" key={n}>
                <p className="number">{n}</p>
                <h2 className="mt-10 text-2xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-ink/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="site-container founder-grid">
          <div>
            <p className="eyebrow text-white/45">Operator</p>
            <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[.96]">
              Built with a practical eye.
            </h2>
          </div>
          <div>
            <p className="text-2xl font-semibold">Kam</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
              CANOD is operated with a practical, technology-minded approach to online retail:
              research carefully, communicate clearly, and choose products for the value they add.
            </p>
            <a className="text-link mt-8 text-white" href="mailto:kam@canod.ca">
              Contact Kam
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
