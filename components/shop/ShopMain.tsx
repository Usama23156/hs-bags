import Container from "@/components/shared/Container";
import ShopSidebar from "@/components/shop/ShopSidebar";
import ShopProductGrid from "@/components/shop/ShopProductGrid";

export default function ShopMain() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <Container>
        <h2
          className="font-arabic text-xl sm:text-2xl text-charcoal text-center mb-10"
          dir="rtl"
        >
          صفحة المتجر
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-10">
          <ShopSidebar />
          <ShopProductGrid />
        </div>
      </Container>
    </section>
  );
}
