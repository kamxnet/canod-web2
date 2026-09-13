import type { Metadata } from "next";
import { Suspense } from "react";
import { EB_Garamond, Instrument_Sans, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { GoogleAnalytics } from "@/components/google-analytics";
import { GoogleAnalyticsTracker } from "@/components/google-analytics-tracker";
import "./globals.css";
import "./editorial.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-eb-garamond", display: "swap" });
const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "CANOD | Practical Technology for Canada", template: "%s | CANOD" },
  description: "CANOD helps Canadians choose practical technology that works together, with research-based guides and useful tools for work, storage and life on the move.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3d-c1", type: "image/x-icon", sizes: "16x16 32x32 48x48 64x64 256x256" },
      { url: "/favicon-3d-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-3d-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-3d-96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico?v=3d-c1",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  metadataBase: new URL("https://canod.ca"),
  openGraph: {
    type: "website",
    url: "https://canod.ca",
    siteName: "CANOD",
    title: "CANOD | Practical Technology for Canada",
    description: "Technology should work together. Clear Canadian guidance for practical setups.",
    images: [{ url: "/og-canod-publication.png", width: 1200, height: 630, alt: "CANOD: Technology should work together. Sage three-dimensional C with its red brand mark." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CANOD | Practical Technology for Canada",
    description: "Technology should work together. Clear Canadian guidance for practical setups.",
    images: ["/og-canod-publication.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CANOD",
    url: "https://canod.ca",
    email: "hello@canod.ca",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "general enquiries",
        email: "hello@canod.ca",
        areaServed: "CA",
      },
      {
        "@type": "ContactPoint",
        contactType: "brand and wholesale partnerships",
        email: "hello@canod.ca",
        areaServed: "CA",
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${manrope.variable} ${ebGaramond.variable} ${instrumentSans.variable} antialiased`}>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker />
        </Suspense>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
