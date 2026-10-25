"use client";

import React from "react";

export default function FloatingBar() {
  return (
    <div className="floating-quick-bar" id="floatingBar">
      <div className="floating-container">
        <div className="floating-brand-info">
          <strong>Jai Jalaram Tours</strong>
          <span>All Gujarat Booking</span>
        </div>
        <div className="floating-actions">
          <a href="tel:+919925891467" className="floating-btn call-btn" title="Direct Call">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>Call 9925891467</span>
          </a>
          <a href="#booking-section" className="floating-btn book-btn" title="Go to Booking Form">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <span>Book Vehicle</span>
          </a>
          <a
            href="https://wa.me/919925891467?text=Hello%20Jai%20Jalaram%20Tours%20and%20Travellers,%20I%20want%20to%20book%20a%20vehicle%20in%20Gujarat."
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn wa-btn"
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 01-5.82 2.42c-1.47 0-2.91-.39-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.184 8.184 0 01-1.28-4.4c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.08 2.52.72 2.97.68.46-.05 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
