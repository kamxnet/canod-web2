import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div>
            <Link href="/" className="wordmark">
              <span className="wordmark-mark" aria-hidden="true" />
              CANOD
            </Link>
            <p className="footer-description">
              Practical technology that works together. At work, on the move and behind the scenes.
            </p>
            <p className="footer-location">
              Canadian-owned practical technology publication &amp; gear directory.
            </p>
          </div>

          <nav className="footer-column" aria-label="Platform">
            <p className="eyebrow">Platform</p>
            <Link href="/shop/">Curated Shop</Link>
            <Link href="/learn/">Learn &amp; Guides</Link>
            <Link href="/tools/">CANOD Tools</Link>
            <Link href="/solutions/">Setup Solutions</Link>
            <Link href="/learn/canada/">Buy Safe in Canada</Link>
          </nav>

          <nav className="footer-column" aria-label="Support & Policies">
            <p className="eyebrow">Support</p>
            <Link href="/support/">Support Hub</Link>
            <Link href="/support/shipping/">Shipping &amp; Delivery</Link>
            <Link href="/support/returns/">Returns Policy</Link>
            <Link href="/support/warranty/">Canadian Warranty</Link>
            <Link href="/support/faq/">Frequently Asked Questions</Link>
            <Link href="/support/track-order/">Order &amp; Sourcing Status</Link>
          </nav>

          <div className="footer-column">
            <p className="eyebrow">Get in touch</p>
            <a href="mailto:hello@canod.ca">hello@canod.ca</a>
            <Link href="/about/">About CANOD</Link>
            <Link href="/support/contact/">Contact Support</Link>
            <Link href="/partners/">Brand enquiries</Link>
            <Link href="/interests/">Sourcing interests</Link>
          </div>
        </div>

        <div className="footer-base">
          <p>© {new Date().getFullYear()} CANOD. All rights reserved.</p>
          <nav aria-label="Site information">
            <Link href="/editorial-standards/">Editorial standards</Link>
            <Link href="/affiliate-disclosure/">Affiliate disclosure</Link>
            <Link href="/privacy/">Privacy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
