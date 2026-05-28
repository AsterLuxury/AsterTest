import { MFLanding } from "@/components/landing-mf/mf-page";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { ProgressBar } from "@/components/layout/progress-bar";
import { FloatWhatsApp } from "@/components/layout/float-whatsapp";

import { Shop } from "@/components/sections/shop";
import { Footer } from "@/components/sections/footer";

import { CartDrawer } from "@/components/overlays/cart-drawer";
import { ProductModal } from "@/components/overlays/product-modal";
import { SearchOverlay } from "@/components/overlays/search-overlay";

/**
 * Homepage — Mont Fort scroll-snap magazine on top, real shop below.
 *
 * Two scroll contexts:
 *   1. The MF rail: a fixed-height (100vh) scroll-snap container with
 *      6 image panels + a bone CTA panel. Each panel snaps fully into
 *      view. The user scrolls inside this container until the last
 *      panel.
 *   2. Below that, the document continues with the existing shop grid
 *      and footer. Clicking the CTA panel's link takes the visitor
 *      from the rail down to the shop.
 *
 * The cart, product modal, and search overlay are siblings — they
 * still work over the new rail without needing changes.
 */
export default function Home() {
  return (
    <>
      <ProgressBar />
      <SearchOverlay />
      <MobileMenu />
      <CartDrawer />

      <MFLanding />

      <main>
        <Shop />
      </main>

      <Footer />
      <FloatWhatsApp />
      <ProductModal />
    </>
  );
}
