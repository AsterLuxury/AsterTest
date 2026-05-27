"use client";

import type { ReactNode } from "react";

import { ToastProvider } from "./toast-provider";
import { FavoritesProvider } from "./favorites-provider";
import { CartProvider } from "./cart-provider";
import { UIProvider } from "./ui-provider";

/**
 * Single root provider — wraps the whole app once in app/layout.tsx.
 * Order matters: ToastProvider must wrap CartProvider/FavoritesProvider
 * because they call `toast()`.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <FavoritesProvider>
        <CartProvider>
          <UIProvider>{children}</UIProvider>
        </CartProvider>
      </FavoritesProvider>
    </ToastProvider>
  );
}
