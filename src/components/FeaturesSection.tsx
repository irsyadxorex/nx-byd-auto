import { Battery, Zap, Wrench, Gauge } from "lucide-react";

const features = [
  {
    icon: Battery,
    title: "Baterai Terbaik",
    description: "Teknologi Blade Battery yang aman dan tahan lama dengan garansi 8 tahun.",
    color: "#ffe5e7"
  },
  {
    icon: Gauge,
    title: "Rumah Jangkauan",
    description: "Jangkauan hingga 480 km sekali charge untuk perjalanan jauh tanpa khawatir.",
    color: "#ffe5e7"
  },
  {
    icon: Zap,
    title: "Fast Charging",
    description: "Pengisian cepat hingga 80% hanya dalam 30 menit dengan teknologi terbaru.",
    color: "#fff4e5"
  },
  {
    icon: Wrench,
    title: "Garansi & Servis Resmi",
    description: "Layanan purna jual terpercaya dengan jaringan bengkel resmi di seluruh Indonesia.",
    color: "#ffe5e7"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-20 pb-10 bg-gray-50 ">
      <div className="container mx-auto text-center px-6 sm:px-8 lg:px-12">
        <p className="text-rose-700 text-sm font-semibold tracking-wider uppercase mb-2">Superiority</p>
        <h2 className="section-title mb-4 px-4 text-neutral-900 ">Kenapa Harus Pilih BYD?</h2>
        <p className="section-subtitle max-w-2xl mx-auto px-4 text-gray-600 ">
          Dapatkan kualitas terbaik dengan teknologi paling modern dan layanan purna jual terpercaya.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center px-4">
                <div
                  className="feature-icon "
                  style={{ backgroundColor: feature.color }}
                >
                  <IconComponent className="w-8 h-8 text-rose-700 " />
                </div>
                <h3 className="font-bold text-sm sm:text-base mb-2 text-neutral-900 ">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 ">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
