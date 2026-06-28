import Image from "next/image";
import { Heart } from "lucide-react";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";

interface ShopProductCardProps {
  name: string;
  price: string;
  isNew?: boolean;
}

export default function ShopProductCard({
  name,
  price,
  isNew = true,
}: ShopProductCardProps) {
  return (
    <article className="group text-center">
      <div className="relative bg-[#F0EEEA] aspect-square mb-4 overflow-hidden rounded-sm">
        {/* PLACEHOLDER: Replace with product image */}
        <Image
          src="/images/placeholder-product.svg"
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {isNew && (
          <Badge variant="product" className="absolute top-3 left-3">
            جديد
          </Badge>
        )}
        <button
          type="button"
          aria-label={`Add ${name} to wishlist`}
          className="absolute top-3 right-3 text-charcoal/40 hover:text-copper transition-colors"
        >
          <Heart className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
      <h3 className="text-sm text-charcoal mb-1">{name}</h3>
      <p className="text-sm font-bold text-charcoal mb-3">{price}</p>
      <Button
        variant="secondary"
        className="w-full font-arabic text-sm normal-case tracking-normal"
      >
        اطلب الآن
      </Button>
    </article>
  );
}
