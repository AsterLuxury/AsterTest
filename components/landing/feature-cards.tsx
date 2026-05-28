"use client";

import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion/react";
import { Compass, Gem, MessageCircle } from "lucide-react";

/**
 * Three feature cards, each with a glyph + title + body, in a responsive grid.
 *
 * Animation: each card starts at opacity 0 / y+24 and fades up in sequence
 * when the section enters the viewport. Uses Motion's imperative `inView`
 * + `animate` + `stagger` so we don't add per-card observers.
 */
const FEATURES = [
  {
    Icon: Gem,
    title: "Curated, not catalogued",
    body: "Every piece in the collection is selected by hand for craft, character, and the way it actually wears day to day.",
  },
  {
    Icon: Compass,
    title: "Iraq-wide delivery",
    body: "Direct dispatch across all governorates. No middlemen, no markup — confirmed and tracked over WhatsApp.",
  },
  {
    Icon: MessageCircle,
    title: "Personal styling",
    body: "Looking for something specific? Our team replies in minutes. Tell us the occasion and we'll suggest pieces that fit.",
  },
] as const;

export function FeatureCards() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    return inView(root, () => {
      animate(
        root.querySelectorAll<HTMLElement>("[data-feature-card]"),
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.6, delay: stagger(0.12), ease: [0.16, 1, 0.3, 1] },
      );
    }, { amount: 0.15 });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-[var(--paper)] py-[clamp(4rem,9vw,8rem)]"
    >
      <div className="container">
        <header className="mx-auto mb-[clamp(2rem,5vw,3.5rem)] max-w-[640px] text-center">
          <span className="section-label justify-center">
            <span className="label-dot" />
            What sets us apart
          </span>
          <h2 className="font-[var(--font-display)] text-[var(--fs-4xl)] font-normal leading-[1] tracking-[-0.025em] text-[var(--ink)]">
            Three things we do <em className="text-[var(--accent)]">differently.</em>
          </h2>
        </header>

        <div className="grid gap-[clamp(1.25rem,2.5vw,2rem)] sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, body }, i) => (
            <article
              key={title}
              data-feature-card
              className="feature-card"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              <div className="feature-card-glyph">
                <Icon size={20} aria-hidden />
              </div>
              <h3 className="font-[var(--font-display)] text-[1.5rem] font-medium leading-tight tracking-[-0.01em] text-[var(--ink)]">
                {title}
              </h3>
              <p className="text-[0.95rem] leading-[1.6] text-[var(--muted)]">
                {body}
              </p>
              <span className="feature-card-num" aria-hidden>
                0{i + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
