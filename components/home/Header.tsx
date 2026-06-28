"use client";

import Link from "next/link";
import { Search, ShoppingBag, User, Star } from "lucide-react";
import Container from "@/components/shared/Container";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "/shop" },
  { label: "NEW COLLECTION", href: "/new-collection" },
  { label: "ABOUT US", href: "#" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border/50">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start shrink-0 group">
            <div className="flex items-center gap-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-charcoal">
                HS
              </span>
              <Star className="w-3 h-3 text-gold fill-gold" />
            </div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-muted">
              Handmade Bags
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.15em] text-charcoal hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              type="button"
              aria-label="Search"
              className="text-charcoal hover:text-gold transition-colors"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Account"
              className="text-charcoal hover:text-gold transition-colors hidden sm:block"
            >
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Shopping bag"
              className="relative text-charcoal hover:text-gold transition-colors"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <nav
          className="lg:hidden flex items-center justify-center gap-4 pb-3 overflow-x-auto"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.12em] text-charcoal hover:text-gold transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
