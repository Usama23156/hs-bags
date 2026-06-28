import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "subscribe"
  | "ghost"
  | "copper"
  | "primary-full";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-charcoal text-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-charcoal/90 transition-colors",
  "primary-full":
    "bg-charcoal text-white w-full py-3.5 text-sm font-medium hover:bg-charcoal/90 transition-colors",
  secondary:
    "border border-charcoal text-charcoal px-4 py-2 text-sm bg-white hover:bg-charcoal hover:text-white transition-colors",
  subscribe:
    "bg-gold text-charcoal px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold/90 transition-colors",
  copper:
    "bg-copper text-charcoal px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-copper/90 transition-colors",
  ghost: "text-charcoal hover:text-gold transition-colors",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
