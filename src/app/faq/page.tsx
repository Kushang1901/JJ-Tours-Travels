import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqSection from "@/components/FaqSection";
import { MessageCircle, Phone, HelpCircle, ShieldAlert, CreditCard, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ)",
  description:
    "Find answers to frequently asked questions about booking 4-wheelers, Tempo Travellers, and luxury buses in Gujarat. Transparent pricing, pickup areas, luggage policies, and payment terms.",
  alternates: {
    canonical: "https://jaijalaramtravels.in/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | Jai Jalaram Tours & Travellers",
    description:
      "Clear answers regarding Gujarat vehicle fleet, doorstep pickup, pricing structure, luggage allowance, and reservation steps. Call +91 99258 91467.",
    url: "https://jaijalaramtravels.in/faq",
    siteName: "Jai Jalaram Tours and Travellers",
    locale: "en_IN",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide group travel and bus service from any city in Gujarat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Jai Jalaram Tours & Travellers operates throughout the entire state of Gujarat. We provide pickup and drop service from Ahmedabad, Surat, Rajkot, Vadodara, Bhavnagar, Jamnagar, Junagadh, Bhuj, Gandhidham, Mehsana, Anand, Vapi, Valsad, and all interior towns and villages to any destination.",
      },
    },
    {
      "@type": "Question",
      name: "What 4-wheeler cars are available for booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our 4-wheeler fleet includes Swift Dzire and Toyota Etios (Sedan for 4 passengers), Maruti Ertiga and XL6 (6-seater MUV), and premium Toyota Innova Crysta (7-8 seater luxury). All cars are AC, clean, and driven by experienced highway chauffeurs.",
      },
    },
    {
      "@type": "Question",
      name: "What seating capacities do your Tempo Travellers offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide 12-seater, 17-seater, 20-seater, and 26-seater luxury AC Tempo Travellers. They feature push-back reclining seats, high-roof ceilings, dedicated music/TV systems, charging points, and ample luggage boot space.",
      },
    },
    {
      "@type": "Question",
      name: "Can we book large buses for wedding baarat or pilgrim sanghs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We specialize in bulk group bookings and provide 32-seater Mini Buses, 45-seater 2x2 Luxury Coach Buses, and 56-seater Deluxe Buses for marriage functions, community yatras (Somnath, Dwarka, Ambaji, Palitana), and school/college tours.",
      },
    },
    {
      "@type": "Question",
      name: "How does the WhatsApp booking process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you fill the booking form on this website and click 'Send Booking Inquiry on WhatsApp', your smartphone or computer will automatically open WhatsApp with a clean, pre-structured message addressed directly to owner mobile number +91 99258 91467. You just hit send, and the owner will respond immediately with rates and vehicle confirmation.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the fare quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our owner offers both all-inclusive package rates (covering vehicle rent, driver allowance, toll tax, state permits, and fuel) or per-kilometer billing according to your preference. Everything is discussed upfront with zero hidden charges.",
      },
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
