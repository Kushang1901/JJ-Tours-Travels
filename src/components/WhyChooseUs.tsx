import React from "react";
import {
  Handshake,
  Clock,
  Sparkles,
  Compass,
  MessageCircle,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Handshake,
      iconColor: "text-amber",
      title: "Direct Owner Booking",
      desc: "You speak directly to the proprietor. No aggregators, no hidden middleman cuts, and transparent per-km or fixed package quotes.",
    },
    {
      icon: Clock,
      iconColor: "text-blue",
      title: "Guaranteed On-Time Pickup",
      desc: "We respect your auspicious mahurat and schedule. Vehicles arrive 15 minutes before departure at your doorstep.",
    },
    {
      icon: Sparkles,
      iconColor: "text-amber",
      title: "Clean & Sanitized Fleet",
      desc: "Thoroughly vacuumed, air-freshened vehicles with working AC, pristine pushback seating, and emergency first-aid kits.",
    },
    {
      icon: Compass,
      iconColor: "text-emerald",
      title: "Expert Gujarat Drivers",
      desc: "Courteous, verified drivers who know every highway shortcut, toll gate, authentic Kathiyawadi/Gujarati food dhabas, and temple timings.",
    },
    {
      icon: MessageCircle,
      iconColor: "text-emerald",
      title: "Instant WhatsApp Booking",
      desc: "Get instant quotation and vehicle availability directly on WhatsApp (+91 99258 91467) with pre-formatted easy trip summary.",
    },
    {
      icon: Headphones,
      iconColor: "text-brand",
      title: "24/7 Journey Support",
      desc: "Our owner and dispatch desk remain available round-the-clock throughout your travel until you safely reach back home.",
    },
  ];

  return (
    <section className="why-us-section section-padding" id="why-us">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">WHY US</span>
          <h2 className="section-title">Why Customers Trust Jai Jalaram Tours</h2>
          <p className="section-subtitle">
            We treat every passenger like family. Experience hospitality, transparency, and top
            safety on Gujarat roads.
          </p>
        </div>

        <div className="why-grid">
          {points.map((pt, idx) => {
            const IconComponent = pt.icon;
            return (
              <div key={idx} className="why-card">
                <div className="why-icon-box">
                  <IconComponent size={28} className={pt.iconColor} />
                </div>
                <h3>{pt.title}</h3>
                <p>{pt.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
