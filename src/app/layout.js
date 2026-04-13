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
    default: "Cumba Sigorta | Bireysel Emeklilik & Hayat Sigortası - Ankara",
    template: "%s | Cumba Sigorta",
  },
  description:
    "Ankara merkezli güvenilir sigorta acenteniz. Bireysel Emeklilik Sistemi (BES) ve Hayat Sigortası çözümleriyle geleceğinizi güvence altına alıyoruz. Kişiye özel danışmanlık için hemen iletişime geçin.",
  keywords:
    "sigorta, bireysel emeklilik, BES, hayat sigortası, Ankara sigorta, sigorta acentesi, emeklilik planı, cumba sigorta",
  authors: [{ name: "Cumba Sigorta" }],
  openGraph: {
    title: "Cumba Sigorta | Bireysel Emeklilik & Hayat Sigortası",
    description:
      "Geleceğiniz için güvenilir adımlar. Ankara merkezli sigorta acenteniz.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
