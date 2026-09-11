import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { safetyToolPath } from "@/lib/safety-sources";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/interests/", "/guides/", "/tools/", "/tools/usb-c-dock-checker/", safetyToolPath, "/partners/", "/about/", "/contact/", "/editorial-standards/", "/affiliate-disclosure/", "/privacy/", ...guides.map(({ slug }) => `/guides/${slug}/`)].map((path) => ({ url: `https://canod.ca${path}` }));
}
