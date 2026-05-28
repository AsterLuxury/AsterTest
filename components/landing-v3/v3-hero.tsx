"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, stagger } from "motion/react";

import { products } from "@/lib/products";

/**
 * Mont Fort-style hero: full viewport, single statement piece on the
 * right, oversized italic word-stack on the left.
 *
 * Animations on mount:
 *   - Each headline word fades + rises from below in stagger (the line
 *     mask is the parent .v3-hero-word-mask; the inner span is what
 *     actually translates).
 *   - Eyebrow + subtitle + CTA wash in 0.4s after the headline finishes.
 *   - The hero image scales 1.06 -> 1 over 1.6s for a "settling" feel.
 *
 * The right column extends the full hero height; on mobile the layout
 * collapses to image-on-top, copy-below.
 */

const HERO_PIECE = products.find((p) => p.ref === "AL-015") ?? products[0];

export function V3Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    // Each word reveals from the masked baseline.
    animate(
      root.querySelectorAll<HTMLElement>("[data-headline-word] > span"),
      { y: ["110%", "0%"] },
      { duration: 1.1, delay: stagger(0.08, { startDelay: 0.3 }), ease: [0.16, 1, 0.3, 1] },
    );

    // Supporting copy washes in after the headline.
    animate(
      root.querySelectorAll<HTMLElement>("[data-fade]"),
      { opacity: [0, 1], y: [12, 0] },
      { duration: 0.9, delay: stagger(0.1, { startDelay: 1.0 }), ease: [0.16, 1, 0.3, 1] },
    );

    // Hero image settles.
    const img = root.querySelector<HTMLImageElement>("[data-hero-img]");
    if (img) {
      animate(
        img,
        { opacity: [0, 1], scale: [1.06, 1] },
        { duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="home" className="v3-hero">
      <div className="v3-hero__copy">
        <span className="v3-hero__eyebrow" data-fade>
          The 2026 Edit
        </span>

        <h1 className="v3-hero__headline" aria-label="Worn quietly. Noticed always.">
          <span className="v3-hero-word-mask" data-headline-word>
            <span>Worn</span>
          </span>
          <span className="v3-hero-word-mask" data-headline-word>
            <span><em>quietly.</em></span>
          </span>
          <span className="v3-hero-word-mask" data-headline-word>
            <span>Noticed</span>
          </span>
          <span className="v3-hero-word-mask" data-headline-word>
            <span><em>always.</em></span>
          </span>
        </h1>

        <p className="v3-hero__sub" data-fade>
          A small, fiercely curated collection of jewelry &mdash; chosen
          for women who already know what they want.
        </p>

        <div className="v3-hero__cta-row" data-fade>
          <Link href="#collections" className="v3-link">
            Discover the collection
          </Link>
        </div>
      </div>

      <div className="v3-hero__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-hero-img
          src={HERO_PIECE.image}
          alt={`Aster ${HERO_PIECE.ref}`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="v3-hero__corner" data-fade>
        <span>Ref. {HERO_PIECE.ref}</span>
        <span className="v3-hero__corner-rule" />
        <span>{HERO_PIECE.price}</span>
      </div>

      <span className="v3-hero__index" data-fade aria-hidden>
        N&deg; 01
      </span>
    </section>
  );
}
