"use client";
import { useEffect, useRef, useState } from "react";

// Muted looping background video. The photo underneath stays visible until
// the video is actually playing, so there is never a blank hero.
export default function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // Autoplay can start before hydration, so check the current state too.
  useEffect(() => {
    const v = ref.current;
    if (v && !v.paused && v.currentTime > 0) setPlaying(true);
  }, []);
  return (
    <video
      ref={ref}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${playing ? "opacity-100" : "opacity-0"}`}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      onPlaying={() => setPlaying(true)}
      onTimeUpdate={() => !playing && setPlaying(true)}
    />
  );
}
