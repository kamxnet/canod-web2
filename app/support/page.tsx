import Link from "next/link";
import {
  Mail,
  Truck,
  RotateCcw,
  Search,
  ShieldCheck,
  FileQuestion,
  ArrowRight,
  Info,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";

export const metadata = pageMetadata(
  "Support & Help Center",
  "Assistance with Canadian hardware sourcing, setup compatibility questions, return policies, warranty guidance, and contact information.",
  "/support/",
);

const supportSections = [
  {
    title: "Contact CANOD",
    href: "/support/contact/",
    icon: Mail,
    desc: "Have a compatibility question, product suggestion, or team inquiry? Email hello@canod.ca.",
    cta: "Contact Us",
  },
  {
    title: "Canadian Shipping & Delivery",
    href: "/support/shipping/",
    icon: Truck,
    desc: "Learn how curated hardware is distributed across Canada with zero surprise border duties.",
    cta: "View Shipping Policy",
  },
  {
    title: "Returns & Replacements",
    href: "/support/returns/",
    icon: RotateCcw,
    desc: "Guidance on partner return windows, defective unit replacements, and setup verification.",
    cta: "View Return Policy",
  },
  {
    title: "Track Sourcing & Orders",
    href: "/support/track-order/",
    icon: Search,
    desc: "Information on order tracking for retail partner purchases and team sourcing requests.",
    cta: "Track Order Status",
  },
  {
    title: "Frequently Asked Questions",
    href: "/support/faq/",
    icon: FileQuestion,
    desc: "Answers to common questions about CANOD's research model, pricing, and Canadian testing.",
    cta: "Browse FAQ",
  },
  {
    title: "Warranty & Hardware Protection",
    href: "/support/warranty/",
    icon: ShieldCheck,
    desc: "Information on Canadian manufacturer warranties, RMA processes, and consumer protection.",
    cta: "View Warranty Info",
  },
];

export default function SupportHubPage() {
  return (
    <div className="publication-page support-page">
      <PageIntro
        label="CANOD / Support & Guidance"
        title="How can we help your setup?"
      >
        <p>
          Practical assistance with technology compatibility, Canadian sourcing, order inquiries, and warranty standards.
          No automated chatbots or generic outsourced scripts.
        </p>
      </PageIntro>

      {/* Sourcing Model Notice */}
      <section className="site-container" style={{ marginTop: "2rem" }}>
        <div className="order-note-alert" style={{ padding: "1.25rem 1.5rem", background: "var(--surface)", border: "1px solid var(--line)" }}>
          <Info size={22} className="text-maple" aria-hidden="true" style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ color: "var(--heading)", display: "block", marginBottom: "0.25rem" }}>
              Canadian Transparency Notice
            </strong>
            <p style={{ margin: 0, fontSize: "0.9375rem", color: "var(--ink)", lineHeight: 1.6 }}>
              CANOD operates as a research publication and curated hardware engineering directory.
              We do not run third-party overseas dropshipping. Recommended products are sourced through authorized Canadian distributor networks or manufacturer channels.
            </p>
          </div>
        </div>
      </section>

      {/* Support Sections Grid */}
      <section className="section-space">
        <div className="site-container">
          <div className="tools-full-suite-grid">
            {supportSections.map((sec) => {
              const Icon = sec.icon;
              return (
                <Link
                  key={sec.href}
                  href={sec.href}
                  className="suite-tool-card"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="suite-card-top">
                    <Icon size={24} className="text-maple" aria-hidden="true" />
                    <span className="suite-category-label">CANOD Support</span>
                  </div>
                  <h2 className="suite-tool-name" style={{ fontSize: "1.25rem" }}>
                    {sec.title}
                  </h2>
                  <p className="suite-tool-desc">{sec.desc}</p>
                  <div className="suite-card-footer" style={{ marginTop: "auto" }}>
                    <span className="text-link" style={{ fontSize: "0.875rem" }}>
                      <span>{sec.cta}</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
