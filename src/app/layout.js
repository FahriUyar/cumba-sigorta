import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "CUMBA Sigorta | Ankara Çukurambar BES ve Hayat Sigortası",
    template: "%s | CUMBA Sigorta",
  },
  description:
    "Ankara Çukurambar'da uzman kadrosuyla Bireysel Emeklilik (BES) ve Hayat Sigortası çözümleri. Geleceğinizi şansa değil, CUMBA Sigorta güvencesine bırakın.",
  keywords:
    "Ankara BES, Ankara Hayat Sigortası, Çukurambar Sigorta Acentesi, bireysel emeklilik Ankara, sigorta acentesi Çankaya, CUMBA Sigorta, BES devlet katkısı, hayat sigortası Ankara",
  authors: [{ name: "CUMBA Sigorta Aracılık Hizmetleri Ltd. Şti." }],
  metadataBase: new URL("https://cumbasigorta.com"),
  openGraph: {
    title: "CUMBA Sigorta | Ankara Çukurambar BES ve Hayat Sigortası",
    description:
      "Ankara Çukurambar'da uzman kadrosuyla Bireysel Emeklilik (BES) ve Hayat Sigortası çözümleri. Geleceğinizi şansa değil, CUMBA Sigorta güvencesine bırakın.",
    url: "https://cumbasigorta.com",
    siteName: "CUMBA Sigorta",
    images: [
      {
        url: "/logo-black.png",
        width: 800,
        height: 600,
        alt: "CUMBA Sigorta Logo - Ankara Çukurambar Sigorta Acentesi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CUMBA Sigorta | Ankara Çukurambar BES ve Hayat Sigortası",
    description:
      "Ankara Çukurambar'da uzman kadrosuyla Bireysel Emeklilik (BES) ve Hayat Sigortası çözümleri.",
    images: ["/logo-black.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cumbasigorta.com",
  },
};

// JSON-LD Structured Data for InsuranceAgency
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "CUMBA Sigorta Aracılık Hizmetleri Ltd. Şti.",
  image: "https://cumbasigorta.com/logo-gold.png",
  url: "https://cumbasigorta.com",
  telephone: "+903122240010",
  email: "basvuru@cumbasigorta.com",
  description:
    "Ankara Çukurambar'da Bireysel Emeklilik (BES) ve Hayat Sigortası alanında uzman sigorta acentesi.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Kızılırmak Mah. 1443 Cad. 1071 Usta Plaza No: 25-B Blok 4. Kat No: 31 Çukurambar",
    addressLocality: "Çankaya",
    addressRegion: "Ankara",
    postalCode: "06520",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.9022",
    longitude: "32.8125",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: ["https://wa.me/905541738880"],
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Ankara",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
