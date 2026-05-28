import { V4Nav } from "@/components/landing-v4/v4-nav";
import { V4Cover } from "@/components/landing-v4/v4-cover";
import { V4Manifesto } from "@/components/landing-v4/v4-manifesto";
import { V4Spread } from "@/components/landing-v4/v4-spread";
import { V4Chapters } from "@/components/landing-v4/v4-chapters";
import { V4Principles } from "@/components/landing-v4/v4-principles";
import { V4FAQ } from "@/components/landing-v4/v4-faq";
import { V4Footer } from "@/components/landing-v4/v4-footer";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { ProgressBar } from "@/components/layout/progress-bar";
import { FloatWhatsApp } from "@/components/layout/float-whatsapp";

import { Shop } from "@/components/sections/shop";

import { CartDrawer } from "@/components/overlays/cart-drawer";
import { ProductModal } from "@/components/overlays/product-modal";
import { SearchOverlay } from "@/components/overlays/search-overlay";

/**
 * Homepage — Mont Fort-style magazine layout (v4).
 *
 * Each panel is full-viewport. The page is meant to be scrolled
 * through like a magazine, not browsed like a webpage.
 *
 *   1. V4Cover         full-bleed lifestyle cover image + headline
 *   2. V4Manifesto     pure typographic page, single huge italic line
 *   3. V4Spread        ink panel + lifestyle image, editorial quote
 *   4. V4Chapters      horizontal scroll of 4 oversized image cards
 *   5. V4Principles    typographic list of three statements
 *   6. Shop            existing product grid (unchanged)
 *   7. V4FAQ           index-style accordion
 *   8. V4Footer        ink panel with massive italic stroked wordmark
 *
 * Editorial imagery (cover, spread, chapters) is from Unsplash —
 * see components/landing-v4/imagery.ts for sources and credits.
 * Real product imagery from the catalogue stays in <Shop /> below.
 */
export default function Home() {
  return (
    <>
      <ProgressBar />
      <V4Nav />
      <SearchOverlay />
      <MobileMenu />
      <CartDrawer />

      <main>
        <V4Cover />
        <V4Manifesto />
        <V4Spread />
        <V4Chapters />
        <V4Principles />
        <Shop />
        <V4FAQ />
      </main>

      <V4Footer />
      <FloatWhatsApp />
      <ProductModal />
    </>
  );
}
