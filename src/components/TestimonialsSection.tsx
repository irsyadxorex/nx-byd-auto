"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = testimonialsData.length - slidesPerView;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slidesPerView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = testimonialsData.length - slidesPerView;
      return prev >= maxSlide ? 0 : prev + 1;
    });
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = testimonialsData.length - slidesPerView;
      return prev <= 0 ? maxSlide : prev - 1;
    });
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const maxSlide = testimonialsData.length - slidesPerView;

  return (
    <section className="pt-20 pb-10 bg-neutral-900 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-rose-700 text-sm font-semibold tracking-wider uppercase mb-2">
          Costumer Story
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12">
          <h2 className="section-title text-white mb-2 sm:mb-0">
            Kebahagiaan Bersama
            <br className="hidden sm:block" />
            Mobil Impian
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm sm:max-w-md">
            Momen serah terima mobil BYD bukan sekadar transaksi, tapi awal
            perjalanan baru penuh kenyamanan dan kebanggaan
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
              }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="text-center">
                    <div className="relative w-full h-56 sm:h-64 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 italic px-4">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 z-10 p-2 md:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 z-10 p-2 md:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-12 bg-rose-700"
                    : "w-3 bg-white/50 hover:bg-white/80"
                } h-3`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
