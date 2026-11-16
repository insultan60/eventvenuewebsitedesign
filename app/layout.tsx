import type { Metadata } from "next";
import { Kaushan_Script, Manrope } from "next/font/google";
import Nav from "./components/Nav";
import { Footer } from "./components/ui";
import { venue } from "./venue";
import "./globals.css";

const display = Kaushan_Script({ variable: "--font-kaushan", subsets: ["latin"], weight: "400" });
const sans = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: `${venue.name} | Private Event Venue with Pool in Sun Valley, Los Angeles`, template: `%s | ${venue.name}` },
  description: `${venue.name} is a 12,000 sq ft private outdoor estate in Sun Valley, LA with a pool, jacuzzi, garden lawn and basketball court for up to 200 guests. Weddings, showers and corporate events from $${venue.rate}/hr.`,
  openGraph: { title: venue.name, description: venue.tagline, images: ["/images/pool-and-spa.jpg"], type: "website" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: venue.name,
  description: venue.tagline,
  address: { "@type": "PostalAddress", addressLocality: "Sun Valley", addressRegion: "CA", addressCountry: "US" },
  maximumAttendeeCapacity: venue.guests,
  image: "/images/pool-and-spa.jpg",
  amenityFeature: ["Pool", "Jacuzzi", "Garden lawn", "Basketball court", "Restroom", "Free parking", "Wheelchair accessible"].map((n) => ({ "@type": "LocationFeatureSpecification", name: n, value: true })),
  openingHours: "Mo-Su 10:00-22:00",
  url: venue.bookingUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <body className="min-h-full font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
