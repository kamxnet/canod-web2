import Link from "next/link";

export function Footer() {
  return <footer className="site-footer"><div className="site-container">
    <div className="footer-main">
      <div>
        <Link href="/" className="wordmark"><span className="wordmark-mark" aria-hidden="true" />CANOD</Link>
        <p className="footer-description">Practical products and useful perspectives for everyday life in Canada.</p>
        <p className="footer-location">Canadian-owned online retailer.</p>
      </div>
      <nav className="footer-column" aria-label="Explore">
        <p className="eyebrow">Explore</p>
        <Link href="/interests/">Product interests</Link><Link href="/guides/">Buying guides</Link>
        <Link href="/partners/">For brands</Link><Link href="/about/">About CANOD</Link>
      </nav>
      <div className="footer-column">
        <p className="eyebrow">Get in touch</p>
        <a href="mailto:hello@canod.ca">hello@canod.ca</a><Link href="/contact/">Contact</Link>
      </div>
    </div>
    <div className="footer-base"><p>© {new Date().getFullYear()} CANOD. All rights reserved.</p>
      <nav aria-label="Site information"><Link href="/editorial-standards/">Editorial standards</Link><Link href="/privacy/">Privacy</Link></nav>
    </div>
  </div></footer>;
}
