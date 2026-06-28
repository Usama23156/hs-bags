import SiteHeader from "@/components/shared/SiteHeader";
import AboutStory from "@/components/about/AboutStory";
import BehindScenes from "@/components/about/BehindScenes";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutFooter from "@/components/about/AboutFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function AboutPage() {
  return (
    <>
      <SiteHeader activeLink="ABOUT US" />
      <main>
        <AboutStory />
        <BehindScenes />
        <AboutFeatures />
      </main>
      <AboutFooter />
      <WhatsAppFloat />
    </>
  );
}
