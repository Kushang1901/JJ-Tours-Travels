"use client";

import React from "react";
import { ArrowRight, CalendarCheck, ClipboardList, MessageSquare, CheckCircle } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

export default function HowItWorks() {
  return (
    <section className="how-it-works-section section-padding bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">EASY BOOKING PROCESS</span>
          <h2 className="section-title">How To Book Your Gujarat Trip in 60 Seconds</h2>
          <p className="section-subtitle">
            We keep it fast and frictionless with pre-formatted WhatsApp messaging straight to the owner.
          </p>
        </div>

        <div className="steps-row">
          <div className="step-card">
            <div className="step-number">
              <ClipboardList size={22} />
            </div>
            <h3>1. Fill Your Trip Details</h3>
            <p>
              Select your pickup city, destination, travel dates, and vehicle preference (4-Wheeler,
              Tempo, or Bus) in our booking form.
            </p>
          </div>
          <div className="step-arrow">
            <ArrowRight size={26} />
          </div>
          <div className="step-card">
            <div className="step-number">
              <MessageSquare size={22} />
            </div>
            <h3>2. Click 'Send on WhatsApp'</h3>
            <p>
              Our system instantly formats a complete, neat booking inquiry and opens WhatsApp with
              owner number <strong>+91 99258 91467</strong> pre-filled.
            </p>
          </div>
          <div className="step-arrow">
            <ArrowRight size={26} />
          </div>
          <div className="step-card">
            <div className="step-number">
              <CheckCircle size={22} />
            </div>
            <h3>3. Get Instant Confirmation</h3>
            <p>
              The owner confirms vehicle availability, provides the best all-inclusive fare, and
              reserves your ride with zero hassle!
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-gold btn-large"
            onClick={() => openBookingModal()}
          >
            <CalendarCheck size={20} style={{ marginRight: 8 }} />
            <span>Open Booking Form &rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
