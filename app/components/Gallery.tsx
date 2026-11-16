"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { photos } from "../venue";

export default function Gallery() {
  const [i, setI] = useState<number | null>(null);
  const close = useCallback(() => setI(null), []);
  const step = useCallback((d: number) => setI((v) => (v === null ? v : (v + d + photos.length) % photos.length)), []);

  useEffect(() => {
    if (i === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [i, close, step]);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {photos.map((p, k) => (
          <button
            key={p.src}
            onClick={() => setI(k)}
            className="tile group relative block w-full break-inside-avoid overflow-hidden rounded-2xl text-left"
            aria-label={`Open photo: ${p.label}`}
          >
            <Image src={p.src} alt={p.alt} width={640} height={480} sizes="(max-width: 768px) 50vw, 380px" className={`w-full object-cover ${k % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 to-transparent p-4 pt-10 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">{p.label}</span>
          </button>
        ))}
      </div>

      {i !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4" role="dialog" aria-modal="true" aria-label={photos[i].label} onClick={close}>
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image src={photos[i].src} alt={photos[i].alt} width={640} height={480} className="h-auto w-full rounded-2xl" />
            <p className="mt-3 text-center text-sm text-white/80">{photos[i].label} · {i + 1} / {photos.length}</p>
            <button onClick={() => step(-1)} className="absolute top-1/2 -left-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-night sm:-left-14" aria-label="Previous photo">‹</button>
            <button onClick={() => step(1)} className="absolute top-1/2 -right-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-night sm:-right-14" aria-label="Next photo">›</button>
            <button onClick={close} className="absolute -top-3 -right-3 grid h-10 w-10 place-items-center rounded-full bg-white text-night" aria-label="Close">✕</button>
          </div>
        </div>
      )}
    </>
  );
}
