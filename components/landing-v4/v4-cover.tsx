"use client";

import { useEffect, useRef } from "react";
import { animate } from "motion/react";

import { editorial } from "./imagery";

/**
 * Panel 1 — Cover.
 *
 * One full-viewport image. No buttons, no eyebrow pill, no scroll
 * indicator, no stats. Just:
 *   - The image
 *   - Brand wordmark, top-center, very small
 *   - One huge italic line near the bottom-left:
 *     "Aster — A Curated Edit"
 *
 * On mount:
 *   - Image opacity 0 → 1 over 1.6s with a tiny scale-down (1.05 → 1)
 *     to feel like a magazine page settling.
 *   - Wordmark + headline fade up after the image is mostly settled.
 */
export function V4Cover() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const img = el.querySelector<HTMLImageElement>("[data-cover-img]");
    if (img) {
      animate(
        img,
        { opacity: [0, 1], scale: [1.05, 1] },
        { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
      );
    }

    animate(
      el.querySelectorAll<HTMLElement>("[data-cover-fade]"),
      { opacity: [0, 1], y: [16, 0] },
      { duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
    );
  }, []);

  return (
    <section ref={root} id="home" className="v4-cover">
      <div className="v4-cover__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-cover-img
          src={editorial.cover.url}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="v4-cover__shade" aria-hidden />
      </div>

      <span className="v4-cover__wordmark" data-cover-fade aria-hidden>
        ASTER LUXURY
      </span>

      <h1 className="v4-cover__headline" data-cover-fade>
        <span>Aster &mdash;</span>
        <span>
          <em>A Curated Edit.</em>
        </span>
      </h1>

      <span className="v4-cover__meta" data-cover-fade>
        Erbil, Iraq &mdash; Since 2023
      </span>
    </section>
  );
}
