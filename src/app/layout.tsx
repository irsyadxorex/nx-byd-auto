import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hanson = localFont({
  src: "../../public/assets/fonts/Hanson-Bold.ttf",
  variable: "--font-hanson",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://bydautoidn.com"),
  title: "BYD Indonesia - Dealer Resmi Mobil Listrik Terpercaya | BYD SEAL, ATTO 3, M6, DOLPHIN",
  description: "Dealer resmi BYD Indonesia menyediakan mobil listrik BYD SEAL, ATTO 3, M6, dan DOLPHIN. Dapatkan promo menarik, test drive gratis, dan layanan purna jual terpercaya. Fast charging, ramah lingkungan, garansi resmi.",
  keywords: [
    "BYD Indonesia",
    "dealer BYD",
    "mobil listrik BYD",
    "BYD SEAL",
    "BYD ATTO 3",
    "BYD M6",
    "BYD DOLPHIN",
    "mobil listrik Indonesia",
    "EV Indonesia",
    "electric vehicle",
    "mobil ramah lingkungan",
    "promo BYD",
    "harga BYD",
    "test drive BYD",
    "Blade Battery",
    "fast charging",
    "mobil listrik murah",
    "dealer resmi BYD Jakarta",
    "jual BYD",
    "kredit BYD",
    "cicilan BYD",
    "spesifikasi BYD",
    "BYD terbaru",
    "mobil hybrid",
    "kendaraan listrik",
    "BYD Pasar Baru",
    "showroom BYD"
  ],
  authors: [{ name: "BYD Indonesia" }],
  creator: "BYD Indonesia",
  publisher: "BYD Indonesia",
  robots: {
    index: process.env.NODE_ENV === "production",
    follow: process.env.NODE_ENV === "production",
    googleBot: {
      index: process.env.NODE_ENV === "production",
      follow: process.env.NODE_ENV === "production",
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bydautoidn.com",
    siteName: "BYD Indonesia",
    title: "BYD Indonesia - Dealer Resmi Mobil Listrik Terpercaya",
    description: "Dealer resmi BYD Indonesia. Dapatkan mobil listrik BYD SEAL, ATTO 3, M6, dan DOLPHIN dengan promo menarik dan layanan terpercaya.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BYD Indonesia - Mobil Listrik Terbaik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BYD Indonesia - Dealer Resmi Mobil Listrik Terpercaya",
    description: "Dealer resmi BYD Indonesia. Mobil listrik dengan teknologi Blade Battery terdepan.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://bydautoidn.com",
  },
  category: "Automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`min-h-screen ${inter.variable} ${hanson.variable} antialiased`}
      >
        <Header />
        <main className="w-full">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
