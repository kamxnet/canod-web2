import { ArrowUpRight, Handshake, MessageCircle } from "lucide-react";
import { ContactEmailBuilder } from "@/components/contact-email-builder";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "Contact CANOD with a question, product idea or brand introduction. Write to hello@canod.ca, or prepare a draft in your own email app.", "/contact/");

export default function ContactPage() {
  return <>
    <PageIntro label="Contact" title="Let’s talk useful things."><p>A question, a product idea or a brand introduction. Choose a topic or write to hello@canod.ca.</p></PageIntro>
    <section className="section-space bg-paper"><div className="site-container contact-layout">
      <div className="contact-grid">
        <a className="contact-card" href="mailto:hello@canod.ca?subject=Hello%20CANOD">
          <MessageCircle size={24} strokeWidth={1.5} aria-hidden="true" />
          <div><p className="eyebrow text-maple">General enquiries</p><h2>hello@canod.ca</h2><p>Questions, product ideas and feedback on our guides.</p></div>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
        <a className="contact-card" href="mailto:hello@canod.ca?subject=Wholesale%20partnership%20with%20CANOD">
          <Handshake size={24} strokeWidth={1.5} aria-hidden="true" />
          <div><p className="eyebrow text-maple">Brands and distributors</p><h2>hello@canod.ca</h2><p>Partnership introductions and wholesale catalogues.</p></div>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </div>
      <ContactEmailBuilder />
    </div></section>
  </>;
}
