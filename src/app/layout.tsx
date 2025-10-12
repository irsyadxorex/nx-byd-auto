import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { defaultMetadata } from "@/config/metadata";

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

// Use centralized metadata configuration
export const metadata: Metadata = defaultMetadata;

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
