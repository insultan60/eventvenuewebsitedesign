import type { Metadata } from "next";
import Image from "next/image";
import { Accent, BookBand, PageHero } from "../components/ui";
import { spaces } from "../venue";

export const metadata: Metadata = {
  title: "The Spaces",
  description: "Poolside lounge, open lawn and garden, basketball court and play area, covered tent space, restroom and parking: the five areas of Twelve Palms Estate.",
};

const extra: Record<string, string> = {
  "Poolside Lounge": "Lounge chairs, shaded umbrellas and the raised stone jacuzzi make this the natural gathering point for welcome drinks and golden-hour photos.",
  "Open Lawn & Garden": "Soft green lawn, a stone basket fountain and a wrought-iron gate set a classic scene for vows, toasts and long dinner tables.",
  "Basketball Court & Play Area": "A full outdoor court plus a wooden play structure with swings and a slide keep every age group entertained.",
  "Covered Tent Space": "Two shaded gazebos keep food, guests and presentations out of the sun or evening chill.",
  "Restroom & Parking": "A dedicated outdoor restroom for guests, with free on-site parking and free street parking right outside.",
};

export default function Spaces() {
  return (
    <>
      <PageHero kicker="Spaces" title={<>Five Areas, <Accent>One Estate</Accent></>} text="Use the whole estate for one flowing event: ceremony on the lawn, cocktails by the pool, dinner under the tent." photo="/images/court-and-pool.jpg" />

      <section className="mx-auto max-w-6xl space-y-20 px-4 py-24 sm:px-6">
        {spaces.map((s, k) => (
          <article key={s.title} className="grid items-center gap-10 md:grid-cols-2">
            <div className={`tile relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg ${k % 2 ? "md:order-2" : ""}`}>
              <Image src={s.photo} alt={s.title} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover" />
            </div>
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-night text-lg font-bold text-accent">0{k + 1}</span>
              <h2 className="script mt-5 text-4xl text-ink">{s.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">{s.text}</p>
              <p className="mt-3 leading-relaxed text-muted">{extra[s.title]}</p>
            </div>
          </article>
        ))}
      </section>

      <BookBand />
    </>
  );
}
