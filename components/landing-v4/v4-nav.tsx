"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";

import { useCart } from "@/components/providers/cart-provider";
import { useFavorites } from "@/components/providers/favorites-provider";
import { useUI } from "@/components/providers/ui-provider";
import { cn } from "@/lib/utils";

/**
 * Sticky nav for the v4 design.
 *
 * Hidden during the cover panel (so the cover image is uninterrupted),
 * fades in once the user has scrolled past the cover. After that, sits
 * as a thin bone-on-ink bar with all-caps tracked-out links.
 */

const NAV_LINKS = [
  { href: "#story", label: "STORY" },
  { href: "#collections", label: "THE EDIT" },
  { href: "#shop", label: "SHOP" },
  { href: "#faq", label: "FAQ" },
] as const;

export function V4Nav() {
  const [visible, setVisible] = useState(false);
  const cart = useCart();
  const favs = useFavorites();
  const ui = useUI();

  useEffect(() => {
    const onScroll = () => {
      // Show once we're past 60% of the cover panel.
      setVisible(window.scrollY > Math.min(window.innerHeight * 0.6, 600));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("v4-nav", visible && "v4-nav--visible")}>
      <Link href="#home" className="v4-nav__brand" aria-label="Aster Luxury">
        ASTER LUXURY
      </Link>

      <nav className="v4-nav__links" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="v4-nav__link">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="v4-nav__actions">
        <button type="button" aria-label="Search" onClick={ui.openSearch}>
          <Search size={15} aria-hidden strokeWidth={1.25} />
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
          <Heart size={15} aria-hidden strokeWidth={1.25} />
          {favs.count > 0 && <span className="v4-nav__dot" />}
        </button>
        <button type="button" aria-label="Cart" onClick={ui.openCart}>
          <ShoppingBag size={15} aria-hidden strokeWidth={1.25} />
          {cart.itemCount > 0 && <span className="v4-nav__dot" />}
        </button>
        <button
          type="button"
          aria-label="Menu"
          className={cn("v4-nav__menu", ui.menuOpen && "v4-nav__menu--open")}
          onClick={ui.toggleMenu}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
