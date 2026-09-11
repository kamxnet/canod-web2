import type { Metadata } from "next";
import { EB_Garamond, Instrument_Sans, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-eb-garamond", display: "swap" });
const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "CANOD | Practical Products for Canada", template: "%s | CANOD" },
  description: "CANOD is a Canadian-owned online retailer exploring practical products for technology, work, travel, organization and everyday life.",
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
    title: "CANOD | Practical Products for Canada",
    description: "Practical products. Thoughtfully selected for Canada.",
    images: [{ url: "/og-canod.png", width: 1200, height: 630, alt: "CANOD - Practical products. Thoughtfully selected for Canada." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CANOD | Practical Products for Canada",
    description: "Practical products. Thoughtfully selected for Canada.",
    images: ["/og-canod.png"],
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

  return <html lang="en"><body className={`${manrope.variable} ${ebGaramond.variable} ${instrumentSans.variable} antialiased`}><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} /></body></html>;
}
