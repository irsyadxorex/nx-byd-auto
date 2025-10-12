"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Check, Phone, Battery, Zap, Gauge, Award } from "lucide-react";
import productsData from "@/data/products.json";
import TestDriveSection from "@/components/TestDriveSection";
import { contactConfig, getWhatsAppUrl } from "@/config/contact";

type ProductType = typeof productsData[0];

// Note: Since this is a client component, metadata should be handled separately
// You can create a separate metadata file or convert to server component
// For now, we'll use this as client component and add metadata in a separate way

export default function ModelDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find product from products data
  const product = productsData.find((p) => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!product) {
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

  const currentVariant = product.varian[selectedVariant];

  // Generate WhatsApp URL using config
  const whatsappMessage = contactConfig.whatsappMessages.productInquiry(
    product.nama,
    currentVariant.tipe
  );
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.nama,
    "image": [product.gambar.mobil],
    "description": product.deskripsi,
    "brand": {
      "@type": "Brand",
      "name": "BYD"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://bydautoidn.com/models/${slug}`,
      "priceCurrency": "IDR",
      "price": product.hargaMulai,
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "BYD Indonesia"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100"
    },
    "category": product.kategori
  };

  return (
    <main className="pt-16">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Image - Full Width */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <div className="relative w-full h-full bg-gray-50">
          <Image
            src={product.gambar.mobil}
            alt={product.nama}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
          <div className="container mx-auto">
            <span className="inline-block px-3 py-1 bg-rose-700 text-white text-xs font-semibold rounded-full mb-3">
              {product.kategori}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              {product.nama}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">{product.tagline}</p>
          </div>
        </div>
      </section>

      {/* Product Info & Variants */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Product Image */}
            <div>
              <div className="relative h-64 sm:h-80 md:h-96 mb-4 rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src={product.gambar.mobil}
                  alt={product.nama}
                  fill
                  className="object-contain"
                />
              </div>
              {product.gambar.logo && (
                <div className="flex justify-center">
                  <div className="relative w-32 h-12">
                    <Image
                      src={product.gambar.logo}
                      alt={`${product.nama} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right: Description & Variants */}
            <div>
              {/* Price and Basic Info */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Harga Varian {currentVariant.tipe}</p>
                <p className="text-3xl sm:text-4xl font-bold text-[#e31e24] mb-2">
                  {currentVariant.hargaFormatted}
                </p>
                <p className="text-sm text-gray-500">{currentVariant.rangeType}</p>
                <p className="text-xs text-gray-400 mt-1">{product.lokasiOtr} | Update: {product.tanggalHarga}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Deskripsi</h3>
                <p className="text-gray-700 leading-relaxed">{product.deskripsi}</p>
              </div>

              {/* Variant Selector */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Pilih Varian</h3>
                <div className="space-y-2">
                  {product.varian.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariant(index)}
                      className={`w-full flex justify-between items-center p-4 border-2 rounded-lg transition-all ${
                        selectedVariant === index
                          ? "border-[#e31e24] bg-rose-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-left">
                        <span className="font-semibold text-gray-900 block">{variant.tipe}</span>
                        <span className="text-xs text-gray-500">{variant.rangeType}</span>
                      </div>
                      <span className="text-[#e31e24] font-bold">{variant.hargaFormatted}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Pilihan Warna</h3>
                <div className="flex flex-wrap gap-3">
                  {product.warna.map((color, index) => (
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
          <h2 className="section-title text-center mb-8 sm:mb-12">Spesifikasi Teknis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Battery className="w-6 h-6 text-[#e31e24]" />
                <h4 className="text-sm text-gray-500 uppercase">Kapasitas Baterai</h4>
              </div>
              <p className="font-bold text-xl text-neutral-900">{product.spesifikasi.kapasitasBaterai}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Gauge className="w-6 h-6 text-[#e31e24]" />
                <h4 className="text-sm text-gray-500 uppercase">Jarak Tempuh (NEDC)</h4>
              </div>
              <p className="font-bold text-xl text-neutral-900">{product.spesifikasi.jarakMengemudiNedc}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-[#e31e24]" />
                <h4 className="text-sm text-gray-500 uppercase">Daya Maksimum</h4>
              </div>
              <p className="font-bold text-xl text-neutral-900">{product.spesifikasi.dayaMaksimum}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-[#e31e24]" />
                <h4 className="text-sm text-gray-500 uppercase">Torsi Maksimum</h4>
              </div>
              <p className="font-bold text-xl text-neutral-900">{product.spesifikasi.torsiMaksimum}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Gauge className="w-6 h-6 text-[#e31e24]" />
                <h4 className="text-sm text-gray-500 uppercase">Akselerasi 0-100 km/h</h4>
              </div>
              <p className="font-bold text-xl text-neutral-900">
                {product.spesifikasi.akselerasi0100 || product.spesifikasi.akselerasi050 || "N/A"}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#e31e24]">
              <h4 className="text-sm text-gray-500 uppercase mb-2">Garansi Baterai</h4>
              <p className="font-bold text-lg text-neutral-900">8 Tahun / 150.000 km</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-sm text-blue-800">
              <strong>Blade Battery Technology</strong> - Teknologi baterai teraman dan paling tahan lama di kelasnya
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="section-title text-center mb-8 sm:mb-12">Keunggulan Utama</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-[#e31e24] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">100% Electric</h4>
                <p className="text-sm text-gray-600">Ramah lingkungan, tanpa emisi gas buang</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-[#e31e24] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Blade Battery</h4>
                <p className="text-sm text-gray-600">Teknologi baterai paling aman dan efisien</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-[#e31e24] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Biaya Operasional Rendah</h4>
                <p className="text-sm text-gray-600">Hemat hingga 70% dibanding mobil konvensional</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-[#e31e24] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Advanced Technology</h4>
                <p className="text-sm text-gray-600">Dilengkapi sistem infotainment dan ADAS</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-[#e31e24] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Fast Charging</h4>
                <p className="text-sm text-gray-600">Pengisian cepat 30 menit (10-80%)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-[#e31e24] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Garansi Panjang</h4>
                <p className="text-sm text-gray-600">8 tahun atau 150.000 km untuk baterai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Drive Section */}
      <TestDriveSection />
    </main>
  );
}
