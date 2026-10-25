"use client";

import React from "react";
import {
  Sparkles,
  CalendarCheck,
  PhoneCall,
} from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

export default function HeroSection() {
  return (
    <section className="hero-section hero-centered-section" id="home">
      <div className="container hero-centered-container">
        
        {/* Centered Top Pill */}
        <div className="badge-pill">
          <Sparkles size={16} className="text-amber" />
          <span>Wholeover Gujarat Travel &bull; Anywhere to Anywhere Doorstep Pickup</span>
        </div>

        {/* Grand Centered Title */}
        <h1 className="hero-title">
          Group Booking, Four-Wheeler &amp; Luxury Bus Service
          <span className="gradient-text">Across All Over Gujarat</span>
        </h1>

        {/* Centered Subtitle */}
        <p className="hero-description hero-centered-description">
          Welcome to <strong>Jai Jalaram Tours and Travellers</strong>. Whether you need a{" "}
          <strong>4-Wheeler Car (Sedan / SUV / Innova)</strong> for family travel, a{" "}
          <strong>Luxury Tempo Traveller (12 to 26 Seater)</strong>, or a{" "}
          <strong>Deluxe Tourist Bus (32 to 56 Seater)</strong> for pilgrimage yatras, weddings, &amp; picnics —{" "}
          we provide direct, reliable service from any city or village in Gujarat to any destination.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="hero-cta-group">
          <button
            type="button"
            className="btn btn-hero-book"
            onClick={() => openBookingModal()}
          >
            <CalendarCheck size={20} />
            <span>Book Your Vehicle Online</span>
          </button>
          <a href="tel:+919925891467" className="btn btn-hero-call">
            <PhoneCall size={18} />
            <span>Direct Call: +91 99258 91467</span>
          </a>
        </div>

      </div>
    </section>
  );
}

