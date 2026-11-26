import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jai Jalaram Tours and Travellers",
    short_name: "Jai Jalaram Tours",
    description:
      "All Gujarat Group Booking, 4-Wheeler Car Rentals, Tempo Traveller & Luxury Deluxe Bus Services. Call +91 99258 91467.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFAF0",
    theme_color: "#075E57",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
