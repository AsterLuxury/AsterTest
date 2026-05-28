import { LandingNav } from "@/components/landing/landing-nav";
import { FeatureCards } from "@/components/landing/feature-cards";
import { SocialProof } from "@/components/landing/social-proof";
import { FeaturedCollections } from "@/components/landing/featured-collections";
import { FAQ } from "@/components/landing/faq";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { ProgressBar } from "@/components/layout/progress-bar";
import { FloatWhatsApp } from "@/components/layout/float-whatsapp";

import { ParallaxHero } from "@/components/sections/parallax-hero";
import { About } from "@/components/sections/about";
import { Shop } from "@/components/sections/shop";
import { Callout } from "@/components/sections/callout";
import { Footer } from "@/components/sections/footer";

import { CartDrawer } from "@/components/overlays/cart-drawer";
import { ProductModal } from "@/components/overlays/product-modal";
import { SearchOverlay } from "@/components/overlays/search-overlay";

/**
 * Homepage — marketing-first landing flow on top, store underneath.
 *
 * Section order (top to bottom):
 *   1. Hero (parallax product imagery + headline + CTAs) → #home
 *   2. Features (3 cards)                                 → #features
 *   3. Social proof (stats + testimonials)                → #social
 *   4. Featured Collections / "pricing"                   → #collections
 *   5. Shop grid (existing)                               → #shop
 *   6. About / story                                      → #story
 *   7. FAQ                                                → #faq
 *   8. Callout                                            → (no anchor)
 *   9. Footer                                             → #contact
 *
 * The overlays (cart, modal, search) and global chrome (mobile menu,
 * floating WA button, progress bar) live outside the main flow as
 * portal-style siblings.
 */
export default function Home() {
  return (
    <>
      <ProgressBar />
      <LandingNav />
      <SearchOverlay />
      <MobileMenu />
      <CartDrawer />

      <main>
        <ParallaxHero />
        <FeatureCards />
        <SocialProof />
        <FeaturedCollections />
        <Shop />
        <About />
        <FAQ />
        <Callout />
      </main>

      <Footer />
      <FloatWhatsApp />
      <ProductModal />
    </>
  );
}
