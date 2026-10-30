import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqSection from "@/components/FaqSection";
import { MessageCircle, Phone, HelpCircle, ShieldAlert, CreditCard, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Jai Jalaram Tours & Travellers",
  description:
    "Find answers to frequently asked questions about booking 4-wheelers, Tempo Travellers, and luxury buses in Gujarat. Transparent pricing, pickup areas, luggage policies, and payment terms.",
};

export default function FaqPage() {
  const quickGuidelines = [
    {
      icon: CreditCard,
      title: "Payment Terms & Advance",
      desc: "We require a small advance token to confirm your booking and lock in the vehicle date. The remainder is easily payable during the trip via Cash, UPI (Google Pay, PhonePe, Paytm), or Net Banking.",
    },
    {
      icon: Clock,
      title: "Night Travel & Driving Hours",
      desc: "For overnight journeys, especially with large tourist buses, we provide two experienced drivers to guarantee complete alertness, safety, and continuous highway progress.",
    },
    {
      icon: ShieldAlert,
      title: "Zero Hidden Charges Policy",
      desc: "Our quotations clearly state what is included (fuel, driver batta, state border taxes, and tolls). We believe in absolute honesty so there are never awkward surprises.",
    },
  ];

  return (
    <main className="subpage-main">
      <PageHeader
        breadcrumbCurrent="FAQ"
        badge="HELP & FREQUENT QUESTIONS"
        title="Frequently Asked Questions"
        titleHighlight="& Travel Help"
        subtitle="Find clear, transparent answers about our Gujarat vehicle fleet, doorstep pickup, pricing structure, luggage allowance, and reservation steps."
      />

      {/* Primary FAQ Accordion */}
      <FaqSection />

      {/* Booking Guidelines & Transparency */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">POLICIES &amp; CLARITY</span>
            <h2 className="section-title">Important Booking Guidelines</h2>
            <p className="section-subtitle">
              We operate with 100% transparency. Here is how our payments, safety, and policies work.
            </p>
          </div>

          <div className="guidelines-grid">
            {quickGuidelines.map((g, idx) => {
              const IconComp = g.icon;
              return (
                <div key={idx} className="guideline-card">
                  <div className="guideline-icon-circle">
                    <IconComp size={22} />
                  </div>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Need More Help Box */}
          <div className="faq-help-box">
            <div className="faq-help-content">
              <h3>Have a specific question not covered here?</h3>
              <p>
                Our proprietor is available 24/7 on call and WhatsApp to assist you with customized routes, vehicle availability, and instant quotes.
              </p>
            </div>
            <div className="faq-help-actions">
              <a href="tel:+919925891467" className="btn btn-call-large" style={{ padding: "12px 20px", fontSize: "0.95rem" }}>
                <Phone size={18} />
                <span>Call +91 99258 91467</span>
              </a>
              <a
                href="https://wa.me/919925891467?text=Hello%20Jai%20Jalaram%20Tours,%20I%20have%20a%20question%20regarding%20travel%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa-large"
                style={{ padding: "12px 20px", fontSize: "0.95rem" }}
              >
                <MessageCircle size={18} />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
