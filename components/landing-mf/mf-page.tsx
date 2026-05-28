"use client";

/**
 * Mont Fort-style single-component landing page.
 *
 * One file, no abstractions. The whole page is a sequence of full-viewport
 * panels with scroll-snap, each one a single image + a single huge italic
 * line at the bottom-left, and a chapter index counter on the right edge
 * that updates as you scroll.
 *
 * This is intentionally NOT split into 8 sub-components like v2/v3/v4 were.
 * A single file is much easier for the user to review and is closer to the
 * "magazine page" feel where each panel is its own world.
 *
 * Imagery: warm-tone fashion / atmosphere / hand-and-jewelry shots from
 * Unsplash (Unsplash License — free for commercial use). NOT the imgur
 * product flat-lays from /lib/products — those read as e-commerce. Those
 * still appear in the <Shop /> grid below.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, stagger } from "motion/react";

import { useCart } from "@/components/providers/cart-provider";
import { useFavorites } from "@/components/providers/favorites-provider";
import { useUI } from "@/components/providers/ui-provider";

// -------- panel content -----------------------------------------------------
// Each entry is one full-viewport "page" of the magazine.
//
//   chapter  — small indicator number, e.g. "01 / 06"
//   kicker   — small uppercase line at the bottom (location-style label)
//   line     — the huge italic headline at the bottom-left
//   image    — Unsplash CDN URL, full-bleed
//   anchor   — id for the hash-link nav (optional)
//
// The first panel is the "cover" — no kicker, just the brand wordmark
// floating top-center.

interface Panel {
  chapter: string;
  kicker?: string;
  line: string;
  emWord: string;          // the word in `line` that gets rendered italic
  image: string;
  anchor?: string;
}

const u = (id: string, w = 2400) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

const PANELS: Panel[] = [
  {
    chapter: "01",
    line: "Aster, a curated edit",
    emWord: "edit",
    image: u("photo-1611591437281-460bfbe1220a"),
    anchor: "home",
  },
  {
    chapter: "02",
    kicker: "The maison",
    line: "Quiet pieces, noticed loudly",
    emWord: "loudly",
    image: u("photo-1535632787350-4e68ef0ac584"),
    anchor: "story",
  },
  {
    chapter: "03",
    kicker: "Hand-selected",
    line: "We don't sell jewelry, we curate",
    emWord: "curate",
    image: u("photo-1599643478518-a784e5dc4c8f"),
  },
  {
    chapter: "04",
    kicker: "Direct from boutique",
    line: "From Erbil to every governorate",
    emWord: "governorate",
    image: u("photo-1573408301185-9146fe634ad0"),
    anchor: "service",
  },
  {
    chapter: "05",
    kicker: "Personal styling",
    line: "Tell us the occasion, we reply in minutes",
    emWord: "minutes",
    image: u("photo-1612817288484-6f916006741a"),
  },
  {
    chapter: "06",
    kicker: "The collection",
    line: "Fifty-five pieces, one boutique",
    emWord: "boutique",
    image: u("photo-1602173574767-37ac01994b2a"),
    anchor: "shop-cta",
  },
];

// -------- nav ---------------------------------------------------------------

function MFNav() {
  const cart = useCart();
  const favs = useFavorites();
  const ui = useUI();

  return (
    <header className="mf-nav">
      <Link href="#home" className="mf-nav__brand">
        ASTER LUXURY
      </Link>
      <nav className="mf-nav__links" aria-label="Primary">
        <Link href="#story" className="mf-nav__link">Story</Link>
        <Link href="#service" className="mf-nav__link">Service</Link>
        <Link href="#shop" className="mf-nav__link">Shop</Link>
        <Link href="#contact" className="mf-nav__link">Contact</Link>
      </nav>
      <div className="mf-nav__actions">
        <button type="button" aria-label="Search" onClick={ui.openSearch}>
          <SearchGlyph />
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
          <HeartGlyph />
          {favs.count > 0 && <span className="mf-nav__dot" />}
        </button>
        <button type="button" aria-label="Cart" onClick={ui.openCart}>
          <BagGlyph />
          {cart.itemCount > 0 && <span className="mf-nav__dot" />}
        </button>
      </div>
    </header>
  );
}

// Inline glyphs — keep the chrome quiet. 1.25 stroke matches the fine
// Mont Fort weight better than lucide-react's defaults.
const SearchGlyph = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.25">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
const HeartGlyph = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.25">
    <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
  </svg>
);
const BagGlyph = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.25">
    <path d="M5 7h14l-1 13H6L5 7Z" />
    <path d="M9 7a3 3 0 1 1 6 0" />
  </svg>
);

// -------- the page itself ---------------------------------------------------

export function MFLanding() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Track which panel is in view → chapter counter on the right edge.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const panels = root.querySelectorAll<HTMLElement>("[data-panel]");
    const obs = new IntersectionObserver(
      (entries) => {
        let best = activeIdx;
        let bestRatio = 0;
        for (const e of entries) {
          if (e.intersectionRatio > bestRatio) {
            bestRatio = e.intersectionRatio;
            best = Number((e.target as HTMLElement).dataset.idx);
          }
        }
        if (!Number.isNaN(best)) setActiveIdx(best);
      },
      { threshold: [0.5, 0.75, 0.95] },
    );
    panels.forEach((p) => obs.observe(p));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // First-mount entrance: the cover image scales from 1.04 → 1, the
  // brand wordmark and the cover headline fade up in sequence.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cover = root.querySelector<HTMLImageElement>("[data-cover]");
    if (cover) {
      animate(cover, { opacity: [0, 1], scale: [1.04, 1] }, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    }
    animate(
      root.querySelectorAll<HTMLElement>("[data-cover-fade]"),
      { opacity: [0, 1], y: [16, 0] },
      { duration: 1, delay: stagger(0.1, { startDelay: 0.6 }), ease: [0.16, 1, 0.3, 1] },
    );
  }, []);

  // Scroll the panel rail with arrow keys (nice keyboard touch).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    function onKey(e: KeyboardEvent) {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      const panels = root!.querySelectorAll<HTMLElement>("[data-panel]");
      const target = panels[Math.max(0, Math.min(panels.length - 1, activeIdx + (e.key === "ArrowDown" ? 1 : -1)))];
      target?.scrollIntoView({ behavior: "smooth" });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx]);

  return (
    <>
      <MFNav />

      <div ref={rootRef} className="mf-rail">
        {PANELS.map((p, i) => {
          // Highlight just one word in the line by italicising it.
          const parts = renderLine(p.line, p.emWord);
          return (
            <section
              key={i}
              data-panel
              data-idx={i}
              id={p.anchor}
              className="mf-panel"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                {...(i === 0 ? { "data-cover": "true" } : {})}
                src={p.image}
                alt=""
                loading={i <= 1 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
                className="mf-panel__img"
              />
              <div className="mf-panel__shade" aria-hidden />

              {i === 0 && (
                <span className="mf-panel__brandtop" data-cover-fade>
                  ASTER LUXURY
                </span>
              )}

              {p.kicker && <span className="mf-panel__kicker">{p.kicker}</span>}

              <h2
                className="mf-panel__line"
                {...(i === 0 ? { "data-cover-fade": "true" } : {})}
              >
                {parts}
              </h2>

              {i === 0 && (
                <span className="mf-panel__corner" data-cover-fade>
                  Erbil — Iraq
                </span>
              )}
            </section>
          );
        })}

        {/* End-of-rail CTA panel — sends the visitor down to the existing
            shop. Not a panel image, just a typographic page on bone. */}
        <section
          data-panel
          data-idx={PANELS.length}
          id="shop-cta"
          className="mf-panel mf-panel--bone"
        >
          <div className="mf-cta">
            <span className="mf-cta__chapter">07 — Shop</span>
            <h2 className="mf-cta__line">
              Now &mdash; <em>browse</em>
              <br /> the <em>collection.</em>
            </h2>
            <Link href="#shop" className="mf-cta__link">
              Enter the boutique &nbsp;&rarr;
            </Link>
          </div>
        </section>
      </div>

      {/* Floating chapter counter on the right edge — fixed, doesn't
          scroll with the rail, updates from the IntersectionObserver. */}
      <div className="mf-counter" aria-hidden>
        <span className="mf-counter__pos">
          {String(activeIdx + 1).padStart(2, "0")}
        </span>
        <span className="mf-counter__rule" />
        <span className="mf-counter__total">
          {String(PANELS.length + 1).padStart(2, "0")}
        </span>
      </div>
    </>
  );
}

// Render a sentence with one word italicised. Case-insensitive match,
// keeps surrounding punctuation outside the <em>.
function renderLine(line: string, emWord: string) {
  const re = new RegExp(`\\b(${emWord})\\b`, "i");
  const parts = line.split(re);
  return parts.map((part, i) =>
    re.test(part) ? <em key={i}>{part}</em> : <span key={i}>{part}</span>,
  );
}
