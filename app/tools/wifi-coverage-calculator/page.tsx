import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { WifiCalculator } from "@/components/wifi-calculator";
import { pageMetadata } from "@/lib/metadata";
import "@/app/tools.css";

export const metadata = pageMetadata(
  "Wi-Fi Coverage & Placement Tool — Router vs Mesh Calculator",
  "Determine whether moving your router, upgrading to Wi-Fi 6, or adding a 2-pack mesh system is the right fix for slow Wi-Fi in your home.",
  "/tools/wifi-coverage-calculator/"
);

export default function WifiCalculatorPage() {
  return (
    <div className="publication-page">
      <PageIntro
        label="CANOD Tool • Connect"
        title="Wi-Fi Coverage & Node Placement Tool"
      >
        <p>
          Find out whether you need a single well-placed router or a whole-home mesh system to eliminate dead zones upstairs and in the basement.
        </p>
      </PageIntro>

      <section className="section-space">
        <div className="site-container">
          <WifiCalculator />

          <div style={{ maxWidth: "960px", margin: "2rem auto 0", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6 }}>
            <p>
              Based on Canadian telecommunications standards (ISED), radio frequency propagation physics across drywall and concrete, and practical home networking principles. This tool runs client-side in your browser; no home layout data is saved or sent to CANOD.
            </p>
            <p>
              Learn more in our in-depth guides:{" "}
              <Link href="/guides/wifi-slow-in-one-room/" style={{ color: "var(--heading)", textDecoration: "underline", marginRight: "1rem" }}>
                Why Is My Wi-Fi Slow in One Room?
              </Link>
              <Link href="/guides/router-or-mesh-system/" style={{ color: "var(--heading)", textDecoration: "underline" }}>
                Do I Need a Router or Mesh System?
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
            name: "CANOD Wi-Fi Coverage & Node Placement Tool",
            url: "https://canod.ca/tools/wifi-coverage-calculator/",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web browser",
            description: "Calculate whether a single router or mesh system fits your home layout.",
            isAccessibleForFree: true,
            publisher: { "@type": "Organization", name: "CANOD", url: "https://canod.ca" },
          }),
        }}
      />
    </div>
  );
}
