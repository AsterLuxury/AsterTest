import { V2Nav } from "@/components/landing-v2/v2-nav";
import { V2Hero } from "@/components/landing-v2/v2-hero";
import { V2Marquee } from "@/components/landing-v2/v2-marquee";
import { V2Features } from "@/components/landing-v2/v2-features";
import { V2Collections } from "@/components/landing-v2/v2-collections";
import { V2FAQ } from "@/components/landing-v2/v2-faq";
import { V2Footer } from "@/components/landing-v2/v2-footer";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { ProgressBar } from "@/components/layout/progress-bar";
import { FloatWhatsApp } from "@/components/layout/float-whatsapp";

import { Shop } from "@/components/sections/shop";

import { CartDrawer } from "@/components/overlays/cart-drawer";
import { ProductModal } from "@/components/overlays/product-modal";
import { SearchOverlay } from "@/components/overlays/search-overlay";

/**
 * Homepage — dark editorial luxury redesign.
 *
 * Section order (top to bottom):
 *   1. V2Nav            sticky, transparent over hero, blurred bar after scroll
 *   2. V2Hero           single statement piece + oversized headline + dual CTA
 *   3. V2Marquee        infinite scrolling values band as social proof
 *   4. V2Features       3 dark feature cards in a 1px-rule grid
 *   5. V2Collections    3-tier "pricing" with full-bleed product imagery
 *   6. Shop             existing shop grid (unchanged)
 *   7. V2FAQ            sticky-heading + accordion list, gold rule between items
 *   8. V2Footer         oversized stroked wordmark + 3 link columns
 *
 * Overlays (cart, modal, search) and chrome (mobile menu, progress bar,
 * floating WA button) are unchanged from the previous version.
 */
export default function Home() {
  return (
    <>
      <ProgressBar />
      <V2Nav />
      <SearchOverlay />
      <MobileMenu />
      <CartDrawer />

      <MFLanding />

      <main>
        <V2Hero />
        <V2Marquee />
        <V2Features />
        <V2Collections />
        <Shop />
        <V2FAQ />
      </main>

      <V2Footer />
      <FloatWhatsApp />
      <ProductModal />
    </>
  );
}
