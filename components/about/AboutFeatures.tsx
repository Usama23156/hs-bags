import {
  CreditCard,
  Headphones,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Container from "@/components/shared/Container";

const features = [
  { icon: Headphones, label: "دعم عملاء 24/7" },
  { icon: RotateCcw, label: "استبدال واسترجاع سهل" },
  { icon: ShieldCheck, label: "تغليف آمن ومميز" },
  { icon: Truck, label: "شحن سريع داخل مصر" },
];

export default function AboutFeatures() {
  return (
    <section
      className="bg-[#f5f5f5] py-8 sm:py-10"
      aria-label="Service features"
    >
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2"
              dir="rtl"
            >
              <Icon className="w-5 h-5 text-muted" strokeWidth={1.5} />
              <span className="font-arabic text-[11px] text-muted leading-relaxed">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
