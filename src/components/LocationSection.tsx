import { MapPin, Phone, Clock } from "lucide-react";
import { contactConfig } from "@/config/contact";

export default function LocationSection() {
  return (
    <section id="location" className="pt-20 pb-10">
      {/* Google Maps - Full Width */}
      <div className="w-full h-[300px] sm:h-[400px] mb-8 sm:mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.86190263537!2d106.77357779357912!3d-6.206748200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f726b5f81211%3A0x90584eaf05c1a194!2sBYD%20Harmony%20Palmerah!5e0!3m2!1sen!2sid!4v1760271596077!5m2!1sen!2sid"
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
              <p className="text-xs sm:text-sm text-gray-600">{contactConfig.address.fullAddress}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-700 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1 text-sm sm:text-base text-neutral-900">Hubungi Kami</h3>
              <a
                href={`tel:${contactConfig.phone.display}`}
                className="text-xs sm:text-sm text-gray-600 hover:text-[#e31e24] transition-colors"
              >
                {contactConfig.phone.display}
              </a>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                ({contactConfig.contactPerson.name} - {contactConfig.contactPerson.role})
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-700 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1 text-sm sm:text-base text-neutral-900">Jam Operasional</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Senin - Jumat: {contactConfig.businessHours.weekdays}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Sabtu - Minggu: {contactConfig.businessHours.weekend}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
