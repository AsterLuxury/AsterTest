"use client";

import { useMemo } from "react";
import { ArrowRight, LayoutGrid, Rows3 } from "lucide-react";

import { useFavorites } from "@/components/providers/favorites-provider";
import { useUI } from "@/components/providers/ui-provider";
import { ProductGrid } from "@/components/sections/product-grid";
import { products as allProducts, countByTag } from "@/lib/products";
import type { FilterValue, ProductTag } from "@/lib/types";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "new", label: "New" },
  { value: "trending", label: "Trending" },
  { value: "exclusive", label: "Exclusive" },
  { value: "limited", label: "Limited" },
  { value: "namaya", label: "Namaya" },
];

export function Shop() {
  const ui = useUI();
  const favs = useFavorites();
  const [dense, setDense] = useState(false);

  // Build the visible product list: favorites-only takes precedence over the
  // tag filter, mirroring the legacy behaviour.
  const visibleProducts = useMemo(() => {
    if (ui.favoritesOnly) {
      return allProducts.filter((p) => favs.isFavorite(p.id));
    }
    if (ui.filter === "all") return allProducts;
    return allProducts.filter((p) => p.tags.includes(ui.filter as ProductTag));
  }, [ui.favoritesOnly, ui.filter, favs]);

  return (
    <section className="shop" id="shop">
      <div className="shop-header">
        <div className="container">
          <div className="shop-header-grid">
            <div>
              <span className="section-label">
                <span className="label-dot" />
                The Collection
              </span>
              <h2 className="shop-title">
                Every piece,
                <br />
                <em>a quiet statement.</em>
              </h2>
            </div>
            <p className="shop-lede">
              <span id="visible-count">{visibleProducts.length}</span> piece
              {visibleProducts.length === 1 ? "" : "s"}, each with its own
              reference number. Tap any piece to see it up close, or order
              directly via WhatsApp.
            </p>
          </div>

          <div className="filter-rail" id="filter-rail">
            {FILTERS.map((f) => {
              const isActive = !ui.favoritesOnly && ui.filter === f.value;
              const count =
                f.value === "all"
                  ? allProducts.length
                  : countByTag(f.value as ProductTag);
              return (
                <button
                  key={f.value}
                  type="button"
                  className={cn("chip", isActive && "active")}
                  onClick={() => {
                    ui.setFavoritesOnly(false);
                    ui.setFilter(f.value);
                  }}
                >
                  <span>{f.label}</span>
                  <span className="chip-num">{count}</span>
                </button>
              );
            })}
            <div className="filter-divider" />
            <button
              type="button"
              className={cn("chip view-toggle", dense && "dense")}
              aria-label="Toggle view"
              onClick={() => setDense((v) => !v)}
            >
              {dense ? (
                <Rows3 size={16} aria-hidden />
              ) : (
                <LayoutGrid size={16} aria-hidden />
              )}
            </button>
          </div>

          {ui.favoritesOnly && (
            <div className="container" style={{ marginTop: "1.5rem" }}>
              <button
                type="button"
                className="cta-link"
                onClick={() => ui.setFavoritesOnly(false)}
              >
                <ArrowRight
                  size={14}
                  aria-hidden
                  style={{ transform: "rotate(180deg)" }}
                />{" "}
                Back to all pieces
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="container">
        {visibleProducts.length === 0 ? (
          <div className="empty">
            <span className="empty-mark">◆</span>
            <h3>
              {ui.favoritesOnly
                ? "No favorites yet — tap the heart on any piece"
                : "No pieces in this filter yet"}
            </h3>
            <button
              type="button"
              className="cta-link"
              onClick={() => {
                ui.setFavoritesOnly(false);
                ui.setFilter("all");
              }}
            >
              View all pieces <ArrowRight size={14} aria-hidden />
            </button>
          </div>
        ) : (
          <ProductGrid products={visibleProducts} dense={dense} />
        )}
      </div>
    </section>
  );
}
