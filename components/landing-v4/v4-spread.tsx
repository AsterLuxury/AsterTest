"use client";

import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion/react";

import { editorial } from "./imagery";

/**
 * Panel 3 — Editorial spread.
 *
 * Two-column, full-height. Left half is an ink panel with a quoted
 * line of editorial copy. Right half is a full-bleed lifestyle image.
 * No frames, no shadows, no buttons. The two halves meet at a hard edge.
 *
 * Reveal: the image scales 1.06 → 1 + opacity, in parallel with each
 * word of the quote rising from a line mask.
 */

const QUOTE = [
  "We don\u2019t",
  "sell jewelry.",
  "We curate the",
  "few pieces a",
  "woman actually",
  "keeps.",
];

export function V4Spread() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    return inView(
      el,
      () => {
        const img = el.querySelector<HTMLImageElement>("[data-spread-img]");
        if (img) {
          animate(
            img,
            { opacity: [0, 1], scale: [1.06, 1] },
            { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
          );
        }
        animate(
          el.querySelectorAll<HTMLElement>("[data-quote-line] > span"),
          { y: ["110%", "0%"] },
          { duration: 1, delay: stagger(0.07), ease: [0.16, 1, 0.3, 1] },
        );
        animate(
          el.querySelectorAll<HTMLElement>("[data-spread-meta]"),
          { opacity: [0, 1] },
          { duration: 0.8, delay: 1 },
        );
      },
      { amount: 0.3 },
    );
  }, []);

  return (
    <section ref={root} id="story" className="v4-spread">
      <div className="v4-spread__left">
        <span className="v4-spread__chapter" data-spread-meta>
          II. The maison
        </span>

        <p className="v4-spread__quote">
          {QUOTE.map((line, i) => (
            <span key={i} className="v4-spread__line" data-quote-line>
              <span>{line}</span>
            </span>
          ))}
        </p>

        <span className="v4-spread__attr" data-spread-meta>
          <span className="v4-spread__attr-rule" aria-hidden />
          Aster Luxury, Erbil
        </span>
      </div>

      <div className="v4-spread__right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-spread-img
          src={editorial.spread.url}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
