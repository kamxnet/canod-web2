"use client";

import { useId } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { inspectionTopics, safetyGuidePath, safetySources } from "@/lib/safety-sources";

export function SafetyInspection() {
  const id = useId();
  return <div className="safety-inspection">
    <div className="inspection-visual" aria-hidden="true">
      <svg viewBox="0 0 680 450" fill="none" focusable="false">
        <defs><linearGradient id={`${id}-face`} x1="230" y1="150" x2="454" y2="340" gradientUnits="userSpaceOnUse"><stop stopColor="#7b9787" /><stop offset=".42" stopColor="#b7c9b8" /><stop offset=".65" stopColor="#9aae9d" /><stop offset="1" stopColor="#547868" /></linearGradient><linearGradient id={`${id}-edge`} x1="415" y1="120" x2="480" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#ccdacb" /><stop offset="1" stopColor="#506d60" /></linearGradient><pattern id={`${id}-grid`} width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0v36" stroke="#acc9ba" strokeWidth=".5" opacity=".15" /></pattern></defs>
        <path fill={`url(#${id}-grid)`} d="M28 30h624v390H28z" />
        <path className="inspection-frame" d="M28 90V30h60m504 0h60v60M28 360v60h60m504 0h60v-60" />
        <path className="inspection-route" pathLength="1" d="M0 370h170q18 0 18-18V97q0-20 20-20h284q18 0 18 18v260q0 20-20 20H210q-22 0-22 22v30h492" />
        <g className="inspection-object">
          <path fill="#152e27" opacity=".3" d="m199 363 188-56 132 53-164 52z" />
          <path d="m271 151 130-35q12-3 21 4l55 40v161q0 12-12 16l-134 40-60-43z" fill={`url(#${id}-edge)`} stroke="#ccd8c8" />
          <path d="m259 177 132-37q17-4 17 15v174q0 17-16 22l-133 38q-15 4-15-13V196q0-15 15-19Z" fill={`url(#${id}-face)`} stroke="#bdd1bf" />
          <path d="m408 147 61 31M411 348l58-18" stroke="#d7e2d5" opacity=".6" />
          <path d="m321 132 0-48 14-4v48m31-9V70l14-4v49" stroke="#c7d8c6" strokeWidth="8" />
          <path d="m271 226 113-32v69l-113 32Z" fill="#1e4135" stroke="#507967" />
          <g fill="#d2dfce" fontSize="10" className="inspection-type"><text x="281" y="231" transform="rotate(-16 281 231)">INPUT / V ~ Hz</text><text x="281" y="251" transform="rotate(-16 281 251)">OUTPUT / V · A</text><text x="281" y="273" transform="rotate(-16 281 273)">MODEL / ——</text></g>
          <path d="m293 332 62-18q7-2 7 5v7q0 6-7 8l-62 18q-7 2-7-5v-7q0-6 7-8Z" fill="#16352b" stroke="#c6d7c4" /><path d="m300 337 46-13" stroke="#7a9f87" strokeWidth="3" />
        </g>
        <g className="inspection-callout inspection-approval"><path d="M271 270H135v-35H50" /><circle cx="271" cy="270" r="4" /><text x="50" y="222">01 / APPROVAL</text></g>
        <g className="inspection-callout inspection-input"><path d="M325 99V54H160" /><circle cx="325" cy="99" r="4" /><text x="50" y="57">02 / INPUT</text></g>
        <g className="inspection-callout inspection-output"><path d="M358 317h166v-35h108" /><circle cx="358" cy="317" r="4" /><text x="514" y="269">03 / OUTPUT</text></g>
        <g className="inspection-callout inspection-delivery"><path d="M336 242h184V147h112" /><circle cx="336" cy="242" r="4" /><text x="518" y="133">04 / USB PD</text></g>
        <g className="inspection-callout inspection-cable"><path d="M315 342H142v-15H50" /><circle cx="315" cy="342" r="4" /><text x="50" y="314">05 / CABLE</text></g>
        <g className="inspection-callout inspection-recall"><path d="M476 200h93V75h63" /><circle cx="476" cy="200" r="4" /><text x="514" y="62">06 / RECALL</text></g>
      </svg>
      <div className="inspection-caption"><span>Product-specific information matters.</span><span>01—06</span></div>
    </div>
    <div className="inspection-controls">
      <fieldset><legend>Trace the details</legend><div className="inspection-options">{inspectionTopics.map((topic, index) => <label key={topic.id}><input type="radio" name={`${id}-inspection`} value={topic.id} defaultChecked={index === 0} aria-controls={`${id}-${topic.id}-detail`} aria-describedby={`${id}-${topic.id}-detail`} /><span className="inspection-number" aria-hidden="true">0{index + 1}</span><span>{topic.label}</span><ArrowUpRight size={15} aria-hidden="true" /></label>)}</div></fieldset>
      <div className="inspection-details">{inspectionTopics.map(topic => <div className={`inspection-detail inspection-detail-${topic.id}`} id={`${id}-${topic.id}-detail`} key={topic.id}><p>{topic.detail}</p><a href={safetySources[topic.source].url}>{safetySources[topic.source].title} <ArrowUpRight size={14} aria-hidden="true" /></a><Link href={safetyGuidePath + "#" + topic.anchor}>Read this buying consideration <ArrowRight size={14} aria-hidden="true" /></Link></div>)}</div>
    </div>
  </div>;
}
