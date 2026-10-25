"use client";

import React from "react";
import { Car, Bus, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

export default function ServicesGrid() {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">WHAT WE OFFER</span>
          <h2 className="section-title">Complete Travelling Services in Gujarat</h2>
          <p className="section-subtitle">
            From compact family four-wheelers to massive 56-seater luxury group buses,
            Jai Jalaram Tours &amp; Travellers handles all your Gujarat transit with safety and comfort.
          </p>
        </div>

        <div className="services-grid">
          {/* Service 1: 4-Wheeler Services */}
          <div className="service-card">
            <div className="card-icon-badge gold-gradient">
              <Car size={34} />
            </div>
            <h3 className="card-title">Four-Wheeler Car Rentals</h3>
            <p className="card-text">
              Comfortable, air-conditioned Sedans &amp; Luxury SUVs (Dzire, Etios, Ertiga, Innova Crysta).
              Ideal for family outstation tours, airport transfers, business travel, and personal temple visits across Gujarat.
            </p>
            <ul className="card-features">
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Capacity: 4 to 7 Passengers</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Dual AC &amp; Clean Comfortable Seats</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Generous Luggage Boot Space</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Doorstep Pickup Anywhere in Gujarat</span>
              </li>
            </ul>
            <button
              type="button"
              className="btn-card-select"
              onClick={() => openBookingModal({ vehicle: "Innova Crysta (7-8 Seater Luxury)" })}
            >
              <span>Book 4-Wheeler</span>
              <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </button>
          </div>

          {/* Service 2: Tempo Traveller Service */}
          <div className="service-card featured-service">
            <div className="featured-badge">MOST POPULAR</div>
            <div className="card-icon-badge amber-gradient">
              <Users size={34} />
            </div>
            <h3 className="card-title">Tempo Traveller Service</h3>
            <p className="card-text">
              The #1 choice for medium groups and extended family vacations!
              Available in 12, 17, 20 &amp; 26 seater configurations with luxury pushback bucket seats, high-roof airflow, and multimedia system.
            </p>
            <ul className="card-features">
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Push-Back 2x1 &amp; 2x2 Reclining Seats</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Chilled Roof-Mounted Powerful AC</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>LED TV, Music System &amp; Mobile Charging</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Dedicated Rear Luggage Carrier</span>
              </li>
            </ul>
            <button
              type="button"
              className="btn-card-select btn-featured-select"
              onClick={() => openBookingModal({ vehicle: "Tempo Traveller (17 Seater Pushback AC)" })}
            >
              <span>Book Tempo Traveller</span>
              <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </button>
          </div>

          {/* Service 3: Group & Bus Booking */}
          <div className="service-card">
            <div className="card-icon-badge royal-gradient">
              <Bus size={34} />
            </div>
            <h3 className="card-title">Group &amp; Bus Travelling</h3>
            <p className="card-text">
              Specialized in bulk group bookings across wholeover Gujarat!
              Mini Buses (32 Seater) and Deluxe Coach Buses (45 to 56 Seater) for marriage baarat, religious yatra sanghs, school excursions &amp; corporate picnics.
            </p>
            <ul className="card-features">
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Capacity: 32, 45, 52, 56 Seaters</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>AC &amp; Non-AC Deluxe Options</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Large Underfloor Luggage Compartments</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Gujarat-wide Permits &amp; Route Clearance</span>
              </li>
            </ul>
            <button
              type="button"
              className="btn-card-select"
              onClick={() => openBookingModal({ vehicle: "Luxury Coach Bus (45 Seater 2x2)" })}
            >
              <span>Book Group Bus</span>
              <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
