"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Zap, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Laptop, Smartphone, Tablet, RefreshCw } from "lucide-react";
import {
  calculateChargerWattage,
  defaultChargerAnswers,
  type ChargerAnswers,
  type LaptopOption,
  type PhoneOption,
  type TabletOption,
} from "@/lib/charger-calculator";
import { trackToolStarted, trackToolCompleted } from "@/lib/analytics";

export function ChargerCalculator() {
  const [answers, setAnswers] = useState<ChargerAnswers>(defaultChargerAnswers);
  const [hasCalculated, setHasCalculated] = useState(true);
  const hasStartedRef = useRef(false);

  const recommendation = calculateChargerWattage(answers);

  function handleChange<K extends keyof ChargerAnswers>(key: K, value: ChargerAnswers[K]) {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackToolStarted({ tool_name: "charger_wattage_calculator" });
    }
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setHasCalculated(true);
    trackToolCompleted({
      tool_name: "charger_wattage_calculator",
      result_summary: `${recommendation.tierWatts}W`,
    });
  }

  function handleReset() {
    setAnswers(defaultChargerAnswers);
    hasStartedRef.current = false;
  }

  return (
    <div className="tool-calculator-card" style={{
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "16px",
      padding: "2rem",
      maxWidth: "960px",
      margin: "0 auto",
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.06)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid var(--line)", paddingBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{ background: "rgba(37,99,235,0.1)", color: "#2563eb", borderRadius: "8px", padding: "8px", display: "flex" }}>
            <Zap size={22} />
          </div>
          <div>
            <h2 style={{ fontSize: "1.25rem", margin: 0, color: "var(--heading)" }}>Charger Wattage Calculator</h2>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", margin: 0 }}>Find the exact single charger that powers all your gear.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleReset}
          style={{
            background: "transparent",
            border: "1px solid var(--line)",
            borderRadius: "8px",
            padding: "6px 12px",
            fontSize: "0.8rem",
            color: "var(--muted)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <RefreshCw size={13} /> Reset
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
        {/* INPUTS COLUMN */}
        <div>
          <h3 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted)", marginBottom: "1.25rem" }}>
            Step 1: Your Devices
          </h3>

          {/* Laptop Selection */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label htmlFor="charger-laptop" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", fontWeight: "600", color: "var(--heading)", marginBottom: "0.4rem" }}>
              <Laptop size={16} color="#2563eb" /> Laptop
            </label>
            <select
              id="charger-laptop"
              value={answers.laptop}
              onChange={(e) => handleChange("laptop", e.target.value as LaptopOption)}
              style={{
                width: "100%",
                padding: "0.65rem 0.85rem",
                borderRadius: "8px",
                border: "1px solid var(--line)",
                background: "var(--bg)",
                color: "var(--heading)",
                fontSize: "0.9rem",
              }}
            >
              <option value="macbook-air">MacBook Air (M1, M2, or M3)</option>
              <option value="macbook-pro-14">MacBook Pro 14&quot; (M-series Pro/Max)</option>
              <option value="macbook-pro-16">MacBook Pro 16&quot; (High power)</option>
              <option value="pc-thin">Windows Laptop (Dell XPS, ThinkPad, Surface, HP)</option>
              <option value="pc-gaming">High-Power / Gaming Laptop (100W+ USB-C)</option>
              <option value="none">No laptop (phone & tablet only)</option>
            </select>
          </div>

          {/* Phone Selection */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label htmlFor="charger-phone" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", fontWeight: "600", color: "var(--heading)", marginBottom: "0.4rem" }}>
              <Smartphone size={16} color="#059669" /> Phone
            </label>
            <select
              id="charger-phone"
              value={answers.phone}
              onChange={(e) => handleChange("phone", e.target.value as PhoneOption)}
              style={{
                width: "100%",
                padding: "0.65rem 0.85rem",
                borderRadius: "8px",
                border: "1px solid var(--line)",
                background: "var(--bg)",
                color: "var(--heading)",
                fontSize: "0.9rem",
              }}
            >
              <option value="iphone">iPhone (iPhone 12 through 16)</option>
              <option value="samsung-pixel">Samsung Galaxy or Google Pixel (Fast PPS)</option>
              <option value="other-phone">Other smartphone (Android / basic)</option>
              <option value="none">No phone</option>
            </select>
          </div>

          {/* Tablet Selection */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label htmlFor="charger-tablet" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", fontWeight: "600", color: "var(--heading)", marginBottom: "0.4rem" }}>
              <Tablet size={16} color="#9333ea" /> Tablet / Extra
            </label>
            <select
              id="charger-tablet"
              value={answers.tablet}
              onChange={(e) => handleChange("tablet", e.target.value as TabletOption)}
              style={{
                width: "100%",
                padding: "0.65rem 0.85rem",
                borderRadius: "8px",
                border: "1px solid var(--line)",
                background: "var(--bg)",
                color: "var(--heading)",
                fontSize: "0.9rem",
              }}
            >
              <option value="none">No tablet</option>
              <option value="ipad-pro">iPad Pro or iPad Air</option>
              <option value="ipad-basic">Standard iPad or iPad mini</option>
              <option value="kindle">E-reader (Kindle or Kobo)</option>
            </select>
          </div>

          {/* Simultaneous charging toggle */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "var(--heading)", marginBottom: "0.4rem" }}>
              How will you charge them?
            </span>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                type="button"
                onClick={() => handleChange("simultaneous", "all")}
                style={{
                  flex: 1,
                  padding: "0.55rem 0.75rem",
                  fontSize: "0.825rem",
                  borderRadius: "8px",
                  border: answers.simultaneous === "all" ? "2px solid #2563eb" : "1px solid var(--line)",
                  background: answers.simultaneous === "all" ? "rgba(37,99,235,0.08)" : "var(--bg)",
                  color: answers.simultaneous === "all" ? "#1d4ed8" : "var(--body)",
                  fontWeight: answers.simultaneous === "all" ? "700" : "500",
                  cursor: "pointer",
                }}
              >
                Plugged in together
              </button>
              <button
                type="button"
                onClick={() => handleChange("simultaneous", "one")}
                style={{
                  flex: 1,
                  padding: "0.55rem 0.75rem",
                  fontSize: "0.825rem",
                  borderRadius: "8px",
                  border: answers.simultaneous === "one" ? "2px solid #2563eb" : "1px solid var(--line)",
                  background: answers.simultaneous === "one" ? "rgba(37,99,235,0.08)" : "var(--bg)",
                  color: answers.simultaneous === "one" ? "#1d4ed8" : "var(--body)",
                  fontWeight: answers.simultaneous === "one" ? "700" : "500",
                  cursor: "pointer",
                }}
              >
                One at a time
              </button>
            </div>
          </div>
        </div>

        {/* RESULTS COLUMN */}
        <div style={{
          background: "linear-gradient(135deg, rgba(37,99,235,0.03) 0%, rgba(5,150,105,0.03) 100%)",
          border: "1px solid var(--line)",
          borderRadius: "12px",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#2563eb" }}>
                Recommended Size
              </span>
              <span style={{
                background: "#0f172a",
                color: "#ffffff",
                padding: "3px 10px",
                borderRadius: "999px",
                fontSize: "1.15rem",
                fontWeight: "800",
                letterSpacing: "-0.02em",
              }}>
                {recommendation.tierWatts}W GaN
              </span>
            </div>

            <h3 style={{ fontSize: "1.15rem", color: "var(--heading)", marginBottom: "0.65rem", lineHeight: 1.35 }}>
              {recommendation.headline}
            </h3>

            <p style={{ fontSize: "0.875rem", color: "var(--body)", lineHeight: 1.55, marginBottom: "1rem" }}>
              {recommendation.verdict}
            </p>

            {/* Port Power Splitting Preview */}
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "8px",
              padding: "0.85rem",
              marginBottom: "1rem",
            }}>
              <div style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.35rem" }}>
                How power splits when devices are plugged in:
              </div>
              <p style={{ fontSize: "0.825rem", color: "var(--heading)", fontWeight: "500", margin: 0, lineHeight: 1.45 }}>
                {recommendation.portSplitExample}
              </p>
            </div>

            {/* Cable Warning */}
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              background: recommendation.tierWatts > 60 ? "rgba(245, 158, 11, 0.08)" : "rgba(16, 185, 129, 0.08)",
              border: `1px solid ${recommendation.tierWatts > 60 ? "rgba(245, 158, 11, 0.25)" : "rgba(16, 185, 129, 0.25)"}`,
              borderRadius: "8px",
              padding: "0.75rem",
              marginBottom: "1rem",
            }}>
              {recommendation.tierWatts > 60 ? (
                <AlertTriangle size={18} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
              ) : (
                <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
              )}
              <div style={{ fontSize: "0.785rem", color: "var(--body)", lineHeight: 1.4 }}>
                <strong>Cable note: </strong>{recommendation.cableNote}
              </div>
            </div>
          </div>

          <div>
            <Link
              href="/guides/which-charger-do-i-need/"
              className="button button-dark"
              style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}
            >
              Read full charger buying guide <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER SAFETY NOTE */}
      <div style={{
        marginTop: "1.75rem",
        borderTop: "1px solid var(--line)",
        paddingTop: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "0.8rem",
        color: "var(--muted)",
      }}>
        <ShieldCheck size={18} color="#059669" />
        <span>
          <strong>Canadian safety tip:</strong> Always verify that any wall charger plugged into a Canadian outlet has a physical CSA, cUL, or cETL mark stamped into its plastic casing.
        </span>
      </div>
    </div>
  );
}
