"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { contactConfig, getWhatsAppUrl } from "@/config/contact";
import productsData from "@/data/products.json";

export default function TestDriveSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    model: "",
    date: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone) {
      alert("Mohon isi nama dan nomor WhatsApp");
      return;
    }

    // Generate WhatsApp message
    const message = contactConfig.whatsappMessages.testDrive(
      formData.name,
      formData.phone,
      formData.model || "Model akan ditentukan kemudian",
      formData.date || "Tanggal akan ditentukan kemudian"
    );

    // Open WhatsApp
    const whatsappUrl = getWhatsAppUrl(message);
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      model: "",
      date: "",
    });
  };

  return (
    <section className="pt-20 pb-10 bg-white" id="test-drive">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-rose-700 text-sm font-semibold tracking-wider uppercase mb-2">Test Drive</p>
            <h2 className="section-title mb-4 text-neutral-900">
              Daftar Test Drive<br className="hidden sm:block" /> Hari Ini
            </h2>
            <p className="text-gray-600 text-sm mb-6 sm:mb-8">
              Rasakan pengalaman berkendara dengan mobil BYD. Daftarkan diri Anda sekarang!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-6 py-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#e31e24] transition-colors"
              />
              <input
                type="tel"
                placeholder="Nomor WhatsApp *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                pattern="[0-9]*"
                inputMode="numeric"
                required
                onKeyDown={(e) => {
                  if (
                    !/[0-9]/.test(e.key) &&
                    e.key !== "Backspace" &&
                    e.key !== "Delete" &&
                    e.key !== "Tab" &&
                    e.key !== "ArrowLeft" &&
                    e.key !== "ArrowRight"
                  ) {
                    e.preventDefault();
                  }
                }}
                className="w-full px-6 py-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#e31e24] transition-colors"
              />
              <input
                type="email"
                placeholder="Email Aktif (opsional)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#e31e24] transition-colors"
              />
              <select
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                className="w-full px-6 py-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#e31e24] transition-colors bg-white"
              >
                <option value="">Pilih Model (opsional)</option>
                {productsData.map((product) => (
                  <option key={product.id} value={product.nama}>
                    {product.nama}
                  </option>
                ))}
              </select>
              <input
                type="date"
                placeholder="Tanggal Test Drive (opsional)"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-6 py-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#e31e24] transition-colors"
              />
              <div className="pt-4">
                <button type="submit" className="btn-primary w-full px-6 py-4 text-sm rounded-full">
                  Daftar Test Drive via WhatsApp
                </button>
              </div>
            </form>
          </div>
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden order-1 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
              alt="Test Drive"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
