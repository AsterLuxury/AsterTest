"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Panel 7 — FAQ.
 *
 * A long index-style table. Each row: numeral + display-italic
 * question + ochre +/– glyph. Answers slide open in place via
 * motion height auto. No "card" wrappers, no shadows — just rules.
 */

const QUESTIONS = [
  {
    q: "How quickly will my order arrive?",
    a: "Inside Erbil and Sulaymaniyah we typically deliver within 24 to 48 hours. Other governorates take 2 to 5 business days. We always confirm the window on WhatsApp before dispatching.",
  },
  {
    q: "How do I pay?",
    a: "Cash on delivery is supported across Iraq. Bank transfer or FastPay can be arranged before dispatch — whichever works best for you.",
  },
  {
    q: "Are returns or exchanges possible?",
    a: "Yes. If a piece arrives damaged or doesn\u2019t match the listing, message us within 48 hours and we\u2019ll replace or refund. Change-of-mind exchanges are accepted on most pieces, subject to condition.",
  },
  {
    q: "Are the pieces authentic?",
    a: "Every piece is sourced and inspected directly. We never list anything we wouldn\u2019t wear ourselves. We\u2019ll happily walk you through materials and craftsmanship.",
  },
  {
    q: "Can I request something not in the catalogue?",
    a: "Yes. Tell us the style, occasion, and budget — we\u2019ll suggest pieces from our wider network. Custom sourcing usually takes 5 to 14 days.",
  },
  {
    q: "Do you offer sizing guidance?",
    a: "For rings and bracelets we\u2019ll talk you through measuring at home and double-check before dispatch. The first resize is on us.",
  },
] as const;

export function V4FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="v4-faq">
      <header className="v4-faq__head">
        <span className="v4-faq__chapter">V. Common questions.</span>
      </header>

      <dl className="v4-faq__list">
        {QUESTIONS.map((item, i) => {
          const isOpen = openIdx === i;
          const numeral = String(i + 1).padStart(2, "0");
          return (
            <div
              key={item.q}
              className={cn("v4-faq__row", isOpen && "v4-faq__row--open")}
            >
              <dt>
                <button
                  type="button"
                  className="v4-faq__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`v4-faq-${i}`}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <span className="v4-faq__numeral">{numeral}</span>
                  <span className="v4-faq__q">{item.q}</span>
                  <span className="v4-faq__sign" aria-hidden>
                    {isOpen ? "\u2013" : "+"}
                  </span>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    id={`v4-faq-${i}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="v4-faq__panel-wrap"
                  >
                    <div className="v4-faq__panel">{item.a}</div>
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
