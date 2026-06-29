import SiteHeader from "@/components/shared/SiteHeader";
import ContactHero from "@/components/contact/ContactHero";
import ContactMain from "@/components/contact/ContactMain";
import ContactServiceBar from "@/components/contact/ContactServiceBar";
import ContactFooter from "@/components/contact/ContactFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <ContactMain />
        <ContactServiceBar />
      </main>
     
    </>
  );
}
