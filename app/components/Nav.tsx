"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { venue } from "../venue";

const left = [
  { href: "/about", label: "About" },
  { href: "/spaces", label: "Spaces" },
  { href: "/details", label: "Details" },
];
const right = [
  { href: "/rules", label: "Rules" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center leading-none" aria-label={`${venue.name} home`}>
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
        <path d="M12 21v-9" /><path d="M12 12c-1.5-3-4.5-4.5-8-4 2 1 3.5 2.4 4 4" /><path d="M12 12c1.5-3 4.5-4.5 8-4-2 1-3.5 2.4-4 4" /><path d="M12 12c0-3.5-1.5-6-4-8M12 12c0-3.5 1.5-6 4-8" />
      </svg>
      <span className="script mt-0.5 text-xl text-white">Twelve Palms</span>
      <span className="kicker !text-[.55rem] text-white/60">Estate</span>
    </Link>
  );
}

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const link = (href: string) => `text-sm font-semibold transition hover:text-accent ${path === href ? "text-accent" : "text-white/85"}`;
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${solid || open ? "bg-night/95 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto grid h-20 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-6 border-b border-white/10 px-4 sm:px-6">
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main left">
          {left.map((l) => <Link key={l.href} href={l.href} className={link(l.href)} aria-current={path === l.href ? "page" : undefined}>{l.label}</Link>)}
        </nav>
        <div className="lg:hidden" />
        <Logo />
        <div className="flex items-center justify-end gap-8">
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main right">
            {right.map((l) => <Link key={l.href} href={l.href} className={link(l.href)} aria-current={path === l.href ? "page" : undefined}>{l.label}</Link>)}
          </nav>
          <a href={venue.bookingUrl} target="_blank" rel="noopener" className="btn btn-accent hidden !py-2 lg:inline-flex">Book Now</a>
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center text-white lg:hidden" aria-label="Menu" aria-expanded={open}>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">{open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="bg-night px-4 pb-6 lg:hidden" aria-label="Mobile">
          {[{ href: "/", label: "Home" }, ...left, ...right].map((l) => <Link key={l.href} href={l.href} className={`block border-b border-white/10 py-4 font-semibold ${path === l.href ? "text-accent" : "text-white"}`}>{l.label}</Link>)}
          <a href={venue.bookingUrl} target="_blank" rel="noopener" className="btn btn-accent mt-5 w-full">Book Now</a>
        </nav>
      )}
    </header>
  );
}
