import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() { return <>
  <section className="page-hero"><div className="site-container"><p className="eyebrow page-kicker">Contact</p><h1 className="page-title">Let’s talk.</h1></div></section>
  <section className="section-space bg-paper"><div className="site-container grid gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-maple">CANOD</p><p className="mt-6 max-w-md text-lg leading-8 text-ink/65">Questions, product suggestions, or a potential brand partnership? The best way to reach us is by email.</p></div><a className="group border-t border-ink/20 py-8" href="mailto:hello@canod.ca"><div className="flex items-start justify-between gap-6"><div><p className="text-sm font-semibold text-ink/50">Email</p><p className="mt-4 break-all text-[clamp(2rem,5vw,4.5rem)] font-semibold tracking-[-.055em]">hello@canod.ca</p></div><ArrowUpRight className="mt-2 text-maple transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={32} /></div></a></div></section>
  </>; }
