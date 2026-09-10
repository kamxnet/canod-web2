import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return <section className="page-hero not-found-page"><div className="site-container">
    <p className="eyebrow page-kicker">404</p>
    <h1 className="page-title">We couldn&apos;t find that page.</h1>
    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">The page may have moved, or the link may no longer be available.</p>
    <div className="mt-10 flex flex-wrap gap-4">
      <Link className="button button-light" href="/">Return home <ArrowRight size={17} aria-hidden="true" /></Link>
      <Link className="button button-ghost" href="/guides/">Explore buying guides</Link>
    </div>
  </div></section>;
}
