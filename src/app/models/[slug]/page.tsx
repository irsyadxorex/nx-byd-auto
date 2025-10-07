"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Check, Phone } from "lucide-react";
import modelsData from "@/data/models.json";
import promosData from "@/data/promos.json";
import TestDriveSection from "@/components/TestDriveSection";

type ModelType = typeof modelsData[0];
type PromoType = typeof promosData[0];

export default function ModelDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find model from both models and promos data
  const allProducts = [...modelsData, ...promosData];
  const model = allProducts.find((m) => m.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0);

  if (!model) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Model tidak ditemukan</h1>
          <Link href="/" className="btn-primary">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  // Check if it's a promo item with type guard
  const isPromo = (item: ModelType | PromoType): item is PromoType => {
    return "discount" in item;
  };

  const whatsappNumber = "6281234567890"; // Change to your WhatsApp number
  const whatsappMessage = `Halo, saya tertarik dengan ${model.name}. Bisakah saya mendapatkan informasi lebih lanjut?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="pt-16">
      {/* Hero Image - Full Width */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <Image
          src={model.image}
          alt={model.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
          <div className="container mx-auto">
            <span className="inline-block px-3 py-1 bg-rose-700 text-white text-xs font-semibold rounded-full mb-3">
              {model.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              {model.name}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">{model.tagline}</p>
          </div>
        </div>
      </section>

      {/* Image Gallery & Description */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Image Gallery */}
            <div>
              <div className="relative h-64 sm:h-80 md:h-96 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={model.images[selectedImage]}
                  alt={`${model.name} - Image ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {model.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-rose-700 scale-105"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${model.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Description & CTA */}
            <div>
              {isPromo(model) && (
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-6">
                  <span className="inline-block px-3 py-1 bg-rose-700 text-white text-xs font-bold rounded-full mb-2">
                    {model.discountPercent}% OFF
                  </span>
                  <h3 className="font-bold text-rose-900 mb-1">{model.promoTitle}</h3>
                  <p className="text-sm text-rose-700 mb-2">{model.promoDescription}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-rose-700">{model.price}</span>
                    <span className="text-lg text-gray-400 line-through">{model.originalPrice}</span>
                  </div>
                  <p className="text-sm font-semibold text-rose-700 mt-2">
                    Hemat {model.discount}!
                  </p>
                </div>
              )}

              {!isPromo(model) && (
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Mulai dari</p>
                  <p className="text-3xl font-bold text-neutral-900 mb-2">{model.price}</p>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Deskripsi</h3>
                <p className="text-gray-700 leading-relaxed">{model.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Pilihan Warna</h3>
                <div className="flex flex-wrap gap-3">
                  {model.colors.map((color, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full"
                    >
                      <div
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                        style={{
                          background: color.toLowerCase().includes("black")
                            ? "#1a1a1a"
                            : color.toLowerCase().includes("white")
                            ? "#e5e5e5"
                            : color.toLowerCase().includes("grey") ||
                              color.toLowerCase().includes("gray")
                            ? "#9ca3af"
                            : color.toLowerCase().includes("blue")
                            ? "#3b82f6"
                            : color.toLowerCase().includes("red")
                            ? "#ef4444"
                            : color.toLowerCase().includes("pink")
                            ? "#ec4899"
                            : color.toLowerCase().includes("gold")
                            ? "#f59e0b"
                            : "#1a1a1a",
                        }}
                      />
                      <span className="text-sm text-gray-700">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Varian</h3>
                <div className="space-y-2">
                  {model.variants.map((variant, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 border border-gray-200 rounded-lg"
                    >
                      <span className="font-semibold text-gray-900">{variant.name}</span>
                      <span className="text-rose-700 font-bold">{variant.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Hubungi Kami via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="section-title text-center mb-8 sm:mb-12">Spesifikasi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(model.specs).map(([key, value]) => (
              <div key={key} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-sm text-gray-500 uppercase mb-2">
                  {key === "battery"
                    ? "Baterai"
                    : key === "range"
                    ? "Jangkauan"
                    : key === "power"
                    ? "Tenaga"
                    : key === "acceleration"
                    ? "Akselerasi"
                    : key === "charging"
                    ? "Pengisian"
                    : key === "seats"
                    ? "Kapasitas"
                    : key === "warranty"
                    ? "Garansi"
                    : key}
                </h4>
                <p className="font-bold text-lg text-neutral-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="section-title text-center mb-8 sm:mb-12">Fitur Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {model.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-rose-700 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Drive Section */}
      <TestDriveSection />
    </main>
  );
}
