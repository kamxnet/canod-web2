"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  trackGuideView,
  trackSolutionView,
  trackProductClick,
  trackAffiliateClick,
} from "@/lib/analytics";

/**
 * Fires custom guide_view event when a guide article mounts.
 */
export function TrackGuideView({
  guideName,
  guideSlug,
  category,
}: {
  guideName: string;
  guideSlug: string;
  category?: string;
}) {
  useEffect(() => {
    trackGuideView({
      guide_name: guideName,
      guide_slug: guideSlug,
      category,
    });
  }, [guideName, guideSlug, category]);

  return null;
}

/**
 * Fires custom solution_view event when a solution blueprint page mounts.
 */
export function TrackSolutionView({
  solutionName,
  solutionId,
}: {
  solutionName: string;
  solutionId?: string;
}) {
  useEffect(() => {
    trackSolutionView({
      solution_name: solutionName,
      solution_id: solutionId,
    });
  }, [solutionName, solutionId]);

  return null;
}

/**
 * Tracked link for product clicks in server or client components.
 */
export function ProductClickLink({
  productName,
  productId,
  category,
  destination,
  className,
  style,
  children,
}: {
  productName: string;
  productId?: string;
  category?: string;
  destination: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={destination}
      className={className}
      style={style}
      onClick={() =>
        trackProductClick({
          product_name: productName,
          product_id: productId,
          category,
          destination,
        })
      }
    >
      {children}
    </Link>
  );
}

/**
 * Tracked link for solution blueprint clicks in server or client components.
 */
export function SolutionClickLink({
  solutionName,
  solutionId,
  destination,
  className,
  children,
}: {
  solutionName: string;
  solutionId?: string;
  destination: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={destination}
      className={className}
      onClick={() =>
        trackSolutionView({
          solution_name: solutionName,
          solution_id: solutionId,
        })
      }
    >
      {children}
    </Link>
  );
}

/**
 * Tracked outbound link for affiliate & commercial partner clicks.
 */
export function AffiliateClickLink({
  href,
  label,
  program,
  rel = "sponsored nofollow",
  className,
  target,
  children,
}: {
  href: string;
  label?: string;
  program?: string;
  rel?: string;
  className?: string;
  target?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      rel={rel}
      target={target}
      className={className}
      onClick={() =>
        trackAffiliateClick({
          destination: href,
          label,
          program,
        })
      }
    >
      {children}
    </a>
  );
}
