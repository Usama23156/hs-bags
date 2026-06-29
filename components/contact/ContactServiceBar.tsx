import {
  Truck,
  ShieldCheck,
  Headphones,
  CreditCard,
  RotateCcw,
} from "lucide-react";
import Container from "@/components/shared/Container";

const services = [
  {
    icon: Truck,
    title: "شحن سريع",
    subtitle: "توصيل لجميع المحافظات",
  },
  {
    icon: ShieldCheck,
    title: "ضمان الجودة",
    subtitle: "منتجات أصلية 100%",
  },
  {
    icon: Headphones,
    title: "دعم 24/7",
    subtitle: "نحن هنا لمساعدتك",
  },
  {
    icon: RotateCcw,
    title: "إرجاع سهل",
    subtitle: "سياسة إرجاع مرنة",
  },
];

export default function ContactServiceBar() {
  return (
    <section
      className="bg-[#f0f0f0] py-8 sm:py-10"
      aria-label="Service features"
    >
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-4">
          {services.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-2"
              dir="rtl"
            >
              <Icon className="w-6 h-6 text-charcoal" strokeWidth={1.5} />
              <span className="font-arabic text-xs font-medium text-charcoal">
                {title}
              </span>
              <span className="font-arabic text-[10px] text-muted">
                {subtitle}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
