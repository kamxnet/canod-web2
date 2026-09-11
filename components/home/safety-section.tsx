import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SafetyInspection } from "@/components/safety-inspection";
import { safetyGuidePath, safetyToolPath } from "@/lib/safety-sources";

export function HomeSafety() {
  return <section id="buy-safe-canada" className="home-safety home-dark home-section" data-story-chapter="safety" aria-labelledby="safety-heading"><div className="site-container">
    <div className="safety-chapter-heading"><div><p className="eyebrow chapter-label"><span aria-hidden="true">05</span>A Canadian perspective / Safety &amp; standards</p><h2 id="safety-heading">Buy Safe in Canada</h2><p className="safety-opening">Before connecting it, charging it or bringing it home, check whether it is suitable for use in Canada.</p></div><p>CANOD helps you identify the specifications, approval information and warning signs worth checking before buying electrical and connected products.</p></div>
    <SafetyInspection />
    <div className="safety-chapter-close"><p>Knowing what to check is the first step.<br /><span>CANOD does not inspect, certify or approve products.</span></p><div><Link className="text-link" href={safetyGuidePath}>Seven charger safety checks <ArrowRight size={17} aria-hidden="true" /></Link><Link className="button button-dark" href={safetyToolPath}>Create a safety checklist <ArrowRight size={17} aria-hidden="true" /></Link></div></div>
  </div></section>;
}
