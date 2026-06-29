import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

const products = [
  { id: 1, name: "Crystal Glow Bag", price: "950 EGP" },
  { id: 2, name: "Pearl Elegance Bag", price: "1,200 EGP" },
  { id: 3, name: "Golden Sparkle Clutch", price: "850 EGP" },
  { id: 4, name: "Diamond Night Bag", price: "1,450 EGP" },
  { id: 5, name: "Royal Beaded Tote", price: "1,100 EGP" },
];

export default function BestSellers() {
  return (
    <section id="shop" className="py-12 sm:py-16 lg:py-20 bg-hero-overlay" aria-labelledby="best-sellers-heading ">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="text-center sm:text-left flex-1">
            <Badge className="mb-2 block">Handpicked for you</Badge>
            <h2
              id="best-sellers-heading"
              className="font-serif text-2xl sm:text-3xl text-charcoal"
            >
              Shop our best sellers
            </h2>
          </div>
          <Link
            href="#"
            className="text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors self-center sm:self-auto"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {products.map((product) => (
            <article key={product.id} className="group">
              <div className="relative bg-[#F0EEEA] aspect-[3/4] mb-3 overflow-hidden">
                {/* PLACEHOLDER: Replace with product image */}
                <Image
                  src="/images/placeholder-product.svg"
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute top-3 right-3 text-charcoal/40 hover:text-gold transition-colors"
                >
                  <Heart className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
              <h3 className="text-sm text-charcoal mb-1">{product.name}</h3>
              <p className="text-sm text-muted mb-3">{product.price}</p>
              <Button
                variant="secondary"
                className="w-full font-arabic text-sm normal-case tracking-normal"
              >
                اطلبي الآن
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
