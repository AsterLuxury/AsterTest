"use client";

import { Check, Heart, Plus } from "lucide-react";

import { useCart } from "@/components/providers/cart-provider";
import { useFavorites } from "@/components/providers/favorites-provider";
import { useUI } from "@/components/providers/ui-provider";
import { badgeText, isFeatured, tagDisplay } from "@/lib/products";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
  inView: boolean;
}

export function ProductCard({ product, index, inView }: ProductCardProps) {
  const cart = useCart();
  const favs = useFavorites();
  const ui = useUI();

  const inCart = cart.isInCart(product.id);
  const isFav = favs.isFavorite(product.id);

  return (
    <article
      className={cn("card", inView && "in", inCart && "in-cart")}
      data-id={product.id}
      style={{ transitionDelay: `${Math.min(index * 30, 600)}ms` }}
      onClick={() => ui.openProduct(product.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          ui.openProduct(product.id);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="card-frame">
        <span
          className={cn("card-badge", isFeatured(product) && "featured")}
        >
          {badgeText(product)}
        </span>
        <button
          type="button"
          className={cn("heart-btn", isFav && "active")}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          onClick={(e) => {
            e.stopPropagation();
            favs.toggleFavorite(product.id);
          }}
        >
          <Heart
            size={16}
            aria-hidden
            fill={isFav ? "currentColor" : "none"}
          />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="card-img"
          src={product.image}
          alt={`Aster ${product.ref}`}
          loading="lazy"
        />
        <div className="card-quick">
          <span className="card-quick-text">
            {inCart ? "Added · view detail" : "View detail"}
          </span>
          <button
            type="button"
            className="card-quick-order"
            aria-label={inCart ? "In cart" : "Add to cart"}
            title={inCart ? "In cart" : "Add to cart"}
            onClick={(e) => {
              e.stopPropagation();
              cart.addToCart(product.id);
            }}
          >
            {inCart ? (
              <Check size={14} aria-hidden />
            ) : (
              <Plus size={14} aria-hidden />
            )}
          </button>
        </div>
      </div>
      <div className="card-meta">
        <span className="card-ref">Ref. {product.ref}</span>
        <span className="card-tag">{tagDisplay(product)}</span>
      </div>
      <h3 className="card-name">
        <em>Aster</em>Piece
      </h3>
      <span className="card-price">{product.price}</span>
    </article>
  );
}
