"use client";

import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion/react";
import { Quote } from "lucide-react";

/**
 * Social proof has two strips:
 *   1. A stats band (since-2023, 55 pieces, 100% authentic, Iraq-wide delivery)
 *      that fades up as a unit.
 *   2. Three testimonial cards. The copy below is intentionally marked as
 *      placeholder text — replace with real customer quotes before launch.
 *      Faking testimonials would be misleading.
 */

const STATS = [
  { num: "2023", lbl: "Boutique founded" },
  { num: "55", lbl: "Curated pieces" },
  { num: "100%", lbl: "Authentic" },
  { num: "Iraq", lbl: "Wide delivery" },
] as const;

const TESTIMONIALS = [
  {
    // PLACEHOLDER — replace with real customer quote, name, and city.
    quote: "Replace me with a real customer quote. The pieces feel intentional, the messaging is direct, and delivery is genuinely fast.",
    author: "Customer name",
    city: "Erbil",
  },
  {
    quote: "Replace me with a real customer quote. Their team helped me pick a piece for an event over WhatsApp in under ten minutes.",
    author: "Customer name",
    city: "Baghdad",
  },
  {
    quote: "Replace me with a real customer quote. Quality matched the photos exactly — nothing oversold, nothing missing from the description.",
    author: "Customer name",
    city: "Sulaymaniyah",
  },
] as const;

export function SocialProof() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    return inView(root, () => {
      animate(
        root.querySelectorAll<HTMLElement>("[data-stat]"),
        { opacity: [0, 1], y: [12, 0] },
        { duration: 0.5, delay: stagger(0.06), ease: [0.16, 1, 0.3, 1] },
      );
      animate(
        root.querySelectorAll<HTMLElement>("[data-testimonial]"),
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, delay: stagger(0.1, { startDelay: 0.2 }), ease: [0.16, 1, 0.3, 1] },
      );
    }, { amount: 0.1 });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="social"
      className="relative bg-[var(--paper-warm)] py-[clamp(4rem,9vw,7rem)]"
    >
      <div className="container">
        <header className="mx-auto mb-[clamp(2rem,5vw,3rem)] max-w-[640px] text-center">
          <span className="section-label justify-center">
            <span className="label-dot" />
            By the numbers
          </span>
          <h2 className="font-[var(--font-display)] text-[var(--fs-4xl)] font-normal leading-[1] tracking-[-0.025em] text-[var(--ink)]">
            A boutique <em className="text-[var(--accent)]">trusted</em> across Iraq.
          </h2>
        </header>

        <div className="stats-band">
          {STATS.map((s) => (
            <div
              key={s.lbl}
              data-stat
              className="stats-cell"
              style={{ opacity: 0, transform: "translateY(12px)" }}
            >
              <span className="stats-num">{s.num}</span>
              <span className="stats-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>

        <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-[clamp(1.25rem,2.5vw,2rem)] md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-testimonial
              className="testimonial-card"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <Quote
                size={22}
                aria-hidden
                className="text-[var(--accent-light)]"
              />
              <blockquote className="text-[0.96rem] leading-[1.65] text-[var(--ink-soft)]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-4 text-[0.78rem] text-[var(--muted)]">
                <span className="testimonial-avatar" aria-hidden>
                  {t.author.charAt(0)}
                </span>
                <span>
                  <strong className="block font-medium text-[var(--ink)]">
                    {t.author}
                  </strong>
                  <span className="text-[0.72rem] tracking-[0.15em] uppercase">
                    {t.city}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted-soft)]">
          ◇ Testimonials above are placeholders — replace before launch ◇
        </p>
      </div>
    </section>
  );
}
