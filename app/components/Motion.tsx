"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TARGETS = [
  "main section > *:not(img):not(.absolute):not(.grid):not(ul):not(ol):not([data-static])",
  "main section .grid > *",
  "main section ul > li",
  "main section ol > li",
  "main section .columns-2 > *",
].join(",");

// Scroll-reveal for page content + a slim progress bar between pages.
export default function Motion() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // Reveal elements as they scroll into view.
  useEffect(() => {
    setLoading(false);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter((el) => !el.closest("[data-hero]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );
    for (const el of els) {
      const i = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty("--d", `${Math.min(i, 6) * 90}ms`);
      el.classList.add("reveal");
      if (el.querySelector("img") && !el.querySelector("h2, h3, p")) el.classList.add("reveal-img");
      io.observe(el);
    }
    return () => io.disconnect();
  }, [pathname]);

  // Start the progress bar when an internal link to another page is clicked.
  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as Element).closest("a");
      if (!a || a.target || ev.metaKey || ev.ctrlKey || ev.shiftKey) return;
      const url = new URL(a.href, location.href);
      if (url.origin === location.origin && url.pathname !== location.pathname) setLoading(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <div className={`route-bar ${loading ? "route-bar-on" : ""}`} aria-hidden="true" />;
}
