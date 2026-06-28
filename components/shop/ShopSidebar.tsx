"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import Card from "@/components/shared/Card";
import FilterSection from "@/components/shop/FilterSection";

const colors = [
  { id: "black", label: "أسود", value: "#000000" },
  { id: "gold", label: "ذهبي", value: "#C5A059" },
  { id: "silver", label: "فضي", value: "#C0C0C0" },
  { id: "pink", label: "وردي", value: "#E8B4B8" },
];

const sizes = [
  { id: "small", label: "صغير" },
  { id: "medium", label: "متوسط" },
  { id: "large", label: "كبير" },
];

export default function ShopSidebar() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(3000);

  const toggleSize = (id: string) => {
    setSelectedSizes((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <aside aria-label="Product filters">
      <Card className="p-5 sm:p-6">
        <div
          className="flex items-center justify-between mb-4 pb-4 border-b border-border"
          dir="rtl"
        >
          <SlidersHorizontal
            className="w-4 h-4 text-muted"
            strokeWidth={1.5}
          />
          <h2 className="font-arabic text-base font-bold text-charcoal">
            تصفية وترتيب
          </h2>
        </div>

        <FilterSection title="اللون">
          <div className="flex flex-wrap gap-3 justify-end" dir="rtl">
            {colors.map((color) => (
              <button
                key={color.id}
                type="button"
                onClick={() =>
                  setSelectedColor(
                    selectedColor === color.id ? null : color.id
                  )
                }
                className="flex flex-col items-center gap-1.5 group"
                aria-label={color.label}
              >
                <span
                  className={`w-7 h-7 rounded-full border-2 transition-colors ${
                    selectedColor === color.id
                      ? "border-charcoal"
                      : "border-transparent group-hover:border-muted"
                  }`}
                  style={{ backgroundColor: color.value }}
                />
                <span className="font-arabic text-[10px] text-muted">
                  {color.label}
                </span>
              </button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="المقاس">
          <div className="space-y-3" dir="rtl">
            {sizes.map((size) => (
              <label
                key={size.id}
                className="flex items-center justify-end gap-3 cursor-pointer"
              >
                <span className="font-arabic text-sm text-charcoal">
                  {size.label}
                </span>
                <input
                  type="checkbox"
                  checked={selectedSizes.includes(size.id)}
                  onChange={() => toggleSize(size.id)}
                  className="w-4 h-4 accent-charcoal"
                />
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="السعر">
          <div dir="rtl">
            <p className="font-arabic text-xs text-muted mb-3 text-right">
              أسعار السعر
            </p>
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-charcoal mb-2"
            />
            <p className="font-arabic text-sm text-charcoal text-right">
              {priceRange.toLocaleString()} EGP من
            </p>
          </div>
        </FilterSection>
      </Card>
    </aside>
  );
}
