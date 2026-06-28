import { Gem, Hand, Sparkles, Gift } from "lucide-react";
import Container from "@/components/shared/Container";

const reasons = [
  {
    icon: Gem,
    title: "جودة فاخرة",
    description: "كريستالات أصلية وخامات عالية الجودة في كل قطعة",
  },
  {
    icon: Hand,
    title: "صناعة يدوية",
    description: "كل حقيبة مصنوعة يدوياً بعناية فائقة وحب",
  },
  {
    icon: Sparkles,
    title: "تصاميم حصرية",
    description: "قطع محدودة الإنتاج لتتميزي بإطلالة فريدة",
  },
  {
    icon: Gift,
    title: "تغليف أنيق",
    description: "تغليف فاخر يناسب الهدايا والمناسبات الخاصة",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="why-choose-heading">
      <Container>
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-gold" strokeWidth={1.5} />
            <h2
              id="why-choose-heading"
              className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium"
            >
              Why Choose HS?
            </h2>
            <Sparkles className="w-4 h-4 text-gold" strokeWidth={1.5} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center" dir="rtl">
              <div className="flex justify-center mb-4">
                <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-arabic text-base font-bold text-charcoal mb-2">
                {title}
              </h3>
              <p className="font-arabic text-sm text-muted leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
