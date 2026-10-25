"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, CalendarCheck, X, MessageSquareQuote } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

export default function CornerChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const handleBook = () => {
    setIsOpen(false);
    openBookingModal();
  };

  return (
    <div className="corner-chatbot-widget" id="chatbotWidget">
      {/* Expanded 3 Action Items */}
      <div className={`chatbot-menu ${isOpen ? "open" : ""}`}>
        {/* Action 1: Call */}
        <a
          href="tel:+919925891467"
          className="chatbot-action-btn call-action"
          title="Direct Call Owner (+91 99258 91467)"
          onClick={() => setIsOpen(false)}
        >
          <div className="action-tooltip">Direct Call</div>
          <div className="action-icon-circle">
            <Phone size={18} />
          </div>
        </a>

        {/* Action 2: WhatsApp */}
        <a
          href="https://wa.me/919925891467?text=Hello%20Jai%20Jalaram%20Tours%20and%20Travellers,%20I%20want%20to%20inquire%20about%20travel%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="chatbot-action-btn wa-action"
          title="Chat on WhatsApp"
          onClick={() => setIsOpen(false)}
        >
          <div className="action-tooltip">WhatsApp Chat</div>
          <div className="action-icon-circle">
            <MessageCircle size={18} />
          </div>
        </a>

        {/* Action 3: Book Vehicle Modal */}
        <button
          type="button"
          className="chatbot-action-btn book-action"
          title="Book Vehicle Online"
          onClick={handleBook}
        >
          <div className="action-tooltip">Book Vehicle Form</div>
          <div className="action-icon-circle">
            <CalendarCheck size={18} />
          </div>
        </button>
      </div>

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        className={`chatbot-trigger-btn ${isOpen ? "active" : ""}`}
        onClick={toggle}
        aria-label="Toggle Quick Travel Assistant"
        title="24/7 Travel Desk & Booking"
      >
        <span className="chatbot-pulse-ring"></span>
        <div className="chatbot-icon-wrap">
          {isOpen ? <X size={24} /> : <MessageSquareQuote size={24} />}
        </div>
        {!isOpen && <span className="chatbot-badge">3</span>}
      </button>
    </div>
  );
}
