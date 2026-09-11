import Link from "next/link";
import { approvedAffiliateUrl, type AffiliateEntry } from "@/lib/commercial-links";

export function AffiliateDisclosure({ links }: { links: readonly AffiliateEntry[] }) {
  if (!links.some(link => approvedAffiliateUrl(link))) return null;
  return <aside className="commercial-disclosure" aria-label="Affiliate disclosure"><p>CANOD may earn a commission from qualifying purchases made through clearly identified links. This does not affect the price you pay or how we evaluate products.</p><Link href="/affiliate-disclosure/">How commercial links work</Link></aside>;
}

export function AffiliateLink({ entry }: { entry: AffiliateEntry }) {
  const href = approvedAffiliateUrl(entry);
  if (!href) return null;
  return <a href={href} rel="sponsored nofollow">{entry.label} <span className="commercial-link-label">(affiliate link)</span></a>;
}
