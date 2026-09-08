import Link from "next/link";

const nav = [["Home", "/"], ["About", "/about"], ["For brands", "/partners"]];

export function Header() {
  return <header className="site-header"><div className="site-container site-header-inner">
    <Link href="/" className="wordmark" aria-label="CANOD home">CANOD</Link>
    <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
      {nav.map(([label, href]) => <Link key={href} className="nav-link" href={href}>{label}</Link>)}
      <Link className="nav-link header-contact" href="/contact">Contact</Link>
    </nav>
    <details className="mobile-menu md:hidden"><summary>MENU</summary><nav className="mobile-panel" aria-label="Mobile navigation">
      {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/contact">Contact</Link>
    </nav></details>
  </div></header>;
}
