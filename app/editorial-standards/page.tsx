import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Editorial Standards", "How CANOD researches buying guides, cites sources, distinguishes research from testing and handles corrections and future affiliate disclosures.", "/editorial-standards/");

export default function EditorialStandardsPage() {
  return <>
    <PageIntro label="Editorial standards" title="Useful information, clearly explained."><p>Our guides help readers understand a product category and make their own choice.</p></PageIntro>
    <div className="site-container document-body article-body">
      <p className="article-note">Last updated <time dateTime="2026-09-10">September 10, 2026</time>.</p>
      <section><h2>Research and sources</h2><p>We use original writing and link technical claims to official documentation, manufacturer specifications or other relevant primary sources. Sources inform the facts; the buying considerations explain how those facts may matter in everyday use.</p><p>Specifications and software support can change. Guides include publication dates and source-check information. Readers should confirm details for the exact model and version they are considering.</p></section>
      <section><h2>Research is different from testing</h2><p>Our current guides are research-based. We do not present manufacturer claims as CANOD test results, or suggest that we have used a product when we have not. If we publish hands-on work in future, it will identify what was tested, how it was assessed and the limits of that assessment.</p></section>
      <section><h2>Commercial relationships</h2><p>CANOD is a retailer as well as a publisher of product information. A brand mentioned as a source is not automatically a supplier or partner. Our current buying guides contain no affiliate links.</p><p>If future content includes affiliate links, we will explain the relationship alongside the affected links so readers can identify it before clicking. Sponsorships or supplied review products, if any, will also be identified in the affected content.</p></section>
      <section><h2>Corrections</h2><p>Found a factual error or outdated detail? Email <a href="mailto:hello@canod.ca?subject=Editorial%20correction">hello@canod.ca</a> with the page, the detail in question and a supporting source when possible. We review reported issues and correct confirmed errors. Material changes will be identified with an update date and a brief note on the affected guide.</p></section>
      <p><Link href="/guides/">Explore the buying guides</Link>.</p>
    </div>
  </>;
}
