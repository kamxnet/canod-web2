import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: { default: "CANOD | Practical Products for Canada", template: "%s | CANOD" },
  description: "CANOD is a Canadian-owned online retailer seeking authorized wholesale and brand-direct relationships for practical products suited to Canada.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  metadataBase: new URL("https://canod.ca"),
  robots: { index: true, follow: true },
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
        email: "kam@canod.ca",
        areaServed: "CA",
      },
    ],
  };

  return <html lang="en"><body className={`${manrope.variable} antialiased`}><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} /></body></html>;
}
