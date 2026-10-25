"use client";

import React from "react";
import { Phone, MessageCircle, MapPin, CalendarCheck } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSelect = (vehicle: string) => {
    openBookingModal({ vehicle });
  };

  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <img src="/logo.png" alt="Jai Jalaram Tours Logo" width={60} height={60} />
            <div>
              <h3>Jai Jalaram Tours</h3>
              <p>Tours &amp; Travellers</p>
            </div>
          </div>
          <p className="footer-about">
            Gujarat's trusted group travelling service provider. Four-wheeler car rentals,
            Tempo Travellers, and luxury tourist buses connecting every corner of Gujarat with safety,
            punctuality, and devotion.
          </p>
          <div className="footer-motto">
            <span>॥ શ્રી ગણેશાય નમઃ ॥ જય જલારામ બાપા ॥</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Vehicle Services</h4>
          <ul className="footer-links">
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => handleSelect("Sedan (Dzire/Etios - 4 Seater)")}
              >
                Swift Dzire &amp; Etios (4 Seater)
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => handleSelect("MUV (Ertiga / XL6 - 6 Seater)")}
              >
                Ertiga &amp; XL6 (6 Seater)
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => handleSelect("Innova Crysta (7-8 Seater Luxury)")}
              >
                Toyota Innova Crysta (7-8 Seater)
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => handleSelect("Tempo Traveller (12 Seater Luxury AC)")}
              >
                12 &amp; 17 Seater Tempo Traveller
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => handleSelect("Tempo Traveller (26 Seater High Roof AC)")}
              >
                20 &amp; 26 Seater Tempo Traveller
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => handleSelect("Luxury Coach Bus (45 Seater 2x2)")}
              >
                32, 45 &amp; 56 Seater Deluxe Buses
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Popular Gujarat Yatras</h4>
          <ul className="footer-links">
            <li><a href="#destinations">Somnath - Dwarka Pilgrimage</a></li>
            <li><a href="#destinations">Statue of Unity &amp; Kevadia</a></li>
            <li><a href="#destinations">Sasan Gir Lion Safari &amp; Diu</a></li>
            <li><a href="#destinations">Kutch Rann Utsav &amp; Mandvi</a></li>
            <li><a href="#destinations">Ambaji Temple &amp; Mount Abu</a></li>
            <li><a href="#destinations">Palitana Shatrunjaya Tirth</a></li>
            <li><a href="#destinations">Marriage Baarat Bus Booking</a></li>
          </ul>
        </div>

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
