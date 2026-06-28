import Accordion from "@/components/shared/Accordion";

const faqItems = [
  {
    question: "كم يستغرق توصيل الطلب؟",
    answer:
      "يتم توصيل الطلبات داخل القاهرة والجيزة خلال ٢-٣ أيام عمل، وخارجها خلال ٣-٥ أيام عمل.",
  },
  {
    question: "هل يمكنني إرجاع أو استبدال المنتج؟",
    answer:
      "نعم، يمكنك إرجاع أو استبدال المنتج خلال ٧ أيام من تاريخ الاستلام بشرط أن يكون بحالته الأصلية.",
  },
  {
    question: "هل الحقائب مصنوعة يدوياً بالكامل؟",
    answer:
      "نعم، كل حقيبة من HS مصنوعة يدوياً بعناية فائقة باستخدام كريستالات أصلية وخامات فاخرة.",
  },
  {
    question: "ما طرق الدفع المتاحة؟",
    answer:
      "نقبل الدفع عبر فيزا، ماستركارد، ميزة، والدفع عند الاستلام داخل مصر.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="mt-12" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="font-arabic text-xl font-bold text-charcoal mb-4 text-right"
        dir="rtl"
      >
        الأسئلة الشائعة
      </h2>
      <Accordion items={faqItems} />
    </section>
  );
}
