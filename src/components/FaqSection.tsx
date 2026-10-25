"use client";

import React, { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Do you provide group travel and bus service from any city in Gujarat?",
    a: "Yes! Jai Jalaram Tours & Travellers operates throughout the entire state of Gujarat. We provide pickup and drop service from Ahmedabad, Surat, Rajkot, Vadodara, Bhavnagar, Jamnagar, Junagadh, Bhuj, Gandhidham, Mehsana, Anand, Vapi, Valsad, and all interior towns and villages to any destination.",
  },
  {
    q: "What 4-wheeler cars are available for booking?",
    a: "Our 4-wheeler fleet includes Swift Dzire and Toyota Etios (Sedan for 4 passengers), Maruti Ertiga and XL6 (6-seater MUV), and premium Toyota Innova Crysta (7-8 seater luxury). All cars are AC, clean, and driven by experienced highway chauffeurs.",
  },
  {
    q: "What seating capacities do your Tempo Travellers offer?",
    a: "We provide 12-seater, 17-seater, 20-seater, and 26-seater luxury AC Tempo Travellers. They feature push-back reclining seats, high-roof ceilings, dedicated music/TV systems, charging points, and ample luggage boot space.",
  },
  {
    q: "Can we book large buses for wedding baarat or pilgrim sanghs?",
    a: "Absolutely! We specialize in bulk group bookings and provide 32-seater Mini Buses, 45-seater 2x2 Luxury Coach Buses, and 56-seater Deluxe Buses for marriage functions, community yatras (Somnath, Dwarka, Ambaji, Palitana), and school/college tours.",
  },
  {
    q: "How does the WhatsApp booking process work?",
    a: "When you fill the booking form on this website and click 'Send Booking Inquiry on WhatsApp', your smartphone or computer will automatically open WhatsApp with a clean, pre-structured message addressed directly to owner mobile number +91 99258 91467. You just hit send, and the owner will respond immediately with rates and vehicle confirmation.",
  },
  {
    q: "What is included in the fare quote?",
    a: "Our owner offers both all-inclusive package rates (covering vehicle rent, driver allowance, toll tax, state permits, and fuel) or per-kilometer billing according to your preference. Everything is discussed upfront with zero hidden charges.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">GOT QUESTIONS?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about our all-Gujarat tour and travel services.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "active" : ""}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
