import type { Metadata } from "next";
import Image from "next/image";
import { Accent, BookBand, Heading, PageHero } from "../components/ui";
import { idealFor, venue } from "../venue";

export const metadata: Metadata = {
  title: "About the Estate",
  description: "Twelve Palms Estate is a private 12,000 sq ft outdoor event estate in North Hollywood, Los Angeles, with a pool, jacuzzi and garden oasis, hosted by Lily B.",
};

export default function About() {
  return (
    <>
      <PageHero kicker="About" title={<>About <Accent>Twelve Palms</Accent></>} text="A private outdoor estate in North Hollywood, Los Angeles, made for gatherings worth remembering." photo="/images/fountain-garden.jpg" />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
        <div>
          <Heading kicker="The estate">A Serene, <Accent>Luxurious</Accent> Backdrop</Heading>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>Twelve Palms Estate offers a stunning setting for a variety of events, from private celebrations to corporate gatherings and intimate weddings. The beautifully landscaped grounds feature a large pool, a jacuzzi and a garden oasis, creating a serene and luxurious atmosphere for your guests.</p>
            <p>The layout is designed for flexibility. It suits both intimate gatherings and larger events, with ample seating, stylish outdoor furnishings and a seamless flow between spaces, all behind a private gate and tall green hedges.</p>
          </div>
        </div>
        <div className="tile overflow-hidden rounded-sm shadow-xl">
          <Image src="/images/pool-and-spa.jpg" alt="Pool and raised stone jacuzzi framed by palm trees" width={640} height={480} sizes="(max-width: 768px) 100vw, 560px" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Heading kicker="Perfect for" center>Made for Your <Accent>Occasion</Accent></Heading>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {idealFor.map((x) => (
              <li key={x} className="flex items-center gap-3 rounded-xl bg-white p-5 font-semibold shadow-sm">
                <span className="h-2.5 w-2.5 rotate-45 bg-accent" />{x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-24 text-center sm:grid-cols-4 sm:px-6">
        {[["200", "guests"], [venue.sqft, "sq ft"], ["5", "event areas"], ["7", "days a week"]].map(([v, l]) => (
          <div key={l}>
            <p className="script text-5xl text-accent-2">{v}</p>
            <p className="kicker mt-2 text-ink">{l}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center">
          <p className="kicker text-ink">Your host</p>
          <p className="script mt-3 text-4xl">Hosted by <Accent>{venue.host}</Accent></p>
          <p className="mt-4 text-muted">Bookings are handled securely through Peerspace, and Lily typically responds {venue.responds}.</p>
        </div>
      </section>

      <BookBand />
    </>
  );
}
