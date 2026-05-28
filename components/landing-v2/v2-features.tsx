"use client";

import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion/react";
import { Compass, Gem, MessageCircle } from "lucide-react";

/**
 * Three features in dark cards, set against a near-black backdrop.
 * Stagger reveals on enter-viewport. Hover lifts the card 6px and
 * pulls a thin gold rule across the bottom edge (CSS, not motion).
 */

const FEATURES = [
  {
    Icon: Gem,
    eyebrow: "01",
    title: "Curated, not catalogued",
    body: "Every piece is selected by hand &mdash; for craft, for character, and for the way it actually wears day to day.",
  },
  {
    Icon: Compass,
    eyebrow: "02",
    title: "Direct from boutique",
    body: "No middlemen, no markup. Confirmed and tracked over WhatsApp, delivered across every Iraqi governorate.",
  },
  {
    Icon: MessageCircle,
    eyebrow: "03",
    title: "Personal styling",
    body: "Tell us the occasion in a single message. We reply in minutes with three pieces that fit the brief.",
  },
] as const;

export function V2Features() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    return inView(
      root,
      () => {
        animate(
          root.querySelectorAll<HTMLElement>("[data-feat]"),
          { opacity: [0, 1], y: [28, 0] },
          { duration: 0.7, delay: stagger(0.12), ease: [0.16, 1, 0.3, 1] },
        );
      },
      { amount: 0.2 },
    );
  }, []);

  return (
    <section ref={sectionRef} id="features" className="v2-features">
      <div className="v2-features__inner">
        <header className="v2-features__head">
          <span className="v2-eyebrow">
            <span className="v2-eyebrow__dot" /> What sets us apart
          </span>
          <h2 className="v2-h2">
            Three things we
            <br />
            do <em>differently.</em>
          </h2>
        </header>

        <div className="v2-features__grid">
          {FEATURES.map(({ Icon, eyebrow, title, body }) => (
            <article key={eyebrow} data-feat className="v2-feat">
              <span className="v2-feat__num">{eyebrow}</span>
              <Icon size={22} aria-hidden className="v2-feat__icon" />
              <h3 className="v2-feat__title">{title}</h3>
              <p
                className="v2-feat__body"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
