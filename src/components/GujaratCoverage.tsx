"use client";

import React from "react";
import { Phone, CalendarCheck, MapPin } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

export default function GujaratCoverage() {
  const cities = [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
    "Junagadh",
    "Bhuj",
    "Gandhidham",
    "Somnath",
    "Dwarka",
    "Anand",
    "Nadiad",
    "Mehsana",
    "Morbi",
    "Patan",
    "Ambaji",
    "Statue of Unity",
    "Bharuch",
    "Navsari",
    "Valsad",
    "Vapi",
    "+ All Gujarat Towns & Villages",
  ];

  return (
    <section className="gujarat-coverage-section" id="group-booking">
      <div className="container">
        <div className="coverage-box">
          <div className="coverage-content">
            <span className="gold-badge">GROUP BOOKING SPECIALIST</span>
            <h2 className="coverage-title">Traveling Anywhere in Gujarat? We've Got You Covered!</h2>
            <p className="coverage-desc">
              No matter where you are starting from — whether a major city like{" "}
              <strong>Ahmedabad, Surat, Rajkot, or Vadodara</strong>, or any taluka or village in
              Saurashtra, Kutch, North Gujarat, or South Gujarat —{" "}
              <strong>Jai Jalaram Tours and Travellers</strong> provides prompt pickup right at your
              doorstep.
            </p>
            <div className="coverage-cities-tags">
              {cities.map((city, idx) => (
                <span key={idx} className="city-tag">
                  <MapPin size={12} className="inline-icon" style={{ marginRight: 4, opacity: 0.7 }} />
                  {city}
                </span>
              ))}
            </div>
            <div className="coverage-cta-row">
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => openBookingModal()}
              >
                <CalendarCheck size={18} style={{ marginRight: 8 }} />
                <span>Instant Gujarat Group Quote</span>
              </button>
              <a href="tel:+919925891467" className="btn btn-outline-white">
                <Phone size={17} style={{ marginRight: 8 }} />
                <span>Talk to Owner (+91 99258 91467)</span>
              </a>
            </div>
          </div>
          <div className="coverage-stats">
            <div className="stat-card">
              <div className="stat-num">33+</div>
              <div className="stat-lbl">Districts in Gujarat Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">100%</div>
              <div className="stat-lbl">On-Time Gujarat Dispatch</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">15+</div>
              <div className="stat-lbl">Years Driver Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">24x7</div>
              <div className="stat-lbl">Helpline by Owner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
