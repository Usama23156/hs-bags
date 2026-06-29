import Hero from "@/components/home/Hero";
import BestSellers from "@/components/home/BestSellers";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import TrustBadges from "@/components/home/TrustBadges";

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
