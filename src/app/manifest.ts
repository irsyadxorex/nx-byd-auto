import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BYD Indonesia - Dealer Resmi Mobil Listrik",
    short_name: "BYD Indonesia",
    description: "Dealer resmi BYD Indonesia menyediakan mobil listrik BYD SEAL, ATTO 3, M6, dan DOLPHIN dengan promo menarik dan layanan terpercaya.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#be123c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
