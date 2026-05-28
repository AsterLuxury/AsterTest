"use client";

import { ArrowRight, Info, X } from "lucide-react";

import { useCart } from "@/components/providers/cart-provider";
import { useUI } from "@/components/providers/ui-provider";
import {
  cartOrderMessage,
  formatIQD,
  priceToNumber,
  products as allProducts,
  whatsappOrderUrl,
} from "@/lib/products";
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

export function CartDrawer() {
  const ui = useUI();
  const cart = useCart();

  const items = cart.cart
    .map((c) => {
      const product = allProducts.find((p) => p.id === c.id);
      return product ? { product, qty: c.qty } : null;
    })
    .filter((x): x is { product: typeof allProducts[number]; qty: number } => x !== null);

  const isEmpty = items.length === 0;

  function handleClear() {
    if (window.confirm("Remove all pieces from your cart?")) {
      cart.clear();
    }
  }

  function handleSendOrder() {
    if (isEmpty) return;
    const url = whatsappOrderUrl(WA_NUMBER, cartOrderMessage(items));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <aside
      className={cn("cart-drawer", isEmpty && "empty")}
      id="cart-drawer"
      aria-hidden={!ui.cartOpen}
    >
      <div className="cart-bg" onClick={ui.closeCart} />
      <div className="cart-panel">
        <header className="cart-head">
          <div>
            <span className="cart-eyebrow">Your Selection</span>
            <h3 className="cart-title">
              The <em>Cart</em>
            </h3>
          </div>
          <button
            type="button"
            className="icon-btn"
            aria-label="Close cart"
            onClick={ui.closeCart}
          >
            <X size={16} aria-hidden />
          </button>
        </header>

        <div className="cart-body" id="cart-body">
          {items.map(({ product, qty }) => {
            const lineTotal = priceToNumber(product.price) * qty;
            return (
              <div className="cart-item" key={product.id}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt={`Aster ${product.ref}`} />
                <div className="cart-item-info">
                  <div className="cart-item-top">
                    <div className="cart-item-meta">
                      <span className="cart-item-ref">Ref. {product.ref}</span>
                      <h4 className="cart-item-name">
                        <em>Aster</em>Piece
                      </h4>
                      <div className="cart-item-price">{product.price}</div>
                    </div>
                    <button
                      type="button"
                      className="cart-item-remove"
                      aria-label="Remove"
                      onClick={() => cart.removeFromCart(product.id)}
                    >
                      <X size={14} aria-hidden />
                    </button>
                  </div>
                  <div className="cart-item-bottom">
                    <div className="cart-qty">
                      <button
                        type="button"
                        aria-label="Decrease"
                        onClick={() => cart.updateQty(product.id, -1)}
                      >
                        −
                      </button>
                      <span>{qty}</span>
                      <button
                        type="button"
                        aria-label="Increase"
                        onClick={() => cart.updateQty(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className="cart-item-line">
                      {formatIQD(lineTotal)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-empty" id="cart-empty">
          <span className="empty-mark">◆</span>
          <h4>Your cart is empty</h4>
          <p>Tap any piece to add it to your selection</p>
          <button type="button" className="cta-link" onClick={ui.closeCart}>
            Browse the collection <ArrowRight size={14} aria-hidden />
          </button>
        </div>

        <footer className="cart-foot" id="cart-foot">
          <div className="cart-summary">
            <div className="cart-row">
              <span>Items</span>
              <span id="cart-items-count">
                {cart.itemCount} piece{cart.itemCount === 1 ? "" : "s"}
              </span>
            </div>
            <div className="cart-row total">
              <span>Total</span>
              <span id="cart-total">{formatIQD(cart.total)}</span>
            </div>
            <p className="cart-note">
              <Info size={12} aria-hidden />
              Final total confirmed on WhatsApp. Delivery available across Iraq.
            </p>
          </div>
          <button
            type="button"
            className="cta cta-block"
            id="cart-order"
            onClick={handleSendOrder}
            disabled={isEmpty}
          >
            <span>
              <span style={{ color: "var(--whatsapp)" }}>
                <WhatsAppIcon size={16} />
              </span>{" "}
              Send Order via WhatsApp
            </span>
            <span className="cta-arrow">
              <ArrowRight size={18} aria-hidden />
            </span>
          </button>
          <button
            type="button"
            className="cart-clear"
            id="cart-clear"
            onClick={handleClear}
            disabled={isEmpty}
          >
            Clear cart
          </button>
        </footer>
      </div>
    </aside>
  );
}
