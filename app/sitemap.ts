import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/interests/", "/guides/", "/partners/", "/about/", "/contact/", "/editorial-standards/", "/privacy/", ...guides.map(({ slug }) => `/guides/${slug}/`)].map((path) => ({ url: `https://canod.ca${path}` }));
}
