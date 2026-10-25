import React from "react";
import { Phone, MessageCircle, Sparkles } from "lucide-react";

export default function OwnerCallout() {
  return (
    <section className="owner-callout-section">
      <div className="container text-center">
        <div className="owner-callout-badge">
          <Sparkles size={14} className="text-amber inline-icon" style={{ marginRight: 6 }} />
          <span>DIRECT CONTACT WITH PROPRIETOR</span>
        </div>
        <h2 className="owner-callout-title">Need An Urgent Vehicle or Custom Group Itinerary?</h2>
        <p className="owner-callout-text">
          Speak directly with the owner of <strong>Jai Jalaram Tours and Travellers</strong>.
          Get immediate confirmation for last-minute travels or large group bookings across Gujarat.
        </p>
        <div className="owner-contact-box">
          <div className="owner-number-display">
            <span className="number-tag">CALL OR WHATSAPP NOW</span>
            <span className="the-phone-number">+91 99258 91467</span>
          </div>
          <div className="owner-cta-buttons">
            <a href="tel:+919925891467" className="btn btn-call-large">
              <Phone size={20} />
              <span>Direct Call: +91 99258 91467</span>
            </a>
            <a
              href="https://wa.me/919925891467?text=Hello%20Jai%20Jalaram%20Tours%20and%20Travellers,%20I%20need%20urgent%20vehicle%20booking%20in%20Gujarat."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa-large"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
