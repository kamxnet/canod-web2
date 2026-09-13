"use client";

import Link from "next/link";
import { useRef, useState, useId, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Download, RotateCcw, Cable, Monitor, Laptop, Info, ChevronDown } from "lucide-react";
import {
  checkDock,
  defaultDockAnswers,
  dockChecklistText,
  dockOptions,
  laptopPresets,
  type DockAnswers,
  type LaptopPresetId,
} from "@/lib/dock-checker";
import { dockGuidePath, dockSources } from "@/lib/dock-sources";
import { trackToolStarted, trackToolCompleted } from "@/lib/analytics";

export function DockChecker() {
  const id = useId();
  const [answers, setAnswers] = useState<DockAnswers>(defaultDockAnswers);
  const [submitted, setSubmitted] = useState<DockAnswers | null>(defaultDockAnswers);
  const [downloadStatus, setDownloadStatus] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const hasStartedRef = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const result = submitted ? checkDock(submitted) : null;

  useEffect(() => {
    if (submitted) heading.current?.focus();
  }, [submitted]);

  function notifyStart() {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackToolStarted({ tool_name: "usb_c_dock_checker" });
    }
  }

  function handlePresetChange(presetId: LaptopPresetId) {
    notifyStart();
    const preset = laptopPresets.find((item) => item.id === presetId);
    if (!preset) return;

    const newAnswers: DockAnswers = {
      ...answers,
      preset: presetId,
      device: preset.device,
      os: preset.os as DockAnswers["os"],
      port: preset.port as DockAnswers["port"],
      charging: (preset.defaultCharging ?? answers.charging) as DockAnswers["charging"],
    };
    setAnswers(newAnswers);
    setSubmitted(newAnswers);
    setDownloadStatus("");
  }

  function reset() {
    setAnswers(defaultDockAnswers);
    setSubmitted(defaultDockAnswers);
    setDownloadStatus("");
    setShowAdvanced(false);
    hasStartedRef.current = false;
    form.current?.querySelector("select")?.focus();
  }

  function download() {
    if (!submitted) return;
    trackToolCompleted({ tool_name: "usb_c_dock_checker", result_summary: "checklist_downloaded" });
    const url = URL.createObjectURL(new Blob([dockChecklistText(submitted)], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "canod-dock-compatibility-checklist.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloadStatus("Your checklist download has started.");
  }

  const primaryNotes = result?.notes.filter((n) => !n.isTechnical) ?? [];
  const technicalNotes = result?.notes.filter((n) => n.isTechnical) ?? [];

  return (
    <div className="dock-checker">
      <noscript>
        <style>{".dock-checker .dock-form{display:none}.dock-checker .dock-layout{grid-template-columns:1fr}.dock-checker .dock-result{border:0}"}</style>
        <p className="dock-noscript">
          The interactive checker needs JavaScript. The complete{" "}
          <a href={`${dockGuidePath}#your-checklist`}>dock buying checklist</a> is available without it.
        </p>
      </noscript>

      <div className="dock-toolbar">
        <span>
          <Cable size={17} aria-hidden="true" /> CANOD Tools • Connect
        </span>
        <span>Runs client-side. No personal data collected.</span>
      </div>

      <div className="dock-layout">
        <form
          ref={form}
          className="dock-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted({ ...answers });
            setDownloadStatus("");
            trackToolCompleted({ tool_name: "usb_c_dock_checker", result_summary: "checklist_built" });
          }}
        >
          <fieldset>
            <legend className="sr-only">Your device and monitor setup</legend>

            {/* Step 1: Laptop Picker */}
            <div className="dock-field">
              <label htmlFor={`${id}-preset`}>
                <span aria-hidden="true">01</span> Your laptop or computer
              </label>
              <select
                id={`${id}-preset`}
                value={answers.preset ?? "macbook-air"}
                onChange={(e) => handlePresetChange(e.target.value as LaptopPresetId)}
              >
                {laptopPresets.map((preset) => (
                  <option key={preset.id} value={preset.id}>
                    {preset.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Number of External Monitors */}
            <div className="dock-field">
              <label htmlFor={`${id}-monitors`}>
                <span aria-hidden="true">02</span> External monitors needed
              </label>
              <select
                id={`${id}-monitors`}
                name="monitors"
                value={answers.monitors}
                onChange={(event) => {
                  notifyStart();
                  const updated = { ...answers, monitors: event.target.value as DockAnswers["monitors"] };
                  setAnswers(updated);
                  setSubmitted(updated);
                }}
              >
                {dockOptions.monitors.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Laptop Charging */}
            <div className="dock-field">
              <label htmlFor={`${id}-charging`}>
                <span aria-hidden="true">03</span> Charge laptop through dock?
              </label>
              <select
                id={`${id}-charging`}
                name="charging"
                value={answers.charging}
                onChange={(event) => {
                  notifyStart();
                  const updated = { ...answers, charging: event.target.value as DockAnswers["charging"] };
                  setAnswers(updated);
                  setSubmitted(updated);
                }}
              >
                {dockOptions.charging.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Advanced Technical Details Toggle */}
            <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px dashed var(--line)" }}>
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                style={{
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  fontSize: "0.8125rem",
                  fontWeight: "600",
                  color: "#2563eb",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>{showAdvanced ? "Hide technical port settings" : "+ Customize port protocol & resolution (Technical)"}</span>
                <ChevronDown size={14} style={{ transform: showAdvanced ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </button>

              {showAdvanced && (
                <div style={{ marginTop: "0.75rem" }}>
                  <div className="dock-field">
                    <label htmlFor={`${id}-port`} style={{ fontSize: "0.8rem" }}>
                      Exact Port Protocol
                    </label>
                    <select
                      id={`${id}-port`}
                      value={answers.port}
                      onChange={(e) => {
                        notifyStart();
                        const updated = { ...answers, port: e.target.value as DockAnswers["port"] };
                        setAnswers(updated);
                        setSubmitted(updated);
                      }}
                    >
                      {dockOptions.port.map(([val, lbl]) => (
                        <option key={val} value={val}>{lbl}</option>
                      ))}
                    </select>
                  </div>

                  <div className="dock-field">
                    <label htmlFor={`${id}-resolution`} style={{ fontSize: "0.8rem" }}>
                      Target Screen Resolution
                    </label>
                    <select
                      id={`${id}-resolution`}
                      value={answers.resolution}
                      onChange={(e) => {
                        notifyStart();
                        const updated = { ...answers, resolution: e.target.value as DockAnswers["resolution"] };
                        setAnswers(updated);
                        setSubmitted(updated);
                      }}
                    >
                      {dockOptions.resolution.map(([val, lbl]) => (
                        <option key={val} value={val}>{lbl}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </fieldset>

          <div className="dock-actions">
            <button className="button button-dark" type="submit">
              Update checklist <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button
              className="dock-icon-button"
              type="button"
              aria-label="Reset dock checker"
              title="Reset dock checker"
              onClick={reset}
            >
              <RotateCcw size={19} aria-hidden="true" />
            </button>
          </div>
        </form>

        {/* RESULTS COLUMN */}
        <div className="dock-result" data-has-result={Boolean(result)}>
          {result ? (
            <>
              <p className="eyebrow dock-result-label">
                <Info size={16} aria-hidden="true" /> Compatibility Breakdown
              </p>
              <h3 ref={heading} tabIndex={-1}>
                Your Dock & Dual Screen Checklist
              </h3>
              <p className="dock-disclaimer">{result.disclaimer}</p>

              {/* Primary consumer-facing alerts */}
              <ol className="dock-notes">
                {primaryNotes.map((note, index) => (
                  <li key={note.id} data-check={note.id}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{note.title}</h4>
                      <p>{note.text}</p>
                      {note.source && (
                        <a href={dockSources[note.source].url} className="dock-source" target="_blank" rel="noopener noreferrer">
                          {dockSources[note.source].title} <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      )}
                      {note.id === "mac-permission" && (
                        <a href={dockSources.protectedVideo.url} className="dock-source" target="_blank" rel="noopener noreferrer">
                          DisplayLink protected-video limitations <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>

              {/* Technical details collapsed */}
              {technicalNotes.length > 0 && (
                <details style={{ marginTop: "1rem", border: "1px solid var(--line)", borderRadius: "8px", padding: "0.75rem 1rem", background: "var(--surface)" }}>
                  <summary style={{ fontSize: "0.825rem", fontWeight: "600", color: "var(--muted)", cursor: "pointer" }}>
                    Advanced Technical Specifications ({technicalNotes.length})
                  </summary>
                  <ul style={{ marginTop: "0.75rem", paddingLeft: "1.2rem", fontSize: "0.8rem", color: "var(--body)" }}>
                    {technicalNotes.map((note) => (
                      <li key={note.id} style={{ marginBottom: "0.5rem" }}>
                        <strong>{note.title}:</strong> {note.text}
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <button className="text-link dock-download" type="button" onClick={download}>
                <Download size={17} aria-hidden="true" /> Download checklist
              </button>
              <p role="status" className="dock-download-status">
                {downloadStatus}
              </p>
              <Link href="/guides/seven-things-usb-c-dock/" className="dock-guide-link">
                Read our dual monitor connection guide <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </>
          ) : (
            <>
              <div className="dock-blueprint" aria-hidden="true">
                <Laptop strokeWidth={1} />
                <span />
                <Cable strokeWidth={1} />
                <span />
                <Monitor strokeWidth={1} />
              </div>
              <p className="eyebrow">Connect two screens with one cable</p>
              <h3>Check compatibility before buying.</h3>
              <p>Docks behave very differently between Macs and Windows PCs. Select your laptop to check display limits and charging speeds.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
