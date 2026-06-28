"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Hand, Gem, Sparkles } from "lucide-react";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

const features = [
  { icon: Hand, label: "HANDMADE" },
  { icon: Gem, label: "LUXURY CRYSTALS" },
  { icon: Sparkles, label: "LIMITED PIECES" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  return (
    <section className="relative w-full overflow-hidden" aria-label="Hero">
      {/* Background Image — PLACEHOLDER: Replace with hero lifestyle image */}
      <div className="relative w-full h-[500px] sm:h-[560px] lg:h-[620px]">
        <Image
          src="/images/placeholder-hero.svg"
          alt="Handmade crystal beaded bag lifestyle"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/80 via-cream/40 to-transparent" />

        <Container className="relative h-full flex flex-col justify-center">
          <div className="max-w-lg">
            <Badge className="mb-4">Handmade with passion</Badge>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight text-charcoal mb-4">
              Handmade Crystal Beaded Bags
            </h1>
            <p className="text-muted text-sm sm:text-base mb-8">
              Crafted with love, designed to shine.
            </p>
            <Button>Shop Now</Button>
          </div>

          {/* Features */}
          <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 flex items-center gap-6 sm:gap-10">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.15em] text-charcoal hidden sm:inline">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Container>

        {/* Carousel arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/60 hover:text-charcoal transition-colors"
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={1} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setActiveSlide((prev) => (prev + 1) % totalSlides)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/60 hover:text-charcoal transition-colors"
        >
          <ChevronRight className="w-6 h-6" strokeWidth={1} />
        </button>

        {/* Carousel dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveSlide(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeSlide ? "bg-charcoal" : "bg-charcoal/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
