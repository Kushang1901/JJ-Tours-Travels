"use client";

import React from "react";
import { Car, Star, ArrowRight, Clock } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

interface PackageItem {
  days: string;
  title: string;
  desc: string;
  vehicleRecommendation: string;
  recommendedFor: string;
  destKey: string;
  vehicleKey: string;
  isWedding?: boolean;
}

const packages: PackageItem[] = [
  {
    days: "3 to 5 Days",
    title: "Saurashtra Darshan Pilgrimage",
    desc: "Complete sacred circuit: Somnath Jyotirlinga, Dwarkadhish Mandir, Nageshwar Jyotirlinga, Bet Dwarka, Porbandar & Madhavpur.",
    vehicleRecommendation: "Innova / Tempo Traveller / Bus",
    recommendedFor: "Recommended for Families",
    destKey: "Somnath - Dwarka Darshan",
    vehicleKey: "Tempo Traveller (17 Seater Pushback AC)",
  },
  {
    days: "1 to 2 Days",
    title: "Statue of Unity & Kevadia Tour",
    desc: "World’s Tallest Statue, Valley of Flowers, Jungle Safari, Projection Mapping Laser Show, Narmada Maha Aarti, and Glow Garden.",
    vehicleRecommendation: "Same-Day & Overnight Options",
    recommendedFor: "Pickup from Ahmedabad, Surat, Baroda",
    destKey: "Statue of Unity (Kevadia)",
    vehicleKey: "Innova Crysta (7-8 Seater Luxury)",
  },
  {
    days: "2 to 3 Days",
    title: "Sasan Gir Lion Safari & Diu",
    desc: "Asiatic Lion Jungle Safari at Gir National Park, Devalia Safari Park, Somnath Beach & Diu Island Portuguese Fort and Nagoa Beach.",
    vehicleRecommendation: "Ideal for Friends & Nature Groups",
    recommendedFor: "Full Wildlife & Coastal Experience",
    destKey: "Gir National Park / Sasan Gir",
    vehicleKey: "Tempo Traveller (12 Seater Luxury AC)",
  },
  {
    days: "3 to 4 Days",
    title: "Kutch Rann Utsav & Heritage",
    desc: "White Desert Moonlit Salt Flats, Dhordo Tent City, Kalo Dungar, Mandvi Vijay Vilas Palace & Private Beach, Bhuj Aina Mahal.",
    vehicleRecommendation: "Winter Special Group Tour",
    recommendedFor: "Cultural & Desert Extravaganza",
    destKey: "Kutch White Rann / Mandvi",
    vehicleKey: "Tempo Traveller (20 Seater Pushback AC)",
  },
  {
    days: "2 Days",
    title: "Ambaji, Gabbar & Mount Abu",
    desc: "Shaktipeeth Arasuri Ambaji Temple, 51 Shaktipeeth Parikrama, Gabbar Hill Ropeway, Nakki Lake & Dilwara Jain Temples in Mount Abu.",
    vehicleRecommendation: "Spiritual & Hill Station Trip",
    recommendedFor: "Devotional Family Package",
    destKey: "Ambaji Temple & Mount Abu",
    vehicleKey: "MUV (Ertiga / XL6 - 6 Seater)",
  },
  {
    days: "1 to 5 Days",
    title: "Marriage Baarat & Event Fleet",
    desc: "Full event transportation logistics across Gujarat: Grooms luxury car, family Innovas, and 45/56 seater Baarat buses with coordinated drivers.",
    vehicleRecommendation: "Multi-Vehicle Wedding Contract",
    recommendedFor: "Guaranteed Punctual Service",
    destKey: "Other",
    vehicleKey: "Luxury Coach Bus (45 Seater 2x2)",
    isWedding: true,
  },
];

export default function TourPackages() {
  const handleInquire = (dest: string, vehicle: string) => {
    openBookingModal({ dest, vehicle });
  };

  return (
    <section className="destinations-section section-padding bg-light" id="destinations">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">POPULAR GUJARAT CIRCUITS</span>
          <h2 className="section-title">Special Group Tour Packages Across Gujarat</h2>
          <p className="section-subtitle">
            We arrange customized temple yatras, holiday picnics, and sightseeing itineraries from any pickup location.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`package-card ${pkg.isWedding ? "wedding-card" : ""}`}
            >
              <div className="pkg-header">
                <div className="pkg-days">
                  <Clock size={12} style={{ display: "inline", marginRight: 4 }} />
                  {pkg.days}
                </div>
                <h3 className="pkg-title">{pkg.title}</h3>
              </div>
              <p className="pkg-desc">{pkg.desc}</p>
              <div className="pkg-meta">
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Car size={14} className="text-brand" />
                  <span>{pkg.vehicleRecommendation}</span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Star size={14} className="text-amber" />
                  <span>{pkg.recommendedFor}</span>
                </span>
              </div>
              <button
                type="button"
                className="btn-pkg-inquire"
                onClick={() => handleInquire(pkg.destKey, pkg.vehicleKey)}
              >
                <span>Book This Tour Package</span>
                <ArrowRight size={15} style={{ display: "inline", marginLeft: 6 }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
