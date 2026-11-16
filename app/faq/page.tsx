import type { Metadata } from "next";
import { Accent, BookBand, PageHero } from "../components/ui";
import { faqs } from "../venue";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about pricing, capacity, hours, cancellation, catering, alcohol and booking at Twelve Palms Estate.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Faq() {
  return (
    <>
      <PageHero kicker="FAQ" title={<>Questions, <Accent>Answered</Accent></>} photo="/images/fountain-garden.jpg" />
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, k) => (
            <details key={f.q} open={k === 0} className="py-5">
              <summary className="flex items-center justify-between gap-6 text-lg font-bold text-ink">
                {f.q}
                <span className="plus grid h-8 w-8 flex-none place-items-center rounded-full bg-mist text-xl transition">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <BookBand title={<>Still Have <Accent>Questions</Accent>?</>} text="Message Lily through Peerspace. She typically responds within 24 hours." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
