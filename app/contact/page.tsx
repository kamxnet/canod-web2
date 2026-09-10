import type { Metadata } from "next";
import { ArrowUpRight, Handshake, MessageCircle } from "lucide-react";
import { ContactEmailBuilder } from "@/components/contact-email-builder";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CANOD for general inquiries, product suggestions, and authorized wholesale or brand-direct partnership introductions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <p className="eyebrow page-kicker">Contact</p>
          <h1 className="page-title">Choose the right inbox.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
            Use hello@canod.ca for general messages and kam@canod.ca for brand, distributor, and
            wholesale introductions.
          </p>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="site-container">
          <div className="contact-intro">
            <p className="eyebrow text-maple">Direct email</p>
            <p className="prose-large max-w-4xl">
              Whether you have a practical product suggestion or represent a supplier, your message
              can go to the inbox that best matches the conversation.
            </p>
          </div>

          <div className="contact-grid">
            <a className="contact-card group" href="mailto:hello@canod.ca?subject=Hello%20CANOD">
              <MessageCircle size={26} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <p className="eyebrow text-maple">General enquiries</p>
                <h2>hello@canod.ca</h2>
                <p>General questions, product ideas, and customer enquiries.</p>
              </div>
              <ArrowUpRight className="contact-arrow" size={28} aria-hidden="true" />
            </a>
            <a
              className="contact-card group"
              href="mailto:kam@canod.ca?subject=Wholesale%20partnership%20with%20CANOD"
            >
              <Handshake size={26} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <p className="eyebrow text-maple">Brands and wholesale</p>
                <h2>kam@canod.ca</h2>
                <p>Partnership introductions, catalogues, and authorized wholesale opportunities.</p>
              </div>
              <ArrowUpRight className="contact-arrow" size={28} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10">
            <ContactEmailBuilder />
          </div>
        </div>
      </section>
    </>
  );
}
