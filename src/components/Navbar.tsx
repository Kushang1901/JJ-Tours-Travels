"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flag, Phone, MessageCircle, Menu, X } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";
import { LanguageSwitcher } from "@/components/LanguageTranslator";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement-bar">
        <div className="container top-bar-content">
          <div className="auspicious-motto">
            <Flag size={14} className="text-amber" />
            <span>॥ શ્રી ગણેશાય નમઃ ॥ જય જલારામ ॥ All Gujarat 24/7 Travel Service</span>
          </div>
          <div className="top-contacts">
            <a href="tel:+919925891467" className="top-contact-link" title="Call Owner">
              <Phone size={13} />
              <span>Direct Call: <strong>+91 99258 91467</strong></span>
            </a>

            <span className="top-bar-divider" aria-hidden="true" />

            {/* Dynamic Google Translation Selector */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`main-header ${isScrolled ? "scrolled" : ""}`} id="header">
        <div className="container header-container">
          <Link href="/" className="brand-link" onClick={closeMenu}>
            <div className="brand-logo-wrapper">
              <img
                src="/logo.png"
                alt="Jai Jalaram Tours and Travellers Logo"
                className="brand-logo"
                width={56}
                height={56}
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">Jai Jalaram</span>
              <span className="brand-sub">Tours &amp; Travellers</span>
              <span className="brand-badge">All Gujarat Service</span>
            </div>
          </Link>

          {/* Clean Desktop Navigation with active route highlighting */}
          <nav className="desktop-nav">
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`nav-link ${pathname === "/services" ? "active" : ""}`}
            >
              Our Services
            </Link>
            <Link
              href="/group-booking"
              className={`nav-link ${pathname === "/group-booking" ? "active" : ""}`}
            >
              Group Booking
            </Link>
            <Link
              href="/gujarat-routes"
              className={`nav-link ${pathname === "/gujarat-routes" ? "active" : ""}`}
            >
              Gujarat Routes
            </Link>
            <Link
              href="/why-us"
              className={`nav-link ${pathname === "/why-us" ? "active" : ""}`}
            >
              Why Choose Us
            </Link>
            <Link
              href="/faq"
              className={`nav-link ${pathname === "/faq" ? "active" : ""}`}
            >
              FAQ
            </Link>
          </nav>

          <div className="header-actions">
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Backdrop */}
        {mobileMenuOpen && (
          <div
            className="mobile-drawer-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-drawer-header">
            <Link href="/" className="mobile-brand" onClick={closeMenu}>
              <div className="mobile-brand-logo-wrap">
                <img src="/logo.png" alt="Jai Jalaram Tours" width={44} height={44} />
              </div>
              <div className="mobile-brand-text">
                <span className="mobile-brand-name">Jai Jalaram Tours</span>
                <span className="mobile-brand-sub">All Gujarat Travel Service</span>
              </div>
            </Link>
            <button className="mobile-close" onClick={closeMenu} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>
          <div className="mobile-nav-links">
            <Link
              href="/"
              className={`mobile-link ${pathname === "/" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`mobile-link ${pathname === "/services" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Our Services (Cars &amp; Buses)
            </Link>
            <Link
              href="/group-booking"
              className={`mobile-link ${pathname === "/group-booking" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Whole Gujarat Group Booking
            </Link>
            <Link
              href="/gujarat-routes"
              className={`mobile-link ${pathname === "/gujarat-routes" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Popular Gujarat Routes
            </Link>
            <Link
              href="/why-us"
              className={`mobile-link ${pathname === "/why-us" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Why Choose Us
            </Link>
            <Link
              href="/faq"
              className={`mobile-link ${pathname === "/faq" ? "active" : ""}`}
              onClick={closeMenu}
            >
              FAQ
            </Link>

            {/* Language Selector in Mobile Drawer */}
            <div className="mobile-drawer-lang-wrap">
              <span className="mobile-drawer-lang-label">Select Language:</span>
              <LanguageSwitcher className="mobile-drawer-lang-pills" />
            </div>

            {/* Upper Top Bar Info */}
            <div className="mobile-topbar-info-box">
              <div className="mobile-topbar-motto">
                <Flag size={14} className="text-amber" />
                <span>॥ શ્રી ગણેશાય નમઃ ॥ જય જલારામ ॥</span>
              </div>
              <div className="mobile-topbar-service">
                <span className="live-status-dot" />
                <span>All Gujarat 24/7 Travel Service</span>
              </div>
            </div>

            <button
              type="button"
              className="mobile-cta-btn"
              onClick={() => {
                closeMenu();
                openBookingModal();
              }}
            >
              Book Vehicle Popup
            </button>
          </div>
          <div className="mobile-drawer-footer">
            <p>Owner Contact: <strong>+91 99258 91467</strong></p>
            <div className="mobile-drawer-footer-actions">
              <a
                href="tel:+919925891467"
                className="btn btn-secondary"
                style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 8px", fontSize: "0.85rem" }}
              >
                <Phone size={15} />
                <span>Call Directly</span>
              </a>
              <a
                href="https://wa.me/919925891467?text=Hello%20Jai%20Jalaram%20Tours%20and%20Travellers,%20I%20want%20to%20inquire%20about%20travel%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="top-whatsapp-link"
                style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 8px", fontSize: "0.85rem", borderRadius: "var(--r-md)" }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
