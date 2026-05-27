const FEATURES = [
  {
    num: "01",
    title: "Curated Selection",
    body: "A small collection, chosen for craft and character.",
  },
  {
    num: "02",
    title: "Direct to You",
    body: "No middlemen. Order direct, talk direct, save direct.",
  },
  {
    num: "03",
    title: "Iraq-Wide Delivery",
    body: "Delivery available across all Iraqi governorates.",
  },
  {
    num: "04",
    title: "Personal Service",
    body: "Every customer matters. Reach us directly on WhatsApp.",
  },
] as const;

export function About() {
  return (
    <section className="about" id="story">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-label">
              <span className="label-dot" />
              The Maison
            </span>
            <h2 className="about-title">
              Selected with care,
              <br />
              <em>worn with pride.</em>
            </h2>
          </div>
          <div className="about-right">
            <p className="about-lede">
              Aster Luxury is a curated fine jewelry boutique with one
              obsession: that beautiful pieces should feel as personal as they
              look. Every item in our collection is carefully selected for
              quality and character, then delivered directly to those who
              appreciate the difference.
            </p>
            <div className="about-features">
              {FEATURES.map((f) => (
                <div className="about-feature" key={f.num}>
                  <span className="feat-num">{f.num}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
