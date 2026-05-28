"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";

import { useCart } from "@/components/providers/cart-provider";
import { useFavorites } from "@/components/providers/favorites-provider";
import { useUI } from "@/components/providers/ui-provider";
import { cn } from "@/lib/utils";

/**
 * Dark editorial sticky nav.
 *
 * Visual language: thin gold rule line under the bar instead of a
 * background. Black-on-black with gold accent on hover. Logo is the
 * brand wordmark only (no SVG mark) to keep the chrome quiet so the
 * hero photography can do the talking.
 */

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#collections", label: "Collections" },
  { href: "#shop", label: "Shop" },
  { href: "#faq", label: "FAQ" },
] as const;

export function V2Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const cart = useCart();
  const favs = useFavorites();
  const ui = useUI();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const ids = ["home", "features", "social", "collections", "shop", "faq"];
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) current = id;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => { update(); raf = 0; });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className={cn("v2-nav", scrolled && "v2-nav--scrolled")}>
      <Link href="#home" className="v2-nav__brand" aria-label="Aster Luxury">
        Aster<em>Luxury</em>
      </Link>

      <nav className="v2-nav__links" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "v2-nav__link",
              activeId === link.href.slice(1) && "v2-nav__link--active",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="v2-nav__actions">
        <button type="button" aria-label="Search" onClick={ui.openSearch}>
          <Search size={18} aria-hidden />
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
          <Heart size={18} aria-hidden />
          {favs.count > 0 && (
            <span className="v2-nav__badge">{favs.count}</span>
          )}
        </button>
        <button type="button" aria-label="Cart" onClick={ui.openCart}>
          <ShoppingBag size={18} aria-hidden />
          {cart.itemCount > 0 && (
            <span className="v2-nav__badge">{cart.itemCount}</span>
          )}
        </button>
        <button
          type="button"
          aria-label="Menu"
          className={cn("v2-nav__menu", ui.menuOpen && "v2-nav__menu--open")}
          onClick={ui.toggleMenu}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
