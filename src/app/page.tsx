import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickRoutes from "@/components/QuickRoutes";
import ServicesGrid from "@/components/ServicesGrid";
import GujaratCoverage from "@/components/GujaratCoverage";
import FleetShowcase from "@/components/FleetShowcase";
import RealFleetGallery from "@/components/RealFleetGallery";
import TourPackages from "@/components/TourPackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FaqSection from "@/components/FaqSection";
import OwnerCallout from "@/components/OwnerCallout";
import Footer from "@/components/Footer";
import CornerChatbot from "@/components/CornerChatbot";
import BackToTop from "@/components/BackToTop";
import BookingModal from "@/components/BookingModal";
import SectionPageLoader from "@/components/SectionPageLoader";
import LanguageTranslator from "@/components/LanguageTranslator";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Dynamic Google Translation Engine & Translation Transition Loader */}
      <LanguageTranslator />

      {/* Multi-page Style Section Loader */}
      <SectionPageLoader />

      <Navbar />
      <HeroSection />
      <QuickRoutes />
      <ServicesGrid />
      <GujaratCoverage />
      <FleetShowcase />
      <RealFleetGallery />
      <TourPackages />
      <WhyChooseUs />
      <HowItWorks />
      <FaqSection />
      <OwnerCallout />
      <Footer />

      {/* Floating Bottom Widgets */}
      <BackToTop />
      <CornerChatbot />

      {/* Global Booking Form Popup Modal */}
      <BookingModal />
    </main>
  );
}
