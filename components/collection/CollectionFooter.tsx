"use client";

import Link from "next/link";
import { Star, Phone, Mail } from "lucide-react";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

const quickLinks = [
  { label: "Shop", href: "/shop" },
  { label: "New Collection", href: "/new-collection" },
  { label: "About us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Orders Tracking", href: "#" },
];

const helpLinks = [
  { label: "FAQs", href: "#" },
  { label: "Shipping & Delivery", href: "#" },
  { label: "Return Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-copper hover:text-copper transition-colors"
    >
      {children}
    </Link>
  );
}

export default function CollectionFooter() {
  return (
    <footer className="bg-charcoal text-white pt-12 sm:pt-16 pb-6">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="font-serif text-2xl font-bold">HS</span>
              <Star className="w-3 h-3 text-white fill-white" />
            </div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-white/50 block mb-4">
              Handmade Bags
            </span>
            <p className="font-arabic text-sm text-white/50 mb-6" dir="rtl">
              حقائب يدوية فاخرة مصنوعة بحب وشغف
            </p>
            <div className="flex items-center gap-3">
              <SocialLink href="#" label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="#" label="TikTok">
                <TikTokIcon className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="#" label="WhatsApp">
                <WhatsAppIcon className="w-4 h-4" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4 text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-copper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4 text-white/80">
              Help
            </h3>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-copper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4 text-white/80">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                +20 100 000 0000
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 shrink-0" />
                @hs_handmadebags
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                hello@hsbags.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4 text-white/80">
              Newsletter
            </h3>
            <p className="font-arabic text-sm text-white/50 mb-4" dir="rtl">
              اشتركي لتصلك أحدث التشكيلات والعروض الحصرية
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-copper transition-colors"
              />
              <Button variant="copper" type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2024 HS Handmade Bags. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-wider text-white/50 border border-white/20 rounded px-2 py-0.5">
              VISA
            </span>
            <span className="text-[10px] font-bold tracking-wider text-white/50 border border-white/20 rounded px-2 py-0.5">
              MC
            </span>
            <span className="text-[10px] font-bold tracking-wider text-white/50 border border-white/20 rounded px-2 py-0.5">
              MEEZA
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
