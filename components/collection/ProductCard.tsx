import Image from "next/image";
import { Heart } from "lucide-react";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";

interface ProductCardProps {
  name: string;
  price: string;
  isNew?: boolean;
  badgeText?: string;
}

export default function ProductCard({
  name,
  price,
  isNew = true,
  badgeText = "جديد",
}: ProductCardProps) {
  return (
    <article className="group">
      <div className="relative bg-[#F0EEEA] aspect-square mb-3 overflow-hidden">
        {/* PLACEHOLDER: Replace with product image */}
        <Image
          src="/images/placeholder-product.svg"
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {isNew && (
          <Badge variant="product" className="absolute top-3 left-3">
            {badgeText}
          </Badge>
        )}
        <button
          type="button"
          aria-label={`Add ${name} to wishlist`}
          className="absolute top-3 right-3 text-white hover:text-copper transition-colors"
        >
          <Heart className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
      <h3 className="font-arabic text-sm text-charcoal mb-1 text-right" dir="rtl">
        {name}
      </h3>
      <p className="text-sm text-charcoal mb-3">{price}</p>
      <Button
        variant="secondary"
        className="w-full font-arabic text-sm normal-case tracking-normal"
      >
        اطلب الآن
      </Button>
    </article>
  );
}
