"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import productsData from "@/data/products.json";

export default function AllModelsSection() {
  const [selectedVariants, setSelectedVariants] = useState<Record<string, number>>({});

  const handleVariantChange = (productId: string, variantIndex: number) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: variantIndex,
    }));
  };

  return (
    <section id="models" className="pt-20 pb-10 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <p className="text-rose-700 text-sm font-semibold tracking-wider uppercase mb-2">Our Models</p>
            <h2 className="section-title text-neutral-900">
              Model Terbaru,<br className="hidden sm:block" />Penawaran Terbaik
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xs md:text-right">
            Temukan mobil BYD terbaru dengan fitur terlengkap dan harga terbaik.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {productsData.map((product) => {
            const selectedIndex = selectedVariants[product.id] || 0;
            const selectedVariant = product.varian[selectedIndex];

            return (
              <div key={product.id} className="car-card">
                <div className="relative h-48 sm:h-52 md:h-56 mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={product.gambar.mobil}
                    alt={product.nama}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="mb-1">
                    <span className="text-xs text-gray-500 uppercase">{product.kategori}</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 text-neutral-900">{product.nama}</h3>
                  <p className="text-xs text-gray-500 mb-3">{product.tagline}</p>

                  {/* Variant Selector */}
                  {product.varian.length > 1 && (
                    <div className="mb-3">
                      <label className="text-xs text-gray-600 mb-1 block">Pilih Varian:</label>
                      <div className="flex flex-wrap gap-1.5">
                        {product.varian.map((variant, index) => (
                          <button
                            key={index}
                            onClick={() => handleVariantChange(product.id, index)}
                            className={`px-2.5 py-1.5 text-[10px] sm:text-xs rounded-md border transition-all ${
                              selectedIndex === index
                                ? "bg-[#e31e24] text-white border-[#e31e24] font-semibold"
                                : "bg-white text-gray-700 border-gray-300 hover:border-[#e31e24]"
                            }`}
                          >
                            {variant.tipe}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price and Range Type */}
                  <div className="mb-3">
                    <p className="text-[#e31e24] font-bold text-base sm:text-lg">
                      {selectedVariant.hargaFormatted}
                    </p>
                    <p className="text-xs text-gray-500">{selectedVariant.rangeType}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{product.lokasiOtr}</p>
                  </div>

                  {/* Key Specs */}
                  <div className="mb-3 p-2.5 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs">
                      <div>
                        <p className="text-gray-500">Jarak Tempuh</p>
                        <p className="font-semibold text-neutral-900">{product.spesifikasi.jarakMengemudiNedc}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Baterai</p>
                        <p className="font-semibold text-neutral-900">{product.spesifikasi.kapasitasBaterai}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Akselerasi</p>
                        <p className="font-semibold text-neutral-900">
                          {product.spesifikasi.akselerasi0100 || product.spesifikasi.akselerasi050}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Daya</p>
                        <p className="font-semibold text-neutral-900">{product.spesifikasi.dayaMaksimum}</p>
                      </div>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="flex gap-2 mb-3">
                    {product.warna.slice(0, 4).map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-gray-200 shadow-sm"
                        title={color}
                        style={{
                          background: color.toLowerCase().includes("black")
                            ? "#1a1a1a"
                            : color.toLowerCase().includes("white")
                            ? "#e5e5e5"
                            : color.toLowerCase().includes("grey") || color.toLowerCase().includes("gray")
                            ? "#9ca3af"
                            : color.toLowerCase().includes("blue")
                            ? "#3b82f6"
                            : color.toLowerCase().includes("red")
                            ? "#ef4444"
                            : color.toLowerCase().includes("pink")
                            ? "#ec4899"
                            : "#1a1a1a",
                        }}
                      />
                    ))}
                  </div>

                  <p className="text-xs text-gray-600 mb-4 line-clamp-2 flex-1">{product.deskripsi}</p>

                  <Link
                    href={`/models/${product.slug}`}
                    className="btn-primary w-full text-xs text-center"
                  >
                    Detail Info & Test Drive
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
