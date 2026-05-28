"use client";

import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion/react";

/**
 * Magazine-style feature blocks. Three full-width text-only entries
 * stacked vertically, each one a single-sentence statement with a
 * small index number on the left and a thin gold rule above. No icons,
 * no boxes, no buttons &mdash; the typography does all the talking.
 *
 * Reveal: each block fades up with a slight delay between them.
 */

const FEATURES = [
  {
    num: "I.",
    title: "Curated, not catalogued",
    body: "Every piece is selected by hand for craft, character, and the way it actually wears day to day.",
  },
  {
    num: "II.",
    title: "Direct from boutique",
    body: "No middlemen. No markup. Confirmed and tracked over WhatsApp, delivered across every Iraqi governorate.",
  },
  {
    num: "III.",
    title: "Personal styling",
    body: "Tell us the occasion in one message. We reply in minutes with three pieces that fit the brief.",
  },
] as const;

export function V3Features() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    return inView(
      root,
      () => {
        animate(
          root.querySelectorAll<HTMLElement>("[data-feature-block]"),
          { opacity: [0, 1], y: [24, 0] },
          { duration: 0.9, delay: stagger(0.18), ease: [0.16, 1, 0.3, 1] },
        );
      },
      { amount: 0.15 },
    );
  }, []);

  return (
    <section ref={sectionRef} className="v3-features" id="features">
      <header className="v3-features__head">
        <span className="v3-features__eyebrow">Three principles</span>
      </header>

      {FEATURES.map(({ num, title, body }) => (
        <article key={num} className="v3-feat" data-feature-block>
          <span className="v3-feat__num">{num}</span>
          <h3 className="v3-feat__title">{title}</h3>
          <p className="v3-feat__body">{body}</p>
        </article>
      ))}
    </section>
  );
}
