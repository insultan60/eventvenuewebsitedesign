"use client";
import { useEffect, useState } from "react";

// Full-screen intro shown on the first visit only. It is rendered in the
// server HTML so it covers the page instantly; a CSS fallback hides it even
// if JavaScript never runs.
export default function Loader() {
  const [state, setState] = useState<"show" | "hide" | "gone">("show");

  useEffect(() => {
    const start = performance.now();
    const done = () => {
      const wait = Math.max(0, 1100 - (performance.now() - start));
      setTimeout(() => { setState("hide"); document.documentElement.classList.add("ready"); }, wait);
      setTimeout(() => setState("gone"), wait + 700);
    };
    if (document.readyState === "complete") done();
    else window.addEventListener("load", done, { once: true });
    return () => window.removeEventListener("load", done);
  }, []);

  if (state === "gone") return null;
  return (
    <div className={`loader ${state === "hide" ? "loader-hide" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="loader-palm h-14 w-14 text-accent" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M12 21v-9" /><path d="M12 12c-1.5-3-4.5-4.5-8-4 2 1 3.5 2.4 4 4" /><path d="M12 12c1.5-3 4.5-4.5 8-4-2 1-3.5 2.4-4 4" /><path d="M12 12c0-3.5-1.5-6-4-8M12 12c0-3.5 1.5-6 4-8" />
      </svg>
      <p className="script mt-4 text-3xl text-white">Twelve Palms</p>
      <p className="kicker mt-2 text-white/50">Estate · Sun Valley</p>
      <span className="loader-bar mt-6" />
    </div>
  );
}
