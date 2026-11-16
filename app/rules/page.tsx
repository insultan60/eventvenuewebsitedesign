import type { Metadata } from "next";
import { Accent, BookBand, Heading, PageHero } from "../components/ui";
import { rules } from "../venue";

export const metadata: Metadata = {
  title: "House Rules & Cancellation Policy",
  description: "House rules, safety, security cameras and the flexible cancellation policy for events at Twelve Palms Estate.",
};

const policy = [
  ["7+ days before your event", "Full refund, including all fees"],
  ["7 days – 24 hours before", "50% refund (excluding fees)"],
  ["Less than 24 hours before", "No refund"],
];

export default function Rules() {
  return (
    <>
      <PageHero kicker="House Rules" title={<>A Few Things to <Accent>Keep in Mind</Accent></>} text="By booking, the booking guest agrees to these rules and takes responsibility for all attendees, vendors and activities." photo="/images/hedge-walkway.jpg" />

      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <ol className="space-y-4">
          {rules.map((r, k) => (
            <li key={r} className="flex gap-5 rounded-xl border border-line p-5">
              <span className="script flex-none text-3xl leading-none text-accent-2">{k + 1}</span>
              <span className="leading-relaxed text-ink/85">{r}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted">Alcohol is for guests 21+ only and must follow local law. Recording devices in restrooms are prohibited.</p>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Heading kicker="Cancellation policy" center>Flexible <Accent>Cancellation</Accent></Heading>
          <div className="mt-12 overflow-hidden rounded-xl bg-white shadow-sm">
            {policy.map(([when, what]) => (
              <div key={when} className="flex flex-wrap items-center justify-between gap-2 border-b border-line p-5 last:border-0">
                <span className="font-semibold">{when}</span>
                <span className="text-muted">{what}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted">Grace period: cancel within 24 hours of receiving your booking confirmation for a full refund, as long as it is at least 48 hours before the event.</p>
        </div>
      </section>

      <BookBand />
    </>
  );
}
