"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { FilterValue, Product } from "@/lib/types";
import { products as allProducts } from "@/lib/products";

/**
 * UIProvider centralizes the cross-cutting UI state that the legacy
 * vanilla site managed via DOM classes:
 *  - which filter is active in the shop grid
 *  - which product is open in the modal
 *  - whether the cart drawer / search overlay / mobile menu are open
 *  - whether favorites-only view is active
 */
interface UIContextValue {
  filter: FilterValue;
  setFilter: (f: FilterValue) => void;

  favoritesOnly: boolean;
  setFavoritesOnly: (v: boolean) => void;

  modalProduct: Product | null;
  openProduct: (id: number) => void;
  closeProduct: () => void;

  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;

  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const UIContext = createContext<UIContextValue | null>(null);

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used inside <UIProvider>");
  return ctx;
}

export function UIProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openProduct = useCallback((id: number) => {
    const p = allProducts.find((x) => x.id === id);
    if (p) setModalProduct(p);
  }, []);
  const closeProduct = useCallback(() => setModalProduct(null), []);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Lock body scroll when any overlay is open.
  useEffect(() => {
    const anyOpen =
      modalProduct !== null || cartOpen || searchOpen || menuOpen;
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalProduct, cartOpen, searchOpen, menuOpen]);

  // Escape key closes the topmost overlay.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (modalProduct) return closeProduct();
      if (cartOpen) return closeCart();
      if (searchOpen) return closeSearch();
      if (menuOpen) return closeMenu();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [
    modalProduct,
    cartOpen,
    searchOpen,
    menuOpen,
    closeProduct,
    closeCart,
    closeSearch,
    closeMenu,
  ]);

  const value = useMemo<UIContextValue>(
    () => ({
      filter,
      setFilter,
      favoritesOnly,
      setFavoritesOnly,
      modalProduct,
      openProduct,
      closeProduct,
      cartOpen,
      openCart,
      closeCart,
      searchOpen,
      openSearch,
      closeSearch,
      menuOpen,
      toggleMenu,
      closeMenu,
    }),
    [
      filter,
      favoritesOnly,
      modalProduct,
      openProduct,
      closeProduct,
      cartOpen,
      openCart,
      closeCart,
      searchOpen,
      openSearch,
      closeSearch,
      menuOpen,
      toggleMenu,
      closeMenu,
    ],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
