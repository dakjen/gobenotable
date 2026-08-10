import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import AttributionTracker from "@/components/AttributionTracker";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";

const DESCRIPTION =
  "Notable builds the qualifications packages, decks, and websites that get women founders in the room — and the platform that makes the expertise they already had known, monetized, and notable. Collateral priced by the piece from $350; platform buildout from $4,000. A brand of DakJen Creative LLC.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gobenotable.com"),
  title: {
    default: "Notable — Go Be Notable. We'll Do The Rest.",
    template: "%s · Notable",
  },
  description: DESCRIPTION,
  keywords: [
    "qualifications package",
    "capabilities statement",
    "pitch deck design",
    "brand collateral for founders",
    "women founders branding",
    "personal brand platform",
    "thought leadership buildout",
  ],
  authors: [{ name: "DakJen Creative LLC", url: "https://gobenotable.com" }],
  creator: "DakJen Creative LLC",
  publisher: "DakJen Creative LLC",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    title: "Notable — Go Be Notable. We'll Do The Rest.",
    description: DESCRIPTION,
    url: "https://gobenotable.com",
    siteName: "Notable",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notable — Go Be Notable. We'll Do The Rest.",
    description: DESCRIPTION,
  },
};

/**
 * Structured data. Search engines and assistants read this directly, so the
 * service catalog and prices live here as machine-readable facts rather than
 * only as page copy an extractor has to infer.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://gobenotable.com/#organization",
      name: "Notable",
      alternateName: "Notable by DakJen Creative LLC",
      description: DESCRIPTION,
      url: "https://gobenotable.com",
      email: "admin@gobenotable.com",
      slogan: "Go Be Notable. We'll Do The Rest.",
      parentOrganization: { "@type": "Organization", name: "DakJen Creative LLC" },
      founder: { "@type": "Person", name: "Dakotah Jennifer", jobTitle: "Founder & Creative Director" },
      areaServed: { "@type": "Country", name: "United States" },
      priceRange: "$350–$20,000",
      knowsAbout: [
        "Qualifications packages",
        "Capabilities statements",
        "Pitch and investor presentations",
        "Brand collateral design",
        "LinkedIn strategy",
        "Thought leadership platforms",
        "Course and book development",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Notable Services",
        itemListElement: [
          { name: "One-pager / sell sheet", price: "350" },
          { name: "Executive bio / resume", price: "350" },
          { name: "Service promo / brochure", price: "450" },
          { name: "Line card / service menu", price: "450" },
          { name: "Branded deck template", price: "600" },
          { name: "Company profile", price: "650" },
          { name: "Branded proposal / SOW template", price: "700" },
          { name: "Brand style mini-guide", price: "750" },
          { name: "Pitch / investor presentation", price: "1400" },
          { name: "Capabilities / qualifications package", price: "2000" },
          { name: "Notable Amplify — platform and revenue buildout", price: "4000" },
        ].map(({ name, price }) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
          price,
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            price,
            priceCurrency: "USD",
            valueAddedTaxIncluded: false,
          },
          availability: "https://schema.org/InStock",
          url: "https://gobenotable.com/quote",
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://gobenotable.com/#website",
      url: "https://gobenotable.com",
      name: "Notable",
      description: DESCRIPTION,
      publisher: { "@id": "https://gobenotable.com/#organization" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white text-ink">
        <Nav />
        <Ticker />
        <main className="pt-[58px]">{children}</main>
        <Footer />
        <AttributionTracker />
        <Analytics />
      </body>
    </html>
  );
}
