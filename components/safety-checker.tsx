"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, CircleHelp, ClipboardList, Download, Printer, RotateCcw, TriangleAlert } from "lucide-react";
import { checkOptions, checkSafety, defaultSafetyAnswers, recallOptions, safetyChecklistText, safetyProducts, safetyQuestions, safetyStatuses, safetyStatusLabels, type SafetyAnswers } from "@/lib/safety-checker";
import { safetyDisclaimer, safetyGuidePath, safetySources } from "@/lib/safety-sources";

const statusIcons = { confirmed: Check, verify: CircleHelp, concern: TriangleAlert };

export function SafetyChecker() {
  const id = useId();
  const [answers, setAnswers] = useState<SafetyAnswers>(defaultSafetyAnswers);
  const [submitted, setSubmitted] = useState<SafetyAnswers | null>(null);
  const [downloadStatus, setDownloadStatus] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const result = submitted ? checkSafety(submitted) : null;
  const questions = safetyQuestions(answers);
  useEffect(() => { if (submitted) heading.current?.focus(); }, [submitted]);

  function change(key: keyof SafetyAnswers, value: string) {
    setAnswers(previous => key === "product" ? { ...defaultSafetyAnswers, product: value as SafetyAnswers["product"] } : key === "mains" ? { ...previous, mains: value as SafetyAnswers["mains"], approval: "unknown", specs: "unknown", supply: "unknown", fit: "unknown" } : { ...previous, [key]: value });
    setSubmitted(null);
    setDownloadStatus("");
  }
  function reset() {
    setAnswers(defaultSafetyAnswers);
    setSubmitted(null);
    setDownloadStatus("");
    form.current?.querySelector("select")?.focus();
  }
  function download() {
    if (!submitted) return;
    const url = URL.createObjectURL(new Blob([safetyChecklistText(submitted)], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "canod-canadian-safety-checklist.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloadStatus("Your checklist download has started.");
  }

  return <div className="safety-checker">
    <noscript><style>{".safety-form{display:none}.safety-tool-layout{display:block}.safety-result{border:0}"}</style><p className="safety-noscript">The interactive checklist needs JavaScript. All seven checks and official links are available in the <Link href={safetyGuidePath}>charger safety guide</Link>.</p></noscript>
    <div className="safety-toolbar"><span><ClipboardList size={18} aria-hidden="true" />CANOD tools / 02</span><span>Local answers. No account. No database lookup.</span></div>
    <div className="safety-tool-layout">
      <form className="safety-form" ref={form} onSubmit={event => { event.preventDefault(); setSubmitted({ ...answers }); setDownloadStatus(""); }}>
        <fieldset className="safety-product-field"><legend>01 / The product</legend><label htmlFor={`${id}-product`}>What are you considering?</label><select id={`${id}-product`} name="product" value={answers.product} onChange={event => change("product", event.target.value)}>{safetyProducts.map(product => <option key={product.id} value={product.id}>{product.label}</option>)}</select><p>Changing the product clears earlier answers. Leave anything you cannot confirm as &ldquo;Not sure yet.&rdquo;</p></fieldset>
        <fieldset className="safety-question-fields"><legend>02 / What you can establish</legend>
          {questions.map(question => <div className="safety-field" key={question.key}>
            <label htmlFor={`${id}-${question.key}`}>{question.label}</label>
            <p id={`${id}-${question.key}-hint`}>{question.hint}</p>
            <select id={`${id}-${question.key}`} name={question.key} value={answers[question.key]} aria-describedby={`${id}-${question.key}-hint`} onChange={event => change(question.key, event.target.value)}>{(question.key === "recall" ? recallOptions : checkOptions).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
            {question.key === "recall" && <a className="safety-field-source" href={safetySources.recalls.url} target="_blank" rel="noopener noreferrer">Open the recall database <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
            {question.key === "approval" && <a className="safety-field-source" href={safetySources.marks.url} target="_blank" rel="noopener noreferrer">Ontario ESA mark reference <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
          </div>)}
        </fieldset>
        <div className="safety-form-actions"><button className="button button-dark" type="submit">Create my checklist <ArrowRight size={17} aria-hidden="true" /></button><button className="safety-icon-button" type="button" onClick={reset} aria-label="Reset safety checklist" title="Reset safety checklist"><RotateCcw size={19} aria-hidden="true" /></button></div>
      </form>
      <div className="safety-result" data-has-result={Boolean(result)}>
        {result ? <>
          <p className="eyebrow">Your pre-purchase record</p><h3 ref={heading} tabIndex={-1} aria-describedby={`${id}-result-summary`}>Your safety checklist</h3>
          <p id={`${id}-result-summary`} className="safety-result-summary">{safetyProducts.find(product => product.id === submitted?.product)!.label}. {result.items.filter(item => item.status === "verify").length} items need verification; {result.items.filter(item => item.status === "concern").length} potential concerns. Confirmed information is self-reported, not independently verified.</p>
          <p className="safety-disclaimer">{result.disclaimer}</p>
          {(["concern", "verify", "confirmed"] as const).map(status => {
            const items = result.items.filter(item => item.status === status), Icon = statusIcons[status];
            return <section className={`safety-result-group safety-status-${status}`} key={status} aria-labelledby={`${id}-${status}`}><h4 id={`${id}-${status}`}><Icon size={18} aria-hidden="true" />{safetyStatusLabels[status]} <span>{items.length}</span></h4>{items.length ? <ul>{items.map(item => <li key={item.id} data-safety-check={item.id} data-check-status={status}><h5>{item.title}</h5><p>{item.detail}</p><a href={safetySources[item.source].url}>{safetySources[item.source].title} <ArrowUpRight size={13} aria-hidden="true" /></a></li>)}</ul> : <p className="safety-empty-group">{status === "concern" ? "None flagged by these answers. This is not a safety clearance." : status === "verify" ? "None left open in these answers. The product itself has not been verified." : "No information reported as confirmed yet."}</p>}</section>;
          })}
          <div className="safety-next"><p className="eyebrow">Your next step</p><p>{result.next}</p><p>{result.reminder.text}</p><a href={safetySources[result.reminder.source].url}>{safetySources[result.reminder.source].title}</a></div>
          <div className="safety-result-actions"><button type="button" className="text-link" onClick={download}><Download size={17} aria-hidden="true" />Download checklist</button><button type="button" className="safety-icon-button" aria-label="Print checklist" title="Print checklist" onClick={() => window.print()}><Printer size={19} aria-hidden="true" /></button></div>
          <p role="status" className="safety-download-status">{downloadStatus}</p>
        </> : <div className="safety-result-intro"><ClipboardList size={44} strokeWidth={1} aria-hidden="true" /><p className="eyebrow">Evidence before a decision</p><h3>A record.<br />Not a verdict.</h3><p>Gather the label, model details and seller information. The checklist organizes what you know and what still needs a clear answer.</p><ul>{safetyStatuses.map(status => { const Icon = statusIcons[status]; return <li key={status}><Icon size={17} aria-hidden="true" />{safetyStatusLabels[status]}</li>; })}</ul><p className="safety-disclaimer">{safetyDisclaimer}</p><Link className="text-link" href={safetyGuidePath}>Read the seven safety checks <ArrowRight size={16} aria-hidden="true" /></Link></div>}
      </div>
    </div>
  </div>;
}
