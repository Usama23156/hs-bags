import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";

export default function ContactMain() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactForm />
          <div>
            <ContactInfo />
            <ContactFAQ />
          </div>
        </div>
      </Container>
    </section>
  );
}
