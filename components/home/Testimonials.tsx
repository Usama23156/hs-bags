"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Card from "@/components/shared/Card";
import Container from "@/components/shared/Container";

const testimonials = [
  {
    id: 1,
    text: "الحقيبة أجمل مما توقعت! التفاصيل رائعة والجودة ممتازة. أنصح بها بشدة لكل من تبحث عن قطعة فاخرة.",
    name: "سارة أحمد",
    avatar: "/images/placeholder-avatar.svg",
  },
  {
    id: 2,
    text: "اشتريت الحقيبة كهدية وكانت النتيجة مذهلة. التغليف أنيق والحقيبة تلمع بشكل لا يصدق.",
    name: "نور حسن",
    avatar: "/images/placeholder-avatar.svg",
  },
  {
    id: 3,
    text: "خدمة عملاء ممتازة وتوصيل سريع. الحقيبة فخمة وتستحق كل جنيه. شكراً HS!",
    name: "مريم علي",
    avatar: "/images/placeholder-avatar.svg",
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-hero-overlay" aria-labelledby="testimonials-heading ">
      <Container>
        <h2
          id="testimonials-heading"
          className="font-serif text-2xl sm:text-3xl text-charcoal text-center mb-10 sm:mb-14"
        >
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Testimonial cards */}
          <div>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={`p-5 sm:p-6 transition-opacity duration-300 ${
                    index === activeSlide ? "opacity-100" : "opacity-60 hidden sm:block"
                  }`}
                >
                  <p
                    className="font-arabic text-sm text-charcoal leading-relaxed mb-4"
                    dir="rtl"
                  >
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-gold fill-gold"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {/* PLACEHOLDER: Replace with customer avatar */}
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium text-charcoal">
                      {testimonial.name}
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setActiveSlide(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === activeSlide ? "bg-charcoal" : "bg-charcoal/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Lifestyle image */}
          <div className="relative aspect-5/6 w-full max-w-md mx-auto lg:max-w-none">
            {/* PLACEHOLDER: Replace with lifestyle image of person wearing bag */}
            <Image
              src="/images/home-about.jpeg"
              alt="Customer wearing HS handmade bag"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
