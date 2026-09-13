import Link from "next/link";
import { ArrowLeft, HelpCircle, ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";
import "@/app/publication.css";

export const metadata = pageMetadata(
  "Frequently Asked Questions (FAQ)",
  "Answers to common questions about CANOD: editorial standards, Canadian safety testing, pricing, product recommendations, and team sourcing.",
  "/support/faq/",
);

const faqs = [
  {
    q: "What is CANOD?",
    a: "CANOD is a Canadian-owned practical technology publication and curated hardware directory. We help Canadian consumers and professionals understand technology compatibility, test their setups using browser-based calculators, and find verified, durable hardware that works together seamlessly.",
  },
  {
    q: "Is CANOD a dropshipping store or marketplace?",
    a: "No. CANOD strictly rejects the generic dropshipping model. We do not list thousands of unvetted overseas products or random third-party marketplace goods. Every item in our curated directory is chosen based on published engineering standards, protocol verification, and genuine Canadian safety compliance.",
  },
  {
    q: "Are the prices listed on CANOD in Canadian dollars?",
    a: "Yes. All price references, market contexts, and sourcing guidance across CANOD are tailored to the Canadian market in Canadian Dollars (CAD).",
  },
  {
    q: "How do you verify Canadian electrical safety for chargers?",
    a: "In Canada, mains-powered electronics must bear a mark from an accredited certification body recognized by the Standards Council of Canada (SCC)—such as CSA, cUL, or cETL. Our editorial guides and Canadian Electrical Safety Checklist educate buyers on how to verify these markings and avoid dangerous, uncertified counterfeit power bricks.",
  },
  {
    q: "Does CANOD accept paid reviews or sponsored product placements?",
    a: "Never. Our editorial recommendations and test conclusions are completely independent. We do not accept payment to favorably review or promote any hardware brand. You can review our full commitment in our Editorial Standards document.",
  },
  {
    q: "Why do I see 'Check Canadian Retailers' instead of direct online checkout?",
    a: "CANOD prioritizes honest, high-quality information over aggressive e-commerce gimmicks. Currently, we direct visitors to authorized Canadian tech distributors and authorized retailers with active stock, while our direct Canadian team sourcing and procurement channels are prepared.",
  },
  {
    q: "Can CANOD help size tech equipment for my business or team?",
    a: "Yes! If you are outfitting a hybrid workspace, equipping remote employees with standardized USB-C docks, or setting up redundant NAS backup systems, we provide tailored equipment blueprints and distributor sourcing assistance. Contact hello@canod.ca.",
  },
];

export default function FAQPage() {
  return (
    <div className="publication-page support-page">
      <nav className="product-breadcrumbs site-container" aria-label="Breadcrumb">
        <Link href="/support/" className="breadcrumb-back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Support Hub</span>
        </Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span className="breadcrumb-current">Frequently Asked Questions</span>
      </nav>

      <PageIntro
        label="Support / Common Questions"
        title="Everything you need to know about CANOD."
      >
        <p>
          Clear, honest answers about our editorial independence, Canadian electrical testing criteria, and sourcing model.
        </p>
      </PageIntro>

      <section className="section-space">
        <div className="site-container" style={{ maxWidth: "840px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="suite-tool-card"
                style={{ padding: "1.75rem 2rem" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem", marginBottom: "0.75rem" }}>
                  <HelpCircle size={20} className="text-maple" aria-hidden="true" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <h2 style={{ fontSize: "1.25rem", margin: 0, color: "var(--heading)", lineHeight: 1.35 }}>
                    {item.q}
                  </h2>
                </div>
                <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.65, color: "var(--ink)", paddingLeft: "2.1rem" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="actions" style={{ marginTop: "3.5rem", borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
            <Link href="/support/contact/" className="button button-dark">
              Have another question? Contact Us <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/editorial-standards/" className="text-link">
              Read Our Editorial Standards <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
