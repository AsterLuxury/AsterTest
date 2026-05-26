import type { Product, ProductTag } from "./types";

export const products: Product[] = [
  { id: 1,  ref: "AL-001", image: "https://i.imgur.com/OErot48.jpg", tags: ["trending", "namaya"], price: "11,000 IQD" },
  { id: 2,  ref: "AL-002", image: "https://i.imgur.com/z00Aaai.jpg", tags: ["trending"], price: "8,000 IQD" },
  { id: 3,  ref: "AL-003", image: "https://i.imgur.com/JjaaugF.jpg", tags: ["new"], price: "10,000 IQD" },
  { id: 4,  ref: "AL-004", image: "https://i.imgur.com/Kte7nzq.jpg", tags: ["exclusive"], price: "10,000 IQD" },
  { id: 5,  ref: "AL-005", image: "https://i.imgur.com/PRowWfH.jpg", tags: ["new"], price: "10,000 IQD" },
  { id: 6,  ref: "AL-006", image: "https://i.imgur.com/SoydXG2.jpg", tags: ["new", "namaya"], price: "9,000 IQD" },
  { id: 7,  ref: "AL-007", image: "https://i.imgur.com/TlQPNKR.jpg", tags: ["trending"], price: "9,000 IQD" },
  { id: 8,  ref: "AL-008", image: "https://i.imgur.com/RrOwOVh.jpg", tags: ["limited"], price: "8,000 IQD" },
  { id: 9,  ref: "AL-009", image: "https://i.imgur.com/Eg3uzN3.jpg", tags: ["exclusive"], price: "8,000 IQD" },
  { id: 10, ref: "AL-010", image: "https://i.imgur.com/f5zWQHf.jpg", tags: ["trending"], price: "9,000 IQD" },
  { id: 11, ref: "AL-011", image: "https://i.imgur.com/fxUaMQ4.jpg", tags: ["new"], price: "9,000 IQD" },
  { id: 12, ref: "AL-012", image: "https://i.imgur.com/LTpzHsW.jpg", tags: ["exclusive"], price: "11,000 IQD" },
  { id: 13, ref: "AL-013", image: "https://i.imgur.com/mXV7gBZ.jpg", tags: ["new"], price: "9,000 IQD" },
  { id: 14, ref: "AL-014", image: "https://i.imgur.com/A3LfT29.jpg", tags: ["limited"], price: "10,000 IQD" },
  { id: 15, ref: "AL-015", image: "https://i.imgur.com/m0g8dYS.jpg", tags: ["trending", "namaya"], price: "12,000 IQD" },
  { id: 16, ref: "AL-016", image: "https://i.imgur.com/RHdbyM9.jpg", tags: ["new"], price: "9,000 IQD" },
  { id: 17, ref: "AL-017", image: "https://i.imgur.com/Szffcti.jpg", tags: ["new"], price: "9,000 IQD" },
  { id: 18, ref: "AL-018", image: "https://i.imgur.com/hDa2JGY.jpg", tags: ["trending"], price: "10,000 IQD" },
  { id: 19, ref: "AL-019", image: "https://i.imgur.com/kPNgeOX.jpg", tags: ["exclusive"], price: "9,000 IQD" },
  { id: 20, ref: "AL-020", image: "https://i.imgur.com/UyzPCFl.jpg", tags: ["trending", "namaya"], price: "10,000 IQD" },
  { id: 21, ref: "AL-021", image: "https://i.imgur.com/17uGewM.jpg", tags: ["new"], price: "8,000 IQD" },
  { id: 22, ref: "AL-022", image: "https://i.imgur.com/UrHw9dD.jpg", tags: ["exclusive"], price: "8,000 IQD" },
  { id: 23, ref: "AL-023", image: "https://i.imgur.com/zXIfG8s.jpg", tags: ["new"], price: "8,000 IQD" },
  { id: 24, ref: "AL-024", image: "https://i.imgur.com/6k1vRsV.jpg", tags: ["limited"], price: "9,000 IQD" },
  { id: 25, ref: "AL-025", image: "https://i.imgur.com/PV0i4eB.jpg", tags: ["trending"], price: "9,000 IQD" },
  { id: 26, ref: "AL-026", image: "https://i.imgur.com/FXHd5nO.jpg", tags: ["exclusive"], price: "9,000 IQD" },
  { id: 27, ref: "AL-027", image: "https://i.imgur.com/ZdkqaU9.jpg", tags: ["new"], price: "8,000 IQD" },
  { id: 28, ref: "AL-028", image: "https://i.imgur.com/Av9tP4X.jpg", tags: ["trending", "namaya"], price: "11,000 IQD" },
  { id: 29, ref: "AL-029", image: "https://i.imgur.com/0puuuwV.jpg", tags: ["limited"], price: "9,000 IQD" },
  { id: 30, ref: "AL-030", image: "https://i.imgur.com/QhhGmoY.jpg", tags: ["exclusive"], price: "8,500 IQD" },
  { id: 31, ref: "AL-031", image: "https://i.imgur.com/s3iVoL3.jpg", tags: ["exclusive", "namaya"], price: "10,000 IQD" },
  { id: 32, ref: "AL-032", image: "https://i.imgur.com/ruRRtpN.jpg", tags: ["new"], price: "9,000 IQD" },
  { id: 33, ref: "AL-033", image: "https://i.imgur.com/4DhDOLu.jpg", tags: ["trending"], price: "8,000 IQD" },
  { id: 34, ref: "AL-034", image: "https://i.imgur.com/NK4CVZ3.jpg", tags: ["exclusive"], price: "8,000 IQD" },
  { id: 35, ref: "AL-035", image: "https://i.imgur.com/nxvRYVN.jpg", tags: ["new"], price: "8,000 IQD" },
  { id: 36, ref: "AL-036", image: "https://i.imgur.com/qSaBKBn.jpg", tags: ["new"], price: "9,000 IQD" },
  { id: 37, ref: "AL-037", image: "https://i.imgur.com/QEZ3xNx.jpg", tags: ["trending"], price: "9,000 IQD" },
  { id: 38, ref: "AL-038", image: "https://i.imgur.com/NotI5dR.jpg", tags: ["new"], price: "9,000 IQD" },
  { id: 39, ref: "AL-039", image: "https://i.imgur.com/y4S1ViE.jpg", tags: ["limited"], price: "8,000 IQD" },
  { id: 40, ref: "AL-040", image: "https://i.imgur.com/8j4QokS.jpg", tags: ["trending"], price: "9,000 IQD" },
  { id: 41, ref: "AL-041", image: "https://i.imgur.com/pHJk2Xe.jpg", tags: ["new", "namaya"], price: "10,000 IQD" },
  { id: 42, ref: "AL-042", image: "https://i.imgur.com/iFkcaIE.jpg", tags: ["exclusive"], price: "9,000 IQD" },
  { id: 43, ref: "AL-043", image: "https://i.imgur.com/OrhpKkD.jpg", tags: ["trending"], price: "8,000 IQD" },
  { id: 44, ref: "AL-044", image: "https://i.imgur.com/MKITY3l.jpg", tags: ["exclusive"], price: "10,000 IQD" },
  { id: 45, ref: "AL-045", image: "https://i.imgur.com/yZ6MkCb.jpg", tags: ["limited"], price: "9,000 IQD" },
  { id: 46, ref: "AL-046", image: "https://i.imgur.com/TaEqJ6k.jpg", tags: ["new"], price: "9,000 IQD" },
  { id: 47, ref: "AL-047", image: "https://i.imgur.com/zm6HOdR.jpg", tags: ["trending"], price: "8,000 IQD" },
  { id: 48, ref: "AL-048", image: "https://i.imgur.com/Jo0v8yf.jpg", tags: ["new"], price: "8,000 IQD" },
  { id: 49, ref: "AL-049", image: "https://i.imgur.com/A2dYFIx.jpg", tags: ["exclusive"], price: "9,000 IQD" },
  { id: 50, ref: "AL-050", image: "https://i.imgur.com/4jGltwy.jpg", tags: ["trending"], price: "8,000 IQD" },
  { id: 52, ref: "AL-052", image: "https://i.imgur.com/MBZbuLs.jpg", tags: ["new"], price: "11,000 IQD" },
  { id: 53, ref: "AL-053", image: "https://i.imgur.com/Jt5Je1s.jpg", tags: ["new"], price: "10,000 IQD" },
  { id: 54, ref: "AL-054", image: "https://i.imgur.com/Gc8080H.jpg", tags: ["trending"], price: "10,000 IQD" },
  { id: 55, ref: "AL-055", image: "https://i.imgur.com/motIsvg.jpg", tags: ["exclusive"], price: "9,000 IQD" },
  { id: 56, ref: "AL-056", image: "https://i.imgur.com/uncBlEB.jpeg", tags: ["exclusive"], price: "9,000 IQD" },
];

// ----- helpers (ported from legacy script.js) ------------------------------

export function priceToNumber(priceStr: string): number {
  return parseInt(priceStr.replace(/[^0-9]/g, ""), 10) || 0;
}

export function formatIQD(n: number): string {
  return n.toLocaleString("en-US") + " IQD";
}

export function badgeText(p: Product): string {
  if (p.tags.includes("limited")) return "Limited";
  if (p.tags.includes("exclusive")) return "Exclusive";
  if (p.tags.includes("namaya")) return "Namaya";
  if (p.tags.includes("new")) return "New";
  if (p.tags.includes("trending")) return "Trending";
  return "Featured";
}

export function isFeatured(p: Product): boolean {
  return (
    p.tags.includes("limited") ||
    p.tags.includes("exclusive") ||
    p.tags.includes("namaya")
  );
}

export function tagDisplay(p: Product): string {
  const t = p.tags[0];
  return t.charAt(0).toUpperCase() + t.slice(1);
}

export function countByTag(tag: ProductTag): number {
  return products.filter((p) => p.tags.includes(tag)).length;
}

// Build a WhatsApp deep-link with a pre-filled message.
export function whatsappOrderUrl(waNumber: string, message: string): string {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

export function singleOrderMessage(p: Product, qty: number): string {
  return `Hello Aster Luxury,\n\nI would like to order:\n\nReference: ${p.ref}\nPrice: ${p.price}\nQuantity: ${qty}\n\nPlease share more details. Thank you!`;
}

export function cartOrderMessage(items: { product: Product; qty: number }[]): string {
  let total = 0;
  let totalQty = 0;
  const lines = items
    .map(({ product, qty }, i) => {
      const unit = priceToNumber(product.price);
      const lineTotal = unit * qty;
      total += lineTotal;
      totalQty += qty;
      return `${i + 1}. Ref. ${product.ref}\n   Quantity: ${qty}\n   Price: ${product.price}\n   Subtotal: ${formatIQD(lineTotal)}`;
    })
    .join("\n\n");

  return `Hello Aster Luxury,\n\nI would like to order the following pieces:\n\n${lines}\n\n────────────────\nTotal pieces: ${totalQty}\nEstimated total: ${formatIQD(total)}\n\nPlease confirm availability and delivery details. Thank you!`;
}
