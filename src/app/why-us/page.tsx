import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import { ShieldCheck, HeartHandshake, Award, Clock, Users, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us | Direct Owner Guarantee & Safe Travels | Jai Jalaram Tours",
  description:
    "Learn why thousands of families and groups trust Jai Jalaram Tours & Travellers: direct owner pricing, guaranteed punctual doorstep pickup, verified polite chauffeurs, and 24/7 customer support.",
};

export default function WhyUsPage() {
  const commitments = [
    {
      icon: HeartHandshake,
      title: "Direct Owner Accountability",
      desc: "Unlike booking apps where you talk to anonymous call centers, you deal directly with the proprietor. If anything needs adjustment, the owner is personally a phone call away.",
    },
    {
      icon: ShieldCheck,
      title: "Verified, Courteous Chauffeurs",
      desc: "Our drivers are seasoned professionals who value family safety, maintain sober driving habits, and understand the cultural sensitivities of Gujarat pilgrimage travel.",
    },
    {
      icon: Clock,
      title: "Zero Delay Philosophy",
      desc: "We understand the importance of shubh muhurats for weddings and early morning temple mangala aartis. Our vehicles arrive at your pickup address 15 minutes ahead of schedule.",
    },
    {
      icon: Award,
      title: "15+ Years Gujarat Highway Legacy",
      desc: "With thousands of successful trips completed across Saurashtra, Kutch, North Gujarat, and South Gujarat, we bring deep route knowledge to every excursion.",
    },
  ];

  return (
    <main className="subpage-main">
      <PageHeader
        breadcrumbCurrent="Why Choose Us"
        badge="PROPRIETOR-DIRECT TRUST"
        title="Why Customers Trust"
        titleHighlight="Jai Jalaram Tours"
        subtitle="Experience direct owner booking, zero middleman commissions, guaranteed punctual doorstep pickup, and courteous verified chauffeurs across Gujarat."
      />

      {/* Primary 6 Trust Pillars */}
      <WhyChooseUs />

      {/* How To Book In 60 Seconds Process */}
      <HowItWorks />

      {/* Core Customer Commitments */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">OUR PROMISE TO YOU</span>
            <h2 className="section-title">The Jai Jalaram Travel Standard</h2>
            <p className="section-subtitle">
              We treat every traveler like family. Here is what you can always count on when riding with us.
            </p>
          </div>

          <div className="commitments-grid">
            {commitments.map((c, idx) => {
              const IconComp = c.icon;
              return (
                <div key={idx} className="commitment-card">
                  <div className="commitment-icon-wrap">
                    <IconComp size={22} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
