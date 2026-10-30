"use client";

import React from "react";
import Link from "next/link";
import {
  Car,
  Bus,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  MapPin,
  Phone,
  Handshake,
  Headphones,
} from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

/* 1. Concise Services Teaser */
export function HomeServicesTeaser() {
  const teaserCards = [
    {
      icon: Car,
      badge: "4 to 7 Seater",
      title: "Four-Wheeler Car Rentals",
      desc: "Swift Dzire, Toyota Etios, Maruti Ertiga, and Toyota Innova Crysta for family trips, temple darshan, and airport transfers.",
      bullets: ["Dual Chilled AC", "Comfortable Reclining Seats", "Generous Luggage Space"],
      bookKey: "Innova Crysta (7-8 Seater Luxury)",
    },
    {
      icon: Users,
      badge: "12 to 26 Seater",
      title: "Luxury Tempo Travellers",
      desc: "Force Maharaja luxury tempo travellers with 2x1 pushback seats, individual AC vents, and high roof standing clearance.",
      bullets: ["Maharaja 2x1 Pushback Seats", "LCD Screen & Sound System", "Large Rear Luggage Dickey"],
      bookKey: "Tempo Traveller (17 Seater Pushback AC)",
      isFeatured: true,
    },
    {
      icon: Bus,
      badge: "32 to 56 Seater",
      title: "Deluxe Tourist Buses",
      desc: "Air-suspension luxury coach buses for marriage baarat, devotional pilgrim sanghs, corporate groups, and picnics.",
      bullets: ["2x2 Air-Suspension Seats", "Industrial High-Cool AC", "Dual Experienced Drivers"],
      bookKey: "Luxury Coach Bus (45 Seater 2x2)",
    },
  ];

  return (
    <section className="section-padding bg-pure">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">WHAT WE OFFER</span>
          <h2 className="section-title">Our Travelling Services</h2>
          <p className="section-subtitle">
            Reliable, safe, and punctual road transport across all 33 districts of Gujarat.
          </p>
        </div>

        <div className="home-teaser-grid">
          {teaserCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className={`home-service-card ${card.isFeatured ? "featured-card" : ""}`}
              >
                {card.isFeatured && <div className="card-popular-tag">MOST POPULAR</div>}
                <div className="home-card-header">
                  <div className="home-icon-circle">
                    <IconComp size={24} />
                  </div>
                  <span className="home-badge-tag">{card.badge}</span>
                </div>
                <h3 className="home-card-title">{card.title}</h3>
                <p className="home-card-desc">{card.desc}</p>
                <ul className="home-card-bullets">
                  {card.bullets.map((b, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle2 size={15} className="text-emerald" style={{ flexShrink: 0 }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="btn-card-select"
                  onClick={() => openBookingModal({ vehicle: card.bookKey })}
                >
                  <span>Quick Book</span>
                  <ArrowRight size={15} style={{ marginLeft: 6 }} />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-4">
          <Link href="/services" className="btn btn-primary" style={{ padding: "12px 28px" }}>
            <span>Explore Full Services &amp; Occasions</span>
            <ArrowRight size={16} style={{ marginLeft: 8 }} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 2. Concise Fleet Teaser */
export function HomeFleetTeaser() {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">REAL FLEET SHOWCASE</span>
          <h2 className="section-title">Our Vehicles &amp; Operating Fleet</h2>
          <p className="section-subtitle">
            See real photographs of our flagship Commander Tourist Bus and family touring vehicles.
          </p>
        </div>

        <div className="home-fleet-grid">
          {/* Card 1: Day View Bus */}
          <div className="home-fleet-card">
            <div className="home-fleet-img-wrap">
              <img
                src="/bus-photos/day-view-image.png"
                alt="Commander Luxury Tourist Bus - Day View"
                loading="lazy"
              />
              <span className="home-fleet-pill">32 / 45 / 56 Seater Bus</span>
            </div>
            <div className="home-fleet-content">
              <h3>Commander Luxury Coach Bus</h3>
              <p>Panoramic tinted glass, 2x2 air-suspension comfort, and spacious luggage storage for group journeys.</p>
            </div>
          </div>

          {/* Card 2: Night View Bus */}
          <div className="home-fleet-card">
            <div className="home-fleet-img-wrap">
              <img
                src="/bus-photos/bus-night-view.png"
                alt="Commander Luxury Tourist Bus - Night Ambient View"
                loading="lazy"
              />
              <span className="home-fleet-pill pill-night">Overnight Highway Ride</span>
            </div>
            <div className="home-fleet-content">
              <h3>Night Tour Ambient Lighting</h3>
              <p>Multi-color ambient LED cabin lighting, dual highway drivers, and whisper-quiet suspension for restful travel.</p>
            </div>
          </div>

          {/* Card 3: Toyota Rumion / Ertiga Car */}
          <div className="home-fleet-card">
            <div className="home-fleet-img-wrap">
              <img
                src="/bus-photos/toyota-rumion.avif"
                alt="Toyota Rumion Family Car - Jai Jalaram Tours"
                loading="lazy"
              />
              <span className="home-fleet-pill">4 to 7 Seater Cars</span>
            </div>
            <div className="home-fleet-content">
              <h3>Toyota Rumion / Ertiga / Crysta</h3>
              <p>Supreme highway comfort, roof AC vents, and generous legroom for nuclear and medium families.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link href="/services" className="btn btn-secondary" style={{ padding: "12px 28px" }}>
            <span>Explore All Vehicles &amp; Booking Options</span>
            <ArrowRight size={16} style={{ marginLeft: 8 }} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 3. Concise Group Booking Teaser */
export function HomeGroupBookingTeaser() {
  return (
    <section className="home-group-strip">
      <div className="container">
        <div className="home-group-box">
          <div className="home-group-text">
            <span className="home-group-tag">WHOLE GUJARAT GROUP SPECIALIST</span>
            <h2 className="home-group-title">Need Group Transportation Anywhere in Gujarat?</h2>
            <p className="home-group-desc">
              Whether departing from <strong>Ahmedabad, Surat, Rajkot, Vadodara</strong>, or any taluka or village,
              we provide prompt doorstep vehicle dispatch. Ideal for marriage baarats, pilgrim sanghs, and corporate events.
            </p>
            <div className="home-group-actions">
              <Link href="/group-booking" className="btn btn-gold">
                <span>Group Booking Details &amp; Districts</span>
                <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </Link>
              <a href="tel:+919925891467" className="btn btn-outline-white">
                <Phone size={16} style={{ marginRight: 6 }} />
                <span>Call Owner: +91 99258 91467</span>
              </a>
            </div>
          </div>
          <div className="home-group-stats">
            <div className="group-stat-item">
              <span className="group-stat-val">33+</span>
              <span className="group-stat-lbl">Districts Covered</span>
            </div>
            <div className="group-stat-item">
              <span className="group-stat-val">100%</span>
              <span className="group-stat-lbl">On-Time Pickup</span>
            </div>
            <div className="group-stat-item">
              <span className="group-stat-val">15+</span>
              <span className="group-stat-lbl">Years Experience</span>
            </div>
            <div className="group-stat-item">
              <span className="group-stat-val">24x7</span>
              <span className="group-stat-lbl">Owner Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 4. Concise Trust / Why Us Teaser */
export function HomeWhyUsTeaser() {
  const trustPoints = [
    {
      icon: Handshake,
      title: "Direct Owner Booking",
      desc: "Speak directly with the proprietor. No middleman charges or hidden commission cuts.",
    },
    {
      icon: Clock,
      title: "Guaranteed On-Time Pickup",
      desc: "We arrive 15 minutes before your departure time to ensure smooth, stress-free travel.",
    },
    {
      icon: Sparkles,
      title: "Clean & Sanitized Fleet",
      desc: "Vacuumed interiors, working dual AC, fresh air fragrance, and pushback comfort.",
    },
    {
      icon: Headphones,
      title: "24/7 Journey Support",
      desc: "Our dispatch and proprietor stay reachable on call and WhatsApp throughout your journey.",
    },
  ];

  return (
    <section className="section-padding bg-pure">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">WHY CHOOSE US</span>
          <h2 className="section-title">Why Customers Trust Jai Jalaram Tours</h2>
          <p className="section-subtitle">
            Experience devotional hospitality, punctual service, and complete pricing transparency.
          </p>
        </div>

        <div className="home-trust-grid">
          {trustPoints.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <div key={idx} className="home-trust-card">
                <div className="trust-icon-box">
                  <IconComp size={24} />
                </div>
                <h3>{pt.title}</h3>
                <p>{pt.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-4">
          <Link href="/why-us" className="btn btn-secondary" style={{ padding: "12px 28px" }}>
            <span>Learn More About Us &amp; Booking Process</span>
            <ArrowRight size={16} style={{ marginLeft: 8 }} />
          </Link>
        </div>
      </div>
    </section>
  );
}

