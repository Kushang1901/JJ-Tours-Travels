import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import {
  HomeServicesTeaser,
  HomeFleetTeaser,
  HomeGroupBookingTeaser,
  HomeWhyUsTeaser,
} from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "Jai Jalaram Tours & Travellers | All Gujarat Group Booking & 4-Wheeler / Bus Service",
  description:
    "Jai Jalaram Tours & Travellers - Premier Group Booking, 4-Wheeler Car Rentals, Tempo Traveller (12-26 Seater) & Luxury Deluxe Bus services across all over Gujarat. 24/7 Doorstep Pickup. Call: +91 99258 91467.",
  alternates: {
    canonical: "https://jaijalaramtravels.in",
  },
  openGraph: {
    title: "Jai Jalaram Tours & Travellers | All Gujarat Travel Service",
    description:
      "Premier Group Booking, 4-Wheeler Car Rentals (Dzire, Ertiga, Innova Crysta), Luxury Tempo Travellers (12-26 Seater) & Deluxe Buses (32-56 Seater) across Gujarat.",
    url: "https://jaijalaramtravels.in",
    siteName: "Jai Jalaram Tours and Travellers",
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Grand Hero with Booking CTA */}
      <HeroSection />

      {/* 2. Concise Services Teaser (Linking to /services) */}
      <HomeServicesTeaser />

      {/* 4. Real Fleet Photo Teaser (Linking to /services) */}
      <HomeFleetTeaser />

      {/* 5. Group Booking & Gujarat Coverage Strip (Linking to /group-booking) */}
      <HomeGroupBookingTeaser />

      {/* 6. Why Choose Us Trust Pillars (Linking to /why-us) */}
      <HomeWhyUsTeaser />
    </main>
  );
}
