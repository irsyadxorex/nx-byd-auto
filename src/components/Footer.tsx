"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navLinks";

export default function Footer() {
  const pathname = usePathname();
  const isDetailPage = pathname !== "/";
  return (
    <footer className="bg-neutral-900 text-white py-10 sm:py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-3 sm:mb-4">
              <Image
                src="/images/byd-logo.png"
                alt="BYD Logo"
                width={100}
                height={40}
                className="h-8 w-auto sm:h-10"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Dealer resmi BYD terpercaya di Indonesia, menyediakan BYD Dolphin, Atto 3, Seal, dan model terbaru lainnya. Nikmati layanan lengkap dari pembelian, promo, test drive, hingga perawatan mobil listrik Anda.
            </p>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Informasi</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={isDetailPage ? `/${link.href}` : link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BYD Dealer Contact */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">BYD Dealer</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-700" />
                <span>badru@byddealer.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-700" />
                <span>+62 812-3456-7890 (Badru)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-700" />
                <span>Jl. Contoh No. 123, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
            Copyright 2025 BYD All Rights Reserved
          </p>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e31e24] transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black group-hover:fill-white">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e31e24] transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black group-hover:fill-white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e31e24] transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black group-hover:fill-white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e31e24] transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black group-hover:fill-white">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
