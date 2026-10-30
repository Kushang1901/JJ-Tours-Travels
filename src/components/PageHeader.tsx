"use client";

import React from "react";
import Link from "next/link";
import { Home, ChevronRight, CalendarCheck, PhoneCall, Sparkles, MessageCircle } from "lucide-react";
import { openBookingModal } from "@/lib/bookingHelper";

interface PageHeaderProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  breadcrumbCurrent: string;
  showCta?: boolean;
}

export default function PageHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  breadcrumbCurrent,
  showCta = true,
}: PageHeaderProps) {
  return (
    <div className="subpage-hero-banner">
      <div className="container subpage-hero-container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="subpage-breadcrumb">
          <Link href="/" className="breadcrumb-item breadcrumb-home">
            <Home size={14} style={{ marginRight: 4 }} />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-item breadcrumb-active" aria-current="page">
            {breadcrumbCurrent}
          </span>
        </nav>

        {/* Auspicious Badge */}
        <div className="subpage-badge-pill">
          <Sparkles size={14} className="text-amber" />
          <span>{badge}</span>
        </div>

        {/* Page Title */}
        <h1 className="subpage-hero-title">
          {title}{" "}
          {titleHighlight && (
            <span className="gradient-text">{titleHighlight}</span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="subpage-hero-subtitle">{subtitle}</p>

        {/* Action Buttons */}
        {showCta && (
          <div className="subpage-hero-cta">
            <button
              type="button"
              className="btn btn-hero-book"
              onClick={() => openBookingModal()}
            >
              <CalendarCheck size={18} />
              <span>Book Vehicle Online</span>
            </button>
            <a href="tel:+919925891467" className="btn btn-hero-call">
              <PhoneCall size={17} />
              <span>Direct Call: +91 99258 91467</span>
            </a>
            <a
              href="https://wa.me/919925891467?text=Hello%20Jai%20Jalaram%20Tours,%20I%20want%20to%20inquire%20about%20booking%20a%20vehicle."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-hero-wa"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

