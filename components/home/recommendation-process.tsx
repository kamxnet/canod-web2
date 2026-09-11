import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  { name: "Problem", title: "Start with the everyday", description: "Define the job: connect a workspace, protect important files or carry a practical kit. A useful answer starts with the need, not the product.", href: "/about/" },
  { name: "Research", title: "Go to the original sources", description: "We use original writing and link technical claims to official documentation, manufacturer specifications or other relevant primary sources.", href: "/editorial-standards/#research" },
  { name: "Verify compatibility", title: "Check both ends of the connection", description: "Look at the exact device, software, cables and intended setup. Flag what remains unknown instead of turning assumptions into guarantees.", href: "/guides/seven-things-usb-c-dock/#computer-and-port" },
  { name: "Calculate total cost", title: "Consider the whole purchase", description: "Include required accessories, ongoing costs, Canadian availability, delivery and return conditions. Compare the total, not just a headline price.", href: "/guides/seven-things-usb-c-dock/#canadian-purchase" },
  { name: "Explain the decision", title: "Leave room for a simpler answer", description: "Explain who a solution suits, its limitations and when it may not be needed. Suitability comes before commission potential; commercial relationships will be clearly identified.", href: "/affiliate-disclosure/" },
];

export function RecommendationProcess() {
  return <div className="recommendation-process">
    <p className="principles-origin">The CANOD editorial method</p>
    <ol>
      {steps.map((step, index) => <li key={step.name} className="process-step" data-process-step>
        <Link className="process-node" href={step.href} aria-label={`0${index + 1}: ${step.name}. ${step.title}`}><span aria-hidden="true">0{index + 1}</span><ArrowUpRight size={15} aria-hidden="true" /></Link>
        <div>
          <h3>{step.name}</h3>
          <p>{step.description}</p>
        </div>
      </li>)}
    </ol>
  </div>;
}
