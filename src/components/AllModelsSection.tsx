import Image from "next/image";
import Link from "next/link";
import modelsData from "@/data/models.json";

export default function AllModelsSection() {
  return (
    <section id="models" className="pt-20 pb-10 bg-white ">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <p className="text-rose-700 text-sm font-semibold tracking-wider uppercase mb-2">Our Models</p>
            <h2 className="section-title text-neutral-900 ">Model Terbaru,<br className="hidden sm:block" />Penawaran Terbaik</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500  max-w-xs md:text-right">
            Temukan mobil BYD terbaru dengan fitur terlengkap dan harga terbaik.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {modelsData.map((car) => (
            <div key={car.id} className="car-card">
              <div className="relative h-48 sm:h-52 md:h-56 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="mb-1">
                  <span className="text-xs text-gray-500  uppercase">{car.category}</span>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1 text-neutral-900 ">{car.name}</h3>
                <p className="text-[#e31e24] font-bold text-sm mb-3">{car.price}</p>
                <div className="flex gap-2 mb-3">
                  {car.colors.slice(0, 3).map((color, i) => (
                    <div
                      key={i}
                      className="color-option"
                      title={color}
                    >
                      <div className="w-full h-full rounded-full" style={{
                        background: color.toLowerCase().includes('black') ? '#1a1a1a' :
                                   color.toLowerCase().includes('white') ? '#e5e5e5' :
                                   color.toLowerCase().includes('grey') || color.toLowerCase().includes('gray') ? '#9ca3af' :
                                   color.toLowerCase().includes('blue') ? '#3b82f6' :
                                   color.toLowerCase().includes('red') ? '#ef4444' :
                                   color.toLowerCase().includes('pink') ? '#ec4899' : '#1a1a1a'
                      }} />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600  mb-4 line-clamp-2 flex-1">
                  {car.description}
                </p>
                <Link href={`/models/${car.slug}`} className="btn-primary w-full text-xs text-center">
                  Detail Info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
