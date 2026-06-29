import Image from "next/image";
import Container from "@/components/shared/Container";

export default function BehindScenes() {
  return (
    <section
      className="bg-white py-12 sm:py-16 lg:py-20"
      aria-labelledby="behind-scenes-heading"
    >
      <Container>
        <h2
          id="behind-scenes-heading"
          className="font-arabic text-2xl sm:text-3xl font-bold text-charcoal text-center mb-10 sm:mb-14"
          dir="rtl"
        >
          ما وراء الكواليس
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute inset-0 -z-10 bg-shop-gold/30 rounded-sm translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 grid-rows-[auto_auto_auto] gap-2 sm:gap-3">
            <div className="col-start-1 row-start-1 relative aspect-square overflow-hidden">
              {/* PLACEHOLDER: Replace with beads selection image */}
              <Image
                src="/images/about2.jpeg"
                alt="Hands selecting beads from a tray"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>

            <div className="col-start-2 row-start-1 row-span-2 relative min-h-70 sm:min-h-90 overflow-hidden">
              {/* PLACEHOLDER: Replace with shimmering beaded handbag image */}
              <Image
                src="/images/about1.jpeg"
                alt="Fully beaded shimmering handbag"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>

            <div className="col-start-1 row-start-2 relative aspect-square overflow-hidden">
              {/* PLACEHOLDER: Replace with pearl bag detail image */}
              <Image
                src="/images/about3.jpeg"
                alt="Hands opening a pearl-encrusted bag"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>

            <div className="col-start-2 row-start-3 relative aspect-square overflow-hidden">
              {/* PLACEHOLDER: Replace with purse inspection image */}
              <Image
                src="/images/about4.jpeg"
                alt="Gloved hands inspecting a beaded purse"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
