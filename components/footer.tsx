import Link from "next/link";

export function Footer() {
  return <footer className="site-footer"><div className="site-container">
    <div className="footer-main">
      <div><Link href="/" className="wordmark"><span className="wordmark-mark" aria-hidden="true" />CANOD</Link><p className="mt-5 max-w-xs text-sm leading-6 text-white/50">Canadian-owned online retail for practical products selected with care.</p><p className="footer-status mt-7"><span aria-hidden="true" /> Authorized wholesale relationships welcome</p></div>
      <div className="grid content-start gap-3"><p className="eyebrow mb-2 text-white/35">Explore</p><Link className="footer-link" href="/interests">Product interests</Link><Link className="footer-link" href="/about">About</Link><Link className="footer-link" href="/partners">For brands</Link><Link className="footer-link" href="/contact">Contact</Link></div>
      <div className="grid content-start gap-3"><p className="eyebrow mb-2 text-white/35">Contact</p><a className="footer-link" href="mailto:hello@canod.ca">hello@canod.ca</a><a className="footer-link" href="mailto:kam@canod.ca">kam@canod.ca</a><p className="footer-link">Canada</p></div>
    </div>
    <div className="footer-base"><p>© {new Date().getFullYear()} CANOD. All rights reserved.</p><p>Canadian-owned online retailer.</p></div>
  </div></footer>;
}
