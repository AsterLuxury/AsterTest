"use client";

import { useEffect, useRef, useState } from "react";
import { animate, inView } from "motion/react";

import { useUI } from "@/components/providers/ui-provider";
import type { ProductTag } from "@/lib/types";

import { editorial } from "./imagery";

/**
 * Panel 4 — Chapters (horizontal magazine flip).
 *
 * Full-viewport-height horizontal scroll. Four oversized image cards,
 * one per chapter (Trending / Exclusive / Limited / Namaya). Each card
 * fills most of the viewport so the user perceives the section as a
 * sequence of pages rather than a row of items.
 *
 * Behaviour:
 *   - Native horizontal scroll with scroll-snap, no JS required to
 *     navigate. Drag, swipe, mouse wheel, or arrow keys all work.
 *   - Active chapter index tracked via IntersectionObserver, used to
 *     drive the small bottom-left index counter ("01 — 04 / Trending").
 *   - Clicking a chapter sets the matching shop filter and jumps
 *     down to the shop section.
 *   - Lifestyle imagery from Unsplash (NOT the real catalogue) so the
 *     panel reads as editorial photography. Real products live in the
 *     shop section below.
 */

interface Chapter {
  tag: ProductTag;
  numeral: string;
  label: string;
  caption: string;
}

const CHAPTERS: Chapter[] = [
  {
    tag: "trending",
    numeral: "01",
    label: "Trending",
    caption: "The pieces worn most. Quiet, repeatable, restocked often.",
  },
  {
    tag: "exclusive",
    numeral: "02",
    label: "Exclusive",
    caption: "Hand-picked editions for the women who collect rather than shop.",
  },
  {
    tag: "limited",
    numeral: "03",
    label: "Limited",
    caption: "Single-run pieces. When they\u2019re gone, they don\u2019t come back.",
  },
  {
    tag: "namaya",
    numeral: "04",
    label: "Namaya",
    caption: "The signature edit. The reason most women find us.",
  },
];

export function V4Chapters() {
  const ui = useUI();
  const root = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Headline reveal on scroll-in.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    return inView(
      el,
      () => {
        animate(
          el.querySelectorAll<HTMLElement>("[data-chapter-fade]"),
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        );
      },
      { amount: 0.2 },
    );
  }, []);

  // Track which chapter is centered in the rail.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = rail.querySelectorAll<HTMLElement>("[data-chapter-card]");

    const obs = new IntersectionObserver(
      (entries) => {
        let best = -1;
        let bestRatio = 0;
        for (const entry of entries) {
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            best = Number((entry.target as HTMLElement).dataset.idx);
          }
        }
        if (best >= 0) setActiveIdx(best);
      },
      { root: rail, threshold: [0.4, 0.6, 0.8] },
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  function jumpTo(tag: ProductTag) {
    ui.setFavoritesOnly(false);
    ui.setFilter(tag);
    requestAnimationFrame(() => {
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  const active = CHAPTERS[activeIdx] ?? CHAPTERS[0];

  return (
    <section ref={root} id="collections" className="v4-chapters">
      <div className="v4-chapters__caption" data-chapter-fade>
        <span className="v4-chapters__caption-num">III.</span>
        <span>The Edit, in four chapters &mdash; scroll, drag, or swipe.</span>
      </div>

      <div ref={railRef} className="v4-chapters__rail" tabIndex={0}>
        {CHAPTERS.map((ch, i) => {
          const img = editorial.chapters[i] ?? editorial.chapters[0];
          return (
            <button
              key={ch.tag}
              type="button"
              data-chapter-card
              data-idx={i}
              onClick={() => jumpTo(ch.tag)}
              className="v4-chapter"
              aria-label={`Open ${ch.label} chapter`}
            >
              <div className="v4-chapter__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.url} alt="" loading="lazy" decoding="async" />
                <div className="v4-chapter__shade" aria-hidden />
              </div>
              <div className="v4-chapter__copy">
                <span className="v4-chapter__numeral">N&deg; {ch.numeral}</span>
                <h3 className="v4-chapter__title">{ch.label}</h3>
                <p className="v4-chapter__caption">{ch.caption}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="v4-chapters__index" data-chapter-fade>
        <span className="v4-chapters__index-pos">
          {String(activeIdx + 1).padStart(2, "0")} <em>/</em>{" "}
          {String(CHAPTERS.length).padStart(2, "0")}
        </span>
        <span className="v4-chapters__index-rule" aria-hidden />
        <span className="v4-chapters__index-label">{active.label}</span>
      </div>
    </section>
  );
}
