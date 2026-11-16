import type { Metadata } from "next";
import Gallery from "../components/Gallery";
import { Accent, BookBand, PageHero } from "../components/ui";
import { venue } from "../venue";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photos of Twelve Palms Estate: the pool and jacuzzi, garden lawn and fountain, basketball court, play area and private hedge walkway.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero kicker="Gallery" title={<>A Glimpse Into the <Accent>Estate</Accent></>} text="Click any photo to view it full screen." photo="/images/play-area.jpg" />
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Gallery />
        <p className="mt-8 text-center"><a href={venue.bookingUrl} target="_blank" rel="noopener" className="script text-xl text-ink underline underline-offset-4 hover:text-accent-2">See more on Peerspace</a></p>
      </section>
      <BookBand />
    </>
  );
}
