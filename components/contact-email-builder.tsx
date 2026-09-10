"use client";

import { useMemo, useState } from "react";
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
    email: "kam@canod.ca",
    subject: "Wholesale partnership with CANOD",
  },
} as const;

type InquiryType = keyof typeof inquiryTypes;

export function ContactEmailBuilder() {
  const [type, setType] = useState<InquiryType>("wholesale");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const selected = inquiryTypes[type];
  const body = useMemo(() => {
    const lines = [
      "Hello CANOD,",
      "",
      message.trim() || "I would like to connect about:",
      "",
      name.trim() ? `Name: ${name.trim()}` : "",
    ].filter(Boolean);

    return lines.join("\n");
  }, [message, name]);

  const href = `mailto:${selected.email}?subject=${encodeURIComponent(selected.subject)}&body=${encodeURIComponent(body)}`;

  return (
    <form className="builder-card" onSubmit={(event) => event.preventDefault()}>
      <div>
        <p className="eyebrow text-maple">Email builder</p>
        <h2 className="mt-4 text-3xl font-semibold">Draft a cleaner first message.</h2>
        <p className="mt-4 leading-7 text-ink/65">
          Choose a topic, add the essentials, then open your email app. Nothing is sent from this
          website automatically.
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
        />
      </div>

      <div className="field-row">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          className="builder-field min-h-36 resize-y"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Add product categories, catalogue details, channel notes, or your question."
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
