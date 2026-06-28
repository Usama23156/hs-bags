import Container from "@/components/shared/Container";

export default function CollectionIntro() {
  return (
    <section className="bg-beige py-10 sm:py-14" aria-labelledby="collection-intro">
      <Container>
        <div className="text-center" dir="rtl">
          <p className="font-arabic text-sm text-copper mb-3">
            التشكيلة الجديدة
          </p>
          <h1
            id="collection-intro"
            className="font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal"
          >
            أحدث إبداعاتنا اليدوية
          </h1>
        </div>
      </Container>
    </section>
  );
}
