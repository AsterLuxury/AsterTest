import { Header } from "@/components/layout/header";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ProgressBar } from "@/components/layout/progress-bar";
import { FloatWhatsApp } from "@/components/layout/float-whatsapp";

import { ParallaxHero } from "@/components/sections/parallax-hero";
import { Marquee } from "@/components/sections/marquee";
import { About } from "@/components/sections/about";
import { Shop } from "@/components/sections/shop";
import { Callout } from "@/components/sections/callout";
import { Footer } from "@/components/sections/footer";

import { CartDrawer } from "@/components/overlays/cart-drawer";
import { ProductModal } from "@/components/overlays/product-modal";
import { SearchOverlay } from "@/components/overlays/search-overlay";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Header />
      <SearchOverlay />
      <MobileMenu />
      <CartDrawer />

      <main>
        <ParallaxHero />
        <Marquee />
        <About />
        <Shop />
        <Callout />
      </main>

      <Footer />
      <FloatWhatsApp />
      <ProductModal />
    </>
  );
}
