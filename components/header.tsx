"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const nav = [["Home", "/"], ["Product interests", "/interests"], ["About", "/about"], ["For brands", "/partners"]];

export function Header() {
  const pathname = usePathname();

  return <header className="site-header"><div className="site-container site-header-inner">
    <Link href="/" className="wordmark" aria-label="CANOD home"><span className="wordmark-mark" aria-hidden="true" />CANOD</Link>
    <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
      {nav.map(([label, href]) => <Link key={href} className={`nav-link${pathname === href ? " is-active" : ""}`} href={href}>{label}</Link>)}
      <Link className="nav-link header-contact" href="/contact">Contact</Link>
    </nav>
    <details className="mobile-menu md:hidden"><summary aria-label="Open navigation"><Menu size={21} /><span>Menu</span></summary><nav className="mobile-panel" aria-label="Mobile navigation">
      {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/contact">Contact</Link>
    </nav></details>
  </div></header>;
}
