"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";

import { Brand } from "@/components/layout/brand";
import { useCart } from "@/components/providers/cart-provider";
import { useFavorites } from "@/components/providers/favorites-provider";
import { useUI } from "@/components/providers/ui-provider";
import { cn } from "@/lib/utils";

/**
 * Sticky navbar tailored for the marketing-first landing flow.
 *
 * Differs from the shop-focused <Header /> in two ways:
 *   - Nav links point to the new on-page sections (features, collections,
 *     FAQ, shop) rather than story/contact.
 *   - Visually goes nearly transparent at the top of the page and gains
 *     a blurred, bordered background once the user scrolls past the hero,
 *     so the hero copy isn't fighting a heavy bar on initial paint.
 *
 * Cart, favorites, and mobile-menu wiring is reused verbatim from the
 * existing Header so user state stays consistent across the site.
 */

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#collections", label: "Collections" },
  { href: "#shop", label: "Shop" },
  { href: "#faq", label: "FAQ" },
] as const;

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [pulsing, setPulsing] = useState(false);

  const cart = useCart();
  const favs = useFavorites();
  const ui = useUI();

  // Solid background appears once we've scrolled past ~30vh of the hero.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > Math.min(window.innerHeight * 0.3, 240));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is currently in view.
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

  // Pulse the cart icon when an item is added (re-uses provider counter).
  useEffect(() => {
    if (cart.pulseTrigger === 0) return;
    setPulsing(true);
    const t = setTimeout(() => setPulsing(false), 600);
    return () => clearTimeout(t);
  }, [cart.pulseTrigger]);

  return (
    <header
      className={cn("header landing-nav", scrolled && "scrolled")}
      id="landing-nav"
    >
      <Brand href="#home" />

      <nav className="nav-desktop" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "nav-link",
              activeId === link.href.slice(1) && "active",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="icon-btn"
          aria-label="Search"
          onClick={ui.openSearch}
        >
          <Search size={18} aria-hidden />
        </button>

        <button
          type="button"
          className="icon-btn"
          aria-label="Favorites"
          onClick={() => {
            ui.setFavoritesOnly(true);
            ui.setFilter("all");
            document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Heart size={18} aria-hidden />
          <span className={cn("dot-badge", favs.count > 0 && "show")}>
            {favs.count}
          </span>
        </button>

        <button
          type="button"
          className="icon-btn"
          aria-label="Cart"
          onClick={ui.openCart}
        >
          <ShoppingBag
            size={18}
            aria-hidden
            className={pulsing ? "in-cart-pulse" : undefined}
          />
          <span className={cn("dot-badge", cart.itemCount > 0 && "show")}>
            {cart.itemCount}
          </span>
        </button>

        <button
          type="button"
          className={cn("menu-toggle", ui.menuOpen && "active")}
          aria-label="Menu"
          onClick={ui.toggleMenu}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
