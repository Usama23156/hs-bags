import type { ReactNode } from "react";

type BadgeVariant = "label" | "product";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  label:
    "inline-block text-[10px] uppercase tracking-[0.2em] text-gold font-medium",
  product:
    "inline-block bg-charcoal text-white text-[10px] px-2.5 py-1 font-medium",
};

export default function Badge({
  children,
  variant = "label",
  className = "",
}: BadgeProps) {
  return (
    <span className={`${variantStyles[variant]} ${className}`}>{children}</span>
  );
}
