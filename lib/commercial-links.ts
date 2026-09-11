export type RevenueType = "amazon-associates-ca" | "direct-brand-affiliate" | "software-affiliate" | "canod-digital-product" | "sponsorship";
export type AffiliateEntry = {
  id: string;
  program: Extract<RevenueType, "amazon-associates-ca" | "direct-brand-affiliate" | "software-affiliate">;
  approval: "pending" | "approved";
  trackingUrl: string | null;
  label: string;
};

// Empty until CANOD supplies an approved program and its actual tracking link.
export const affiliateLinks: readonly AffiliateEntry[] = [];

export function approvedAffiliateUrl(entry: AffiliateEntry): string | null {
  if (entry.approval !== "approved" || !entry.trackingUrl) return null;
  try {
    const url = new URL(entry.trackingUrl);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}
