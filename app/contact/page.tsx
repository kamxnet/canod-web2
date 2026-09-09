import type { Metadata } from "next";
import { ArrowUpRight, Handshake, MessageCircle } from "lucide-react";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() { return <>
  <section className="page-hero"><div className="site-container"><p className="eyebrow page-kicker">Contact</p><h1 className="page-title">Let’s talk.</h1></div></section>
  <section className="section-space bg-paper"><div className="site-container"><div className="contact-intro"><p className="eyebrow text-maple">Choose the right inbox</p><p className="prose-large max-w-4xl">Whether you have a product suggestion or represent a brand, your message reaches a real person.</p></div><div className="contact-grid">
    <a className="contact-card group" href="mailto:hello@canod.ca?subject=Hello%20CANOD"><MessageCircle size={26} strokeWidth={1.6} /><div><p className="eyebrow text-maple">General enquiries</p><h2>hello@canod.ca</h2><p>Questions, product ideas, and customer enquiries.</p></div><ArrowUpRight className="contact-arrow" size={28} /></a>
    <a className="contact-card group" href="mailto:kam@canod.ca?subject=Brand%20partnership%20with%20CANOD"><Handshake size={26} strokeWidth={1.6} /><div><p className="eyebrow text-maple">Brands & wholesale</p><h2>kam@canod.ca</h2><p>Partnership introductions, catalogues, and wholesale opportunities.</p></div><ArrowUpRight className="contact-arrow" size={28} /></a>
  </div><p className="mt-8 text-sm leading-6 text-ink/55">CANOD is based in Ontario, Canada. We aim to respond to genuine enquiries within two business days.</p></div></section>
  </>; }
