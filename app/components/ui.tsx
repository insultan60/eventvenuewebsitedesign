import Image from "next/image";
import Link from "next/link";
import { venue } from "../venue";

export const Accent = ({ children }: { children: React.ReactNode }) => <span className="text-accent">{children}</span>;

export function Heading({ kicker, children, light = false, center = false }: { kicker: string; children: React.ReactNode; light?: boolean; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className={`kicker ${light ? "text-white/70" : "text-ink"}`}>{kicker}</p>
      <h2 className={`script mt-3 text-4xl sm:text-5xl ${light ? "text-white" : "text-ink"}`}>{children}</h2>
    </div>
  );
}

export function BookButton({ label = "Book Now", outline = false }: { label?: string; outline?: boolean }) {
  return <a href={venue.bookingUrl} target="_blank" rel="noopener" className={`btn ${outline ? "btn-outline" : "btn-accent"}`}>{label}</a>;
}

/** Dark photo banner used at the top of every inner page. */
export function PageHero({ kicker, title, text, photo }: { kicker: string; title: React.ReactNode; text?: string; photo: string }) {
  return (
    <section className="shade-photo relative flex min-h-[46vh] items-end">
      <Image src={photo} alt="" fill preload sizes="100vw" className="object-cover" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-32 pb-14 sm:px-6">
        <p className="kicker text-white/70">
          <Link href="/" className="hover:text-accent">Home</Link> <span className="mx-1">/</span> {kicker}
        </p>
        <h1 className="script mt-3 text-5xl text-white sm:text-6xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-white/85">{text}</p>}
      </div>
    </section>
  );
}

/** Closing booking band shown at the end of each page. */
export function BookBand({ title = <>Ready to <Accent>Celebrate</Accent>?</>, text = "Choose your date and time, send a request, and Lily typically confirms within 24 hours. You won’t be charged yet." }: { title?: React.ReactNode; text?: string }) {
  return (
    <section className="shade-photo relative py-24">
      <Image src="/images/court-and-pool.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <h2 className="script text-4xl text-white sm:text-5xl">{title}</h2>
        <p className="mt-4 text-white/80">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <BookButton label="Check Availability" />
          <Link href="/faq" className="btn btn-outline text-white">Read the FAQ</Link>
        </div>
      </div>
    </section>
  );
}

export const pages = [
  { href: "/about", label: "About" },
  { href: "/spaces", label: "Spaces" },
  { href: "/details", label: "Details" },
  { href: "/rules", label: "House Rules" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <p className="script text-3xl">Twelve Palms <Accent>Estate</Accent></p>
          <p className="mt-3 max-w-xs text-sm text-white/70">A private outdoor event estate with pool, spa and garden in Sun Valley, Los Angeles.</p>
          <div className="mt-6"><BookButton /></div>
        </div>
        <div>
          <p className="script flex items-center gap-2 text-2xl"><span className="h-2 w-2 rotate-45 bg-accent" />Get in Touch</p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>Sun Valley, Los Angeles, CA<br /><span className="text-white/50">Exact address shared after booking</span></li>
            <li>Open daily, 10 AM – 10 PM</li>
            <li><a href={venue.bookingUrl} target="_blank" rel="noopener" className="hover:text-accent">Message {venue.host} on Peerspace</a></li>
          </ul>
        </div>
        <div>
          <p className="script flex items-center gap-2 text-2xl"><span className="h-2 w-2 rotate-45 bg-accent" />Pages</p>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/75">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            {pages.map((p) => <li key={p.href}><Link href={p.href} className="hover:text-accent">{p.label}</Link></li>)}
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-6 text-center text-xs text-white/50">Bookings and payments handled securely via Peerspace.</p>
    </footer>
  );
}
