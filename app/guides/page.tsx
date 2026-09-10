import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { GuideList } from "@/components/guide-list";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Buying Guides", "Practical, research-based CANOD guides to choosing a tech organizer and a home NAS. Understand fit, trade-offs and the questions to ask before buying.", "/guides/");

export default function GuidesPage() {
  return <>
    <PageIntro label="CANOD buying guides" title="Understand the details. Choose with purpose."><p>Useful reading for technology, work, travel and everyday life. Start with what you need, then weigh the trade-offs.</p></PageIntro>
    <section className="section-space"><div className="site-container">
      <h2 className="sr-only">The guides</h2><GuideList />
      <p className="guide-index-note">These guides are based on research, not hands-on product testing. Read our <Link href="/editorial-standards/">editorial standards</Link>.</p>
    </div></section>
  </>;
}
