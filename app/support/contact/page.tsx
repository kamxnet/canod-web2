import Link from "next/link";
import { ArrowLeft, MessageCircle, Handshake, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ContactEmailBuilder } from "@/components/contact-email-builder";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";

export const metadata = pageMetadata(
  "Contact Support",
  "Contact CANOD support and editorial engineers with hardware questions, compatibility verification, or product sourcing introductions.",
  "/support/contact/",
);

export default function SupportContactPage() {
  return (
    <div className="publication-page support-page">
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/support/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Support Hub</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">Contact Us</span>
      </nav>

      <PageIntro label="Support / Direct Contact" title="Let's talk useful things.">
        <p>
          Need help choosing a dock, sizing a power supply, or asking about a guide?
          Our team answers emails within 1 to 2 business days.
        </p>
      </PageIntro>

      <section className="section-space bg-paper">
        <div className="site-container contact-layout">
          <div className="contact-grid">
            <a
              className="contact-card"
              href="mailto:hello@canod.ca?subject=Hardware%20Support%20Question"
            >
              <MessageCircle size={24} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="eyebrow text-maple">Hardware &amp; Setup Support</p>
                <h2>hello@canod.ca</h2>
                <p>Compatibility advice, guide questions, and Canadian sourcing recommendations.</p>
              </div>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>

            <a
              className="contact-card"
              href="mailto:hello@canod.ca?subject=Team%20Procurement%20or%20Brand%20Introduction"
            >
              <Handshake size={24} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="eyebrow text-maple">Brands &amp; Wholesale Inquiries</p>
                <h2>hello@canod.ca</h2>
                <p>Hardware introductions, team hardware bundles, and Canadian distributor relations.</p>
              </div>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>

          <ContactEmailBuilder />
        </div>
      </section>
    </div>
  );
}
