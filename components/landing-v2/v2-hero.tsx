"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, stagger } from "motion/react";
import { ArrowRight } from "lucide-react";

import { products } from "@/lib/products";
import { WA_NUMBER } from "@/lib/constants";

/**
 * Editorial hero: a single statement piece (AL-015 — the Trending Namaya
 * piece, which has the strongest hero photography in the catalogue) on
 * the right, oversized headline and intent-led copy on the left.
 *
 * Animations on mount:
 *   - eyebrow + headline + lede + CTAs fade-up in a tight stagger
 *   - the product image scales from 1.05 -> 1 over 1.4s for a soft
 *     "settling into focus" feel
 *
 * The "scroll" indicator at the bottom is purely decorative and
 * fades in last.
 */

const HERO_PIECE = products.find((p) => p.ref === "AL-015") ?? products[0];

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.45 0 .1 5.34.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.93 11.93 0 0 0 5.77 1.47h.01c6.59 0 11.93-5.34 11.93-11.93 0-3.19-1.24-6.18-3.46-8.42zM12.04 21.8a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.72.97.99-3.62-.23-.37A9.83 9.83 0 0 1 2.2 11.93c0-5.43 4.41-9.84 9.84-9.84 2.63 0 5.1 1.03 6.96 2.89a9.79 9.79 0 0 1 2.88 6.95c0 5.43-4.41 9.87-9.84 9.87zm5.4-7.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.46-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.46-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.46-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.5.07-.77.37-.26.3-1.01.99-1.01 2.41s1.04 2.79 1.18 2.99c.15.2 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.2-.57-.34z" />
    </svg>
  );
}

export function V2Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    animate(
      root.querySelectorAll<HTMLElement>("[data-fade]"),
      { opacity: [0, 1], y: [16, 0] },
      { duration: 0.9, delay: stagger(0.12, { startDelay: 0.2 }), ease: [0.16, 1, 0.3, 1] },
    );
    const img = root.querySelector<HTMLImageElement>("[data-hero-img]");
    if (img) {
      animate(
        img,
        { opacity: [0, 1], scale: [1.05, 1] },
        { duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="home" className="v2-hero">
      <div className="v2-hero__content">
        <span className="v2-hero__eyebrow" data-fade>
          <span className="v2-hero__dot" /> The 2026 Edit
        </span>

        <h1 className="v2-hero__headline" data-fade>
          Pieces worn
          <br />
          <em>without</em> permission.
        </h1>

        <p className="v2-hero__lede" data-fade>
          A small, fiercely curated collection of jewelry &mdash; chosen for
          women who already know what they want and don&apos;t need a brand
          to tell them they&apos;re luxurious.
        </p>

        <div className="v2-hero__actions" data-fade>
          <Link href="#collections" className="v2-cta v2-cta--primary">
            <span>View the collection</span>
            <span className="v2-cta__arrow">
              <ArrowRight size={18} aria-hidden />
            </span>
          </Link>

          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-cta v2-cta--ghost"
          >
            <WhatsAppIcon size={16} />
            <span>Talk to a stylist</span>
          </a>
        </div>

        <div className="v2-hero__meta" data-fade>
          <div>
            <span className="v2-hero__num">55</span>
            <span className="v2-hero__lbl">Curated pieces</span>
          </div>
          <div>
            <span className="v2-hero__num">2023</span>
            <span className="v2-hero__lbl">Boutique founded</span>
          </div>
          <div>
            <span className="v2-hero__num">Iraq</span>
            <span className="v2-hero__lbl">Wide delivery</span>
          </div>
        </div>
      </div>

      <div className="v2-hero__media">
        <div className="v2-hero__frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            data-hero-img
            src={HERO_PIECE.image}
            alt={`Aster ${HERO_PIECE.ref}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <span className="v2-hero__refchip">
            Featured &middot; Ref. {HERO_PIECE.ref}
          </span>
        </div>
      </div>

      <span className="v2-hero__scroll" data-fade aria-hidden>
        Scroll
      </span>
    </section>
  );
}
