import Image from "next/image";
import Link from "next/link";
import promosData from "@/data/promos.json";

export default function PromoSection() {
  return (
    <section id="promo" className="py-12 sm:py-16 bg-white ">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <p className="text-rose-700 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Promo
            </p>
            <h2 className="section-title text-neutral-900 ">
              Promo Spesial
              <br className="hidden sm:block" />
              Mobil BYD
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500  max-w-xs md:text-right">
            Dapatkan penawaran terbaik untuk mobil BYD pilihan Anda dengan
            berbagai kemudahan pembayaran.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {promosData.map((promo) => (
            <div key={promo.id} className="car-card relative">
              <span className="badge">
                {promo.discountPercent}% OFF
              </span>
              <div className="relative h-44 sm:h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={promo.image}
                  alt={promo.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="mb-1">
                  <span className="text-xs text-rose-600  font-semibold uppercase">{promo.promoTitle}</span>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1 text-neutral-900 ">
                  {promo.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[#e31e24]  font-bold text-sm">
                    {promo.price}
                  </p>
                  <p className="text-gray-400  text-xs line-through">
                    {promo.originalPrice}
                  </p>
                </div>
                <div className="bg-rose-50  px-3 py-2 rounded-lg mb-3">
                  <p className="text-xs text-rose-700  font-medium">
                    Hemat {promo.discount}
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  {promo.colors.slice(0, 3).map((color, i) => (
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
                  {promo.promoDescription}
                </p>
                <Link href={`/models/${promo.slug}`} className="btn-primary w-full text-xs text-center">
                  Detail Promo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
