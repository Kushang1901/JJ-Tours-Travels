import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GujaratCoverage from "@/components/GujaratCoverage";
import { Users, Bus, Heart, Sparkles, Building2, GraduationCap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Group Booking & Bus Hire Across Whole Gujarat | Jai Jalaram Tours",
  description:
    "Specialized group travel services across all 33 Gujarat districts. Book Tempo Travellers (12-26 seater) & Luxury Buses (32-56 seater) for wedding baarats, pilgrim sanghs, corporate picnics & tours.",
};

export default function GroupBookingPage() {
  const groupSegments = [
    {
      icon: Heart,
      title: "Wedding Baarat & Marriage Logistics",
      desc: "Complete transportation coordination for the entire wedding entourage. From premium groom decorated Innova Crystas to 45 and 56 seater Baarat buses arriving synchronized at your venue.",
      bullets: [
        "Multiple vehicles synchronized dispatch",
        "Punctual arrival for auspicious muhurats",
        "Spacious luggage holds for wedding gifts & dresses",
      ],
    },
    {
      icon: Sparkles,
      title: "Devotional Pilgrim Sanghs & Mandals",
      desc: "Organized group yatras for Somnath, Dwarkadhish, Ambaji, Palitana, Pavagadh, and Dakor. Thoughtfully paced itineraries suitable for elderly family members with timely dharamshala & temple stops.",
      bullets: [
        "Elder-friendly pushback seating & wide aisles",
        "Driver recommendations for pure vegetarian dining",
        "Custom multi-day circuit halts & darshan timing",
      ],
    },
    {
      icon: GraduationCap,
      title: "School, College & Youth Picnics",
      desc: "Safe and dependable bus services for student excursions to Science City, Statue of Unity, Sasan Gir, and adventure camps with vetted, alcohol-free verified drivers.",
      bullets: [
        "Rigorous vehicle safety and mechanical inspection",
        "Courteous chauffeurs with verified background",
        "High-capacity AC cooling for summer trips",
      ],
    },
    {
      icon: Building2,
      title: "Corporate Delegations & Plant Visits",
      desc: "Executive transport solutions for corporate staff, factory inspections in industrial zones (Sanand, Dahej, Hazira, Mundra), and outstation team-building retreats.",
      bullets: [
        "GST invoice billing available upon request",
        "Executive pushback seating with charging ports",
        "Reliable doorstep pickup from airport or corporate office",
      ],
    },
  ];

  return (
    <main className="subpage-main">
      <PageHeader
        breadcrumbCurrent="Group Booking"
        badge="WHOLE GUJARAT GROUP SPECIALIST"
        title="Group Booking & Mass Transport"
        titleHighlight="Across All Gujarat"
        subtitle="Doorstep vehicle dispatch from any city, taluka, or village in Gujarat. Dedicated large-capacity fleet coordination for wedding baarats, pilgrim sanghs, and corporate events."
      />

      {/* Main Gujarat Coverage Component */}
      <GujaratCoverage />

      {/* Specialized Group Categories */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">WHOLE GUJARAT EXPERTISE</span>
            <h2 className="section-title">Specialized Group Travel Management</h2>
            <p className="section-subtitle">
              We specialize in complex, high-capacity group transit requirements across the state of Gujarat.
            </p>
          </div>

          <div className="group-segments-grid">
            {groupSegments.map((seg, idx) => {
              const IconComp = seg.icon;
              return (
                <div key={idx} className="group-segment-card">
                  <div className="segment-icon-wrap">
                    <IconComp size={24} />
                  </div>
                  <h3 className="segment-title">{seg.title}</h3>
                  <p className="segment-desc">{seg.desc}</p>
                  <ul className="segment-bullets">
                    {seg.bullets.map((b, bIdx) => (
                      <li key={bIdx}>
                        <CheckCircle2 size={15} className="text-emerald" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
