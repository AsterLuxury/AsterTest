"use client";

import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion/react";

/**
 * Panel 5 — Three Principles.
 *
 * A pure typographic page. No images, no icons, no boxes — just three
 * large italic statements stacked vertically with hairline rules
 * between them. Reads like opening a magazine to a typographic break.
 *
 * Each principle reveals as a unit: Roman numeral fades first, the
 * statement rises from a line-mask, the supporting line fades last.
 */

const PRINCIPLES = [
  {
    num: "I.",
    statement: "Curated, not catalogued.",
    body: "Every piece is selected by hand for the way it actually wears.",
  },
  {
    num: "II.",
    statement: "Direct from boutique.",
    body: "No middlemen. No markup. Confirmed and tracked over WhatsApp.",
  },
  {
    num: "III.",
    statement: "Personal styling.",
    body: "Tell us the occasion in one message. We reply with three pieces.",
  },
] as const;

export function V4Principles() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    return inView(
      el,
      () => {
        animate(
          el.querySelectorAll<HTMLElement>("[data-pr-fade]"),
          { opacity: [0, 1], y: [24, 0] },
          { duration: 0.95, delay: stagger(0.18), ease: [0.16, 1, 0.3, 1] },
        );
      },
      { amount: 0.2 },
    );
  }, []);

  return (
    <section ref={root} className="v4-principles">
      <span className="v4-principles__chapter" data-pr-fade>
        IV. Three principles.
      </span>

      <div className="v4-principles__list">
        {PRINCIPLES.map((p) => (
          <article key={p.num} className="v4-principle" data-pr-fade>
            <span className="v4-principle__num">{p.num}</span>
            <h3 className="v4-principle__statement">{p.statement}</h3>
            <p className="v4-principle__body">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
