import { Truck, ShieldCheck, RotateCcw, Headphones, CreditCard } from "lucide-react";
import Container from "@/components/shared/Container";

const badges = [
  { icon: Truck, label: "شحن سريع" },
  { icon: ShieldCheck, label: "ضمان الجودة" },
  { icon: RotateCcw, label: "إرجاع سهل" },
  { icon: Headphones, label: "دعم 24/7" },
];

export default function TrustBadges() {
  return (
    <section className="py-8 sm:py-10 border-y border-border" aria-label="Trust badges">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-0">
          {badges.map(({ icon: Icon, label }, index) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-2 text-center px-4 ${
                index < badges.length - 1
                  ? "lg:border-r lg:border-border"
                  : ""
              }`}
              dir="rtl"
            >
              <Icon className="w-6 h-6 text-charcoal" strokeWidth={1.5} />
              <span className="font-arabic text-xs text-charcoal">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
