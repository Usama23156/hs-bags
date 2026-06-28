"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-right"
        dir="rtl"
        aria-expanded={isOpen}
      >
        <ChevronDown
          className={`w-4 h-4 text-muted shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
        <span className="font-arabic text-sm text-charcoal pr-4">
          {question}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4" dir="rtl">
          <p className="font-arabic text-sm text-muted leading-relaxed text-right">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}
