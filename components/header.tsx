"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const nav = [
  ["Product interests", "/interests/"], ["Buying guides", "/guides/"],
  ["For brands", "/partners/"], ["About", "/about/"], ["Contact", "/contact/"],
] as const;

export function Header() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const active = (href: string) => pathname.replace(/\/$/, "") === href.replace(/\/$/, "") || pathname.startsWith(href);

  return <header className="site-header"><div className="site-container site-header-inner">
    <Link href="/" className="wordmark" aria-label="CANOD home"><span className="wordmark-mark" aria-hidden="true" />CANOD</Link>
    <nav className="desktop-nav" aria-label="Main navigation">
      {nav.map(([label, href]) => <Link key={href} className="nav-link" aria-current={active(href) ? "page" : undefined} href={href}>{label}</Link>)}
    </nav>
    <details ref={menu} className="mobile-menu" onKeyDown={(event) => {
      if (event.key === "Escape" && menu.current) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    }}>
      <summary><Menu size={22} aria-hidden="true" /><span>Menu</span></summary>
      <nav className="mobile-panel" aria-label="Mobile navigation">
        {nav.map(([label, href]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} onClick={() => {
          if (menu.current) menu.current.open = false;
        }}>{label}</Link>)}
      </nav>
    </details>
  </div></header>;
}
