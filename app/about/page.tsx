import SiteHeader from "@/components/shared/SiteHeader";
import AboutStory from "@/components/about/AboutStory";
import BehindScenes from "@/components/about/BehindScenes";
import AboutFeatures from "@/components/about/AboutFeatures";



export default function AboutPage() {
  return (
    <>
     
      <main>
        <AboutStory />
        <BehindScenes />
        <AboutFeatures />
      </main>
    </>
  );
}
