"use client";

import { useEffect, useRef, useState } from "react";
import { animate, inView } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { useUI } from "@/components/providers/ui-provider";
import { products } from "@/lib/products";
import type { ProductTag } from "@/lib/types";

/**
 * Horizontal drag-to-scroll collection rail (Mont Fort-style "House
 * Maps" section). Each tier is a full-bleed card filling most of the
 * viewport width; the user swipes/drags or uses the prev/next chevrons
 * to step through.
 *
 * Behaviour:
 *   - Native horizontal scroll (CSS scroll-snap), works without JS.
 *   - Prev/next buttons scroll one card-width on click.
 *   - Active card tracked via IntersectionObserver so the index counter
 *     updates as you scroll.
 *   - Clicking a card jumps to the matching shop filter.
 */

interface Tier {
  tag: ProductTag;
  label: string;
  numeral: string;
  caption: string;
}

const TIERS: Tier[] = [
  {
    tag: "trending",
    label: "Trending",
    numeral: "01",
    caption: "Worn often, noticed always.",
  },
  {
    tag: "exclusive",
    label: "Exclusive",
    numeral: "02",
    caption: "Quietly refined statement pieces.",
  },
  {
    tag: "limited",
    label: "Limited",
    numeral: "03",
    caption: "When it's gone, it's gone.",
  },
  {
    tag: "namaya",
    label: "Namaya",
    numeral: "04",
    caption: "The signature edit.",
  },
];

function representativeFor(tag: ProductTag) {
  return (
    products
      .filter((p) => p.tags.includes(tag))
      .sort((a, b) => {
        const an = parseInt(a.price.replace(/[^0-9]/g, ""), 10);
        const bn = parseInt(b.price.replace(/[^0-9]/g, ""), 10);
        return an - bn;
      })[0] ?? products[0]
  );
}

export function V3CollectionsRail() {
  const ui = useUI();
  const sectionRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Headline reveal on scroll-in.
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    return inView(
      root,
      () => {
        animate(
          root.querySelectorAll<HTMLElement>("[data-rail-fade]"),
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        );
      },
      { amount: 0.15 },
    );
  }, []);

  // Track which card is in the centre of the rail.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const cards = rail.querySelectorAll<HTMLElement>("[data-rail-card]");
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            if (!Number.isNaN(idx)) setActiveIdx(idx);
          }
        }
      },
      { root: rail, threshold: [0.5, 0.75] },
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  function step(dir: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    const cardWidth = rail.querySelector<HTMLElement>("[data-rail-card]")?.offsetWidth ?? 0;
    rail.scrollBy({ left: cardWidth * dir, behavior: "smooth" });
  }

  function jumpTo(tag: ProductTag) {
    ui.setFavoritesOnly(false);
    ui.setFilter(tag);
    requestAnimationFrame(() => {
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  return (
    <section ref={sectionRef} id="collections" className="v3-rail">
      <header className="v3-rail__head">
        <span className="v3-rail__eyebrow" data-rail-fade>
          The collection &mdash; in four lanes
        </span>
        <h2 className="v3-rail__title" data-rail-fade>
          Find <em>your</em>
          <br />
          way in.
        </h2>
        <div className="v3-rail__controls" data-rail-fade>
          <span className="v3-rail__count">
            {String(activeIdx + 1).padStart(2, "0")} <em>/</em>{" "}
            {String(TIERS.length).padStart(2, "0")}
          </span>
          <div className="v3-rail__nav">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => step(-1)}
              disabled={activeIdx === 0}
            >
              <ArrowLeft size={16} aria-hidden strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => step(1)}
              disabled={activeIdx === TIERS.length - 1}
            >
              <ArrowRight size={16} aria-hidden strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      <div ref={railRef} className="v3-rail__track" tabIndex={0}>
        {TIERS.map((tier, i) => {
          const piece = representativeFor(tier.tag);
          return (
            <button
              key={tier.tag}
              type="button"
              data-rail-card
              data-idx={i}
              className="v3-rail-card"
              onClick={() => jumpTo(tier.tag)}
            >
              <div className="v3-rail-card__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={piece.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="v3-rail-card__shade" aria-hidden />
              </div>
              <div className="v3-rail-card__copy">
                <span className="v3-rail-card__numeral">N&deg; {tier.numeral}</span>
                <h3 className="v3-rail-card__title">{tier.label}</h3>
                <p className="v3-rail-card__caption">{tier.caption}</p>
                <span className="v3-rail-card__cta">
                  Browse {tier.label.toLowerCase()} &nbsp;&rarr;
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <p className="v3-rail__note">
        Drag, scroll, or use the chevrons to step through.
      </p>
    </section>
  );
}
