import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const BYDLandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    carType: ''
  });

  const cars = [
    {
      name: "BYD SEAL",
      price: "Rp 639.000.000",
      description: "The eye-catching posture dazzles the car ahead. The lattice taillights are like water droplets dripping into the water, creating layers of sparkling light.",
      colors: ["bg-slate-700", "bg-slate-600", "bg-neutral-800"],
      badge: "Best Seller"
    },
    {
      name: "BYD ATTO 3",
      price: "Rp 390.000.000",
      description: "BYD ATTO 3 is First Sporty Born E-SUV, which marks the beginning of a new electric era. BYD ATTO 3 combines six core advantages",
      colors: ["bg-sky-900", "bg-stone-600", "bg-neutral-800"],
      badge: "Promo"
    },
    {
      name: "BYD M6",
      price: "Rp 383.000.000",
      description: "BYD meluncurkan MPV 6/7 seater EV di Indonesia yaitu BYD M6. Mobil ini ditenagai Blade Battery.",
      colors: null,
      badge: "Promo"
    },
    {
      name: "BYD DOLPHIN",
      price: "Rp 369.000.000",
      description: "Adopts the new 'Marine aesthetics' design concept. The sophisticated outline of the bodywork, coupled with sharp crease lines",
      colors: ["bg-sky-800", "bg-fuchsia-700", "bg-neutral-800"],
      badge: "Promo"
    }
  ];

  const features = [
    {
      title: "Blade Battery Terdepan",
      description: "Lebih aman, tahan lama, dan efisien dengan teknologi baterai eksklusif"
    },
    {
      title: "Ramah Lingkungan",
      description: "Akselerasi cepat, handling stabil, dan tetap hemat energi tanpa emisi"
    },
    {
      title: "Fast Charging",
      description: "Isi daya hingga 80% hanya dalam waktu ±30 menit di stasiun pengisian"
    },
    {
      title: "Garansi & Servis Resmi",
      description: "Dukungan dealer resmi, garansi menyeluruh, dan servis terpercaya"
    }
  ];

  const testimonials = [
    {
      name: "Bapak Andi",
      text: "Pelayanannya luar biasa cepat, saya bisa langsung bawa pulang BYD Atto 3 impian saya."
    },
    {
      name: "Pak Dedi",
      text: "Mobil listrik BYD Dolphin ini nyaman banget, hemat, dan pastinya ramah lingkungan."
    },
    {
      name: "Ibu Rina",
      text: "Proses kredit mudah, salesnya membantu banget sampai mobil diantar ke rumah"
    }
  ];

  const CarCard = ({ car, showButton = false }) => (
    <div className="bg-white p-5 flex flex-col gap-8 w-full shadow-sm hover:shadow-md transition-shadow rounded-lg">
      <div className="relative">
        <img className="w-full h-36 object-cover rounded-lg" src="https://placehold.co/249x150" alt={car.name} />
        {car.badge && (
          <div className="absolute -top-4 right-0 bg-amber-500 rounded-full px-3 py-2">
            <span className="text-white text-sm font-semibold">{car.badge}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h3 className="text-neutral-900 text-xl font-semibold">{car.name}</h3>
            {car.colors && (
              <div className="flex gap-2">
                {car.colors.map((color, idx) => (
                  <div key={idx} className={`w-5 h-5 ${color} rounded-full`} />
                ))}
              </div>
            )}
          </div>
          <p className="text-neutral-600 text-lg font-semibold">{car.price}</p>
        </div>
        <p className="text-neutral-600 text-sm leading-tight">{car.description}</p>
      </div>
      {showButton && (
        <button className="w-full px-4 py-3.5 bg-rose-700 rounded-full text-white text-lg font-semibold hover:bg-rose-800 transition-colors">
          Detail Unit
        </button>
      )}
    </div>
  );

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Test drive berhasil didaftarkan!');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md px-6 md:px-12 lg:px-24 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-32 h-8 bg-rose-700 rounded" />
          <button className="px-5 py-3.5 bg-rose-700 rounded-full flex items-center gap-1.5 text-white text-base md:text-lg font-semibold hover:bg-rose-800 transition-colors">
            Contact Us
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
              <span className="text-neutral-900">DRIVE THE </span>
              <span className="text-rose-700">FUTURE</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-neutral-900">WITH BYD</h2>
              <div className="w-full md:w-96 h-24 bg-zinc-800 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://placehold.co/570x380" alt="BYD Car" />
              </div>
            </div>
          </div>
          <p className="text-neutral-600 text-xl md:text-3xl max-w-4xl">
            Miliki mobil listrik BYD sekarang dengan penawaran terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="px-10 py-4 bg-rose-700 rounded-full text-white text-lg font-semibold hover:bg-rose-800 transition-colors">
              Lihat Product
            </button>
            <button className="px-10 py-4 rounded-full border-2 border-rose-700 text-rose-700 text-lg font-semibold hover:bg-rose-50 transition-colors">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <p className="text-rose-700 text-sm font-bold mb-2">Our Promo</p>
              <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold leading-tight">
                Promo Spesial<br />Mobil BYD
              </h2>
            </div>
            <p className="text-neutral-600 text-base max-w-md">
              Dapatkan penawaran spesial untuk mobil listrik BYD pilihan dengan harga terbaik dan promo menarik setiap bulannya.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cars.map((car, idx) => (
              <CarCard key={idx} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-rose-700 text-sm font-bold mb-2">Superiority</p>
            <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold mb-4">
              Kenapa Harus Pilih BYD?
            </h2>
            <p className="text-neutral-600 text-base max-w-2xl mx-auto">
              Mobil listrik modern dengan teknologi terkini, performa tangguh, dan dukungan purna jual terpercaya
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-8">
                <div className="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-rose-700 rounded" />
                </div>
                <div>
                  <h3 className="text-black text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <p className="text-rose-700 text-sm font-bold mb-2">Our Product</p>
              <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold leading-tight">
                Model Terbaru,<br />Penawaran Terbaik
              </h2>
            </div>
            <p className="text-neutral-600 text-base max-w-md">
              Desain stylish, performa tangguh, dan fitur pintar. Pilih model BYD yang paling cocok dengan gaya hidup Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {cars.map((car, idx) => (
              <CarCard key={idx} car={car} showButton={true} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cars.map((car, idx) => (
              <CarCard key={`second-${idx}`} car={car} showButton={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-stone-950 px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <p className="text-white text-sm font-bold mb-2">Customer Story</p>
              <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
                Kebahagiaan Bersama<br />Mobil Impian
              </h2>
            </div>
            <p className="text-white text-base max-w-md">
              Momen serah terima mobil BYD bukan sekadar transaksi, tapi awal perjalanan baru penuh kenyamanan dan kebanggaan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden relative">
                  <img className="w-full h-full object-cover" src="https://placehold.co/407x271" alt={testimonial.name} />
                  <div className="absolute inset-0 bg-neutral-900/20" />
                </div>
                <h3 className="text-white text-2xl font-semibold">{testimonial.name}</h3>
                <p className="text-white text-base leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Drive Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <p className="text-rose-700 text-sm font-bold mb-2">Test Drive</p>
              <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold mb-4 leading-tight">
                Daftar Test Drive Hari Ini
              </h2>
              <p className="text-neutral-600 text-base">
                Daftar test drive dengan mudah, pilih model favorit Anda, dan nikmati pengalaman berkendara yang berbeda.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label className="text-neutral-900 text-base font-semibold">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="cth: Panthom Thief"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="px-4 py-4 rounded-full border-2 border-zinc-200 text-neutral-600 focus:border-rose-700 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-neutral-900 text-base font-semibold">Nomor WhatsApp</label>
                <input
                  type="text"
                  placeholder="cth: 0812-xxxx-xxxx"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="px-4 py-4 rounded-full border-2 border-zinc-200 text-neutral-600 focus:border-rose-700 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-neutral-900 text-base font-semibold">Jenis Mobil</label>
                <select 
                  value={formData.carType}
                  onChange={(e) => setFormData({...formData, carType: e.target.value})}
                  className="px-4 py-4 rounded-full border-2 border-zinc-200 text-neutral-600 focus:border-rose-700 focus:outline-none transition-colors appearance-none bg-white"
                >
                  <option value="">Pilih jenis mobil</option>
                  <option value="seal">BYD SEAL</option>
                  <option value="atto3">BYD ATTO 3</option>
                  <option value="m6">BYD M6</option>
                  <option value="dolphin">BYD DOLPHIN</option>
                </select>
              </div>
              <button 
                onClick={handleSubmit}
                className="px-4 py-4 bg-rose-700 rounded-full text-white text-lg font-semibold hover:bg-rose-800 transition-colors"
              >
                Daftar Test Drive
              </button>
            </div>
          </div>
          <div className="w-full h-96 lg:h-[600px]">
            <img className="w-full h-full object-cover rounded-lg" src="https://placehold.co/612x765" alt="Test Drive" />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="w-full h-96 relative rounded-lg overflow-hidden mb-12">
              <img className="w-full h-full object-cover" src="https://placehold.co/1440x450" alt="Map" />
              <div className="absolute inset-0 bg-neutral-900/10" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-auto">
                <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm">
                  <h3 className="text-neutral-900 text-xl font-semibold mb-2">Dealer Resmi BYD</h3>
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    Jl. Pasar Baru No.8 Blok A, Pasar Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-900 text-base font-semibold">4.8</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-amber-500 rounded-sm" />
                      ))}
                    </div>
                    <span className="text-neutral-600 text-sm">100 Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="lg:max-w-md">
              <p className="text-rose-700 text-sm font-bold mb-2">Location</p>
              <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold mb-4 leading-tight">
                Temukan Kami di<br />Lokasi Terdekat
              </h2>
              <p className="text-neutral-600 text-base">
                Kami ada lebih dekat dari yang Anda kira. Gunakan peta untuk langsung menuju dealer resmi BYD
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-rose-700" />
                </div>
                <p className="text-neutral-600 text-sm pt-3">Jl. Pasar Baru No.8 Blok A, Pasar Baru</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-rose-700" />
                </div>
                <p className="text-neutral-600 text-sm pt-3">+62-217209195</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-rose-700" />
                </div>
                <p className="text-neutral-600 text-sm pt-3 leading-relaxed">Senin – Minggu<br />09.00 – 18.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="flex flex-col gap-6">
              <div className="w-32 h-8 bg-rose-700 rounded" />
              <p className="text-white text-sm leading-relaxed">
                Dealer resmi BYD terpercaya di Indonesia, menyediakan BYD Dolphin, Atto 3, Seal, dan model terbaru lainnya. Nikmati layanan lengkap dari pembelian, promo, test drive, hingga perawatan mobil listrik Anda.
              </p>
              <div className="flex gap-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="p-2.5 bg-white rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                    <div className="w-5 h-5 bg-rose-700 rounded" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">Informasi</h3>
              <ul className="flex flex-col gap-3 text-white text-sm">
                <li className="hover:text-rose-700 cursor-pointer transition-colors">Promo</li>
                <li className="hover:text-rose-700 cursor-pointer transition-colors">Product</li>
                <li className="hover:text-rose-700 cursor-pointer transition-colors">Gallery</li>
                <li className="hover:text-rose-700 cursor-pointer transition-colors">Artikel</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">Jelajahi Kami</h3>
              <ul className="flex flex-col gap-3 text-white text-sm">
                <li className="hover:text-rose-700 cursor-pointer transition-colors">Privasi</li>
                <li className="hover:text-rose-700 cursor-pointer transition-colors">Syarat & Ketentuan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">BYD Dealer</h3>
              <ul className="flex flex-col gap-3 text-white text-sm">
                <li className="font-semibold">byd@byd.id</li>
                <li>+62-217209195</li>
                <li className="leading-relaxed">Jl. Pasar Baru No.8 Blok A, Pasar Baru</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-white text-sm pt-8 border-t border-gray-800">
            Copyright 2025 by BYD Dealer - All right reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BYDLandingPage;