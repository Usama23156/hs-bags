import Container from "@/components/shared/Container";

export default function ShopHero() {
  return (
    <section className="bg-shop-gold py-12 sm:py-16 lg:py-20" aria-labelledby="shop-hero-heading">
      <Container>
        <div className="text-right" dir="rtl">
          <h1
            id="shop-hero-heading"
            className="font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4"
          >
            مجموعة الكريستال الكاملة
          </h1>
          <p className="font-arabic text-sm sm:text-base text-charcoal/70 max-w-xl mr-0 ml-auto leading-relaxed">
            اكتشفي تشكيلتنا الكاملة من الحقائب المصنوعة يدوياً بكريستالات
            فاخرة، حيث يلتقي الفن بالأناقة في كل قطعة فريدة.
          </p>
        </div>
      </Container>
    </section>
  );
}
