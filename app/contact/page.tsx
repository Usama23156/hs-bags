import ContactHero from "@/components/contact/ContactHero";
import ContactMain from "@/components/contact/ContactMain";
import ContactServiceBar from "@/components/shared/ServiceBar";


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
