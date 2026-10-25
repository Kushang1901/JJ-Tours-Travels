"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      if (currentScroll > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Ensure smooth scrolling is enabled
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
      document.body.style.scrollBehavior = "smooth";
    }

    // Smooth scroll to top of window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className="back-to-top-btn"
      onClick={scrollToTop}
      title="Back to Top"
      aria-label="Scroll back to top"
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
