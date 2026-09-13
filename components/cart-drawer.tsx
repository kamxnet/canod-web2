"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, X, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="cart-drawer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Your Cart"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="cart-drawer-panel">
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <ShoppingBag size={20} className="text-maple" aria-hidden="true" />
            <h3>Your Sourcing Cart</h3>
          </div>
          <button
            type="button"
            className="cart-close-btn"
            aria-label="Close cart"
            onClick={onClose}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="cart-drawer-body">
          <div className="cart-empty-state">
            <div className="cart-empty-icon" aria-hidden="true">
              <ShoppingBag size={36} strokeWidth={1.25} />
            </div>
            <h4>Direct Online Checkout Coming Soon</h4>
            <p>
              CANOD operates as a research-first publication and curated Canadian hardware directory.
              We do not run third-party dropshipping or unvetted marketplace listings.
            </p>
          </div>

          <div className="cart-info-box">
            <div className="info-row">
              <ShieldCheck size={18} className="text-maple" aria-hidden="true" />
              <div>
                <strong>Verified Canadian Sourcing</strong>
                <p>All featured hardware can be purchased through authorized Canadian distributors and retailers.</p>
              </div>
            </div>
            <div className="info-row">
              <HelpCircle size={18} className="text-maple" aria-hidden="true" />
              <div>
                <strong>Need Sourcing for a Team?</strong>
                <p>Discuss bulk equipment configurations or wholesale brand partnerships.</p>
              </div>
            </div>
          </div>

          <div className="cart-actions-stack">
            <Link
              href="/shop/"
              className="button button-dark w-full"
              onClick={onClose}
            >
              Browse Curated Hardware <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/interests/"
              className="button button-light w-full"
              onClick={onClose}
            >
              Select Sourcing Interests <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="cart-drawer-footer">
          <p>
            Have a question about product compatibility?{" "}
            <Link href="/support/contact/" onClick={onClose}>
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
