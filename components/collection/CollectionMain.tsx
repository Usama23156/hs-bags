import Image from "next/image";
import Container from "@/components/shared/Container";
import InquiryForm from "@/components/collection/InquiryForm";
import ProductCard from "@/components/collection/ProductCard";

const products = [
  { id: 1, name: "حقيبة الشروق الكريستالي", price: "1,200 EGP" },
  { id: 2, name: "حقيبة اللؤلؤ الفاخرة", price: "1,450 EGP" },
  { id: 3, name: "حقيبة النجوم المتلألئة", price: "980 EGP" },
  { id: 4, name: "حقيبة المساء الذهبية", price: "1,350 EGP" },
  { id: 5, name: "حقيبة الكريستال الملكية", price: "1,600 EGP" },
  { id: 6, name: "حقيبة الأناقة الليلية", price: "1,100 EGP" },
];

export default function CollectionMain() {
  return (
    <section className="bg-beige py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden">
              {/* PLACEHOLDER: Replace with featured model lifestyle image */}
              <Image
                src="/images/placeholder-featured-model.svg"
                alt="Crystal Dawn Collection featured model"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div dir="rtl">
              <h2 className="font-arabic text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                تشكيلة الفجر الكريستالي
              </h2>
              <p className="font-arabic text-sm text-muted leading-relaxed">
                مستوحاة من ضوء الفجر الأول، تجمع هذه التشكيلة بين أناقة
                الكريستالات اللامعة وتفاصيل اللؤلؤ الرقيقة. كل قطعة مصنوعة
                يدوياً بعناية فائقة لتمنحك إطلالة فريدة لا تُنسى.
              </p>
            </div>

            <InquiryForm />
          </div>

          {/* Right Column */}
          <div>
            <h2
              className="font-arabic text-xl sm:text-2xl font-bold text-charcoal mb-6 text-right"
              dir="rtl"
            >
              أبرز قطع التشكيلة
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
