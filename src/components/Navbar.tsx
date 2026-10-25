"use client";

import React, { useState, useEffect } from "react";
import { Flag, Phone, MessageCircle, Menu, X } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

import { LanguageSwitcher } from "@/components/LanguageTranslator";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {/* Main Sticky Navbar - Clean & without Book/Call buttons as requested */}
      <header className={`main-header ${isScrolled ? "scrolled" : ""}`} id="header">
        <div className="container header-container">
          <a href="#home" className="brand-link">
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
          </a>

          {/* Clean Desktop Navigation without book and call buttons */}
          <nav className="desktop-nav">
            <a href="#services" className="nav-link">Our Services</a>
            <a href="#fleet" className="nav-link">Vehicle Fleet</a>
            <a href="#group-booking" className="nav-link">Group Booking</a>
            <a href="#destinations" className="nav-link">Gujarat Routes</a>
            <a href="#why-us" className="nav-link">Why Choose Us</a>
            <a href="#faq" className="nav-link">FAQ</a>
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
            <div className="mobile-brand">
              <div className="mobile-brand-logo-wrap">
                <img src="/logo.png" alt="Jai Jalaram Tours" width={44} height={44} />
              </div>
              <div className="mobile-brand-text">
                <span className="mobile-brand-name">Jai Jalaram Tours</span>
                <span className="mobile-brand-sub">All Gujarat Travel Service</span>
              </div>
            </div>
            <button className="mobile-close" onClick={closeMenu} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>
          <div className="mobile-nav-links">
            <a href="#services" className="mobile-link" onClick={closeMenu}>
              Services (Cars &amp; Buses)
            </a>
            <a href="#fleet" className="mobile-link" onClick={closeMenu}>
              Our Vehicle Fleet
            </a>
            <a href="#group-booking" className="mobile-link" onClick={closeMenu}>
              Whole Gujarat Group Booking
            </a>
            <a href="#destinations" className="mobile-link" onClick={closeMenu}>
              Popular Gujarat Circuits
            </a>
            <a href="#why-us" className="mobile-link" onClick={closeMenu}>
              Why Choose Us
            </a>
            <a href="#faq" className="mobile-link" onClick={closeMenu}>
              FAQ
            </a>

            {/* Language Selector in Mobile Drawer */}
            <div className="mobile-drawer-lang-wrap">
              <span className="mobile-drawer-lang-label">Select Language:</span>
              <LanguageSwitcher className="mobile-drawer-lang-pills" />
            </div>

            {/* Upper Top Bar Info (Relocated to Mobile Nav View below nav links & above buttons) */}
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
                style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center"