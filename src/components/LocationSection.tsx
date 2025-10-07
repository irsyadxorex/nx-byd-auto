import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-12 sm:py-16">
      {/* Google Maps - Full Width */}
      <div className="w-full h-[300px] sm:h-[400px] mb-8 sm:mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-rose-700 text-sm font-semibold tracking-wider uppercase mb-2">Location</p>
          <h2 className="section-title mb-4 px-4">Temukan Kami di Lokasi Terdekat</h2>
          <p className="section-subtitle max-w-2xl mx-auto px-4">
            Kami ada lebih dekat dari yang Anda kira. Gunakan peta untuk langsung menuju dealer resmi BYD
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-700 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1 text-sm sm:text-base text-neutral-900">Kunjungi Showroom</h3>
              <p className="text-xs sm:text-sm text-gray-600">Jl. Contoh No. 123, Jakarta</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-700 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1 text-sm sm:text-base text-neutral-900">Hubungi Kami</h3>
              <p className="text-xs sm:text-sm text-gray-600">+62 812-3456-7890</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-700 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1 text-sm sm:text-base text-neutral-900">Jam Operasional</h3>
              <p className="text-xs sm:text-sm text-gray-600">Senin - Minggu: 09.00 - 17.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
