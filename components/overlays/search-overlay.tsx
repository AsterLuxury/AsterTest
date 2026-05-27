"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";

import { useUI } from "@/components/providers/ui-provider";
import { products as allProducts, tagDisplay } from "@/lib/products";
import { cn } from "@/lib/utils";

const SUGGESTIONS = ["exclusive", "new", "namaya", "limited"];

export function SearchOverlay() {
  const ui = useUI();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  // Focus input when the overlay opens; clear when it closes.
  useEffect(() => {
    if (ui.searchOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
    setQuery("");
  }, [ui.searchOpen]);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allProducts
      .filter(
        (p) =>
          p.ref.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q)) ||
          p.price
            .toLowerCase()
            .replace(/,/g, "")
            .includes(q.replace(/,/g, "")),
      )
      .slice(0, 8);
  }, [query]);

  function handlePick(productId: number) {
    ui.closeSearch();
    // Slight delay so the close transition can play before the modal opens.
    setTimeout(() => ui.openProduct(productId), 250);
  }

  return (
    <div
      className={cn("search-overlay", ui.searchOpen && "open")}
      id="search-overlay"
    >
      <button
        type="button"
        className="search-close"
        id="search-close"
        aria-label="Close"
        onClick={ui.closeSearch}
      >
        <X size={16} aria-hidden />
      </button>
      <div className="search-inner">
        <label className="search-label" htmlFor="search-input">
          Search
        </label>
        <div className="search-field">
          <input
            ref={inputRef}
            id="search-input"
            type="text"
            placeholder="Try 'AL-015', 'exclusive', or '10,000'"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="search-cursor" />
        </div>

        <div className="search-suggestions">
          <span className="suggestion-label">Try:</span>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              className="suggestion-chip"
              onClick={() => setQuery(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        <div className="search-results" id="search-results">
          {query.trim() === "" ? null : matches.length === 0 ? (
            <div
              style={{
                padding: 24,
                textAlign: "center",
                color: "var(--muted)",
                fontStyle: "italic",
              }}
            >
              No matches — try a reference like AL-015
            </div>
          ) : (
            matches.map((p) => (
              <button
                type="button"
                className="search-result"
                key={p.id}
                onClick={() => handlePick(p.id)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.ref} />
                <div className="search-result-info">
                  <strong>Aster Piece — Ref. {p.ref}</strong>
                  <span>
                    {p.price} · {tagDisplay(p)}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  aria-hidden
                  className="search-result-arrow"
                />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
