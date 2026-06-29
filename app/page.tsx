import Hero from "@/components/home/Hero";
import BestSellers from "@/components/home/BestSellers";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import TrustBadges from "@/components/home/TrustBadges";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function Home() {
  return (
    <>
      
      <main>
        <Hero />
        <BestSellers />
        <WhyChoose />
        <Testimonials />
        <TrustBadges />
      </main>
    </>
  );
}
