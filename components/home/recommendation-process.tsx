import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  { name: "Problem", title: "Start with the everyday", description: "A pouch that fits the things you carry. A place for the cables on your desk. Storage that makes sense for your household. CANOD is built around ordinary needs that deserve a thoughtful answer.", href: "/about/" },
  { name: "Research", title: "Research and sources", description: "Our guides help readers understand a product category and make their own choice.", detail: "We use original writing and link technical claims to official documentation, manufacturer specifications or other relevant primary sources.", href: "/editorial-standards/" },
  { name: "Compare", title: "Research is different from testing", description: "Our current guides are research-based.", detail: "We do not present manufacturer claims as CANOD test results, or suggest that we have used a product when we have not.", href: "/editorial-standards/" },
  { name: "Calculate", title: "Consider the whole purchase", description: "Before purchasing in Canada, check the seller's return conditions, delivery cost and the total in Canadian dollars.", href: "/guides/choosing-a-tech-organizer/#materials-and-care" },
  { name: "Recommend", title: "Commercial relationships", description: "Our current buying guides contain no affiliate links.", detail: "If future content includes affiliate links, we will explain the relationship alongside the affected links so readers can identify it before clicking.", href: "/editorial-standards/" },
];

export function RecommendationProcess() {
  return <div className="recommendation-process">
    <p className="principles-origin">Canadian-owned online retailer.</p>
    <ol>
      {steps.map((step, index) => <li key={step.name} className="process-step" data-process-step>
        <Link className="process-node" href={step.href} aria-label={`${step.name}: ${step.title}`}><span aria-hidden="true">0{index + 1}</span><ArrowUpRight size={15} aria-hidden="true" /></Link>
        <div>
          <p className="process-stage">{step.name}</p>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          {step.detail && <p className="process-detail">{step.detail}</p>}
        </div>
      </li>)}
    </ol>
    <Link className="text-link" href="/editorial-standards/">Editorial standards <ArrowUpRight size={18} aria-hidden="true" /></Link>
  </div>;
}
