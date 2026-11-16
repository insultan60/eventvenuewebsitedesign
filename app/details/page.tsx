import type { Metadata } from "next";
import Link from "next/link";
import { Accent, BookBand, BookButton, Heading, PageHero } from "../components/ui";
import { allowed, notHosted, venue } from "../venue";

export const metadata: Metadata = {
  title: "Rates, Hours & Details",
  description: "Twelve Palms Estate rates ($500/hr, 8-hour minimum), hours (10 AM – 10 PM daily), food, alcohol, music, parking and access details.",
};

const hours = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function Details() {
  return (
    <>
      <PageHero kicker="Details" title={<>Everything You <Accent>Need to Know</Accent></>} text="Rates, hours and what you can bring and do at the estate." photo="/images/pool-and-spa.jpg" />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-xl bg-night p-8 text-white">
          <p className="kicker text-white/60">Rate</p>
          <p className="mt-2 text-5xl font-extrabold">${venue.rate}<span className="text-xl font-semibold text-white/70"> / hour</span></p>
          <p className="mt-2 text-white/75">{venue.minHours}-hour minimum · up to {venue.guests} guests · {venue.sqft} sq ft</p>
          <p className="mt-4 text-sm text-white/60">The total price, including Peerspace fees, is shown when you choose your date and time. You won’t be charged until Lily confirms.</p>
          <div className="mt-7"><BookButton label="Check Availability" /></div>
        </div>
        <div className="rounded-xl border border-line p-8">
          <p className="kicker text-ink">Bookable hours</p>
          <table className="mt-4 w-full text-sm">
            <tbody>
              {hours.map((d) => (
                <tr key={d} className="border-b border-line last:border-0">
                  <td className="py-2.5 font-semibold">{d}</td>
                  <td className="py-2.5 text-right text-muted">10:00 AM – 10:00 PM</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm text-muted">Hours can be adjusted on request.</p>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Heading kicker="What’s allowed" center>Bring It <Accent>All</Accent></Heading>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allowed.map((a) => (
              <div key={a.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="script text-2xl text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-accent/40 bg-white p-6">
            <h3 className="script text-2xl text-ink">Events we don’t host</h3>
            <p className="mt-2 text-sm text-muted">{notHosted.join(" · ")}</p>
            <p className="mt-3 text-sm text-muted">See the <Link href="/rules" className="font-bold text-accent-2 underline">house rules</Link> for everything else.</p>
          </div>
        </div>
      </section>

      <BookBand />
    </>
  );
}
