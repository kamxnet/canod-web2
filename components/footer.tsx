import Link from "next/link";

export function Footer() {
  return <footer className="site-footer"><div className="site-container">
    <div className="footer-main">
      <div>
        <Link href="/" className="wordmark"><span className="wordmark-mark" aria-hidden="true" />CANOD</Link>
        <p className="footer-description">Practical technology that works together. At work, on the move and behind the scenes.</p>
        <p className="footer-location">Canadian-owned.</p>
      </div>
      <nav className="footer-column" aria-label="Explore">
        <p className="eyebrow">Explore</p>
        <Link href="/guides/">Practical guides</Link><Link href="/tools/">CANOD tools</Link><Link href="/about/">About CANOD</Link>
        <Link href="/guides/charger-safety-canada/">Buy Safe in Canada</Link>
      </nav>
      <div className="footer-column">
        <p className="eyebrow">Get in touch</p>
        <a href="mailto:hello@canod.ca">hello@canod.ca</a><Link href="/contact/">Contact</Link><Link href="/partners/">Brand enquiries</Link><Link href="/interests/">Sourcing interests</Link>
      </div>
    </div>
    <div className="footer-base"><p>© {new Date().getFullYear()} CANOD. All rights reserved.</p>
      <nav aria-label="Site information"><Link href="/editorial-standards/">Editorial standards</Link><Link href="/affiliate-disclosure/">Affiliate disclosure</Link><Link href="/privacy/">Privacy</Link></nav>
    </div>
  </div></footer>;
}
