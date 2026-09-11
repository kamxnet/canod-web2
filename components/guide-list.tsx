import Link from "next/link";
import { ArrowRight, Cable, HardDrive, Luggage } from "lucide-react";
import { guides } from "@/lib/guides";

export function GuideList() {
  return <div className="guide-list">{guides.map((guide, index) => <article id={guide.pillar} className="guide-card" key={guide.slug}>
    <div className="guide-masthead" aria-hidden="true"><span className="guide-number">0{index + 1}</span>{guide.pillar === "work" ? <Cable size={32} strokeWidth={1.25} /> : guide.pillar === "travel" ? <Luggage size={32} strokeWidth={1.25} /> : <HardDrive size={32} strokeWidth={1.25} />}</div>
    <p className="eyebrow">{guide.category}</p>
    <h3><Link href={`/guides/${guide.slug}/`}>{guide.title}</Link></h3>
    <p>{guide.description}</p>
    <Link className="text-link" href={`/guides/${guide.slug}/`} aria-label={`Read ${guide.title}`}>Read the guide <ArrowRight size={18} aria-hidden="true" /></Link>
  </article>)}</div>;
}
