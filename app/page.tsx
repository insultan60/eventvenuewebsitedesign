import Image from "next/image";
import Link from "next/link";
import { Accent, BookBand, BookButton, Heading } from "./components/ui";
import { idealFor, photos, spaces, venue } from "./venue";

const strips = [
  { label: "Pool & Spa", src: "/images/pool-and-spa.jpg" },
  { label: "Garden Lawn", src: "/images/fountain-garden.jpg" },
  { label: "Court & Lounge", src: "/images/court-and-pool.jpg" },
  { label: "Play Area", src: "/images/play-area.jpg" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="shade-photo relative flex min-h-[92vh] items-center justify-center">
        <Image src="/images/pool-and-spa.jpg" alt="Pool and jacuzzi at Twelve Palms Estate surrounded by palm trees" fill preload sizes="100vw" className="object-cover" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 pt-20 text-center">
          <h1 className="script text-5xl text-white sm:text-7xl">
            Where <Accent>Celebrations</Accent> Meet<br className="hidden sm:block" /> the California Sun
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-white/85">
            A private 12,000 sq ft outdoor estate in Sun Valley, Los Angeles, with pool, jacuzzi and garden oasis, for up to 200 guests.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookButton />
            <Link href="/gallery" className="btn btn-outline text-white">See the Estate</Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-night/40 backdrop-blur-sm">
          <dl className="mx-auto grid max-w-4xl grid-cols-2 divide-white/10 px-4 py-4 text-center text-white sm:grid-cols-4 sm:divide-x">
            {[["200", "Guests"], [venue.sqft, "Sq ft"], [`$${venue.rate}/hr`, `${venue.minHours} hr minimum`], ["10 AM – 10 PM", "Open daily"]].map(([v, l]) => (
              <div key={l} className="py-1"><dd className="font-bold">{v}</dd><dt className="text-xs text-white/60">{l}</dt></div>
            ))}
          </dl>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
        <div className="tile overflow-hidden rounded-sm shadow-xl">
          <Image src="/images/court-and-pool.jpg" alt="Backyard with basketball court, pool, gazebos and palm trees" width={640} height={480} sizes="(max-width: 768px) 100vw, 560px" className="h-full w-full object-cover" />
        </div>
        <div>
          <Heading kicker="About us">Bringing People Together Under <Accent>Twelve Palms</Accent></Heading>
          <p className="mt-6 leading-relaxed text-muted">
            A stunning setting for everything from private celebrations to corporate gatherings and intimate weddings: a large pool, jacuzzi and garden oasis, all behind a private gate and tall green hedges.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {idealFor.map((x) => <li key={x} className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink">{x}</li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton label="Check Availability" />
            <Link href="/about" className="btn btn-outline text-ink">Read More</Link>
          </div>
        </div>
      </section>

      {/* VERTICAL PHOTO STRIPS */}
      <section aria-label="Areas of the estate" className="grid grid-cols-2 md:grid-cols-4">
        {strips.map((s) => (
          <Link key={s.label} href="/spaces" className="strip relative block h-72 overflow-hidden md:h-[460px]">
            <Image src={s.src} alt={s.label} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            <span className="absolute bottom-6 left-5 origin-bottom-left text-3xl font-extrabold text-white md:bottom-8 md:left-8 md:translate-x-10 md:-rotate-90 md:text-5xl md:whitespace-nowrap">{s.label}</span>
          </Link>
        ))}
      </section>

      {/* SPACES PREVIEW */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading kicker="The spaces">Five Areas, <Accent>One Estate</Accent></Heading>
          <Link href="/spaces" className="btn btn-outline text-ink">View all spaces</Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {spaces.slice(0, 3).map((s, k) => (
            <Link key={s.title} href="/spaces" className="group">
              <div className="tile relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={s.photo} alt={s.title} fill sizes="(max-width: 640px) 100vw, 380px" className="object-cover" />
                <span className="absolute top-3 left-3 grid h-9 w-9 place-items-center rounded-full bg-night/80 text-sm font-bold text-accent">0{k + 1}</span>
              </div>
              <h3 className="script mt-4 text-2xl text-ink group-hover:text-accent-2">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-mist py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-3">
          {[
            { t: "Rates & hours", d: `$${venue.rate}/hr, ${venue.minHours}-hour minimum. Open 10 AM – 10 PM daily.`, href: "/details" },
            { t: "House rules", d: "What’s allowed, what isn’t, and the cancellation policy.", href: "/rules" },
            { t: "Questions?", d: "Capacity, catering, alcohol, parking and how booking works.", href: "/faq" },
          ].map((c) => (
            <Link key={c.t} href={c.href} className="group rounded-xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="script text-3xl text-ink">{c.t}</h3>
              <p className="mt-2 text-sm text-muted">{c.d}</p>
              <span className="mt-4 inline-block text-sm font-bold text-accent-2">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Heading kicker="Gallery" center>A Glimpse Into the <Accent>Estate</Accent></Heading>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {photos.slice(0, 4).map((p) => (
            <Link key={p.src} href="/gallery" className="tile relative aspect-square overflow-hidden rounded-2xl">
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 280px" className="object-cover" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center"><Link href="/gallery" className="script text-xl text-ink underline underline-offset-4 hover:text-accent-2">See the full gallery</Link></p>
      </section>

      <BookBand />
    </>
  );
}
