"use client";

import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion/react";

/**
 * Panel 2 — Manifesto.
 *
 * Pure typographic page. No image, no chrome. Bone background.
 * One sentence in massive italic display, centered, broken into words
 * so each word can fade in stagger when the section enters the viewport.
 *
 * The sentence intentionally puts the "loudly" on its own line for
 * visual punctuation.
 */
export function V4Manifesto() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    return inView(
      el,
      () => {
        animate(
          el.querySelectorAll<HTMLElement>("[data-word]"),
          { opacity: [0, 1], y: [24, 0] },
          { duration: 1, delay: stagger(0.08), ease: [0.16, 1, 0.3, 1] },
        );
        animate(
          el.querySelectorAll<HTMLElement>("[data-meta]"),
          { opacity: [0, 1] },
          { duration: 0.8, delay: 1.2 },
        );
      },
      { amount: 0.4 },
    );
  }, []);

  // Each "word" actually contains a few characters that we'll style as one
  // "phrase" unit — the manifesto is short enough to itemize manually.
  const phrases: { text: string; em?: boolean; brk?: boolean }[] = [
    { text: "Quiet" },
    { text: "pieces," },
    { text: "noticed", brk: true },
    { text: "loudly.", em: true },
  ];

  return (
    <section ref={root} className="v4-manifesto">
      <span className="v4-manifesto__hint" data-meta aria-hidden>
        I.
      </span>

      <p className="v4-manifesto__line" aria-label="Quiet pieces, noticed loudly.">
        {phrases.map((p, i) => (
          <span key={i} data-word className="v4-manifesto__word">
            {p.brk && <br />}
            {p.em ? <em>{p.text}</em> : p.text}{" "}
          </span>
        ))}
      </p>

      <span className="v4-manifesto__caption" data-meta>
        A manifesto, not a tagline.
      </span>
    </section>
  );
}
