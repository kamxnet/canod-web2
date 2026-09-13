"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

/**
 * Client-side route listener for Next.js App Router SPA navigation.
 * Emits page_view events on initial load and route changes.
 */
export function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    const queryString = searchParams?.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    // Prevent duplicate pageview for identical URL
    if (lastUrlRef.current === url) return;
    lastUrlRef.current = url;

    // Dispatch page view
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}
