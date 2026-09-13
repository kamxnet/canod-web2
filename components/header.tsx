"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { GlobalSearchModal } from "@/components/global-search-modal";
import { CartDrawer } from "@/components/cart-drawer";

const nav = [
  ["Shop", "/shop/"],
  ["Learn", "/learn/"],
  ["Tools", "/tools/"],
  ["About", "/about/"],
  ["Support", "/support/"],
] as const;

const secondaryNav = [
  ["Setup solutions", "/solutions/"],
  ["Editorial standards", "/editorial-standards/"],
  ["Brand enquiries", "/partners/"],
  ["Sourcing interests", "/interests/"],
] as const;

export function Header() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const active = (href: string) =>
    pathname.replace(/\/$/, "") === href.replace(/\/$/, "") ||
    pathname.startsWith(href);

  return (
    <>
      <header className="site-header">
        <div className="site-container site-header-inner">
          <Link href="/" className="wordmark" aria-label="CANOD home">
            <span className="wordmark-mark" aria-hidden="true" />
            CANOD
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                className="nav-link"
                aria-current={active(href) ? "page" : undefined}
                href={href}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="header-icon-btn search-trigger-btn"
              aria-label="Open search dialog"
              title="Search articles, tools, and products (Cmd+K)"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={19} aria-hidden="true" />
              <span className="search-key-badge" aria-hidden="true">
                ⌘K
              </span>
            </button>

            <button
              type="button"
              className="header-icon-btn cart-trigger-btn"
              aria-label="Open sourcing cart"
              title="Sourcing cart"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={19} aria-hidden="true" />
            </button>

            <details
              ref={menu}
              className="mobile-menu"
              onKeyDown={(event) => {
                if (event.key === "Escape" && menu.current) {
                  menu.current.open = false;
                  menu.current.querySelector("summary")?.focus();
                }
              }}
            >
              <summary>
                <Menu size={22} aria-hidden="true" />
                <span>Menu</span>
              </summary>
              <nav className="mobile-panel" aria-label="Mobile navigation">
                <button
                  type="button"
                  className="mobile-search-btn"
                  onClick={() => {
                    if (menu.current) menu.current.open = false;
                    setSearchOpen(true);
                  }}
                >
                  <Search size={18} aria-hidden="true" />
                  <span>Search CANOD...</span>
                </button>

                <p className="eyebrow mobile-nav-eyebrow">Main</p>
                {nav.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active(href) ? "page" : undefined}
                    onClick={() => {
                      if (menu.current) menu.current.open = false;
                    }}
                  >
                    {label}
                  </Link>
                ))}

                <p className="eyebrow mobile-nav-eyebrow mt-4">Explore</p>
                {secondaryNav.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active(href) ? "page" : undefined}
                    onClick={() => {
                      if (menu.current) menu.current.open = false;
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>

      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
