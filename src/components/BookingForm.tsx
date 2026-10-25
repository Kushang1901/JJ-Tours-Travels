"use client";

import React, { useState, useEffect, useId } from "react";

export interface BookingData {
  tripType: string;
  pickupCity: string;
  customPickup: string;
  destCity: string;
  customDest: string;
  vehicleType: string;
  paxCount: string;
  startDate: string;
  returnDate: string;
  custName: string;
  custPhone: string;
  notes: string;
}

export default function BookingForm() {
  const formId = useId();
  const [formData, setFormData] = useState<BookingData>({
    tripType: "Round Trip",
    pickupCity: "Ahmedabad",
    customPickup: "",
    destCity: "Somnath - Dwarka Darshan",
    customDest: "",
    vehicleType: "Tempo Traveller (17 Seater Pushback AC)",
    paxCount: "12",
    startDate: "",
    returnDate: "",
    custName: "",
    custPhone: "",
    notes: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [formattedMessage, setFormattedMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Set default start date to tomorrow and return date to 3 days later
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const after3Days = new Date(today);
    after3Days.setDate(after3Days.getDate() + 4);

    const formatDate = (d: Date) => d.toISOString().split("T")[0];

    setFormData((prev) => ({
      ...prev,
      startDate: formatDate(tomorrow),
      returnDate: formatDate(after3Days),
    }));
  }, []);

  // Listen for custom selection events from Quick Routes, Fleet, and Tour packages
  useEffect(() => {
    const handleSetBooking = (e: CustomEvent<{ pickup?: string; dest?: string; vehicle?: string }>) => {
      if (e.detail) {
        setFormData((prev) => ({
          ...prev,
          pickupCity: e.detail.pickup || prev.pickupCity,
          destCity: e.detail.dest || prev.destCity,
          vehicleType: e.detail.vehicle || prev.vehicleType,
        }));

        const bookingSection = document.getElementById("booking-section");
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("setBookingSelection" as any, handleSetBooking as any);
    return () => {
      window.removeEventListener("setBookingSelection" as any, handleSetBooking as any);
    };
  }, []);

  // Compute WhatsApp formatted message
  useEffect(() => {
    const pickup =
      formData.pickupCity === "Other"
        ? formData.customPickup || "Gujarat Location"
        : formData.pickupCity || "Not Specified";
    const dest =
      formData.destCity === "Other"
        ? formData.customDest || "Gujarat Destination"
        : formData.destCity || "Not Specified";

    let msg = `🚩 *NEW BOOKING INQUIRY - JAI JALARAM TOURS & TRAVELLERS*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📍 *Pickup Location:* ${pickup} (Gujarat)\n`;
    msg += `🏁 *Destination:* ${dest}\n`;
    msg += `🔄 *Trip Type:* ${formData.tripType}\n`;
    msg += `🚘 *Vehicle Required:* ${formData.vehicleType || "Not Specified"}\n`;
    msg += `👥 *Number of Passengers:* ${formData.paxCount ? `${formData.paxCount} Persons` : "Not Specified"}\n`;
    msg += `📅 *Travel Date:* ${formData.startDate || "To be decided"}\n`;

    if (formData.tripType === "Round Trip" && formData.returnDate) {
      msg += `🗓️ *Return Date:* ${formData.returnDate}\n`;
    }

    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *Customer Name:* ${formData.custName || "Valued Customer"}\n`;
    msg += `📱 *Contact Number:* ${formData.custPhone || "Not Provided"}\n`;

    if (formData.notes && formData.notes.trim()) {
      msg += `📝 *Trip Notes:* ${formData.notes.trim()}\n`;
    }

    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `_Please send fare quote & availability. Thank you!_`;

    setFormattedMessage(msg);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTripTypeChange = (val: string) => {
    setFormData((prev) => ({ ...prev, tripType: val }));
  };

  const getWhatsAppUrl = () => {
    const encoded = encodeURIComponent(formattedMessage);
    return `https://wa.me/919925891467?text=${encoded}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.custName.trim() || !formData.custPhone.trim()) {
      alert("Please enter your Name and Mobile Number so the owner can connect with you.");
      return;
    }

    // Open WhatsApp directly
    const url = getWhatsAppUrl();
    window.open(url, "_blank");

    // Also show confirmation modal
    setModalOpen(true);
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="hero-booking-card" id="booking-section">
      <div className="booking-card-header">
        <div className="card-title-group">
          <h2 className="card-title">Book Your Journey</h2>
          <p className="card-subtitle">
            Pre-formatted message sent directly to Owner (<strong>+91 99258 91467</strong>)
          </p>
        </div>
        <span className="instant-tag">Instant Quote</span>
      </div>

      <form onSubmit={handleSubmit} className="booking-form" noValidate>
        {/* Trip Type Selector */}
        <div className="trip-type-selector">
          {[
            { label: "🔄 Round Trip", val: "Round Trip" },
            { label: "➡️ One-Way", val: "One-Way" },
            { label: "🗺️ Tour Package", val: "Multi-City / Gujarat Tour" },
            { label: "🎉 Event / Baarat", val: "Wedding / Group Function" },
          ].map((item) => (
            <label
              key={item.val}
              className={`radio-tab ${formData.tripType === item.val ? "active" : ""}`}
              onClick={() => handleTripTypeChange(item.val)}
            >
              <input
                type="radio"
                name="tripType"
                value={item.val}
                checked={formData.tripType === item.val}
                onChange={() => handleTripTypeChange(item.val)}
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>

        {/* Pickup & Destination Cities */}
        <div className="form-row-grid">
          <div className="form-group">
            <label htmlFor={`${formId}-pickup`}>
              <span className="label-icon">📍</span> Pickup City (Gujarat)
            </label>
            <div className="input-wrapper">
              <select
                id={`${formId}-pickup`}
                name="pickupCity"
                value={formData.pickupCity}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Pickup City</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Surat">Surat</option>
                <option value="Vadodara">Vadodara (Baroda)</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Bhavnagar">Bhavnagar</option>
                <option value="Jamnagar">Jamnagar</option>
                <option value="Junagadh">Junagadh</option>
                <option value="Gandhinagar">Gandhinagar</option>
                <option value="Anand / Nadiad">Anand / Nadiad</option>
                <option value="Bhuj / Kutch">Bhuj / Kutch</option>
                <option value="Mehsana">Mehsana</option>
                <option value="Morbi">Morbi</option>
                <option value="Somnath / Veraval">Somnath / Veraval</option>
                <option value="Dwarka">Dwarka</option>
                <option value="Porbandar">Porbandar</option>
                <option value="Bharuch / Ankleshwar">Bharuch / Ankleshwar</option>
                <option value="Navsari / Valsad / Vapi">Navsari / Valsad / Vapi</option>
                <option value="Other">Other Gujarat Location...</option>
              </select>
            </div>
            {formData.pickupCity === "Other" && (
              <input
                type="text"
                name="customPickup"
                value={formData.customPickup}
                onChange={handleChange}
                className="custom-input"
                placeholder="Enter Pickup Town / Village in Gujarat"
              />
            )}
          </div>

          <div className="form-group">
            <label htmlFor={`${formId}-dest`}>
              <span className="label-icon">🏁</span> Destination (Anywhere)
            </label>
            <div className="input-wrapper">
              <select
                id={`${formId}-dest`}
                name="destCity"
                value={formData.destCity}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Destination</option>
                <option value="Somnath - Dwarka Darshan">Somnath - Dwarka Darshan</option>
                <option value="Statue of Unity (Kevadia)">Statue of Unity (Kevadia)</option>
                <option value="Gir National Park / Sasan Gir">Gir National Park / Sasan Gir</option>
                <option value="Kutch White Rann / Mandvi">Kutch White Rann / Mandvi</option>
                <option value="Ambaji Temple & Mount Abu">Ambaji Temple &amp; Mount Abu</option>
                <option value="Palitana Shatrunjaya Tirth">Palitana Shatrunjaya Tirth</option>
                <option value="Diu Beach Island">Diu Beach Island</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Surat">Surat</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Bhavnagar">Bhavnagar</option>
                <option value="Jamnagar">Jamnagar</option>
                <option value="Junagadh">Junagadh</option>
                <option value="Other">Other Gujarat Destination...</option>
              </select>
            </div>
            {formData.destCity === "Other" && (
              <input
                type="text"
                name="customDest"
                value={formData.customDest}
                onChange={handleChange}
                className="custom-input"
                placeholder="Enter Destination Town / Yatra in Gujarat"
              />
            )}
          </div>
        </div>

        {/* Vehicle Choice & Passenger Count */}
        <div className="form-row-grid">
          <div className="form-group">
            <label htmlFor={`${formId}-vehicle`}>
              <span className="label-icon">🚘</span> Select Vehicle Service
            </label>
            <div className="input-wrapper">
              <select
                id={`${formId}-vehicle`}
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Choose Vehicle Category</option>
                <optgroup label="4-Wheeler Car Rentals">
                  <option value="Sedan (Dzire/Etios - 4 Seater)">Sedan (Dzire / Etios - 4 Seater AC)</option>
                  <option value="MUV (Ertiga / XL6 - 6 Seater)">MUV (Ertiga / XL6 - 6 Seater AC)</option>
                  <option value="Innova Crysta (7-8 Seater Luxury)">Innova Crysta (7-8 Seater Luxury AC)</option>
                </optgroup>
                <optgroup label="Tempo Traveller (Group Booking)">
                  <option value="Tempo Traveller (12 Seater Luxury AC)">12 Seater Tempo Traveller (Luxury AC)</option>
                  <option value="Tempo Traveller (17 Seater Pushback AC)">17 Seater Tempo Traveller (Pushback AC)</option>
                  <option value="Tempo Traveller (20 Seater Pushback AC)">20 Seater Tempo Traveller (Pushback AC)</option>
                  <option value="Tempo Traveller (26 Seater High Roof AC)">26 Seater Tempo Traveller (High Roof AC)</option>
                </optgroup>
                <optgroup label="Deluxe Buses (Large Groups)">
                  <option value="Mini Bus (32 Seater AC/Non-AC)">Mini Bus (32 Seater AC / Non-AC)</option>
                  <option value="Luxury Coach Bus (45 Seater 2x2)">Luxury Coach Bus (45 Seater 2x2)</option>
                  <option value="Deluxe Bus (56 Seater Baarat/Yatra)">Deluxe Bus (56 Seater Baarat / Group)</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor={`${formId}-pax`}>
              <span className="label-icon">👥</span> Number of Passengers
            </label>
            <div className="input-wrapper">
              <input
                type="number"
                id={`${formId}-pax`}
                name="paxCount"
                min="1"
                max="60"
                value={formData.paxCount}
                onChange={handleChange}
                placeholder="e.g. 12 Persons"
                required
              />
            </div>
          </div>
        </div>

        {/* Dates Row */}
        <div className="form-row-grid">
          <div className="form-group">
            <label htmlFor={`${formId}-startDate`}>
              <span className="label-icon">📅</span> Travel Date
            </label>
            <div className="input-wrapper">
              <input
                type="date"
                id={`${formId}-startDate`}
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {formData.tripType === "Round Trip" && (
            <div className="form-group">
              <label htmlFor={`${formId}-returnDate`}>
                <span className="label-icon">🗓️</span> Return Date
              </label>
              <div className="input-wrapper">
                <input
                  type="date"
                  id={`${formId}-returnDate`}
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </div>

        {/* Contact Details */}
        <div className="form-row-grid">
          <div className="form-group">
            <label htmlFor={`${formId}-custName`}>
              <span className="label-icon">👤</span> Your Full Name
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                id={`${formId}-custName`}
                name="custName"
                value={formData.custName}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor={`${formId}-custPhone`}>
              <span className="label-icon">📱</span> Your Mobile Number
            </label>
            <div className="input-wrapper">
              <input
                type="tel"
                id={`${formId}-custPhone`}
                name="custPhone"
                value={formData.custPhone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                required
              />
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="form-group">
          <label htmlFor={`${formId}-notes`}>
            <span className="label-icon">📝</span> Trip Notes / Requirements (Optional)
          </label>
          <input
            type="text"
            id={`${formId}-notes`}
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="e.g. Somnath Dwarka pilgrimage with family luggage / Wedding Baarat"
          />
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          <button type="submit" className="btn-whatsapp-submit">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 01-5.82 2.42c-1.47 0-2.91-.39-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.184 8.184 0 01-1.28-4.4c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.08 2.52.72 2.97.68.46-.05 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
            </svg>
            <span>Send Booking Inquiry on WhatsApp</span>
          </button>

          <a href="tel:+919925891467" className="btn-call-owner">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>Or Call Owner Directly (+91 99258 91467)</span>
          </a>
        </div>
      </form>

      {/* Confirmation Modal */}
      {modalOpen && (
        <div className="modal-backdrop open" onClick={() => setModalOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <span className="modal-icon">✅</span>
                <h3>Booking Inquiry Ready!</h3>
              </div>
              <button className="modal-close" onClick={() => setModalOpen(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-notice">
                Your structured journey inquiry has been generated for owner{" "}
                <strong>+91 99258 91467</strong>. If WhatsApp didn't open automatically, click
                below:
              </p>
              <div className="modal-preview-card">{formattedMessage}</div>
            </div>
            <div className="modal-footer">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa-modal"
              >
                Open WhatsApp
              </a>
              <button type="button" className="btn btn-secondary" onClick={handleCopyText}>
                {copied ? "✓ Copied!" : "📋 Copy Text"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
