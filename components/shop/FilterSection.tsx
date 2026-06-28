"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface FilterSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function FilterSection({
  title,
  children,
  defaultOpen = true,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4"
        dir="rtl"
        aria-expanded={isOpen}
      >
        <ChevronDown
          className={`w-4 h-4 text-muted transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
        <span className="font-arabic text-sm font-medium text-charcoal">
          {title}
        </span>
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
}
