/**
 * Mont Fort-style marquee: a slow, hypnotic scrolling band of place names
 * + values, in italic display type rather than chunky sans labels. No
 * fake press mentions &mdash; just statements about the boutique.
 *
 * Server component; the animation lives entirely in CSS
 * (`@keyframes v3MarqueeScroll`).
 */

const ITEMS = [
  "Hand selected",
  "From Erbil",
  "Quality first",
  "Iraq wide delivery",
  "Personal styling",
  "Since 2023",
] as const;

export function V3Marquee() {
  const sequence = [...ITEMS, ...ITEMS];
  return (
    <section className="v3-marquee" aria-hidden>
      <div className="v3-marquee__track">
        {sequence.map((item, i) => (
          <span key={i} className="v3-marquee__item">
            <span className="v3-marquee__text">{item}</span>
            <span className="v3-marquee__sep" aria-hidden>
              &mdash;
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
