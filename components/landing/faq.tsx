"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * FAQ accordion with motion-driven height transitions.
 *
 * Decisions:
 *   - One panel open at a time (single-source-of-truth `openIdx`). This
 *     reads cleaner on a marketing page than the multi-open variant.
 *   - Use AnimatePresence + motion's height auto so the content height
 *     animates smoothly without us having to measure manually.
 *   - The toggle is a `<button>` inside a `<dt>` semantic structure for
 *     screen readers; aria-expanded mirrors the open state.
 */

const QUESTIONS = [
  {
    q: "How quickly will my order arrive?",
    a: "Inside Erbil and Sulaymaniyah we typically deliver within 24–48 hours. Other governorates take 2–5 business days depending on courier availability. We'll always confirm the exact window on WhatsApp before dispatching.",
  },
  {
    q: "How do I pay?",
    a: "Cash on delivery is supported across Iraq. We can also arrange bank transfer or FastPay before dispatch — just let us know which works best when we confirm your order.",
  },
  {
    q: "Are returns or exchanges possible?",
    a: "If a piece arrives damaged or genuinely doesn't match the listing, message us within 48 hours and we'll arrange a replacement or refund. For change-of-mind we offer exchanges on most pieces, subject to condition.",
  },
  {
    q: "Are the pieces authentic?",
    a: "Every piece in our boutique is sourced and inspected directly. We never list anything we wouldn't wear ourselves. If you ever have doubts, we'll happily walk you through the materials and craftsmanship.",
  },
  {
    q: "Can I request something specific that isn't in the catalogue?",
    a: "Yes — message us on WhatsApp with what you're after (style, occasion, budget) and we'll suggest options from our wider network. Custom sourcing usually takes 5–14 days.",
  },
  {
    q: "Do you offer sizing guidance?",
    a: "For rings and bracelets we'll talk you through measuring at home and double-check before dispatch. If sizing is wrong on arrival, the first resize is on us.",
  },
] as const;

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-[var(--paper-warm)] py-[clamp(4rem,9vw,8rem)]"
    >
      <div className="container">
        <div className="grid gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
          {/* Heading column — sticky on large screens so the question list
              has presence without pushing the page taller than it needs to be. */}
          <header className="lg:sticky lg:top-[120px]">
            <span className="section-label">
              <span className="label-dot" />
              Common questions
            </span>
            <h2 className="font-[var(--font-display)] text-[var(--fs-4xl)] font-normal leading-[1] tracking-[-0.025em] text-[var(--ink)]">
              Before you <em className="text-[var(--accent)]">order.</em>
            </h2>
            <p className="mt-5 max-w-[420px] text-[1rem] leading-[1.65] text-[var(--muted)]">
              Don&apos;t see your question? Message us on WhatsApp — we
              usually reply within minutes during business hours.
            </p>
          </header>

          <dl className="faq-list" role="list">
            {QUESTIONS.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={item.q} className={cn("faq-item", isOpen && "open")}>
                  <dt>
                    <button
                      type="button"
                      className="faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                    >
                      <span className="faq-trigger-text">{item.q}</span>
                      <Plus
                        size={18}
                        aria-hidden
                        className={cn(
                          "faq-trigger-icon transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                      />
                    </button>
                  </dt>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        id={`faq-panel-${i}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.32,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="faq-answer">{item.a}</div>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
