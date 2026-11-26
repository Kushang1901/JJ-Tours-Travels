import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageTranslator from "@/components/LanguageTranslator";
import SectionPageLoader from "@/components/SectionPageLoader";
import BackToTop from "@/components/BackToTop";
import CornerChatbot from "@/components/CornerChatbot";
import BookingModal from "@/components/BookingModal";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaijalaramtravels.in"),
  title: {
    default: "Jai Jalaram Tours & Travellers | All Gujarat Group Booking & 4-Wheeler / Bus Service",
    template: "%s | Jai Jalaram Tours & Travellers",
  },
  description:
    "Jai Jalaram Tours & Travellers - Gujarat's trusted travel provider. Premier Group Booking, 4-Wheeler Car Rentals (Dzire, Ertiga, Innova Crysta), Luxury Tempo Travellers (12-26 Seater) & Deluxe Buses (32-56 Seater) across all 33 districts of Gujarat. Call or WhatsApp owner 24/7: +91 99258 91467.",
  keywords: [
    "Jai Jalaram Tours and Travellers",
    "Jai Jalaram Travels",
    "Gujarat Tour and Travels",
    "Tempo Traveller Gujarat",
    "Group Booking Gujarat",
    "Bus Service Gujarat",
    "4 Wheeler Car Rental Gujarat",
    "Innova Crysta Gujarat",
    "Somnath Dwarka Tour",
    "Statue of Unity Travel",
    "Ahmedabad to Somnath Taxi",
    "Surat to Statue of Unity Bus",
    "Vadodara to Ambaji Tempo Traveller",
    "Rajkot to Sasan Gir Cab",
    "Gujarat Wedding Baarat Bus Hire",
    "Pilgrim Yatra Sangh Gujarat",
    "Gujarat Darshan Tour Packages",
  ],
  authors: [{ name: "Jai Jalaram Tours and Travellers", url: "https://jaijalaramtravels.in" }],
  creator: "Jai Jalaram Tours and Travellers",
  publisher: "Jai Jalaram Tours and Travellers",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://jaijalaramtravels.in",
  },
  openGraph: {
    title: "Jai Jalaram Tours & Travellers | All Gujarat Group Booking & Car / Bus Rental",
    description:
      "Premier Group Booking, 4-Wheeler Car Rentals (Dzire, Ertiga, Innova Crysta), Luxury Tempo Travellers (12-26 Seater) & Deluxe Buses (32-56 Seater) across all over Gujarat. 24/7 Doorstep Pickup.",
    url: "https://jaijalaramtravels.in",
    siteName: "Jai Jalaram Tours and Travellers",
    images: [
      {
        url: "/bus-photos/day-view-image.png",
        width: 1200,
        height: 630,
        alt: "Jai Jalaram Tours Luxury Bus & Vehicle Fleet in Gujarat",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Jalaram Tours & Travellers | All Gujarat Travel Services",
    description:
      "24/7 Group Booking, 4-Wheeler Cars, Tempo Travellers (12-26S), and Deluxe Buses (32-56S) across Gujarat. Call +91 99258 91467.",
    images: ["/bus-photos/day-view-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Gujarat, India",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
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
