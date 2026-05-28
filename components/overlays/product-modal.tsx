"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Gem, Heart, Plus, Shield, Truck, X } from "lucide-react";

import { useCart } from "@/components/providers/cart-provider";
import { useFavorites } from "@/components/providers/favorites-provider";
import { useUI } from "@/components/providers/ui-provider";
import { badgeText, singleOrderMessage, whatsappOrderUrl } from "@/lib/products";
import { WA_NUMBER } from "@/lib/constants";
import { cn } from "@/lib/utils";

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

export function ProductModal() {
  const ui = useUI();
  const cart = useCart();
  const favs = useFavorites();

  const product = ui.modalProduct;
  const [qty, setQty] = useState(1);

  // Reset qty whenever a new product opens
  useEffect(() => {
    if (product) setQty(1);
  }, [product]);

  const isOpen = product !== null;
  const isFav = product ? favs.isFavorite(product.id) : false;

  return (
    <div className="modal" id="modal" aria-hidden={!isOpen}>
      <div className="modal-bg" onClick={ui.closeProduct} />
      <div className="modal-shell">
        <button
          type="button"
          className="modal-close"
          aria-label="Close"
          onClick={ui.closeProduct}
        >
          <X size={16} aria-hidden />
        </button>

        {product && (
          <div className="modal-grid">
            <div className="modal-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id="modal-image"
                src={product.image}
                alt={`Aster ${product.ref}`}
              />
            </div>
            <div className="modal-info">
              <span className="modal-eyebrow" id="modal-eyebrow">
                {badgeText(product)} · Ref. {product.ref}
              </span>
              <h2 className="modal-name">
                <em>Aster</em> Piece
              </h2>
              <div className="modal-price-row">
                <span className="modal-price" id="modal-price">
                  {product.price}
                </span>
                <button
                  type="button"
                  className={cn("heart-btn", isFav && "active")}
                  id="modal-fav"
                  aria-label={
                    isFav ? "Remove from favorites" : "Add to favorites"
                  }
                  onClick={() => favs.toggleFavorite(product.id)}
                >
                  <Heart
                    size={16}
                    aria-hidden
                    fill={isFav ? "currentColor" : "none"}
                  />
                </button>
              </div>

              <div className="modal-list">
                <div>
                  <Gem size={14} aria-hidden />
                  <span>Quality pieces, carefully selected</span>
                </div>
                <div>
                  <Truck size={14} aria-hidden />
                  <span>Delivery available across Iraq</span>
                </div>
                <div>
                  <Shield size={14} aria-hidden />
                  <span>100% authentic, guaranteed</span>
                </div>
              </div>

              <div className="qty-row">
                <span className="qty-label">Quantity</span>
                <div className="qty">
                  <button
                    type="button"
                    aria-label="Decrease"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <span id="qty-value">{qty}</span>
                  <button
                    type="button"
                    aria-label="Increase"
                    onClick={() => setQty((q) => Math.min(10, q + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="cta cta-block"
                id="modal-add"
                onClick={() => {
                  cart.addToCart(product.id, qty);
                  ui.closeProduct();
                }}
              >
                <span>
                  <Plus size={14} aria-hidden style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
                  Add to Cart
                </span>
                <span className="cta-arrow">
                  <ArrowRight size={18} aria-hidden />
                </span>
              </button>

              <a
                href={whatsappOrderUrl(WA_NUMBER, singleOrderMessage(product, qty))}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-link cart-quick-buy"
                id="modal-order"
              >
                <span style={{ color: "var(--whatsapp)" }}>
                  <WhatsAppIcon size={16} />
                </span>
                Order this piece now
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
