import React from "react";
import HeroSection from "@/components/HeroSection";
import QuickRoutes from "@/components/QuickRoutes";
import {
  HomeServicesTeaser,
  HomeFleetTeaser,
  HomeGroupBookingTeaser,
  HomeWhyUsTeaser,
} from "@/components/HomeSections";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Grand Hero with Booking CTA */}
      <HeroSection />

      {/* 2. Fast Route Booking Cards */}
      <QuickRoutes />

      {/* 3. Concise Services Teaser (Linking to /services) */}
      <HomeServicesTeaser />

      {/* 4. Real Fleet Photo Teaser (Linking to /fleet) */}
      <HomeFleetTeaser />

      {/* 5. Group Booking & Gujarat Coverage Strip (Linking to /group-booking) */}
      <HomeGroupBookingTeaser />

      {/* 6. Why Choose Us Trust Pillars (Linking to /why-us) */}
      <HomeWhyUsTeaser />
    </main>
  );
}
