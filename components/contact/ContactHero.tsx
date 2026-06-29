import Image from "next/image";
import Container from "@/components/shared/Container";

export default function ContactHero() {
  return (
    <section className="relative w-full h-70 sm:h-85 lg:h-95" aria-label="Contact hero">
      {/* PLACEHOLDER: Replace with hero collage image (bag + brand cards) */}
      <Image
        src="/images/contact.jpeg"
        alt="HS Handmade Bags contact hero"
        fill
        priority
        className="object-cover mask-[linear-gradient(to_bottom,blue_50%,transparent)]"
        sizes="100vw"
      />
      <Container className="relative h-full flex items-end">
        <div className="bg-hero-overlay px-10 sm:px-16 py-10 sm:py-14 rounded-3xl">
          <h1
            className="font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal "
            dir="rtl"
          >
            اتصل بنا
          </h1>
        </div>
      </Container>
    </section>
  );
}
