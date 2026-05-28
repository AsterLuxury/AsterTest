"use client";

import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { useUI } from "@/components/providers/ui-provider";
import { products } from "@/lib/products";
import type { ProductTag } from "@/lib/types";

/**
 * "Pricing", reframed for a one-off-pieces store as three intent tiers:
 *   Trending  &mdash; everyday silhouettes
 *   Exclusive &mdash; refined statement pieces
 *   Limited   &mdash; single-run premium pieces
 *
 * Each tier card uses a real product image (cheapest matching piece)
 * as a full-bleed background with a black gradient overlay so the
 * white tier label and CTA stay legible on any underlying photo.
 *
 * Clicking a tier sets the matching shop filter and scrolls to the
 * shop grid below.
 */

interface Tier {
  tag: ProductTag;
  label: string;
  tagline: string;
  range: string;
}

const TIERS: Tier[] = [
  {
    tag: "trending",
    label: "Trending",
    tagline: "Worn often, noticed always.",
    range: "From 8,000 IQD",
  },
  {
    tag: "exclusive",
    label: "Exclusive",
    tagline: "Quietly refined statement pieces.",
    range: "From 8,000 IQD",
  },
  {
    tag: "limited",
    label: "Limited",
    tagline: "When it&apos;s gone, it&apos;s gone.",
    range: "From 8,000 IQD",
  },
];

function representativeFor(tag: ProductTag) {
  return products
    .filter((p) => p.tags.includes(tag))
    .sort((a, b) => {
      const an = parseInt(a.price.replace(/[^0-9]/g, ""), 10);
      const bn = parseInt(b.price.replace(/[^0-9]/g, ""), 10);
      return an - bn;
    })[0];
}

export function V2Collections() {
  const ui = useUI();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    return inView(
      root,
      () => {
        animate(
          root.querySelectorAll<HTMLElement>("[data-tier]"),
          { opacity: [0, 1], y: [28, 0] },
          { duration: 0.75, delay: stagger(0.12), ease: [0.16, 1, 0.3, 1] },
        );
      },
      { amount: 0.15 },
    );
  }, []);

  function jumpTo(tag: ProductTag) {
    ui.setFavoritesOnly(false);
    ui.setFilter(tag);
    requestAnimationFrame(() => {
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  return (
    <section ref={sectionRef} id="collections" className="v2-collections">
      <div className="v2-collections__inner">
        <header className="v2-collections__head">
          <span className="v2-eyebrow">
            <span className="v2-eyebrow__dot" /> Find your tier
          </span>
          <h2 className="v2-h2">
            Three lanes
            <br />
            <em>into</em> the boutique.
          </h2>
          <p className="v2-collections__lede">
            Same boutique, three intents. Pick the one that matches the moment
            &mdash; or browse them all in the shop below.
          </p>
        </header>

        <div className="v2-collections__grid">
          {TIERS.map((tier) => {
            const piece = representativeFor(tier.tag);
            return (
              <button
                key={tier.tag}
                type="button"
                data-tier
                className="v2-tier"
                onClick={() => jumpTo(tier.tag)}
              >
                <div className="v2-tier__media">
                  {piece && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={piece.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="v2-tier__shade" aria-hidden />
                </div>

                <div className="v2-tier__body">
                  <span className="v2-tier__eyebrow">{tier.label}</span>
                  <h3
                    className="v2-tier__tagline"
                    dangerouslySetInnerHTML={{ __html: tier.tagline }}
                  />
                  <div className="v2-tier__foot">
                    <span className="v2-tier__price">{tier.range}</span>
                    <span className="v2-tier__arrow">
                      <ArrowUpRight size={18} aria-hidden />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p className="v2-collections__note">
          Final pricing per piece is confirmed on WhatsApp before delivery.
        </p>
      </div>
    </section>
  );
}
