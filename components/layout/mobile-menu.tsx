"use client";

import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";

import { useUI } from "@/components/providers/ui-provider";
import { IG_URL, WA_NUMBER } from "@/lib/constants";
import { cn } from "@/lib/utils";

const MENU_LINKS = [
  { href: "#home", label: "Home", num: "01" },
  { href: "#shop", label: "Shop", num: "02" },
  { href: "#story", label: "Story", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
] as const;

// Inline WhatsApp glyph (lucide doesn't ship one in its core set).
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.45 0 .1 5.34.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.93 11.93 0 0 0 5.77 1.47h.01c6.59 0 11.93-5.34 11.93-11.93 0-3.19-1.24-6.18-3.46-8.42zM12.04 21.8a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.72.97.99-3.62-.23-.37A9.83 9.83 0 0 1 2.2 11.93c0-5.43 4.41-9.84 9.84-9.84 2.63 0 5.1 1.03 6.96 2.89a9.79 9.79 0 0 1 2.88 6.95c0 5.43-4.41 9.87-9.84 9.87zm5.4-7.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.46-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.46-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.46-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.5.07-.77.37-.26.3-1.01.99-1.01 2.41s1.04 2.79 1.18 2.99c.15.2 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.2-.57-.34z" />
    </svg>
  );
}

export function MobileMenu() {
  const ui = useUI();

  return (
    <div className={cn("mobile-menu", ui.menuOpen && "open")} id="mobile-menu">
      <nav>
        {MENU_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={ui.closeMenu}>
            <span className="num">{link.num}</span>
            <span>{link.label}</span>
            <ArrowRight size={16} aria-hidden />
          </Link>
        ))}
      </nav>
      <div className="mobile-menu-foot">
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden style={{ display: "inline-grid", placeItems: "center" }}>
            <WhatsAppIcon size={14} />
          </span>
          +964 750 330 7830
        </a>
        <a href={IG_URL} target="_blank" rel="noopener noreferrer">
          <span aria-hidden style={{ display: "inline-grid", placeItems: "center" }}>
            <Instagram size={14} />
          </span>
          @aster_luxury2
        </a>
      </div>
    </div>
  );
}
