import type { Metadata } from "next";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `https://canod.ca${path}`;
  return {
    title, description, alternates: { canonical: url },
    openGraph: {
      type: "website", url, siteName: "CANOD", title: `${title} | CANOD`, description,
      images: [{ url: "/og-canod.png", width: 1200, height: 630, alt: "CANOD - Practical products for Canada" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | CANOD`, description, images: ["/og-canod.png"] },
  };
}
