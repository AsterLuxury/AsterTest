"use client";

import { useEffect, useState } from "react";

/**
 * Top scroll progress bar. Uses native CSS `animation-timeline: scroll()`
 * (handled in globals.css via @supports) when available; this hook is the
 * JS fallback for browsers without scroll-driven animation support.
 */
export function ProgressBar() {
  const [width, setWidth] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // If the browser supports CSS scroll-driven animations, the static
    // CSS handles the bar — no JS needed.
    const supports =
      typeof CSS !== "undefined" &&
      CSS.supports?.("animation-timeline: scroll()");
    if (supports) return;

    setUseFallback(true);
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setWidth(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        id="progress-fill"
        style={useFallback ? { width: `${width}%` } : undefined}
      />
    </div>
  );
}
