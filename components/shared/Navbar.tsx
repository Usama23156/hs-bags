"use client";

import Link from "next/link";
import { Search, ShoppingBag, User, Star } from "lucide-react";
import Container from "@/components/shared/Container";
import MobileNav from "@/components/shared/MobileNav";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "/shop" },
  { label: "NEW COLLECTION", href: "/new-collection" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-hero-overlay backdrop-blur-sm border-b-black border border-border/50 pt-2 pb-1 ">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex flex-col items-start shrink-0 group">
            <div className="flex items-center gap-1">
              <img src="/images/logo.png" alt="" className="max-w-14" />
              <Star className="w-3 h-3 text-gold fill-gold" />
            </div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-muted">
              Handmade Bags
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
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

          <div className="flex items-center gap-3 sm:gap-5">
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
              <p>ENG</p>
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
            <MobileNav links={navLinks} variant="light" />
          </div>
        </div>
      </Container>
    </header>
  );
}
