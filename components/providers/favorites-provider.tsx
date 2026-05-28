"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import { LS_KEYS } from "@/lib/constants";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useToast } from "./toast-provider";

interface FavoritesContextValue {
  favorites: number[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
  count: number;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used inside <FavoritesProvider>");
  return ctx;
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useLocalStorage<number[]>(
    LS_KEYS.favorites,
    [],
  );
  const { toast } = useToast();

  const isFavorite = useCallback(
    (id: number) => favorites.includes(id),
    [favorites],
  );

  const toggleFavorite = useCallback(
    (id: number) => {
      setFavorites((prev) => {
        if (prev.includes(id)) {
          toast("Removed from favorites");
          return prev.filter((x) => x !== id);
        }
        toast("Added to favorites");
        return [...prev, id];
      });
    },
    [setFavorites, toast],
  );

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favorites,
      isFavorite,
      toggleFavorite,
      count: favorites.length,
    }),
    [favorites, isFavorite, toggleFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
