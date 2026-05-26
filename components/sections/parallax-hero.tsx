"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, stagger, useAnimate } from "motion/react";
import { ArrowRight } from "lucide-react";

import Floating, {
  FloatingElement,
} from "@/components/ui/parallax-floating";
import { products } from "@/lib/products";
import { WA_NUMBER } from "@/lib/constants";

// Pick eight curated pieces with strong, varied imagery for the parallax cloud.
// Using actual product references rather than the demo Unsplash images.
const HERO_PICKS = [
  products.find((p) => p.ref === "AL-015"), // trending namaya
  products.find((p) => p.ref === "AL-001"), // trending namaya
  products.find((p) => p.ref === "AL-012"), // exclusive
  products.find((p) => p.ref === "AL-020"), // trending namaya
  products.find((p) => p.ref === "AL-006"), // new namaya
  products.find((p) => p.ref === "AL-028"), // trending namaya
  products.find((p) => p.ref === "AL-003"), // new
  products.find((p) => p.ref === "AL-031"), // exclusive namaya
].filter((p): p is NonNullable<typeof p> => Boolean(p));

// Small WhatsApp glyph (lucide doesn't ship one).
function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.45 0 .1 5.34.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.93 11.93 0 0 0 5.77 1.47h.01c6.59 0 11.93-5.34 11.93-11.93 0-3.19-1.24-6.18-3.46-8.42zM12.04 21.8a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.72.97.99-3.62-.23-.37A9.83 9.83 0 0 1 2.2 11.93c0-5.43 4.41-9.84 9.84-9.84 2.63 0 5.1 1.03 6.96 2.89a9.79 9.79 0 0 1 2.88 6.95c0 5.43-4.41 9.87-9.84 9.87zm5.4-7.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.46-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.46-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.46-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.5.07-.77.37-.26.3-1.01.99-1.01 2.41s1.04 2.79 1.18 2.99c.15.2 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.2-.57-.34z" />
    </svg>
  );
}

export function ParallaxHero() {
  const [scope, animate] = useAnimate();

  // Stagger fade-in of each floating image once the scope mounts.
  useEffect(() => {
    animate(
      "img.aster-floating",
      { opacity: [0, 1] },
      { duration: 0.6, delay: stagger(0.08, { startDelay: 0.3 }) },
    );
  }, [animate]);

  return (
    <section
      ref={scope}
      className="relative min-h-[calc(100vh-var(--header-h))] overflow-hidden bg-[var(--paper)]"
      id="home"
    >
      {/* Subtle film-grain overlay (sits above floating layer, below copy) */}
      <div className="hero-grain" aria-hidden />

      {/* Floating product images — fills the hero, behind the copy */}
      <Floating sensitivity={-1} className="z-10 pointer-events-none">
        <FloatingElement depth={0.5} className="top-[10%] left-[6%]">
          <FloatingImage src={HERO_PICKS[0].image} alt={`Aster ${HERO_PICKS[0].ref}`} className="w-20 h-20 md:w-32 md:h-32" />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[6%] left-[28%]">
          <FloatingImage src={HERO_PICKS[1].image} alt={`Aster ${HERO_PICKS[1].ref}`} className="w-24 h-24 md:w-36 md:h-36" />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] right-[18%]">
          <FloatingImage src={HERO_PICKS[2].image} alt={`Aster ${HERO_PICKS[2].ref}`} className="w-28 h-36 md:w-44 md:h-56" />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[8%] right-[3%]">
          <FloatingImage src={HERO_PICKS[3].image} alt={`Aster ${HERO_PICKS[3].ref}`} className="w-24 h-24 md:w-32 md:h-32" />
        </FloatingElement>

        <FloatingElement depth={1.5} className="top-[55%] left-[2%]">
          <FloatingImage src={HERO_PICKS[4].image} alt={`Aster ${HERO_PICKS[4].ref}`} className="w-28 h-28 md:w-40 md:h-40" />
        </FloatingElement>
        <FloatingElement depth={2.5} className="bottom-[12%] right-[8%]">
          <FloatingImage src={HERO_PICKS[5].image} alt={`Aster ${HERO_PICKS[5].ref}`} className="w-28 h-32 md:w-40 md:h-52" />
        </FloatingElement>
        <FloatingElement depth={3} className="bottom-[6%] left-[12%]">
          <FloatingImage src={HERO_PICKS[6].image} alt={`Aster ${HERO_PICKS[6].ref}`} className="w-36 h-44 md:w-52 md:h-64" />
        </FloatingElement>
        <FloatingElement depth={1} className="bottom-[18%] left-[44%]">
          <FloatingImage src={HERO_PICKS[7].image} alt={`Aster ${HERO_PICKS[7].ref}`} className="w-24 h-24 md:w-32 md:h-32" />
        </FloatingElement>
      </Floating>

      {/* Hero copy — vertically/horizontally centered, sits above the floating layer */}
      <motion.div
        className="relative z-20 mx-auto flex min-h-[calc(100vh-var(--header-h))] max-w-[var(--container)] flex-col items-center justify-center px-[clamp(1.25rem,4vw,2.5rem)] py-24 text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1 }}
      >
        <span className="hero-tag">
          <span className="hero-tag-dot" />
          Curated Collection · Since 2023
        </span>

        <h1
          className="font-[var(--font-display)] font-normal leading-[0.92] tracking-[-0.035em] text-[var(--ink)] mt-6 mb-6"
          style={{ fontSize: "var(--fs-display)" }}
        >
          Quiet <em>luxury,</em>
          <br />
          loud <em>impressions.</em>
        </h1>

        <p className="hero-lede max-w-[520px] mx-auto !mb-8" style={{ animation: "none", opacity: 1 }}>
          A curated edit of jewelry pieces — chosen with intention, designed
          for the woman who knows her own style, worn with quiet confidence.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[clamp(1rem,2vw,1.5rem)]" style={{ animation: "none", opacity: 1 }}>
          <Link href="#shop" className="cta">
            <span>Explore the collection</span>
            <span className="cta-arrow">
              <ArrowRight size={18} aria-hidden />
            </span>
          </Link>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            <span style={{ color: "var(--whatsapp)" }}>
              <WhatsAppIcon size={16} />
            </span>
            Chat with us
          </a>
        </div>
      </motion.div>

      {/* Soft vignette to keep copy legible over the floating images */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[15]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--paper) 75%, transparent) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}

function FloatingImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // Using <img> rather than next/image: hosted on imgur, static export, and
    // we want the simple direct-reference behaviour for the parallax effect.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="eager"
      className={`aster-floating object-cover rounded-[var(--r-md)] shadow-[0_20px_60px_-20px_rgba(26,24,21,0.25)] opacity-0 transition-transform duration-200 hover:scale-[1.04] ${className ?? ""}`}
    />
  );
}
