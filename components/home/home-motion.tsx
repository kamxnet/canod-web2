"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    let cancelled = false;
    let dispose: (() => void) | undefined;
    const start = () => {
      import("@/lib/home-motion")
        .then(({ initializeHomeMotion }) => {
          const root = document.querySelector<HTMLElement>(".home-story");
          if (!cancelled && root) dispose = initializeHomeMotion(root);
        })
        .catch(() => {
          /* Static content remains usable without enhancement. */
        });
    };
    const idle =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(start, { timeout: 1200 })
        : undefined;
    const timer =
      idle === undefined ? window.setTimeout(start, 150) : undefined;
    return () => {
      cancelled = true;
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (timer !== undefined) window.clearTimeout(timer);
      dispose?.();
    };
  }, []);
  return null;
}
