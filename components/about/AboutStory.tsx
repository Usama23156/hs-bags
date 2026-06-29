import Image from "next/image";
import Container from "@/components/shared/Container";

export default function AboutStory() {
  return (
    <section
      className="bg-about-cream py-12 sm:py-16 lg:py-20"
      aria-labelledby="about-story-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative aspect-5/6 w-full max-w-lg mx-auto lg:max-w-none overflow-hidden">
            {/* PLACEHOLDER: Replace with hands crafting beaded bag image */}
            <Image
              src="/images/about-hero.jpeg"
              alt="Artisan hands crafting a gold-beaded handbag"
              fill
              className="object-cover mask-[linear-gradient(to_bottom,blue_50%,transparent)] md:mask-[linear-gradient(to_right,blue_50%,transparent)] rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div dir="rtl">
            <h1
              id="about-story-heading"
              className="font-arabic text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-charcoal mb-6 leading-tight"
            >
              قصة شغف وبريق
            </h1>
            <div className="space-y-4 font-arabic text-sm sm:text-base text-charcoal/80 leading-relaxed text-right">
              <p>
                بدأت رحلة HS من شغف حقيقي بالحرف اليدوية وإيمان عميق بأن كل
                امرأة تستحق قطعة فريدة تعكس أناقتها. من ورشة صغيرة مليئة
                بالكريستالات واللؤلؤ، وُلدت أول حقيبة تحمل اسمنا.
              </p>
              <p>
                نختار بعناية فائقة أجود أنواع الكريستالات والخامات، ونصنع كل
                قطعة يدوياً بصبر ودقة لا تُضاهى. كل غرزة وكل حبة كريستال
                تُوضَع بيد حرفية ماهرة تضفي على الحقيبة بريقاً لا يُنسى.
              </p>
              <p>
                اليوم، نفخر بتقديم تشكيلات حصرية محدودة الإنتاج، تجمع بين
                الفن والأناقة، لتكون رفيقتك المثالية في كل مناسبة خاصة.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
