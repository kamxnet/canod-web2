import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Affiliate Disclosure", "CANOD currently includes no affiliate links. How future commercial links, sponsorships and CANOD-owned products will be identified.", "/affiliate-disclosure/");

export default function AffiliateDisclosurePage() {
  return <div className="publication-page"><PageIntro label="Commercial transparency" title="Useful advice. Visible relationships."><p>Our current guides and tools contain no affiliate links, paid placements or product endorsements.</p></PageIntro><div className="site-container document-body article-body">
    <p className="article-note">Last updated <time dateTime="2026-09-11">September 11, 2026</time>.</p>
    <section><h2>What an affiliate link means</h2><p>An affiliate link can pay CANOD a commission when a reader takes a qualifying action, such as a purchase or software subscription. We will add a link only after a program is approved and an authorized tracking link is available.</p><p>Potential future revenue sources include Amazon Associates Canada, approved direct-brand and software programs. This describes a direction, not current membership or a partnership claim.</p></section>
    <section><h2>Disclosure where it matters</h2><p>Commercial recommendations will carry a clear disclosure near the relevant content, and affiliate links will be labelled before you click. A future disclosure may read:</p><blockquote className="policy-example">CANOD may earn a commission from qualifying purchases made through clearly identified links. This does not affect the price you pay or how we evaluate products.</blockquote><p>Plain source links in our research are not affiliate links. Mentioning a manufacturer does not mean it has approved, sponsored or supplied the content.</p></section>
    <section><h2>Sponsorships and CANOD products</h2><p>If CANOD publishes sponsored content, the sponsor and commercial nature of the content will be identified. CANOD-owned tools or downloadable guides offered for sale will be identified as our own products. Neither type of relationship will be disguised as an independent review.</p><p>The current dock checker is free to use and does not collect personal details. No purchase or account is required.</p></section>
    <section><h2>How we evaluate a recommendation</h2><p>Suitability, compatibility, limitations and total cost come before commission potential. Payment does not substitute for evidence. CANOD distinguishes research from hands-on testing and does not claim experience it cannot document.</p><p>Read our <Link href="/editorial-standards/">editorial standards</Link> or <Link href="/contact/">contact CANOD</Link> with a question about a commercial relationship.</p></section>
  </div></div>;
}
