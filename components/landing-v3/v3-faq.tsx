"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Index-style FAQ. Each question reads like a line in a table of
 * contents: numeral on the left, question in display italic, answer
 * unfolds beneath when clicked. No "+" icon, no boxes &mdash; just
 * type and rule lines.
 */

const QUESTIONS = [
  {
    q: "How quickly will my order arrive?",
    a: "Inside Erbil and Sulaymaniyah we typically deliver within 24 to 48 hours. Other governorates take 2 to 5 business days. We always confirm the window on WhatsApp before dispatching.",
  },
  {
    q: "How do I pay?",
    a: "Cash on delivery is supported across Iraq. Bank transfer or FastPay can be arranged before dispatch &mdash; whichever works best for you.",
  },
  {
    q: "Are returns or exchanges possible?",
    a: "Yes. If a piece arrives damaged or doesn&apos;t match the listing, message us within 48 hours and we&apos;ll replace or refund. Change-of-mind exchanges are accepted on most pieces, subject to condition.",
  },
  {
    q: "Are the pieces authentic?",
    a: "Every piece is sourced and inspected directly. We never list anything we wouldn&apos;t wear ourselves. We&apos;ll happily walk you through materials and craftsmanship.",
  },
  {
    q: "Can I request something not in the catalogue?",
    a: "Yes. Tell us the style, occasion, and budget &mdash; we&apos;ll suggest pieces from our wider network. Custom sourcing usually takes 5 to 14 days.",
  },
  {
    q: "Do you offer sizing guidance?",
    a: "For rings and bracelets we&apos;ll talk you through measuring at home and double-check before dispatch. The first resize is on us.",
  },
] as const;

export function V3FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="v3-faq">
      <header className="v3-faq__head">
        <span className="v3-faq__eyebrow">A few questions</span>
        <h2 className="v3-faq__title">
          Before <em>you</em>
          <br />
          order.
        </h2>
      </header>

      <dl className="v3-faq__list">
        {QUESTIONS.map((item, i) => {
          const isOpen = openIdx === i;
          const numeral = String(i + 1).padStart(2, "0");
          return (
            <div
              key={item.q}
              className={cn("v3-faq__row", isOpen && "v3-faq__row--open")}
            >
              <dt>
                <button
                  type="button"
                  className="v3-faq__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`v3-faq-${i}`}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <span className="v3-faq__numeral">{numeral}</span>
                  <span className="v3-faq__q">{item.q}</span>
                  <span className="v3-faq__sign" aria-hidden>
                    {isOpen ? "&minus;" : "+"}
                  </span>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    id={`v3-faq-${i}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="v3-faq__panel-wrap"
                  >
                    <div
                      className="v3-faq__panel"
                      dangerouslySetInnerHTML={{ __html: item.a }}
                    />
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
