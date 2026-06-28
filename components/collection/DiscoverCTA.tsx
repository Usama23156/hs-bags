import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

export default function DiscoverCTA() {
  return (
    <section className="bg-beige py-10 sm:py-14">
      <Container>
        <div className="flex justify-center">
          <Button
            className="font-arabic normal-case tracking-normal text-base px-12 py-4"
          >
            اكتشف المجموعة الكاملة
          </Button>
        </div>
      </Container>
    </section>
  );
}
