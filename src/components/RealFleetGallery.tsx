"use client";

import React, { useState } from "react";
import { Users, ShieldCheck, Sparkles, CheckCircle2, Phone, Calendar, ArrowRight } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

interface FamilyTier {
  id: string;
  members: string;
  paxLabel: string;
  bestVehicle: string;
  vehicleKey: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const familyTiers: FamilyTier[] = [
  {
    id: "small",
    members: "2 to 4 Members",
    paxLabel: "Small Family / Couple",
    bestVehicle: "Swift Dzire / Toyota Etios",
    vehicleKey: "Sedan (Dzire/Etios - 4 Seater)",
    description: "Economical, swift & chilled AC travel for nuclear families, couples, and airport / city drop routes.",
    features: ["Chilled Dual AC", "2 Big Suitcases + 2 Small Bags", "Clean Cushioned Seats", "Lowest Cost per KM"],
  },
  {
    id: "medium",
    members: "5 to 7 Members",
    paxLabel: "Medium Family Trip",
    bestVehicle: "Toyota Rumion (Pictured) / Ertiga",
    vehicleKey: "MUV (Ertiga / XL6 - 6 Seater)",
    description: "Ample legroom with 3-row flexible seating and roof AC vents. Pictured in our real photo gallery above!",
    features: ["Roof AC for All Rows", "Foldable Rear Seats for Luggage", "Smooth Gujarat Highway Ride", "Best Value Family Choice"],
    isPopular: true,
  },
  {
    id: "crysta",
    members: "6 to 8 Members",
    paxLabel: "Joint Family & VIP Luxury",
    bestVehicle: "Toyota Innova Crysta / Hycross",
    vehicleKey: "Innova Crysta (7-8 Seater Luxury)",
    description: "The undisputed king of Indian highways. Unmatched legroom, plush captain seats, and supreme suspension.",
    features: ["Plush Captain Recliner Seats", "Ultra-Smooth Long-Distance Suspension", "Large Boot + Top Carrier", "Ideal for Elders & VIPs"],
  },
  {
    id: "tempo",
    members: "10 to 20 Members",
    paxLabel: "Extended Family Pilgrimage",
    bestVehicle: "Force Luxury Tempo Traveller (14/17/20S)",
    vehicleKey: "Tempo Traveller (17 Seater Pushback AC)",
    description: "Travel together without splitting into multiple cars. Spacious Maharaja 2x1 pushback seats with high roof.",
    features: ["2x1 Maharaja Pushback Seats", "Individual AC Vents & USB Ports", "High Standing Roof & Wide Gangway", "Large Rear Luggage Space"],
  },
  {
    id: "bus",
    members: "25 to 56 Members",
    paxLabel: "Entire Community / Baarat",
    bestVehicle: "Commander Luxury Coach Bus (Pictured)",
    vehicleKey: "Luxury Coach Bus (45 Seater 2x2)",
    description: "Our flagship tourist coach buses (real day & night photos above) with air-suspension and panoramic views.",
    features: ["2x2 Air-Suspension Comfort", "High-Cool Industrial AC System", "Night Ambient LED Lighting", "Massive Underfloor Luggage Boot"],
  },
];

export default function RealFleetGallery() {
  const [selectedTier, setSelectedTier] = useState<string>("medium");

  const activeTier = familyTiers.find((t) => t.id === selectedTier) || familyTiers[1];

  const handleBookVehicle = (key: string) => {
    openBookingModal({ vehicle: key });
  };

  return (
    <section className="section-padding bg-pure real-fleet-section" id="real-fleet-gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} className="text-amber" />
            <span>AUTHENTIC GUJARAT FLEET &amp; FAMILY ACCOMMODATIONS</span>
          </div>
          <h2 className="section-title">
            Our Luxury Buses &amp; Tailored Family Vehicles
          </h2>
          <p className="section-subtitle">
            Authentic photographs of our actual operating vehicles. While we proudly showcase our
            flagship Commander Tourist Bus and Toyota Rumion, <strong>we provide complete car options</strong> customized
            to your exact family member count.
          </p>
        </div>

        {/* 3 Real Photo Cards Grid */}
        <div className="real-photos-grid">
          {/* Card 1: Day View Bus */}
          <div className="real-photo-card">
            <div className="real-photo-img-wrap">
              <img
                src="/bus-photos/day-view-image.png"
                alt="Commander Luxury AC Tourist Bus - Day Highway View"
                loading="lazy"
              />
              <span className="real-photo-badge">
                32 / 45 / 56 Seater AC Bus
              </span>
            </div>
            <div className="real-photo-body">
              <h3 className="real-photo-title">Commander Luxury Coach Bus (Day View)</h3>
              <p className="real-photo-desc">
                High-deck air-suspension luxury bus designed for Gujarat yatras, marriage baarats, and corporate groups with panoramic tinted glass.
              </p>
              <div className="real-photo-specs">
                <span className="spec-pill">2x2 Pushback Seats</span>
                <span className="spec-pill">Chilled Industrial AC</span>
                <span className="spec-pill">Huge Dickey Space</span>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => handleBookVehicle("Luxury Coach Bus (45 Seater 2x2)")}
              >
                <span>Book Luxury Bus</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Card 2: Night View Bus */}
          <div className="real-photo-card">
            <div className="real-photo-img-wrap">
              <img
                src="/bus-photos/bus-night-view.png"
                alt="Commander Luxury AC Tourist Bus - Night Ambient Lighting View"
                loading="lazy"
              />
              <span className="real-photo-badge badge-night">
                Overnight Highway Journey
              </span>
            </div>
            <div className="real-photo-body">
              <h3 className="real-photo-title">Overnight Luxury &amp; Ambient Lighting</h3>
              <p className="real-photo-desc">
                Real view of our night touring setup. Features soothing multi-color ambient LED cabin lighting, dual highway drivers, and whisper-quiet suspension.
              </p>
              <div className="real-photo-specs">
                <span className="spec-pill">Ambient Mood LED</span>
                <span className="spec-pill">Dual Experienced Drivers</span>
                <span className="spec-pill">Restful Sleep Seats</span>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => handleBookVehicle("Luxury Coach Bus (45 Seater 2x2)")}
              >
                <span>Book Overnight Bus</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Card 3: Toyota Rumion & Family Cars */}
          <div className="real-photo-card highlight-card">
            <div className="real-photo-img-wrap">
              <img
                src="/bus-photos/toyota-rumion.avif"
                alt="Toyota Rumion 7 Seater Family MPV Car - Jai Jalaram Tours"
                loading="lazy"
              />
              <span className="real-photo-badge badge-gold">
                Featured 7-Seater Family Car
              </span>
            </div>
            <div className="real-photo-body">
              <h3 className="real-photo-title">Toyota Rumion &amp; All Family Cars</h3>
              <p className="real-photo-desc">
                <strong>Not just this one car!</strong> We offer an extensive lineup of clean, sanitized cars (Dzire, Etios, Rumion, Ertiga, Innova Crysta) customized for your family size.
              </p>
              <div className="real-photo-specs">
                <span className="spec-pill">Ertiga / Rumion / Crysta</span>
                <span className="spec-pill">Sedans for 4 Pax</span>
                <span className="spec-pill">7-8 Pax MUV / SUV</span>
              </div>
              <button
                type="button"
                className="btn btn-gold btn-block"
                onClick={() => handleBookVehicle("MUV (Ertiga / XL6 - 6 Seater)")}
              >
                <span>Choose Family Car</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Family Member Accommodations Interactive Selector */}
        <div className="family-accommodation-box">
          <div className="family-box-header">
            <div className="family-box-tag">
              <Users size={15} />
              <span>FAMILY MEMBER ACCOMMODATION GUIDE</span>
            </div>
            <h3 className="family-box-title">
              What Is Your Exact Family Member Count?
            </h3>
            <p className="family-box-subtitle">
              We arrange the ideal vehicle according to your passenger count and luggage space so nobody travels cramped:
            </p>
          </div>

          {/* Family Size Tabs */}
          <div className="family-tabs-scroll">
            <div className="family-tabs-list">
              {familyTiers.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  className={`family-tab-btn ${selectedTier === tier.id ? "active" : ""}`}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  <div className="tab-badge-container">
                    {tier.isPopular ? (
                      <span className="tab-badge-pop">Popular</span>
                    ) : (
                      <span className="tab-badge-spacer" aria-hidden="true" />
                    )}
                  </div>
                  <span className="tab-members">{tier.members}</span>
                  <span className="tab-label">{tier.paxLabel}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Family Accommodation Details Card */}
          <div className="family-active-display">
            <div className="family-display-info">
              <div className="family-display-badge">
                <CheckCircle2 size={15} className="text-emerald" />
                <span>Recommended Vehicle for {activeTier.members}</span>
              </div>
              <h4 className="family-display-vehicle">{activeTier.bestVehicle}</h4>
              <p className="family-display-desc">{activeTier.description}</p>

              <div className="family-display-features">
                {activeTier.features.map((feat, i) => (
                  <div key={i} className="family-feature-item">
                    <ShieldCheck size={15} className="text-gold" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Clean Blue Book Now Button */}
              <div className="family-book-action-row">
                <button
                  type="button"
                  className="btn btn-primary btn-book-normal"
                  onClick={() => handleBookVehicle(activeTier.vehicleKey)}
                >
                  <Calendar size={17} />
                  <span>Book Now</span>
                </button>
                <a
                  href="tel:+919925891467"
                  className="family-call-link"
                >
                  <Phone size={15} />
                  <span>Call Owner: +91 99258 91467</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
