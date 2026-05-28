"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";

import { useCart } from "@/components/providers/cart-provider";
import { useFavorites } from "@/components/providers/favorites-provider";
import { useUI } from "@/components/providers/ui-provider";
import { cn } from "@/lib/utils";

/**
 * Mont Fort-style nav. Almost-invisible chrome that lets the imagery
 * dominate the viewport.
 *
 * Behaviour:
 *   - Sits in absolute position over the hero (no opaque bar at first
 *     paint). Becomes sticky with a faint bone-cream background once
 *     the user scrolls below the hero.
 *   - Brand is a wordmark only, no glyph.
 *   - Nav links are ghost text with a very subtle underline on hover.
 *   - The right cluster is icon-only; cart/fav badges are just dots,
 *     not numbered pills, to keep visual weight low.
 */

const NAV_LINKS = [
  { href: "#story", label: "Story" },
  { href: "#collections", label: "Collections" },
  { href: "#shop", label: "Shop" },
  { href: "#contact", label: "Contact" },
] as const;

export function V3Nav() {
  const [scrolled, setScrolled] = useState(false);
  const cart = useCart();
  const favs = useFavorites();
  const ui = useUI();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("v3-nav", scrolled && "v3-nav--scrolled")}>
      <Link href="#home" className="v3-nav__brand" aria-label="Aster Luxury">
        ASTER LUXURY
      </Link>

      <nav className="v3-nav__links" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="v3-nav__link">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="v3-nav__actions">
        <button type="button" aria-label="Search" onClick={ui.openSearch}>
          <Search size={16} aria-hidden strokeWidth={1.25} />
        </button>
        <button
          type="button"
          aria-label="Favorites"
          onClick={() => {
            ui.setFavoritesOnly(true);
            ui.setFilter("all");
            document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Heart size={16} aria-hidden strokeWidth={1.25} />
          {favs.count > 0 && <span className="v3-nav__dot" />}
        </button>
        <button type="button" aria-label="Cart" onClick={ui.openCart}>
          <ShoppingBag size={16} aria-hidden strokeWidth={1.25} />
          {cart.itemCount > 0 && <span className="v3-nav__dot" />}
        </button>
        <button
          type="button"
          aria-label="Menu"
          className={cn("v3-nav__menu", ui.menuOpen && "v3-nav__menu--open")}
          onClick={ui.toggleMenu}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
