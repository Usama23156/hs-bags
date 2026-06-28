import {
  Package,
  ShieldCheck,
  RotateCcw,
  Headphones,
  CreditCard,
} from "lucide-react";
import Container from "@/components/shared/Container";

const services = [
  { icon: Package, label: "شحن سريع" },
  { icon: ShieldCheck, label: "تغليف آمن" },
  { icon: RotateCcw, label: "إرجاع سهل" },
  { icon: Headphones, label: "دعم 24/7" },
  { icon: CreditCard, label: "دفع إلكتروني" },
];

export default function ShopServiceBar() {
  return (
    <section
      className="bg-[#f5f5f5] py-8 sm:py-10 border-t border-border"
      aria-label="Service features"
    >
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2"
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
