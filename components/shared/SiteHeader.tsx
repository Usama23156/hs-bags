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

interface SiteHeaderProps {
  activeLink?: string;
}

export default function SiteHeader({ activeLink }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-charcoal">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex flex-col items-start shrink-0">
            <div className="relative flex items-center">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                H
              </span>
              <div className="relative">
                <Star className="absolute -top-2 left-0 w-2.5 h-2.5 text-white fill-white" />
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  S
                </span>
              </div>
            </div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-white/60">
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
                className={`text-[11px] uppercase tracking-[0.15em] text-white hover:text-copper transition-colors ${
                  link.label === activeLink
                    ? "border-b border-white pb-0.5"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              aria-label="Search"
              className="text-white hover:text-copper transition-colors"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Account"
              className="text-white hover:text-copper transition-colors hidden sm:block"
            >
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Shopping bag"
              className="relative text-white hover:text-copper transition-colors"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <MobileNav links={navLinks} activeLink={activeLink} variant="dark" />
          </div>
        </div>
      </Container>
    </header>
  );
}
