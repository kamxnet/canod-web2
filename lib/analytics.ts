/**
 * Centralized Google Analytics 4 (GA4) Configuration & Event Dispatcher
 * CANOD • Tech help for everyday life
 */

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-K2SM6BWB9D";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetIdOrAction: string | Date,
      params?: Record<string, unknown>
    ) => void;
    __canod_ga_initialized?: boolean;
  }
}

/**
 * Filter out any accidentally passed sensitive or personal identifiers.
 */
function sanitizeParams(
  params: Record<string, unknown>
): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;

    if (typeof value === "string") {
      // Strip potential email addresses
      const withoutEmail = value.replace(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
        "[redacted]"
      );
      sanitized[key] = withoutEmail.slice(0, 100); // Enforce reasonable length
    } else if (typeof value === "number" || typeof value === "boolean") {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

/**
 * Low-level safe event dispatcher
 */
export function sendGAEvent(
  eventName: string,
  parameters: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const cleanParams = sanitizeParams({
    ...parameters,
    page_path: parameters.page_path || window.location.pathname,
  });

  window.gtag("event", eventName, cleanParams);
}

/**
 * Standard page view tracking for client-side route transitions
 */
export function trackPageView(url: string, title?: string): void {
  sendGAEvent("page_view", {
    page_path: url,
    page_title: title || (typeof document !== "undefined" ? document.title : ""),
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
}

/**
 * Custom Event: tool_started
 * Fired when a user initiates interaction with a CANOD diagnostic or sizing tool.
 */
export function trackToolStarted(params: {
  tool_name: string;
  page_path?: string;
}): void {
  sendGAEvent("tool_started", {
    tool_name: params.tool_name,
    page_path: params.page_path,
  });
}

/**
 * Custom Event: tool_completed
 * Fired when a user successfully reaches a result, creates a checklist, or downloads tool outputs.
 */
export function trackToolCompleted(params: {
  tool_name: string;
  result_summary?: string;
  page_path?: string;
}): void {
  sendGAEvent("tool_completed", {
    tool_name: params.tool_name,
    result_summary: params.result_summary,
    page_path: params.page_path,
  });
}

/**
 * Custom Event: product_click
 * Fired when a user clicks on a curated product card or product detail link.
 */
export function trackProductClick(params: {
  product_name: string;
  product_id?: string;
  category?: string;
  destination?: string;
  page_path?: string;
}): void {
  sendGAEvent("product_click", {
    product_name: params.product_name,
    product_id: params.product_id,
    category: params.category,
    destination: params.destination,
    page_path: params.page_path,
  });
}

/**
 * Custom Event: affiliate_click
 * Fired when a user clicks on an approved commercial partner or affiliate link.
 */
export function trackAffiliateClick(params: {
  destination: string;
  label?: string;
  program?: string;
  page_path?: string;
}): void {
  sendGAEvent("affiliate_click", {
    destination: params.destination,
    label: params.label,
    program: params.program,
    page_path: params.page_path,
  });
}

/**
 * Custom Event: solution_view
 * Fired when a user views or explores a setup solution blueprint.
 */
export function trackSolutionView(params: {
  solution_name: string;
  solution_id?: string;
  page_path?: string;
}): void {
  sendGAEvent("solution_view", {
    solution_name: params.solution_name,
    solution_id: params.solution_id,
    page_path: params.page_path,
  });
}

/**
 * Custom Event: guide_view
 * Fired when a user views a CANOD research or how-to guide.
 */
export function trackGuideView(params: {
  guide_name: string;
  guide_slug: string;
  category?: string;
  page_path?: string;
}): void {
  sendGAEvent("guide_view", {
    guide_name: params.guide_name,
    guide_slug: params.guide_slug,
    category: params.category,
    page_path: params.page_path,
  });
}
