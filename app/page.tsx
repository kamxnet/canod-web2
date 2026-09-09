import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BriefcaseBusiness, Check, MapPin, Plane, Search, ShieldCheck, Sparkles } from "lucide-react";

const focusAreas = [
  { icon: BriefcaseBusiness, number: "01", title: "Work", copy: "Practical tools that help people organize, focus, and work comfortably wherever the day takes them." },
  { icon: Plane, number: "02", title: "Travel", copy: "Useful, compact essentials designed to make moving between places feel simpler and more considered." },
  { icon: MapPin, number: "03", title: "Everyday", copy: "Well-made products that solve familiar problems without adding unnecessary complexity." },
];

export default function Home() {
  return <>
    <section className="hero-shell">
      <Image src="/canod-hero.png" alt="A considered collection of work and travel essentials on a navy desk" fill priority className="hero-image" sizes="100vw" />
      <div className="hero-overlay" />
      <div className="site-container relative z-10 flex min-h-[720px] items-center py-24 md:min-h-[790px]">
        <div className="hero-intro max-w-[700px] pt-12">
          <p className="eyebrow text-white/70">Canadian-owned online retail</p>
          <h1 className="mt-6 text-[clamp(3.5rem,8vw,7.6rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">Better goods.<br />Thoughtfully chosen.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/74 md:text-xl">CANOD is building a focused collection of useful products for modern work, travel, and everyday life.</p>
          <div className="mt-10 flex flex-wrap gap-4"><Link className="button button-light" href="/interests">Explore our focus <ArrowRight size={17} /></Link><Link className="button button-ghost" href="/partners">For brands</Link></div>
          <a className="hero-scroll" href="#our-focus"><ArrowDown size={16} /> Discover CANOD</a>
        </div>
      </div>
      <div className="hero-facts"><div className="site-container hero-facts-inner"><span>Ontario, Canada</span><span>Independent retail</span><span>Work · Travel · Everyday</span></div></div>
    </section>
    <section id="our-focus" className="section-space bg-paper"><div className="site-container">
      <div className="grid gap-12 border-b border-ink/15 pb-16 lg:grid-cols-[0.7fr_1.3fr]"><p className="eyebrow text-maple">What belongs at CANOD</p><h2 className="display-heading max-w-4xl">Products should earn their place in your day.</h2></div>
      <div className="grid md:grid-cols-3">{focusAreas.map(({ icon: Icon, number, title, copy }, index) => <article key={title} className={`focus-card ${index > 0 ? "md:border-l md:border-ink/15" : ""}`}><div className="focus-icon"><Icon size={22} strokeWidth={1.6} /></div><span className="focus-number">{number}</span><h3 className="mt-12 text-4xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-5 max-w-sm leading-7 text-ink/65">{copy}</p><Link href="/interests" className="focus-link" aria-label={`Explore ${title} product interests`}>Explore <ArrowRight size={16} /></Link></article>)}</div>
      <div className="flex flex-wrap items-center justify-between gap-6 border-t border-ink/15 pt-8"><p className="max-w-xl leading-7 text-ink/70">Our first collection is taking shape. Explore the categories and tell us what you would find useful.</p><Link className="text-link" href="/interests">Share your product interests <ArrowRight size={17} /></Link></div>
    </div></section>
    <section className="section-space bg-white"><div className="site-container selection-grid">
      <div className="selection-heading"><p className="eyebrow text-maple">Our selection standard</p><h2 className="mt-6 text-[clamp(2.8rem,5.6vw,5.8rem)] font-semibold leading-[.96] tracking-[-.055em]">Less noise.<br />More usefulness.</h2><p className="mt-7 max-w-lg text-lg leading-8 text-ink/65">We look beyond novelty. A product must solve a real problem, feel dependable, and make sense in everyday life.</p></div>
      <div className="selection-list">
        {[[Search,"A clear purpose","It solves a recognizable problem."],[ShieldCheck,"Dependable quality","Materials and construction feel considered."],[Sparkles,"Thoughtful details","Small design choices make it easier to use."],[Check,"Honest presentation","Clear information, without inflated promises."]].map(([Icon,title,copy], index) => {
          const ItemIcon = Icon as typeof Search;
          return <article className="selection-item" key={title as string}><span className="selection-index">0{index + 1}</span><ItemIcon size={23} strokeWidth={1.6} /><div><h3>{title as string}</h3><p>{copy as string}</p></div></article>;
        })}
      </div>
    </div></section>
    <section className="section-space bg-navy text-white"><div className="site-container grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
      <div><p className="eyebrow text-white/55">Canadian-owned</p><h2 className="mt-7 max-w-4xl text-[clamp(3rem,6vw,6.4rem)] font-semibold leading-[0.94] tracking-[-0.055em]">Local roots.<br />A wider outlook.</h2></div>
      <div className="max-w-xl lg:pb-2"><p className="text-lg leading-8 text-white/67">We are a Canadian-owned retailer with an eye for products that genuinely improve how people work, travel, and live. Our home is Canada; our standards travel well.</p><div className="mt-9 grid grid-cols-2 gap-4 border-t border-white/15 pt-7"><div><p className="text-2xl font-semibold">Canada first</p><p className="mt-2 text-sm leading-6 text-white/50">Built for the Canadian market.</p></div><div><p className="text-2xl font-semibold">Purpose led</p><p className="mt-2 text-sm leading-6 text-white/50">Function before trend.</p></div></div><Link className="text-link mt-9 text-white" href="/about">Get to know CANOD <ArrowRight size={17} /></Link></div>
    </div></section>
    <section className="section-space bg-white"><div className="site-container"><div className="partnership-panel">
      <div><p className="eyebrow text-maple">Brand partnerships</p><h2 className="mt-6 max-w-3xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">A considered route into Canadian ecommerce.</h2></div>
      <div className="max-w-lg lg:pt-5"><p className="text-lg leading-8 text-ink/65">CANOD is interested in working with select Canadian and North American brands whose products deserve a clear, careful online presence.</p><ul className="partner-points mt-7"><li><Check size={16} /> Direct wholesale relationships</li><li><Check size={16} /> Written marketplace authorization</li><li><Check size={16} /> Brand-consistent presentation</li></ul><Link className="button button-dark mt-9" href="/partners">Partnership details <ArrowRight size={17} /></Link></div>
    </div></div></section>
  </>;
}
