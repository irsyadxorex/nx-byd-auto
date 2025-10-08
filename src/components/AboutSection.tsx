import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="pt-20 pb-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80"
              alt="BYD Company"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang <span className="text-rose-700">BYD</span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Build Your Dreams (BYD)</strong> adalah perusahaan
                teknologi tinggi global yang didedikasikan untuk memanfaatkan
                inovasi teknologi untuk kehidupan yang lebih baik.
              </p>
              <p>
                BYD didirikan pada tahun 1995 dan kini menjadi salah satu
                produsen kendaraan energi baru terbesar di dunia. Dengan fokus
                pada teknologi baterai dan kendaraan listrik, BYD telah menjadi
                pemimpin global dalam industri otomotif yang berkelanjutan.
              </p>
              <p>
                Di Indonesia, BYD hadir dengan berbagai model kendaraan listrik
                yang ramah lingkungan, efisien, dan dilengkapi dengan teknologi
                terkini untuk memberikan pengalaman berkendara yang lebih baik.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-rose-700">1995</div>
                  <div className="text-sm text-gray-600">Tahun Berdiri</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-700">70+</div>
                  <div className="text-sm text-gray-600">Negara</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-700">3M+</div>
                  <div className="text-sm text-gray-600">Kendaraan Terjual</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
