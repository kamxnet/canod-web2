import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { safetyToolPath } from "@/lib/safety-sources";
import { shopItems } from "@/lib/shop-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/shop/",
    ...shopItems.map(({ slug }) => `/shop/${slug}/`),
    "/learn/",
    "/learn/how-to/",
    "/learn/buying-guides/",
    "/learn/tech-explained/",
    "/learn/canada/",
    "/solutions/",
    "/interests/",
    "/guides/",
    ...guides.map(({ slug }) => `/guides/${slug}/`),
    "/tools/",
    "/tools/usb-c-dock-checker/",
    safetyToolPath,
    "/support/",
    "/support/contact/",
    "/support/shipping/",
    "/support/returns/",
    "/support/track-order/",
    "/support/faq/",
    "/support/warranty/",
    "/partners/",
    "/about/",
    "/contact/",
    "/editorial-standards/",
    "/affiliate-disclosure/",
    "/privacy/",
  ].map((path) => ({ url: `https://canod.ca${path}` }));
}
