"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

interface FleetVehicle {
  badge: string;
  pax: string;
  model: string;
  tagline: string;
  isPremium?: boolean;
  specs: { label: string; val: string }[];
  selectKey: string;
}

const fleetList: FleetVehicle[] = [
  {
    badge: "4-Wheeler Sedan",
    pax: "4 + 1 Passengers",
    model: "Swift Dzire / Toyota Etios",
    tagline: "Economic & Swift Travel for Small Families",
    selectKey: "Sedan (Dzire/Etios - 4 Seater)",
    specs: [
      { label: "AC System:", val: "Chilled Dual AC" },
      { label: "Seating:", val: "Fabric Cushion Comfort" },
      { label: "Luggage:", val: "2 Big Bags + 2 Small" },
      { label: "Best For:", val: "One-way / Outstation / Airport" },
    ],
  },
  {
    badge: "4-Wheeler MUV",
    pax: "6 + 1 Passengers",
    model: "Maruti Suzuki Ertiga / XL6",
    tagline: "Budget-Friendly Comfort for Medium Families",
    selectKey: "MUV (Ertiga / XL6 - 6 Seater)",
    specs: [
      { label: "AC System:", val: "Roof AC Vents for All Rows" },
      { label: "Seating:", val: "Reclining 3-Row Seating" },
      { label: "Luggage:", val: "Carrier + Boot Space" },
      { label: "Best For:", val: "Gujarat Darshan & Family Trips" },
    ],
  },
  {
    badge: "Premium 4-Wheeler",
    pax: "7 + 1 Passengers",
    model: "Toyota Innova Crysta",
    tagline: "King of Highway Comfort & Luxury Ride",
    isPremium: true,
    selectKey: "Innova Crysta (7-8 Seater Luxury)",
    specs: [
      { label: "AC System:", val: "Automatic Climate Control" },
      { label: "Seating:", val: "Captain Seats with Armrests" },
      { label: "Suspension:", val: "Ultra-Smooth Long Distance" },
      { label: "Best For:", val: "VIP, Corporate & Gujarat Yatras" },
    ],
  },
  {
    badge: "Tempo Traveller",
    pax: "12 to 17 Seater",
    model: "Force Luxury Tempo Traveller",
    tagline: "Perfect for Medium Group Tours & Pilgrimage",
    selectKey: "Tempo Traveller (17 Seater Pushback AC)",
    specs: [
      { label: "Interior:", val: "2x1 Pushback Maharaja Seats" },
      { label: "Entertainment:", val: "LCD Screen + Stereo System" },
      { label: "Amenities:", val: "Individual AC Vents & Charging" },
      { label: "Best For:", val: "Somnath-Dwarka & SOU Trips" },
    ],
  },
  {
    badge: "Heavy Tempo Traveller",
    pax: "20 to 26 Seater",
    model: "High Roof 26-Seater Traveller",
    tagline: "Maximum Space & Standing Height for Groups",
    selectKey: "Tempo Traveller (26 Seater High Roof AC)",
    specs: [
      { label: "Aisle Space:", val: "High Roof with Wide Gangway" },
      { label: "Comfort:", val: "Ergonomic Pushback Headrests" },
      { label: "Luggage:", val: "Massive Rear Luggage Storage" },
      { label: "Best For:", val: "Joint Family & Community Tours" },
    ],
  },
  {
    badge: "Deluxe Tourist Bus",
    pax: "32 / 45 / 56 Seater",
    model: "Luxury Coach Tourist Buses",
    tagline: "Full Fleet Logistics for Large Gatherings",
    selectKey: "Luxury Coach Bus (45 Seater 2x2)",
    specs: [
      { label: "Layout:", val: "2x2 Air-Suspension Seats" },
      { label: "Cooling:", val: "High Capacity AC / Non-AC" },
      { label: "Facilities:", val: "Mic, Sound & Dickey Space" },
      { label: "Best For:", val: "Marriage Baarat, Yatras & Picnics" },
    ],
  },
];

export default function FleetShowcase() {
  const handleSelect = (vehicleKey: string) => {
    openBookingModal({ vehicle: vehicleKey });
  };

  return (
    <section className="fleet-section section-padding" id="fleet">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">OUR FLEET</span>
          <h2 className="section-title">Well-Maintained Vehicles for Every Group Size</h2>
          <p className="section-subtitle">
            All vehicles undergo rigorous mechanical inspection, daily sanitization, and come with
            verified, professional chauffeurs.
          </p>
        </div>

        <div className="fleet-grid">
          {fleetList.map((item, idx) => (
            <div
              key={idx}
              className={`fleet-card ${item.isPremium ? "premium-fleet-card" : ""}`}
            >
              {item.isPremium && <div className="premium-ribbon">VIP LUXURY</div>}
              <div className="fleet-header">
                <div className={`fleet-type-badge ${item.isPremium ? "gold-badge" : ""}`}>
                  {item.badge}
                </div>
                <span className="fleet-pax">{item.pax}</span>
              </div>
              <div className="fleet-body">
                <h3 className="fleet-model">{item.model}</h3>
                <p className="fleet-tagline">{item.tagline}</p>
                <div className="fleet-specs-grid">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="spec-item">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-val">{spec.val}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn btn-fleet-book"
                  onClick={() => handleSelect(item.selectKey)}
                >
                  <span>Select This Vehicle</span>
                  <ArrowRight size={15} style={{ marginLeft: 6, display: "inline" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
