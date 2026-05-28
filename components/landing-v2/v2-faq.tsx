"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

const QUESTIONS = [
  {
    q: "How quickly will my order arrive?",
    a: "Inside Erbil and Sulaymaniyah we typically deliver within 24 to 48 hours. Other governorates take 2 to 5 business days depending on courier availability. We always confirm the exact window on WhatsApp before dispatching.",
  },
  {
    q: "How do I pay?",
    a: "Cash on delivery is supported across Iraq. We can also arrange bank transfer or FastPay before dispatch &mdash; just let us know which works best when we confirm your order.",
  },
  {
    q: "Are returns or exchanges possible?",
    a: "If a piece arrives damaged or doesn&apos;t match the listing, message us within 48 hours and we&apos;ll arrange a replacement or refund. For change of mind we offer exchanges on most pieces, subject to condition.",
  },
  {
    q: "Are the pieces authentic?",
    a: "Every piece is sourced and inspected directly. We never list anything we wouldn&apos;t wear ourselves. If you have doubts, we&apos;ll walk you through the materials and craftsmanship over a call.",
  },
  {
    q: "Can I request something not in the catalogue?",
    a: "Yes. Message us with what you&apos;re after &mdash; style, occasion, budget &mdash; and we&apos;ll suggest options from our wider network. Custom sourcing usually takes 5 to 14 days.",
  },
  {
    q: "Do you offer sizing guidance?",
    a: "For rings and bracelets we&apos;ll talk you through measuring at home and double-check before dispatch. If sizing is wrong on arrival, the first resize is on us.",
  },
] as const;

export function V2FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="v2-faq">
      <div className="v2-faq__inner">
        <header className="v2-faq__head">
          <span className="v2-eyebrow">
            <span className="v2-eyebrow__dot" /> Common questions
          </span>
          <h2 className="v2-h2">
            Before you
            <br />
            <em>order.</em>
          </h2>
          <p className="v2-faq__lede">
            Don&apos;t see your question? Message us on WhatsApp &mdash; we
            usually reply within minutes during business hours.
          </p>
        </header>

        <dl className="v2-faq__list">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={item.q}
                className={cn("v2-faq__item", isOpen && "v2-faq__item--open")}
              >
                <dt>
                  <button
                    type="button"
                    className="v2-faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={`v2-faq-${i}`}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <Plus
                      size={20}
                      aria-hidden
                      className={cn(
                        "v2-faq__icon",
                        isOpen && "v2-faq__icon--open",
                      )}
                    />
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={`v2-faq-${i}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="v2-faq__panel-wrap"
                    >
                      <div
                        className="v2-faq__panel"
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
