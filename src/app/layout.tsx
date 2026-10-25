import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
