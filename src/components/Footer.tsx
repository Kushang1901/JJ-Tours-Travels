"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, CalendarCheck, ArrowRight } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSelect = (vehicle: string) => {
    openBookingModal({ vehicle });
  };

  return (
    <footer className="main-footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <Link href="/" className="footer-brand" style={{ textDecoration: "none" }}>
            <img src="/logo.png" alt="Jai Jalaram Tours Logo" width={60} height={60} />
            <div>
              <h3>Jai Jalaram Tours</h3>
              <p>Tours &amp; Travellers</p>
            </div>
          </Link>
          <p className="footer-about">
            Gujarat's trusted group travelling service provider. Four-wheeler car rentals,
            Tempo Travellers, and luxury tourist buses connecting every corner of Gujarat with safety,
            punctuality, and devotion.
          </p>
          <div className="footer-motto">
            <span>॥ શ્રી ગણેશાય નમઃ ॥ જય જલારામ બાપા ॥</span>
          </div>

          <div style={{ marginTop: 16 }}>
            <Link
              href="/services"
              className="btn btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                fontSize: "0.85rem",
                borderRadius: "var(--r-md)",
                textDecoration: "none",
              }}
            >
              <span>Explore Our Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Quick Navigation Pages Column */}
        <div className="footer-col">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/group-booking">Group Booking</Link></li>
            <li><Link href="/gujarat-routes">Gujarat Routes</Link></li>
            <li><Link href="/why-us">Why Choose Us</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Popular Gujarat Yatras Column */}
        <div className="footer-col">
          <h4 className="footer-title">Popular Gujarat Yatras</h4>
          <ul className="footer-links">
            <li><Link href="/gujarat-routes">Somnath - Dwarka Pilgrimage</Link></li>
            <li><Link href="/gujarat-routes">Statue of Unity &amp; Kevadia</Link></li>
            <li><Link href="/gujarat-routes">Sasan Gir Lion Safari &amp; Diu</Link></li>
            <li><Link href="/gujarat-routes">Kutch Rann Utsav &amp; Mandvi</Link></li>
            <li><Link href="/gujarat-routes">Ambaji Temple &amp; Mount Abu</Link></li>
            <li><Link href="/gujarat-routes">Palitana Shatrunjaya Tirth</Link></li>
            <li><Link href="/group-booking">Marriage Baarat Bus Booking</Link></li>
          </ul>
        </div>

        {/* Direct Booking Office Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-title">Direct Booking Office</h4>
          <div className="footer-contact-item">
            <strong>Proprietor Helpline:</strong>
            <br />
            <a href="tel:+919925891467" className="footer-phone-highlight">
              <Phone size={15} style={{ display: "inline", marginRight: 6 }} />
              +91 99258 91467
            </a>
          </div>
          <div className="footer-contact-item">
            <strong>WhatsApp Booking:</strong>
            <br />
            <a
              href="https://wa.me/919925891467"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-link"
            >
              <MessageCircle size={15} style={{ display: "inline", marginRight: 6 }} />
              +91 99258 91467 (24/7 Available)
            </a>
          </div>
          <div className="footer-contact-item">
            <strong>Service Area:</strong>
            <br />
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <MapPin size={14} />
              All Across Gujarat (Anywhere to Anywhere)
            </span>
          </div>
          <div className="footer-cta-box" style={{ marginTop: "16px" }}>
            <button
              type="button"
              className="btn btn-gold btn-block"
              onClick={() => openBookingModal()}
            >
              <CalendarCheck size={16} style={{ marginRight: 6 }} />
              <span>Quick Booking Popup</span>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {currentYear} Jai Jalaram Tours and Travellers. All Rights Reserved.</p>
          <p className="bottom-tagline">Serving Gujarat with Pride &bull; Jay Jalaram</p>
        </div>
      </div>
    </footer>
  );
}
