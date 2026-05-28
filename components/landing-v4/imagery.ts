/**
 * Editorial imagery for the v4 (Mont Fort-style) landing page.
 *
 * These are intentionally NOT from the real product catalogue —
 * the catalogue uses imgur-hosted product flat-lays which read as
 * e-commerce, not editorial. The marketing layer needs lifestyle /
 * model / atmosphere shots for the Mont Fort feel.
 *
 * Source: Unsplash, accessed under the Unsplash License
 * (https://unsplash.com/license — free for commercial and personal
 * use, no permission needed, attribution appreciated but not required).
 *
 * Each entry includes:
 *   - url:    direct CDN URL with width + quality params
 *   - photo:  Unsplash photo ID (use to find the source page if needed)
 *   - credit: photographer name + Unsplash profile slug
 *
 * If you swap in your own editorial photography later, just replace the
 * `url` fields below — every component in components/landing-v4/* reads
 * from this single source.
 */

interface EditorialImage {
  url: string;
  photo: string;
  credit: string;
}

const u = (id: string, w: number = 2000) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const editorial = {
  /** Full-bleed cover. Hands holding a delicate gold chain — establishes
      the "noticed quietly" feel without being a flat-lay. */
  cover: {
    url: u("photo-1611591437281-460bfbe1220a", 2400),
    photo: "1611591437281-460bfbe1220a",
    credit: "Sabrianna / Unsplash",
  } satisfies EditorialImage,

  /** Spread image — a model shot, tighter framing, lots of skin tone +
      gold for the editorial spread panel. */
  spread: {
    url: u("photo-1535632787350-4e68ef0ac584", 2000),
    photo: "1535632787350-4e68ef0ac584",
    credit: "Tamara Bellis / Unsplash",
  } satisfies EditorialImage,

  /** Four chapter panels for the horizontal scroll. Each is a different
      mood — atmosphere, then product close-up, then model, then still
      life — so the rail reads as a magazine sequence. */
  chapters: [
    {
      url: u("photo-1599643478518-a784e5dc4c8f", 1800),
      photo: "1599643478518-a784e5dc4c8f",
      credit: "Sabrianna / Unsplash",
    },
    {
      url: u("photo-1602173574767-37ac01994b2a", 1800),
      photo: "1602173574767-37ac01994b2a",
      credit: "The Glorious Studio / Unsplash",
    },
    {
      url: u("photo-1612817288484-6f916006741a", 1800),
      photo: "1612817288484-6f916006741a",
      credit: "Tamara Bellis / Unsplash",
    },
    {
      url: u("photo-1573408301185-9146fe634ad0", 1800),
      photo: "1573408301185-9146fe634ad0",
      credit: "The Glorious Studio / Unsplash",
    },
  ] satisfies EditorialImage[],
};
