"use client";

import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

import { useUI } from "@/components/providers/ui-provider";
import { CONTACT_EMAIL, IG_URL, WA_NUMBER } from "@/lib/constants";
import type { ProductTag } from "@/lib/types";

/**
 * Dark editorial footer:
 *   - oversized brand wordmark dominates
 *   - 3 link columns underneath, set in small caps
 *   - thin gold rule above the bottom row
 */

const QUICK_FILTERS: { tag: ProductTag; label: string }[] = [
  { tag: "new", label: "New Arrivals" },
  { tag: "trending", label: "Trending" },
  { tag: "exclusive", label: "Exclusive" },
  { tag: "limited", label: "Limited" },
  { tag: "namaya", label: "Namaya" },
];

function WhatsAppIcon({ size = 14 }: { size?: number }) {
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

export function V2Footer() {
  const ui = useUI();
  const year = new Date().getFullYear();

  function handleQuickFilter(
    e: React.MouseEvent<HTMLAnchorElement>,
    tag: ProductTag,
  ) {
    e.preventDefault();
    ui.setFilter(tag);
    ui.setFavoritesOnly(false);
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer id="contact" className="v2-footer">
      <div className="v2-footer__inner">
        <div className="v2-footer__massive" aria-hidden>
          aster<em>luxury</em>
        </div>

        <div className="v2-footer__cols">
          <div>
            <h4>Navigate</h4>
            <Link href="#home">Home</Link>
            <Link href="#features">Features</Link>
            <Link href="#collections">Collections</Link>
            <Link href="#shop">Shop</Link>
            <Link href="#faq">FAQ</Link>
          </div>

          <div>
            <h4>Discover</h4>
            {QUICK_FILTERS.map((qf) => (
              <a
                key={qf.tag}
                href="#shop"
                onClick={(e) => handleQuickFilter(e, qf.tag)}
              >
                {qf.label}
              </a>
            ))}
          </div>

          <div>
            <h4>Reach Us</h4>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={14} /> +964 750 330 7830
            </a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer">
              <Instagram size={14} aria-hidden /> @aster_luxury2
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={14} aria-hidden /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="v2-footer__bottom">
          <span>&copy; {year} Aster Luxury</span>
          <span>Made in Iraq, with intent.</span>
        </div>
      </div>
    </footer>
  );
}
