"use client";

import React from "react";
import { Zap, ArrowRight } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

interface RouteItem {
  from: string;
  to: string;
  pickup: string;
  dest: string;
  vehicle: string;
}

const routes: RouteItem[] = [
  {
    from: "Ahmedabad",
    to: "Somnath • Dwarka",
    pickup: "Ahmedabad",
    dest: "Somnath - Dwarka Darshan",
    vehicle: "Tempo Traveller (17 Seater Pushback AC)",
  },
  {
    from: "Surat",
    to: "Statue of Unity",
    pickup: "Surat",
    dest: "Statue of Unity (Kevadia)",
    vehicle: "Innova Crysta (7-8 Seater Luxury)",
  },
  {
    from: "Vadodara",
    to: "Ambaji • Abu",
    pickup: "Vadodara",
    dest: "Ambaji Temple & Mount Abu",
    vehicle: "Tempo Traveller (12 Seater Luxury AC)",
  },
  {
    from: "Rajkot",
    to: "Sasan Gir Safari",
    pickup: "Rajkot",
    dest: "Gir National Park / Sasan Gir",
    vehicle: "MUV (Ertiga / XL6 - 6 Seater)",
  },
  {
    from: "Ahmedabad",
    to: "Kutch Rann Utsav",
    pickup: "Ahmedabad",
    dest: "Kutch White Rann / Mandvi",
    vehicle: "Tempo Traveller (20 Seater Pushback AC)",
  },
  {
    from: "Bhavnagar",
    to: "Palitana Tirth",
    pickup: "Bhavnagar",
    dest: "Palitana Shatrunjaya Tirth",
    vehicle: "Sedan (Dzire/Etios - 4 Seater)",
  },
];

export default function QuickRoutes() {
  const handleSelectRoute = (r: RouteItem) => {
    openBookingModal({
      pickup: r.pickup,
      dest: r.dest,
      vehicle: r.vehicle,
    });
  };

  return (
    <section className="quick-routes-bar">
      <div className="container">
        <div className="routes-scroller-label">
          <Zap size={16} className="text-amber inline-icon" />
          <span>Quick 1-Click Gujarat Routes (Click to Book):</span>
        </div>
        <div className="routes-chips">
          {routes.map((r, i) => (
            <button
              key={i}
              type="button"
              className="route-chip"
              onClick={() => handleSelectRoute(r)}
            >
              <span>{r.from}</span>
              <ArrowRight size={13} style={{ margin: "0 4px", opacity: 0.7 }} />
              <span>{r.to}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
