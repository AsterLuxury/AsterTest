"use client";

import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion/react";

import { products } from "@/lib/products";

/**
 * Magazine-style two-column spread: large product image on one side,
 * a single editorial quote on the other. No buttons, no list, no
 * marketing language &mdash; just one statement that's allowed to breathe.
 *
 * Reveal: image fades + scales subtly, quote words stagger in beneath.
 * Both fire when the section is ~25% into the viewport.
 */

// AL-031 is an exclusive Namaya piece &mdash; strong silhouette for an
// editorial spread.
const SPREAD_PIECE = products.find((p) => p.ref === "AL-031") ?? products[2];

export function V3QuoteSpread() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    return inView(
      root,
      () => {
        const img = root.querySelector<HTMLImageElement>("[data-spread-img]");
        if (img) {
          animate(
            img,
            { opacity: [0, 1], scale: [1.04, 1] },
            { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
          );
        }
        animate(
          root.querySelectorAll<HTMLElement>("[data-quote-word]"),
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.8, delay: stagger(0.05, { startDelay: 0.2 }), ease: [0.16, 1, 0.3, 1] },
        );
        animate(
          root.querySelectorAll<HTMLElement>("[data-spread-meta]"),
          { opacity: [0, 1], y: [12, 0] },
          { duration: 0.9, delay: stagger(0.1, { startDelay: 0.6 }), ease: [0.16, 1, 0.3, 1] },
        );
      },
      { amount: 0.25 },
    );
  }, []);

  // Split the quote into words so we can stagger them.
  const quote =
    "We don&apos;t sell jewelry. We curate the few pieces a woman actually keeps.";
  const words = quote.split(" ");

  return (
    <section ref={sectionRef} className="v3-spread" id="story">
      <div className="v3-spread__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-spread-img
          src={SPREAD_PIECE.image}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className="v3-spread__caption" data-spread-meta>
          <span className="v3-spread__caption-num">02</span>
          <span>The maison &mdash; since 2023</span>
        </div>
      </div>

      <div className="v3-spread__copy">
        <p className="v3-spread__quote">
          {words.map((w, i) => (
            <span key={i} data-quote-word className="v3-spread__quote-word">
              <span dangerouslySetInnerHTML={{ __html: w }} />{" "}
            </span>
          ))}
        </p>
        <div className="v3-spread__attr" data-spread-meta>
          <span className="v3-spread__attr-rule" />
          <span>Aster Luxury, Erbil</span>
        </div>
      </div>
    </section>
  );
}
