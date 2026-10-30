import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuickRoutes from "@/components/QuickRoutes";
import TourPackages from "@/components/TourPackages";
import { Compass, MapPin, CheckCircle2, UtensilsCrossed, Clock, Fuel } from "lucide-react";

export const metadata: Metadata = {
  title: "Gujarat Routes & Tour Packages | Somnath, Dwarka, SOU, Gir & Kutch | Jai Jalaram Tours",
  description:
    "Discover customized Gujarat tour packages and popular routes: Saurashtra Darshan (Somnath-Dwarka), Statue of Unity (Kevadia), Sasan Gir Safari, Kutch Rann Utsav & Ambaji. Book your vehicle today.",
};

export default function GujaratRoutesPage() {
  const travelTips = [
    {
      icon: Clock,
      title: "Optimized Darshan Timings",
      desc: "Our drivers are knowledgeable about temple aarti times at Somnath, Dwarka, Ambaji, and Pavagadh so you never miss an auspicious moment.",
    },
    {
      icon: UtensilsCrossed,
      title: "Authentic Gujarati Dhaba Stops",
      desc: "Enjoy authentic Kathiyawadi, Jain, and pure vegetarian highway food at hygienic family-friendly roadside eateries along the route.",
    },
    {
      icon: Fuel,
      title: "Transparent Fare Options",
      desc: "Choose between all-inclusive package pricing (covering toll taxes, state road taxes, driver allowance, and diesel) or flexible per-km rates.",
    },
    {
      icon: Compass,
      title: "Custom Multi-Day Halts",
      desc: "Need to visit family on the way or halt for shopping in Rajkot or Surat? We customize your route stops according to your preferences.",
    },
  ];

  return (
    <main className="subpage-main">
      <PageHeader
        breadcrumbCurrent="Gujarat Routes"
        badge="POPULAR PILGRIMAGE & TOURIST CIRCUITS"
        title="Gujarat Routes & Tour Packages"
        titleHighlight="Tailored For You"
        subtitle="Explore sacred Jyotirlingas, vibrant White Desert, wildlife sanctuaries, and the world's tallest statue with customized itineraries starting right from your doorstep."
      />

      {/* Quick Routes Selector */}
      <QuickRoutes />

      {/* Comprehensive Tour Packages */}
      <TourPackages />

      {/* Route Travel Tips & Hospitality */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">TRAVEL WITH CONFIDENCE</span>
            <h2 className="section-title">Smart Gujarat Road Travel Tips</h2>
            <p className="section-subtitle">
              With 15+ years of highway experience, Jai Jalaram Tours ensures every aspect of your journey is comfortable and effortless.
            </p>
          </div>

          <div className="travel-tips-grid">
            {travelTips.map((tip, idx) => {
              const IconComp = tip.icon;
              return (
                <div key={idx} className="travel-tip-card">
                  <div className="tip-icon-circle">
                    <IconComp size={22} />
                  </div>
                  <h3>{tip.title}</h3>
                  <p>{tip.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
