import { V3Nav } from "@/components/landing-v3/v3-nav";
import { V3Hero } from "@/components/landing-v3/v3-hero";
import { V3Marquee } from "@/components/landing-v3/v3-marquee";
import { V3QuoteSpread } from "@/components/landing-v3/v3-quote-spread";
import { V3Features } from "@/components/landing-v3/v3-features";
import { V3CollectionsRail } from "@/components/landing-v3/v3-collections-rail";
import { V3FAQ } from "@/components/landing-v3/v3-faq";
import { V3Footer } from "@/components/landing-v3/v3-footer";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { ProgressBar } from "@/components/layout/progress-bar";
import { FloatWhatsApp } from "@/components/layout/float-whatsapp";

import { Shop } from "@/components/sections/shop";

import { CartDrawer } from "@/components/overlays/cart-drawer";
import { ProductModal } from "@/components/overlays/product-modal";
import { SearchOverlay } from "@/components/overlays/search-overlay";

/**
 * Homepage — Mont Fort-inspired editorial luxury redesign.
 *
 * Section order (top to bottom):
 *   1. V3Nav              fixed, ghost over hero, blurred bone bar after scroll
 *   2. V3Hero             full-viewport split, oversized italic word-stack
 *                         on left, single statement piece on right
 *   3. V3Marquee          slow infinite italic-italic ribbon of values
 *   4. V3QuoteSpread      ink-on-bone editorial spread: image + single quote
 *   5. V3Features         three magazine-style numbered statements
 *   6. V3CollectionsRail  drag/scroll horizontal rail of full-bleed tiers
 *   7. Shop               existing shop grid (cart-aware, unchanged)
 *   8. V3FAQ              index-style accordion, gold rule between rows
 *   9. V3Footer           ink panel with stroked oversized wordmark
 *
 * Existing chrome — overlays, mobile menu, progress bar, floating
 * WhatsApp — left untouched. They keep working in the new design.
 */
export default function Home() {
  return (
    <>
      <ProgressBar />
      <V3Nav />
      <SearchOverlay />
      <MobileMenu />
      <CartDrawer />

      <main>
        <V3Hero />
        <V3Marquee />
        <V3QuoteSpread />
        <V3Features />
        <V3CollectionsRail />
        <Shop />
        <V3FAQ />
      </main>

      <V3Footer />
      <FloatWhatsApp />
      <ProductModal />
    </>
  );
}
