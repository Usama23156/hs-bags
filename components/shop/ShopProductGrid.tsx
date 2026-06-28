"use client";

import { useState } from "react";
import ShopProductCard from "@/components/shop/ShopProductCard";

const products = [
  { id: 1, name: "Golden Peak Bag", price: "1,200 EGP" },
  { id: 2, name: "Midnight Wave Bag", price: "1,450 EGP" },
  { id: 3, name: "Crystal Dawn Clutch", price: "980 EGP" },
  { id: 4, name: "Pearl Elegance Tote", price: "1,350 EGP" },
  { id: 5, name: "Royal Sparkle Bag", price: "1,600 EGP" },
  { id: 6, name: "Silver Moon Clutch", price: "1,100 EGP" },
  { id: 7, name: "Diamond Night Bag", price: "1,750 EGP" },
  { id: 8, name: "Sunset Glow Tote", price: "1,280 EGP" },
];

const totalPages = 3;

export default function ShopProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {products.map((product) => (
          <ShopProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>

      <nav
        className="flex items-center justify-end gap-2 mt-10"
        dir="rtl"
        aria-label="Pagination"
      >
        <span className="font-arabic text-sm text-muted ml-2">
          أرقام الصفحات
        </span>
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 text-sm flex items-center justify-center transition-colors ${
                currentPage === page
                  ? "bg-charcoal text-white"
                  : "text-charcoal hover:text-copper"
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}
        <span className="text-muted text-sm">...</span>
      </nav>
    </div>
  );
}
