/**
 * Social-proof marquee — an infinite scrolling band of values rather
 * than fake press-mentions. We never want to imply quotes from publications
 * that haven't actually featured Aster.
 *
 * Entirely CSS-driven (the animation lives in globals.css under
 * `@keyframes v2MarqueeScroll`), so this is a server component.
 */

const ITEMS = [
  "Hand-selected",
  "100% Authentic",
  "Iraq-wide delivery",
  "Direct from boutique",
  "Personal styling",
  "Quality first",
] as const;

export function V2Marquee() {
  // Duplicate the items so the loop has no visible seam.
  const sequence = [...ITEMS, ...ITEMS];
  return (
    <section id="social" className="v2-marquee" aria-hidden>
      <div className="v2-marquee__track">
        {sequence.map((item, i) => (
          <span key={i} className="v2-marquee__item">
            <span>{item}</span>
            <span className="v2-marquee__sep">&#9670;</span>
          </span>
        ))}
      </div>
    </section>
  );
}
