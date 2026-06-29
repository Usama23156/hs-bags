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
      <div className="relative w-full h-125 sm:h-140 lg:h-155">
        <Image
          src="/images/hero.png"
          alt="Handmade crystal beaded bag lifestyle"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-cream/80 via-cream/40 to-transparent" />

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
      </div>
    </section>
  );
}
