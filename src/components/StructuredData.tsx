import React from "react";

export default function StructuredData() {
  const baseUrl = "https://jaijalaramtravels.in";

  // 1. LocalBusiness / TravelAgency Schema
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${baseUrl}/#travelagency`,
    name: "Jai Jalaram Tours & Travellers",
    alternateName: [
      "Jai Jalaram Tours",
      "Jay Jalaram Travels",
      "Jai Jalaram Tours & Travels Gujarat",
      "Jai Jalaram Group Booking",
    ],
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/bus-photos/day-view-image.png`,
    description:
      "Gujarat's trusted 24/7 tour and travel agency. Specializing in all-Gujarat group bookings, 4-wheeler car rentals (Dzire, Ertiga, Innova Crysta), luxury 12-26 seater Tempo Travellers, and 32-56 seater deluxe coach buses with doorstep pickup across all 33 districts.",
    telephone: "+919925891467",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Net Banking",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.0225",
      longitude: "72.5714",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://wa.me/919925891467",
      "https://jaijalaramtravels.in",
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Gujarat" },
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "City", name: "Surat" },
      { "@type": "City", name: "Vadodara" },
      { "@type": "City", name: "Rajkot" },
      { "@type": "City", name: "Bhavnagar" },
      { "@type": "City", name: "Jamnagar" },
      { "@type": "City", name: "Junagadh" },
      { "@type": "City", name: "Bhuj" },
      { "@type": "City", name: "Gandhidham" },
      { "@type": "City", name: "Somnath" },
      { "@type": "City", name: "Dwarka" },
      { "@type": "City", name: "Anand" },
      { "@type": "City", name: "Nadiad" },
      { "@type": "City", name: "Mehsana" },
      { "@type": "City", name: "Morbi" },
      { "@type": "City", name: "Ambaji" },
      { "@type": "City", name: "Statue of Unity" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gujarat Travel Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Four-Wheeler Car Rentals (Dzire, Etios, Ertiga, Innova Crysta)",
            description: "Comfortable, dual-AC sedan and luxury SUV rentals for family trips, outstation tours and airport drops across Gujarat.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury Tempo Traveller Service (12 to 26 Seater)",
            description: "Force Maharaja luxury tempo travellers with 2x1 pushback seats, individual AC vents and high roof for family pilgrimage and group tours.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deluxe Tourist Bus Service (32 to 56 Seater)",
            description: "High-deck luxury coach buses with air-suspension and massive luggage boots for wedding baarats, pilgrim sanghs and school/college picnics.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Somnath - Dwarka Pilgrimage Tour Package",
            description: "Customized sacred darshan circuit covering Somnath Jyotirlinga, Dwarkadhish Mandir, Nageshwar, Bet Dwarka and Porbandar.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Statue of Unity & Kevadia Tour",
            description: "Complete sightseeing transport for world's tallest statue, Valley of Flowers, Jungle Safari and Narmada Aarti.",
          },
        },
      ],
    },
  };

  // 2. WebSite Schema with Sitelinks SearchBox
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Jai Jalaram Tours & Travellers",
    description: "All Gujarat Group Booking, 4-Wheeler Car Rentals & Luxury Bus Services",
    publisher: {
      "@id": `${baseUrl}/#travelagency`,
    },
    inLanguage: ["en-IN", "gu-IN", "hi-IN"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
