"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import { LS_KEYS } from "@/lib/constants";
import { products as allProducts, priceToNumber } from "@/lib/products";
import type { CartItem } from "@/lib/types";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useToast } from "./toast-provider";

interface CartContextValue {
  cart: CartItem[];
  itemCount: number;
  total: number;
  isInCart: (id: number) => boolean;
  addToCart: (id: number, qty?: number) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, delta: number) => void;
  clear: () => void;
  pulseTrigger: number; // increments to trigger header cart-icon pulse
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useLocalStorage<CartItem[]>(LS_KEYS.cart, []);
  const [pulseTrigger, setPulseTrigger] = useLocalStorage<number>(
    "_aster_pulse",
    0,
  );
  const { toast } = useToast();

  const isInCart = useCallback(
    (id: number) => cart.some((c) => c.id === id),
    [cart],
  );

  const addToCart = useCallback(
    (id: number, qty: number = 1) => {
      const product = allProducts.find((p) => p.id === id);
      if (!product) return;

      setCart((prev) => {
        const existing = prev.find((c) => c.id === id);
        if (existing) {
          toast(`Quantity updated · Ref. ${product.ref}`);
          return prev.map((c) =>
            c.id === id ? { ...c, qty: Math.min(10, c.qty + qty) } : c,
          );
        }
        toast(`Added to cart · Ref. ${product.ref}`);
        return [...prev, { id, qty }];
      });
      setPulseTrigger((p) => p + 1);
    },
    [setCart, setPulseTrigger, toast],
  );

  const removeFromCart = useCallback(
    (id: number) => {
      setCart((prev) => prev.filter((c) => c.id !== id));
    },
    [setCart],
  );

  const updateQty = useCallback(
    (id: number, delta: number) => {
      setCart((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, qty: Math.max(1, Math.min(10, c.qty + delta)) }
            : c,
        ),
      );
    },
    [setCart],
  );

  const clear = useCallback(() => {
    setCart([]);
    toast("Cart cleared");
  }, [setCart, toast]);

  const itemCount = useMemo(
    () => cart.reduce((sum, c) => sum + c.qty, 0),
    [cart],
  );

  const total = useMemo(
    () =>
      cart.reduce((sum, c) => {
        const product = allProducts.find((p) => p.id === c.id);
        if (!product) return sum;
        return sum + priceToNumber(product.price) * c.qty;
      }, 0),
    [cart],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      cart,
      itemCount,
      total,
      isInCart,
      addToCart,
      removeFromCart,
      updateQty,
      clear,
      pulseTrigger,
    }),
    [
      cart,
      itemCount,
      total,
      isInCart,
      addToCart,
      removeFromCart,
      updateQty,
      clear,
      pulseTrigger,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
