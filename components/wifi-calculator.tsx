"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Wifi, ArrowRight, CheckCircle2, AlertCircle, Home, MapPin, Layers, RefreshCw } from "lucide-react";
import {
  calculateWifiPlan,
  defaultWifiAnswers,
  type WifiAnswers,
  type HomeSize,
  type FloorCount,
  type RouterLocation,
  type WeakZone,
  type WallType,
} from "@/lib/wifi-calculator";
import { trackToolStarted, trackToolCompleted } from "@/lib/analytics";

export function WifiCalculator() {
  const [answers, setAnswers] = useState<WifiAnswers>(defaultWifiAnswers);
  const hasStartedRef = useRef(false);

  const plan = calculateWifiPlan(answers);

  function handleChange<K extends keyof WifiAnswers>(key: K, value: WifiAnswers[K]) {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackToolStarted({ tool_name: "wifi_coverage_calculator" });
    }
    setAnswers((prev) => ({ ...prev, [key]: value }));
    trackToolCompleted({
      tool_name: "wifi_coverage_calculator",
      result_summary: plan.nodeCount,
    });
  }

  function handleReset() {
    setAnswers(defaultWifiAnswers);
    hasStartedRef.current = false;
  }

  return (
    <div
      className="tool-calculator-card"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "16px",
        padding: "2rem",
        maxWidth: "960px",
        margin: "0 auto",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid var(--line)", paddingBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{ background: "rgba(5, 150, 105, 0.1)", color: "#059669", borderRadius: "8px", padding: "8px", display: "flex" }}>
            <Wifi size={22} />
          </div>
          <div>
            <h2 style={{ fontSize: "1.25rem", margin: 0, color: "var(--heading)" }}>Wi-Fi Coverage & Placement Tool</h2>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", margin: 0 }}>Find out if moving your router or adding a mesh node fixes dead zones.</p>
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
            Your Home Layout
          </h3>

          {/* Home Size */}
          <div style={{ marginBottom: "1.15rem" }}>
            <label htmlFor="wifi-size" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", fontWeight: "600", color: "var(--heading)", marginBottom: "0.35rem" }}>
              <Home size={15} color="#059669" /> Approximate Home Size
            </label>
            <select
              id="wifi-size"
              value={answers.size}
              onChange={(e) => handleChange("size", e.target.value as HomeSize)}
              style={{
                width: "100%",
                padding: "0.6rem 0.8rem",
                borderRadius: "8px",
                border: "1px solid var(--line)",
                background: "var(--bg)",
                color: "var(--heading)",
                fontSize: "0.9rem",
              }}
            >
              <option value="apartment">Apartment / Condo (under 1,000 sq ft)</option>
              <option value="small-house">Small Home / Townhouse (1,000 – 1,800 sq ft)</option>
              <option value="medium-house">Medium Detached Home (1,800 – 3,000 sq ft)</option>
              <option value="large-house">Large Home (3,000+ sq ft)</option>
            </select>
          </div>

          {/* Number of Floors */}
          <div style={{ marginBottom: "1.15rem" }}>
            <label htmlFor="wifi-floors" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", fontWeight: "600", color: "var(--heading)", marginBottom: "0.35rem" }}>
              <Layers size={15} color="#2563eb" /> Number of Floors
            </label>
            <select
              id="wifi-floors"
              value={answers.floors}
              onChange={(e) => handleChange("floors", e.target.value as FloorCount)}
              style={{
                width: "100%",
                padding: "0.6rem 0.8rem",
                borderRadius: "8px",
                border: "1px solid var(--line)",
                background: "var(--bg)",
                color: "var(--heading)",
                fontSize: "0.9rem",
              }}
            >
              <option value="1">1 Floor (single-level living)</option>
              <option value="2">2 Floors (ground floor + upstairs)</option>
              <option value="3">3 Floors (including basement or 3-story)</option>
            </select>
          </div>

          {/* Current Router Location */}
          <div style={{ marginBottom: "1.15rem" }}>
            <label htmlFor="wifi-location" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", fontWeight: "600", color: "var(--heading)", marginBottom: "0.35rem" }}>
              <MapPin size={15} color="#d97706" /> Where is your modem/router now?
            </label>
            <select
              id="wifi-location"
              value={answers.location}
              onChange={(e) => handleChange("location", e.target.value as RouterLocation)}
              style={{
                width: "100%",
                padding: "0.6rem 0.8rem",
                borderRadius: "8px",
                border: "1px solid var(--line)",
                background: "var(--bg)",
                color: "var(--heading)",
                fontSize: "0.9rem",
              }}
            >
              <option value="corner">Tucked in a corner room or behind TV</option>
              <option value="basement">In the basement (near electrical panel)</option>
              <option value="central">Central and open on the main floor</option>
            </select>
          </div>

          {/* Where is it weak? */}
          <div style={{ marginBottom: "1.15rem" }}>
            <label htmlFor="wifi-weak" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "var(--heading)", marginBottom: "0.35rem" }}>
              Where is Wi-Fi currently slowest?
            </label>
            <select
              id="wifi-weak"
              value={answers.weakZone}
              onChange={(e) => handleChange("weakZone", e.target.value as WeakZone)}
              style={{
                width: "100%",
                padding: "0.6rem 0.8rem",
                borderRadius: "8px",
                border: "1px solid var(--line)",
                background: "var(--bg)",
                color: "var(--heading)",
                fontSize: "0.9rem",
              }}
            >
              <option value="upstairs">Upstairs bedrooms / home office</option>
              <option value="basement">Basement or recreation room</option>
              <option value="corner-room">Far corner of the same floor</option>
              <option value="everywhere">Everywhere in the house</option>
            </select>
          </div>

          {/* Wall materials */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label htmlFor="wifi-wall" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "var(--heading)", marginBottom: "0.35rem" }}>
              Wall Construction
            </label>
            <select
              id="wifi-wall"
              value={answers.wallType}
              onChange={(e) => handleChange("wallType", e.target.value as WallType)}
              style={{
                width: "100%",
                padding: "0.6rem 0.8rem",
                borderRadius: "8px",
                border: "1px solid var(--line)",
                background: "var(--bg)",
                color: "var(--heading)",
                fontSize: "0.9rem",
              }}
            >
              <option value="drywall">Standard drywall / modern construction</option>
              <option value="plaster-brick-concrete">Older plaster, brick, or concrete walls</option>
            </select>
          </div>
        </div>

        {/* RESULTS COLUMN */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(5,150,105,0.03) 0%, rgba(37,99,235,0.03) 100%)",
            border: "1px solid var(--line)",
            borderRadius: "12px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#059669" }}>
                Coverage Recommendation
              </span>
              <span
                style={{
                  background: "#0f172a",
                  color: "#ffffff",
                  padding: "3px 10px",
                  borderRadius: "999px",
                  fontSize: "0.875rem",
                  fontWeight: "700",
                }}
              >
                {plan.nodeCount}
              </span>
            </div>

            <h3 style={{ fontSize: "1.1rem", color: "var(--heading)", marginBottom: "0.65rem", lineHeight: 1.35 }}>
              {plan.recommendedHardware}
            </h3>

            <p style={{ fontSize: "0.875rem", color: "var(--body)", lineHeight: 1.55, marginBottom: "1rem" }}>
              {plan.primaryAdvice}
            </p>

            {/* Placement Rule Box */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "8px",
                padding: "0.85rem",
                marginBottom: "1rem",
              }}
            >
              <div style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.35rem" }}>
                Golden Placement Rule:
              </div>
              <p style={{ fontSize: "0.825rem", color: "var(--heading)", fontWeight: "500", margin: 0, lineHeight: 1.45 }}>
                {plan.placementRule}
              </p>
            </div>

            {/* Quick action tips */}
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.4rem" }}>
                Key checks before buying:
              </div>
              <ul style={{ paddingLeft: "1.15rem", margin: 0, fontSize: "0.8rem", color: "var(--body)", lineHeight: 1.45 }}>
                {plan.actionSteps.map((step) => (
                  <li key={step} style={{ marginBottom: "0.35rem" }}>{step}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <Link
              href="/guides/wifi-slow-in-one-room/"
              className="button button-dark"
              style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}
            >
              Read room troubleshooting guide <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: "1.75rem",
        borderTop: "1px solid var(--line)",
        paddingTop: "1rem",
        fontSize: "0.785rem",
        color: "var(--muted)",
        lineHeight: 1.5,
      }}>
        <p style={{ margin: 0 }}>
          {plan.disclaimer}
        </p>
      </div>
    </div>
  );
}
