import Image from "next/image";
import Container from "@/components/shared/Container";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px]" aria-label="Contact hero">
      {/* PLACEHOLDER: Replace with hero collage image (bag + brand cards) */}
      <Image
        src="/images/placeholder-contact-hero.svg"
        alt="HS Handmade Bags contact hero"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <Container className="relative h-full flex items-center">
        <div className="bg-hero-overlay px-10 sm:px-16 py-10 sm:py-14">
          <h1
            className="font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal"
            dir="rtl"
          >
            اتصل بنا
          </h1>
        </div>
      </Container>
    </section>
  );
}
