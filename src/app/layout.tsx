import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageTranslator from "@/components/LanguageTranslator";
import SectionPageLoader from "@/components/SectionPageLoader";
import BackToTop from "@/components/BackToTop";
import CornerChatbot from "@/components/CornerChatbot";
import BookingModal from "@/components/BookingModal";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jai Jalaram Tours and Travellers | All Gujarat Group Booking & 4-Wheeler / Bus Service",
  description:
    "Jai Jalaram Tours & Travellers - Premier Group Booking, 4-Wheeler Car Rentals, Tempo Traveller (12-26 Seater) & Luxury Deluxe Bus services across all over Gujarat. Call or WhatsApp owner: +91 99258 91467.",
  keywords: [
    "Jai Jalaram Tours and Travellers",
    "Gujarat Tour and Travels",
    "Tempo Traveller Gujarat",
    "Group Booking Gujarat",
    "Bus Service Gujarat",
    "4 Wheeler Car Rental Gujarat",
    "Innova Crysta Gujarat",
    "Somnath Dwarka Tour",
    "Statue of Unity Travel",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        <LanguageTranslator />
        <SectionPageLoader />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <CornerChatbot />
        <BookingModal />
      </body>
    </html>
  );
}
