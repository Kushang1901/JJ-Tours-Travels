"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  CalendarCheck,
  PhoneCall,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Car,
  Bus,
  ShieldCheck,
} from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

interface HeroSlide {
  id: number;
  image: string;
  imageAlt: string;
  pillTag: string;
  title: string;
  titleHighlight: string;
  description: string;
  badges: string[];
  primaryCtaText: string;
  secondaryCtaText: string;
  secondaryCtaType: "call" | "whatsapp";
  modalVehicleKey?: string;
  badgePillIcon: React.ElementType;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/hero-1.png",
    imageAlt: "Jai Jalaram Tours Luxury Tourist Bus Fleet in Gujarat",
    pillTag: "ALL GUJARAT TOURIST BUSES & GROUP BOOKING",
    title: "Deluxe Coach Buses & Group Travel Service",
    titleHighlight: "Across Whole Gujarat",
    description:
      "From 32, 45 to 56-seater luxury air-suspension coach buses to 12-26 seater Tempo Travellers. We provide punctual doorstep pickup anywhere in Gujarat for marriage baarats, pilgrim sanghs, and large community tours.",
    badges: [
      "32, 45 & 56 Seater AC Buses",
      "Doorstep Pickup Across 33 Districts",
      "Dual Experienced Highway Drivers",
    ],
    primaryCtaText: "Book Luxury Bus / Tempo",
    secondaryCtaText: "Direct Call: +91 99258 91467",
    secondaryCtaType: "call",
    modalVehicleKey: "Luxury Coach Bus (45 Seater 2x2)",
    badgePillIcon: Bus,
  },
  {
    id: 2,
    image: "/hero-2.png",
    imageAlt: "Dwarkadhish and Somnath Temple Pilgrimage Tour in Gujarat",
    pillTag: "SACRED GUJARAT PILGRIMAGE & TEMPLE CIRCUITS",
    title: "Somnath, Dwarka & Ambaji Darshan Yatras",
    titleHighlight: "Devotional Family Circuits",
    description:
      "Customized, peaceful pilgrimage circuits to Somnath Jyotirlinga, Dwarkadhish Mandir, Nageshwar, Bet Dwarka, and Ambaji. Elder-friendly pacing, clean pushback seating, and hygienic authentic food halts.",
    badges: [
      "Innova Crysta & Tempo Traveller",
      "Elder-Friendly Pacing & Stops",
      "100% Muhurat Punctuality Guarantee",
    ],
    primaryCtaText: "Plan Temple Darshan Tour",
    secondaryCtaText: "WhatsApp Inquiry",
    secondaryCtaType: "whatsapp",
    modalVehicleKey: "Tempo Traveller (17 Seater Pushback AC)",
    badgePillIcon: Sparkles,
  },
  {
    id: 3,
    image: "/hero-3.png",
    imageAlt: "Four-Wheeler Car Rentals and Gujarat Sightseeing Tours",
    pillTag: "FOUR-WHEELER RENTALS & HOLIDAY TOURS",
    title: "Statue of Unity, Sasan Gir & Kutch White Rann",
    titleHighlight: "Anywhere to Anywhere Transit",
    description:
      "Comfortable Sedans (Dzire, Etios), MUVs (Ertiga), and executive SUVs (Innova Crysta) for family holidays, airport transfers, and corporate travel. Direct owner booking with transparent all-inclusive or per-km rates.",
    badges: [
      "Sedans, MUVs & Innova Crysta",
      "Chilled Dual AC & Clean Interiors",
      "Direct Owner Pricing Guarantee",
    ],
    primaryCtaText: "Book Family Car Online",
    secondaryCtaText: "Direct Call: +91 99258 91467",
    secondaryCtaType: "call",
    modalVehicleKey: "Innova Crysta (7-8 Seater Luxury)",
    badgePillIcon: Car,
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-slide every 5.5s
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlideData = heroSlides[currentSlide];
  const ActiveIcon = activeSlideData.badgePillIcon;

  return (
    <section
      className="hero-bg-slider-section"
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Jai Jalaram Tours Featured Services and Destinations"
    >
      {/* 1. Full-Bleed Background Images Track (Slides smoothly left-to-right) */}
      <div className="hero-bg-slides-viewport">
        <div
          className="hero-bg-slides-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {heroSlides.map((slide, idx) => (
            <div key={slide.id} className="hero-bg-slide-item">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="hero-bg-full-image"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Brand Color Overlay (Deep Teal & Forest Green with Temple Gold Glow) */}
      <div className="hero-brand-color-overlay" aria-hidden="true" />
      <div className="hero-vignette-overlay" aria-hidden="true" />

      {/* 3. Centered Hero Content (Synchronized with active slide) */}
      <div className="container hero-centered-content-wrapper">
        <div className="hero-centered-content" key={activeSlideData.id}>
          {/* Top Auspicious / Category Pill */}
          <div className="hero-center-pill">
            <ActiveIcon size={15} className="hero-pill-icon" />
            <span>{activeSlideData.pillTag}</span>
          </div>

          {/* Grand Centered Heading */}
          <h1 className="hero-center-title">
            {activeSlideData.title}{" "}
            <span className="hero-center-gold-text">
              {activeSlideData.titleHighlight}
            </span>
          </h1>

          {/* Centered Description */}
          <p className="hero-center-desc">{activeSlideData.description}</p>

          {/* Feature Badges Row */}
          <div className="hero-center-features">
            {activeSlideData.badges.map((b, bIdx) => (
              <div key={bIdx} className="hero-center-feature-pill">
                <CheckCircle2 size={15} className="hero-center-check" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* Action CTA Buttons */}
          <div className="hero-center-cta-group">
            <button
              type="button"
              className="btn-hero-center-primary"
              onClick={() =>
                openBookingModal({
                  vehicle: activeSlideData.modalVehicleKey || undefined,
                })
              }
            >
              <CalendarCheck size={19} />
              <span>{activeSlideData.primaryCtaText}</span>
            </button>

            {activeSlideData.secondaryCtaType === "call" ? (
              <a href="tel:+919925891467" className="btn-hero-center-secondary">
                <PhoneCall size={18} />
                <span>{activeSlideData.secondaryCtaText}</span>
              </a>
            ) : (
              <a
                href="https://wa.me/919925891467?text=Hello%20Jai%20Jalaram%20Tours,%20I%20want%20to%20inquire%20about%20temple%20darshan%20yatra%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-center-wa"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 4. Left & Right Navigation Arrows (Side circular glass buttons like screenshot 2) */}
      <button
        type="button"
        className="hero-edge-arrow arrow-left"
        onClick={prevSlide}
        aria-label="Previous Slide"
        title="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        className="hero-edge-arrow arrow-right"
        onClick={nextSlide}
        aria-label="Next Slide"
        title="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* 5. Bottom Pagination Dots (Centered like screenshot 2) */}
      <div className="hero-bottom-dots" role="tablist" aria-label="Hero Carousel Dots">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-bottom-dot ${idx === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-selected={idx === currentSlide}
            role="tab"
          >
            <span className="dot-inner" />
          </button>
        ))}
      </div>
    </section>
  );
}
