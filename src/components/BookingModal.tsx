"use client";

import React, { useState, useEffect, useId } from "react";
import {
  X,
  MapPin,
  Flag,
  Car,
  Users,
  Calendar,
  User,
  Phone,
  FileText,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Copy,
  Sparkles,
  Repeat,
  ArrowRight,
  Map,
  PartyPopper,
} from "lucide-react";
import { BookingOptions } from "@/lib/bookingHelper";

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

export default function BookingModal() {
  const formId = useId();
  const [isOpen, setIsOpen] = useState(false);
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

  const [formattedMessage, setFormattedMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Set default dates
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

  // Listen to open modal events
  useEffect(() => {
    const handleOpen = (e: CustomEvent<BookingOptions>) => {
      if (e.detail) {
        setFormData((prev) => ({
          ...prev,
          pickupCity: e.detail.pickup || prev.pickupCity,
          destCity: e.detail.dest || prev.destCity,
          vehicleType: e.detail.vehicle || prev.vehicleType,
        }));
      }
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    window.addEventListener("openBookingModalEvent" as any, handleOpen as any);
    return () => {
      window.removeEventListener("openBookingModalEvent" as any, handleOpen as any);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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

    const url = getWhatsAppUrl();
    window.open(url, "_blank");
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

  if (!isOpen) return null;

  return (
    <div className="popup-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
      <div className="popup-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="popup-modal-header">
          <div className="popup-header-title">
            <div className="popup-header-icon">
              <Sparkles size={20} className="text-amber" />
            </div>
            <div>
              <h3>Book Your Gujarat Journey</h3>
              <p>Pre-formatted message sent directly to Owner: <strong>+91 99258 91467</strong></p>
            </div>
          </div>
          <button className="popup-modal-close" onClick={closeModal} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body / Scrollable Form */}
        <div className="popup-modal-body">
          <form onSubmit={handleSubmit} className="booking-form" noValidate>
            
            {/* Trip Type Selector */}
            <div className="trip-type-selector">
              {[
                { label: "Round Trip", val: "Round Trip", icon: Repeat },
                { label: "One-Way", val: "One-Way", icon: ArrowRight },
                { label: "Tour Package", val: "Multi-City / Gujarat Tour", icon: Map },
                { label: "Event / Baarat", val: "Wedding / Group Function", icon: PartyPopper },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
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
                    <IconComponent size={14} style={{ marginRight: 5 }} />
                    <span>{item.label}</span>
                  </label>
                );
              })}
            </div>

            {/* Pickup & Destination Cities */}
            <div className="form-row-grid">
              <div className="form-group">
                <label htmlFor={`${formId}-pickup`}>
                  <MapPin size={15} className="label-icon text-amber" />
                  <span>Pickup City (Gujarat)</span>
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
                  <Flag size={15} className="label-icon text-amber" />
                  <span>Destination (Anywhere)</span>
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
                  <Car size={15} className="label-icon text-amber" />
                  <span>Select Vehicle Service</span>
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
                  <Users size={15} className="label-icon text-amber" />
                  <span>Number of Passengers</span>
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
                  <Calendar size={15} className="label-icon text-amber" />
                  <span>Travel Date</span>
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
                    <Calendar size={15} className="label-icon text-amber" />
                    <span>Return Date</span>
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
                  <User size={15} className="label-icon text-amber" />
                  <span>Your Full Name</span>
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
                  <Phone size={15} className="label-icon text-amber" />
                  <span>Your Mobile Number</span>
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
                <FileText size={15} className="label-icon text-amber" />
                <span>Trip Notes / Requirements (Optional)</span>
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

            {/* Actions */}
            <div className="form-actions">
              <button type="submit" className="btn-whatsapp-submit">
                <MessageCircle size={20} />
                <span>Send Booking Inquiry on WhatsApp</span>
              </button>

              <div style={{ display: "flex", gap: "10px" }}>
                <a href="tel:+919925891467" className="btn-call-owner" style={{ flex: 1 }}>
                  <PhoneCall size={18} />
                  <span>Direct Call: +91 99258 91467</span>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCopyText}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                >
                  {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
