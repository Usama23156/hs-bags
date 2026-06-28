import SiteHeader from "@/components/shared/SiteHeader";
import ShopHero from "@/components/shop/ShopHero";
import ShopMain from "@/components/shop/ShopMain";
import ShopServiceBar from "@/components/shop/ShopServiceBar";
import ShopFooter from "@/components/shop/ShopFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function ShopPage() {
  return (
    <>
      <SiteHeader activeLink="SHOP" />
      <main>
        <ShopHero />
        <ShopMain />
        <ShopServiceBar />
      </main>
      <ShopFooter />
      <WhatsAppFloat />
    </>
  );
}
