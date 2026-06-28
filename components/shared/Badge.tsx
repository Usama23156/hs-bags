import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block text-[10px] uppercase tracking-[0.2em] text-gold font-medium ${className}`}
    >
      {children}
    </span>
  );
}
