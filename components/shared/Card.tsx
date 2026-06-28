import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-sm shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
