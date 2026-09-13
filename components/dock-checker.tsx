"use client";

import Link from "next/link";
import { useRef, useState, useId, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Download, RotateCcw, Cable, Monitor, Laptop, Info } from "lucide-react";
import { checkDock, defaultDockAnswers, dockChecklistText, dockOptions, type DockAnswers } from "@/lib/dock-checker";
import { dockGuidePath, dockSources } from "@/lib/dock-sources";
import { trackToolStarted, trackToolCompleted } from "@/lib/analytics";

const labels: Record<keyof DockAnswers, string> = { device: "Computer or device", os: "Operating system", port: "Port on the computer", monitors: "External monitors", resolution: "Resolution & refresh rate", charging: "Charging through the dock" };
const order: (keyof DockAnswers)[] = ["device", "os", "port", "monitors", "resolution", "charging"];

export function DockChecker() {
  const id = useId();
  const [answers, setAnswers] = useState<DockAnswers>(defaultDockAnswers);
  const [submitted, setSubmitted] = useState<DockAnswers | null>(null);
  const [downloadStatus, setDownloadStatus] = useState("");
  const hasStartedRef = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const result = submitted ? checkDock(submitted) : null;

  useEffect(() => { if (submitted) heading.current?.focus(); }, [submitted]);

  function notifyStart() {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackToolStarted({ tool_name: "usb_c_dock_checker" });
    }
  }

  function reset() {
    setAnswers(defaultDockAnswers);
    setSubmitted(null);
    setDownloadStatus("");
    hasStartedRef.current = false;
    form.current?.querySelector("select")?.focus();
  }
  function download() {
    if (!submitted) return;
    trackToolCompleted({ tool_name: "usb_c_dock_checker", result_summary: "checklist_downloaded" });
    const url = URL.createObjectURL(new Blob([dockChecklistText(submitted)], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "canod-dock-checklist.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloadStatus("Your checklist download has started.");
  }

  return <div className="dock-checker">
    <noscript><style>{".dock-checker .dock-form{display:none}.dock-checker .dock-layout{grid-template-columns:1fr}.dock-checker .dock-result{border:0}"}</style><p className="dock-noscript">The interactive checker needs JavaScript. The complete <a href={`${dockGuidePath}#your-checklist`}>dock buying checklist</a> is available without it.</p></noscript>
    <div className="dock-toolbar"><span><Cable size={17} aria-hidden="true" />CANOD tools <span aria-hidden="true">/</span> 01</span><span>No account. No data collection by this tool.</span></div>
    <div className="dock-layout">
      <form ref={form} className="dock-form" onSubmit={event => {
        event.preventDefault();
        setSubmitted({ ...answers });
        setDownloadStatus("");
        trackToolCompleted({ tool_name: "usb_c_dock_checker", result_summary: "checklist_built" });
      }}>
        <fieldset>
          <legend className="sr-only">Your device and dock requirements</legend>
          {order.map((key, index) => <div className="dock-field" key={key}>
            <label htmlFor={`${id}-${key}`}><span aria-hidden="true">0{index + 1}</span>{labels[key]}</label>
            <select id={`${id}-${key}`} name={key} value={answers[key]} disabled={key === "resolution" && answers.monitors === "0"} onChange={event => {
              notifyStart();
              setAnswers(previous => ({ ...previous, [key]: event.target.value }));
              setSubmitted(null);
              setDownloadStatus("");
            }}>
              {dockOptions[key].map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
            {key === "resolution" && answers.monitors === "0" && <p className="dock-field-note">Not needed without external monitors.</p>}
          </div>)}
        </fieldset>
        <div className="dock-actions"><button className="button button-dark" type="submit">Build my checklist <ArrowRight size={18} aria-hidden="true" /></button><button className="dock-icon-button" type="button" aria-label="Reset dock checker" title="Reset dock checker" onClick={reset}><RotateCcw size={19} aria-hidden="true" /></button></div>
        <p className="dock-form-note">Not sure? Keep that answer. An unknown specification is useful to flag before buying.</p>
      </form>
      <div className="dock-result" data-has-result={Boolean(result)}>
        {result ? <>
          <p className="eyebrow dock-result-label"><Info size={16} aria-hidden="true" />To verify before buying</p>
          <h3 ref={heading} tabIndex={-1}>Your dock checklist</h3>
          <p className="dock-disclaimer">{result.disclaimer}</p>
          <ul className="dock-setup" aria-label="Your selected setup">{result.summary.map(item => <li key={item.key}>{item.label}</li>)}</ul>
          <ol className="dock-notes">{result.notes.map((note, index) => <li key={note.id} data-check={note.id}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div><h4>{note.title}</h4><p>{note.text}</p>{note.source && <a href={dockSources[note.source].url} className="dock-source">{dockSources[note.source].title} <ArrowUpRight size={13} aria-hidden="true" /></a>}{note.id === "mac-permission" && <a href={dockSources.protectedVideo.url} className="dock-source">DisplayLink protected-video limitations <ArrowUpRight size={13} aria-hidden="true" /></a>}</div>
          </li>)}</ol>
          <button className="text-link dock-download" type="button" onClick={download}><Download size={17} aria-hidden="true" />Download checklist</button>
          <p role="status" className="dock-download-status">{downloadStatus}</p>
          <Link href={dockGuidePath} className="dock-guide-link">Read the full dock guide <ArrowRight size={17} aria-hidden="true" /></Link>
        </> : <>
          <div className="dock-blueprint" aria-hidden="true"><Laptop strokeWidth={1} /><span /><Cable strokeWidth={1} /><span /><Monitor strokeWidth={1} /></div>
          <p className="eyebrow">Before the one-cable setup</p>
          <h3>Check the whole connection.</h3>
          <p>A dock sits between your computer and everything you plug into it. The details at both ends matter.</p>
          <ul className="dock-promises"><li>Your host connection</li><li>Your display arrangement</li><li>Your charging & software requirements</li></ul>
          <p className="dock-disclaimer">Educational guidance only. No product recommendation or compatibility guarantee.</p>
          <Link href={dockGuidePath} className="text-link">Read the dock guide <ArrowRight size={17} aria-hidden="true" /></Link>
        </>}
      </div>
    </div>
  </div>;
}
