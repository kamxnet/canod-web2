import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ChargerCalculator } from "@/components/charger-calculator";
import { pageMetadata } from "@/lib/metadata";
import "@/app/tools.css";

export const metadata = pageMetadata(
  "Charger Wattage Calculator — What Size Charger Do I Need?",
  "Calculate the exact charger wattage needed to fast-charge your laptop, phone, and tablet simultaneously with one compact GaN plug.",
  "/tools/charger-wattage-calculator/"
);

export default function ChargerCalculatorPage() {
  return (
    <div className="publication-page">
      <PageIntro
        label="CANOD Tool • Power"
        title="Charger Wattage & Fast-Charging Calculator"
      >
        <p>
          Find the exact charger size so your laptop stays charged during heavy use while simultaneously fast-charging your phone without slowing down.
        </p>
      </PageIntro>

      <section className="section-space">
        <div className="site-container">
          <ChargerCalculator />

          <div style={{ maxWidth: "960px", margin: "2rem auto 0", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6 }}>
            <p>
              Based on USB Power Delivery (USB-PD) standards, manufacturer charging profiles (Apple, Samsung, Google), and Canadian electrical safety guidance. This tool runs entirely in your browser; no personal data is collected or sent to CANOD.
            </p>
            <p>
              Want to learn more? Read our companion guide:{" "}
              <Link href="/guides/which-charger-do-i-need/" style={{ color: "var(--heading)", textDecoration: "underline" }}>
                Which Charger Do I Need for My Phone and Laptop?
              </Link>
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "CANOD Charger Wattage Calculator",
            url: "https://canod.ca/tools/charger-wattage-calculator/",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web browser",
            description: "Calculate the exact charger wattage needed for your laptop, phone, and tablet.",
            isAccessibleForFree: true,
            publisher: { "@type": "Organization", name: "CANOD", url: "https://canod.ca" },
          }),
        }}
      />
    </div>
  );
}
