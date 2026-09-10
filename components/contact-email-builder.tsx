"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const inquiryTypes = {
  general: {
    label: "General enquiry",
    email: "hello@canod.ca",
    subject: "Hello CANOD",
  },
  suggestion: {
    label: "Product suggestion",
    email: "hello@canod.ca",
    subject: "Product suggestion for CANOD",
  },
  wholesale: {
    label: "Brand or wholesale introduction",
    email: "hello@canod.ca",
    subject: "Wholesale partnership with CANOD",
  },
} as const;

type InquiryType = keyof typeof inquiryTypes;

export function ContactEmailBuilder() {
  const [type, setType] = useState<InquiryType>("general");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const selected = inquiryTypes[type];
  const body = [
      "Hello CANOD,",
      "",
      message.trim() || "I would like to connect about:",
      "",
      name.trim() ? `Name: ${name.trim()}` : "",
    ].join("\n");

  const href = `mailto:${selected.email}?subject=${encodeURIComponent(selected.subject)}&body=${encodeURIComponent(body)}`;

  return (
    <form className="builder-card" onSubmit={(event) => event.preventDefault()}>
      <div>
        <p className="eyebrow text-maple">Email builder</p>
        <h2>Start an email.</h2>
        <p className="builder-description">
          This builder opens a draft in your email application. It does not submit a message.
          Your draft is not saved by this website, and nothing is sent automatically.
        </p>
      </div>

      <div className="field-row">
        <label htmlFor="inquiry-type">Topic</label>
        <select
          id="inquiry-type"
          className="builder-field"
          value={type}
          onChange={(event) => setType(event.target.value as InquiryType)}
        >
          {Object.entries(inquiryTypes).map(([value, item]) => (
            <option key={value} value={value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field-row">
        <label htmlFor="contact-name">Name or company</label>
        <input
          id="contact-name"
          className="builder-field"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Optional"
          maxLength={120}
          autoComplete="organization"
        />
      </div>

      <div className="field-row">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          className="builder-field min-h-36 resize-y"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="What would you like to share?"
          maxLength={2000}
        />
      </div>

      <div className="builder-preview" aria-live="polite">
        <span>To: {selected.email}</span>
        <span>Subject: {selected.subject}</span>
      </div>

      <a className="button button-dark w-fit" href={href}>
        Open email draft <ArrowRight size={17} aria-hidden="true" />
      </a>
    </form>
  );
}
