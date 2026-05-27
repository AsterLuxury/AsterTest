"use client";

import { useEffect, useRef, useState } from "react";

import { ProductCard } from "./product-card";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  dense: boolean;
}

/**
 * Grid of product cards. Uses an IntersectionObserver to fade each card in
 * once it scrolls into view (legacy `.card.in` behaviour).
 */
export function ProductGrid({ products, dense }: ProductGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visibleIds, setVisibleIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!gridRef.current) return;
    setVisibleIds(new Set()); // reset when product list changes

    const cards = gridRef.current.querySelectorAll<HTMLElement>(".card[data-id]");
    if (!("IntersectionObserver" in window)) {
      // No IO — show everything immediately.
      setVisibleIds(new Set(products.map((p) => p.id)));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        setVisibleIds((prev) => {
          let changed = false;
          const next = new Set(prev);
          for (const e of entries) {
            if (e.isIntersecting) {
              const id = Number((e.target as HTMLElement).dataset.id);
              if (!next.has(id)) {
                next.add(id);
                changed = true;
              }
              obs.unobserve(e.target);
            }
          }
          return changed ? next : prev;
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );

    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, [products]);

  return (
    <div className={cn("grid", dense && "dense")} id="grid" ref={gridRef}>
      {products.map((p, i) => (
        <ProductCard
          key={p.id}
          product={p}
          index={i}
          inView={visibleIds.has(p.id)}
        />
      ))}
    </div>
  );
}
