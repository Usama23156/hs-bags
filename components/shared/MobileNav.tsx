"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  links: NavLink[];
  activeLink?: string;
  variant?: "dark" | "light";
}

export default function MobileNav({
  links,
  activeLink,
  variant = "dark",
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const textColor = variant === "dark" ? "text-white" : "text-charcoal";
  const hoverColor =
    variant === "dark" ? "hover:text-copper" : "hover:text-gold";
  const activeBorder =
    variant === "dark" ? "border-white" : "border-charcoal";
  const menuBg = variant === "dark" ? "bg-charcoal" : "bg-cream";
  const buttonColor =
    variant === "dark"
      ? "text-white hover:text-copper"
      : "text-charcoal hover:text-gold";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-colors ${buttonColor}`}
      >
        {isOpen ? (
          <X className="w-6 h-6" strokeWidth={1.5} />
        ) : (
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        )}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 top-16 z-40 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <nav
            className={`fixed top-16 left-0 right-0 z-50 ${menuBg} border-b border-border/30 shadow-lg`}
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col py-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-3.5 text-sm uppercase tracking-[0.15em] transition-colors ${textColor} ${hoverColor} ${
                      link.label === activeLink
                        ? `border-l-2 ${activeBorder} font-medium`
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
