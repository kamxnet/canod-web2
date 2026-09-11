import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { GuideList } from "@/components/guide-list";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Practical Technology Guides", "Research-based Canadian guides to home Wi-Fi, USB-C docks, storage, backups and portable work. Understand compatibility and trade-offs before buying.", "/guides/");

export default function GuidesPage() {
  return <div className="publication-page">
    <PageIntro label="CANOD practical guides" title="Understand the details. Choose with purpose."><p>Clear Canadian guidance for home connectivity, work, storage and portable setups, with safety checks before you connect. Start with what you need, then weigh the trade-offs.</p></PageIntro>
    <section className="section-space"><div className="site-container">
      <h2 className="sr-only">The guides</h2><GuideList />
      <p className="guide-index-note">These guides are based on research, not hands-on product testing. Read our <Link href="/editorial-standards/">editorial standards</Link>.</p>
      <section id="business" className="business-reading"><p className="eyebrow">Small business / Planned coverage</p><h2>Start with the setup behind the work.</h2><p>For now, our <Link href="/guides/seven-things-usb-c-dock/">dock guide</Link> can help you frame workspace questions, and the <Link href="/guides/choosing-a-home-nas/">NAS guide</Link> introduces storage and backup planning. These are educational starting points, not business IT specifications.</p><p>Dedicated coverage of website builders, business email, productivity, scheduling, invoicing and ecommerce tools is planned. No software affiliate recommendations are currently published.</p></section>
    </div></section>
  </div>;
}
