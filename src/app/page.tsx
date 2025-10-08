import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PromoSection from "@/components/PromoSection";
import FeaturesSection from "@/components/FeaturesSection";
import AllModelsSection from "@/components/AllModelsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TestDriveSection from "@/components/TestDriveSection";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  // Structured Data for Organization (JSON-LD)
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "BYD Indonesia",
    "image": "https://bydautoidn.com/og-image.jpg",
    "description": "Dealer resmi BYD Indonesia menyediakan mobil listrik BYD SEAL, ATTO 3, M6, dan DOLPHIN. Dapatkan promo menarik, test drive gratis, dan layanan purna jual terpercaya.",
    "@id": "https://bydautoidn.com",
    "url": "https://bydautoidn.com",
    "telephone": "+62-217209195",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Pasar Baru No.8 Blok A, Pasar Baru",
      "addressLocality": "Sawah Besar",
      "addressRegion": "Jakarta Pusat",
      "postalCode": "10710",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.1658,
      "longitude": 106.8341
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/BYDIndonesia",
      "https://www.instagram.com/bydindonesia",
      "https://twitter.com/BYDIndonesia"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100"
    }
  };

  // Structured Data for Website (JSON-LD)
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BYD Indonesia",
    "url": "https://bydautoidn.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bydautoidn.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />

      <Hero />
      <AboutSection />
      <PromoSection />
      <FeaturesSection />
      <AllModelsSection />
      <TestimonialsSection />
      <TestDriveSection />
      <LocationSection />
    </>
  );
}
