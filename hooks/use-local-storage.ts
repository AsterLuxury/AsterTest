"use client";

import { useEffect, useState } from "react";

/**
 * useLocalStorage — read/write a JSON value in localStorage.
 * Returns [value, setValue] just like useState. Reads happen on mount
 * to keep SSR output deterministic and avoid hydration mismatches.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  // Read once on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        setValue(JSON.parse(raw) as T);
      }
    } catch {
      // ignore parse / access errors (private mode, quota, etc.)
    }
    setHydrated(true);
  }, [key]);

  // Persist on every change after hydration.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore quota / access errors
    }
  }, [key, value, hydrated]);

  return [value, setValue];
}
