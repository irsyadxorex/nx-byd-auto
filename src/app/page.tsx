import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PromoSection from "@/components/PromoSection";
import FeaturesSection from "@/components/FeaturesSection";
import AllModelsSection from "@/components/AllModelsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TestDriveSection from "@/components/TestDriveSection";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
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
