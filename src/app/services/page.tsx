import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";
import { Car, Bus, Users, ShieldCheck, HeartHandshake, Plane, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | 4-Wheeler Cars, Tempo Travellers & Luxury Buses | Jai Jalaram Tours",
  description:
    "Explore our complete travel services in Gujarat: Four-wheeler car rentals (Dzire, Etios, Ertiga, Innova Crysta), Luxury Tempo Travellers (12-26 seater), and Deluxe Coach Buses (32-56 seater). Call +91 99258 91467.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      icon: Sparkles,
      title: "Pilgrimage & Mandir Yatras",
      desc: "Sacred darshan tours across Somnath, Dwarka, Ambaji, Palitana, Girnar, and Dakor with respectful, punctual pacing for elders and families.",
      link: "/gujarat-routes",
      btnText: "View Yatra Packages",
    },
    {
      icon: Users,
      title: "Marriage & Baarat Group Fleet",
      desc: "Comprehensive wedding transport logistics: luxury groom cars, family Innovas, and 45/56 seater deluxe buses with coordinated chauffeurs.",
      link: "/group-booking",
      btnText: "Group Booking Info",
    },
    {
      icon: Car,
      title: "Family Holidays & Sightseeing",
      desc: "Explore Gujarat's top tourist destinations like Statue of Unity, Sasan Gir Wildlife Sanctuary, and Kutch Rann Utsav with flexible stoppage.",
      link: "/gujarat-routes",
      btnText: "Explore Holiday Tours",
    },
    {
      icon: Plane,
      title: "Airport & Outstation Transfers",
      desc: "Timely doorstep pickup and drop for Ahmedabad (AMD), Surat (STV), Vadodara (BDQ), and Rajkot (HSR) airports with ample luggage boot room.",
      link: "/faq",
      btnText: "Read Travel FAQ",
    },
  ];

  return (
    <main className="subpage-main">
      <PageHeader
        breadcrumbCurrent="Our Services"
        badge="ALL GUJARAT TRANSPORT SOLUTIONS"
        title="Complete Travelling Services"
        titleHighlight="Across Gujarat"
        subtitle="From comfortable 4-seater cars for family temple visits to 12-26 seater Maharaja Tempo Travellers and 56-seater deluxe coach buses. We provide 24/7 doorstep pickup anywhere in Gujarat."
      />

      {/* Main Services Grid */}
      <ServicesGrid />

      {/* Service Use Cases & Occasions */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">TAILORED FOR EVERY OCCASION</span>
            <h2 className="section-title">Specialized Travel Solutions For You</h2>
            <p className="section-subtitle">
              Whether you are planning a devotional pilgrimage, grand wedding ceremony, or a corporate tour,
              we arrange the ideal fleet setup.
            </p>
          </div>

          <div className="services-extra-grid">
            {serviceCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div key={idx} className="service-extra-card">
                  <div className="extra-icon-box">
                    <IconComp size={24} />
                  </div>
                  <h3 className="extra-title">{cat.title}</h3>
                  <p className="extra-desc">{cat.desc}</p>
                  <Link href={cat.link} className="extra-link-btn">
                    <span>{cat.btnText}</span>
                    <span style={{ marginLeft: 6 }}>&rarr;</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
