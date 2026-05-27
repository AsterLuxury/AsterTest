"use client";

import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion/react";
import { ArrowRight } from "lucide-react";

import { useUI } from "@/components/providers/ui-provider";
import { products } from "@/lib/products";
import type { ProductTag } from "@/lib/types";

/**
 * The "pricing" section, reframed for a curated jewelry store.
 *
 * Aster sells one-of-a-kind pieces, not subscription tiers, so a true
 * pricing table would be misleading. Instead we surface three tiers by
 * tag + price range that map cleanly to the existing shop filters:
 *
 *   Trending  · everyday under 9k IQD
 *   Exclusive · refined 9–10k IQD
 *   Limited   · statement 10k+ IQD
 *
 * Each tier card picks one representative piece (cheapest match in tag) for
 * its preview image and links back to the shop with the matching filter
 * applied via UIProvider — so clicking a tier takes the user to the filtered
 * grid below instead of out to a separate /pricing page.
 */

interface Tier {
  tag: ProductTag;
  label: string;
  tagline: string;
  range: string;
  highlights: string[];
  ctaLabel: string;
}

const TIERS: Tier[] = [
  {
    tag: "trending",
    label: "Trending",
    tagline: "Everyday pieces, worn often.",
    range: "From 8,000 IQD",
    highlights: [
      "Most-loved silhouettes",
      "Wears with everything",
      "Restocked frequently",
    ],
    ctaLabel: "Browse trending",
  },
  {
    tag: "exclusive",
    label: "Exclusive",
    tagline: "Quietly refined statement pieces.",
    range: "From 8,000 IQD",
    highlights: [
      "Hand-picked editions",
      "Distinctive details",
      "Limited availability",
    ],
    ctaLabel: "Browse exclusive",
  },
  {
    tag: "limited",
    label: "Limited",
    tagline: "When it's gone, it's gone.",
    range: "From 8,000 IQD",
    highlights: [
      "Single-run pieces",
      "Premium materials",
      "First-come, first-served",
    ],
    ctaLabel: "Browse limited",
  },
];

// For each tier, pick the cheapest in-tag piece as the preview image.
function representativeFor(tag: ProductTag) {
  const match = products
    .filter((p) => p.tags.includes(tag))
    .sort((a, b) => {
      const an = parseInt(a.price.replace(/[^0-9]/g, ""), 10);
      const bn = parseInt(b.price.replace(/[^0-9]/g, ""), 10);
      return an - bn;
    });
  return match[0];
}

export function FeaturedCollections() {
  const ui = useUI();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    return inView(root, () => {
      animate(
        root.querySelectorAll<HTMLElement>("[data-tier]"),
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.65, delay: stagger(0.12), ease: [0.16, 1, 0.3, 1] },
      );
    }, { amount: 0.15 });
  }, []);

  function jumpToFilteredShop(tag: ProductTag) {
    ui.setFavoritesOnly(false);
    ui.setFilter(tag);
    requestAnimationFrame(() => {
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="relative bg-[var(--paper)] py-[clamp(4rem,9vw,8rem)]"
    >
      <div className="container">
        <header className="mx-auto mb-[clamp(2rem,5vw,3.5rem)] max-w-[680px] text-center">
          <span className="section-label justify-center">
            <span className="label-dot" />
            Find your tier
          </span>
          <h2 className="font-[var(--font-display)] text-[var(--fs-4xl)] font-normal leading-[1] tracking-[-0.025em] text-[var(--ink)]">
            Three ways <em className="text-[var(--accent)]">to enter</em> the collection.
          </h2>
          <p className="mt-4 text-[var(--fs-lg)] leading-[1.6] text-[var(--muted)]">
            Same boutique, three intents. Pick the lane that matches the moment.
          </p>
        </header>

        <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-3">
          {TIERS.map((tier, i) => {
            const piece = representativeFor(tier.tag);
            const isHighlight = i === 1; // middle tier visually emphasized
            return (
              <article
                key={tier.tag}
                data-tier
                className={`tier-card${isHighlight ? " tier-card-highlight" : ""}`}
                style={{ opacity: 0, transform: "translateY(24px)" }}
              >
                {isHighlight && (
                  <span className="tier-card-flag">Most loved</span>
                )}

                <div className="tier-card-preview" aria-hidden>
                  {piece && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={piece.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>

                <div className="tier-card-head">
                  <span className="tier-card-eyebrow">{tier.label}</span>
                  <h3 className="font-[var(--font-display)] text-[1.85rem] font-normal leading-[1.05] tracking-[-0.015em] text-[var(--ink)]">
                    {tier.tagline}
                  </h3>
                </div>

                <p className="tier-card-range">{tier.range}</p>

                <ul className="tier-card-list">
                  {tier.highlights.map((h) => (
                    <li key={h}>
                      <span aria-hidden>◆</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={isHighlight ? "cta cta-block" : "cta-link"}
                  onClick={() => jumpToFilteredShop(tier.tag)}
                >
                  {isHighlight ? (
                    <>
                      <span>{tier.ctaLabel}</span>
                      <span className="cta-arrow">
                        <ArrowRight size={18} aria-hidden />
                      </span>
                    </>
                  ) : (
                    <>
                      {tier.ctaLabel}
                      <ArrowRight size={14} aria-hidden />
                    </>
                  )}
                </button>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[0.85rem] text-[var(--muted)]">
          Final pricing per piece is confirmed on WhatsApp before delivery.
        </p>
      </div>
    </section>
  );
}
