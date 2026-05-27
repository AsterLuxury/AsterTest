"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";

import { Brand } from "./brand";
import { useCart } from "@/components/providers/cart-provider";
import { useFavorites } from "@/components/providers/favorites-provider";
import { useUI } from "@/components/providers/ui-provider";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#shop", label: "Shop" },
  { href: "#story", label: "Story" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pulsing, setPulsing] = useState(false);

  const cart = useCart();
  const favs = useFavorites();
  const ui = useUI();

  // .scrolled class once the page has moved past 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active nav link based on which section is in view
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const ids = ["home", "shop", "story", "contact"];
      let current = "home";
      for (const id of ids) {
        const sec = document.getElementById(id);
        if (sec && window.scrollY >= sec.offsetTop - 150) current = id;
      }
      setActiveSection(current);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cart icon pulse — triggered by cart-provider's pulseTrigger counter
  useEffect(() => {
    if (cart.pulseTrigger === 0) return;
    setPulsing(true);
    const t = setTimeout(() => setPulsing(false), 600);
    return () => clearTimeout(t);
  }, [cart.pulseTrigger]);

  return (
    <header className={cn("header", scrolled && "scrolled")} id="header">
      <Brand />

      <nav className="nav-desktop">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "nav-link",
              activeSection === link.href.slice(1) && "active",
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
            const el = document.getElementById("shop");
            el?.scrollIntoView({ behavior: "smooth" });
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
