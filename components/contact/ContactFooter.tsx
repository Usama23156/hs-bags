"use client";

import Link from "next/link";
import { Star, Phone, Mail } from "lucide-react";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

const quickLinks = [
  { label: "Shop", href: "/#shop" },
  { label: "New Collection", href: "/new-collection" },
  { label: "About us", href: "#" },
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

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-.584-2.043-1.561-3.439-2.897-4.5-1.433-1.1-3.296-1.655-5.573-1.67-2.889.02-5.11.94-6.617 2.741-1.41 1.687-2.087 4.053-2.113 7.005.026 2.953.703 5.318 2.113 7.005 1.507 1.8 3.728 2.721 6.617 2.741 2.277-.015 4.14-.57 5.573-1.67 1.336-1.061 2.313-2.457 2.897-4.5l2.04.569c-.651 2.337-1.832 4.177-3.509 5.467-1.783 1.373-4.08 2.078-6.826 2.098zM17.337 11.447c-.108-.546-.28-1.04-.51-1.474-.38-.72-.93-1.29-1.62-1.69-.69-.4-1.5-.6-2.4-.6-.9 0-1.71.2-2.4.6-.69.4-1.24.97-1.62 1.69-.23.434-.402.928-.51 1.474-.108.546-.162 1.12-.162 1.71s.054 1.164.162 1.71c.108.546.28 1.04.51 1.474.38.72.93 1.29 1.62 1.69.69.4 1.5.6 2.4.6.9 0 1.71-.2 2.4-.6.69-.4 1.24-.97 1.62-1.69.23-.434.402-.928.51-1.474.108-.546.162-1.12.162-1.71s-.054-1.164-.162-1.71zm-2.04 2.82c-.08.4-.22.75-.41 1.04-.19.29-.43.52-.71.68-.28.16-.6.24-.95.24-.35 0-.67-.08-.95-.24-.28-.16-.52-.39-.71-.68-.19-.29-.33-.64-.41-1.04-.08-.4-.12-.82-.12-1.27s.04-.87.12-1.27c.08-.4.22-.75.41-1.04.19-.29.43-.52.71-.68.28-.16.6-.24.95-.24.35 0 .67.08.95.24.28.16.52.39.71.68.19.29.33.64.41 1.04.08.4.12.82.12 1.27s-.04.87-.12 1.27z" />
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

export default function ContactFooter() {
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
              <SocialLink href="#" label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="#" label="Threads">
                <ThreadsIcon className="w-4 h-4" />
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
                0100 123 4567
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 shrink-0" />
                @hs.handmade.bags
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
          <p className="text-xs text-white/40 text-center sm:text-left flex-1">
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
