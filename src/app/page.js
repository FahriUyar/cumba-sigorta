import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import FaqSection from "@/components/FaqSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* === Hakkımızda Özet === */}
      <section id="hakkimizda-ozet" className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
                <Image
                  src="/about-consultant.png"
                  alt="Sinan Cumba - Ankara Çukurambar BES ve Hayat Sigortası Uzmanı"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gold-400/10 rounded-2xl -z-10" />
            </div>

            {/* Text */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
                Hakkımızda
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-6">
                Ankara&apos;da Yılların Tecrübesiyle Yanınızdayız
              </h2>
              <p className="text-navy-700 leading-relaxed mb-4">
                15 yıllık sektör deneyimimizle Bireysel Emeklilik Sistemi (BES) ve
                Hayat Sigortası alanlarında binlerce müşterimize hizmet vermenin
                gururunu yaşıyoruz.
              </p>
              <p className="text-navy-700 leading-relaxed mb-8">
                Cumba Sigorta olarak, her müşterimizin finansal geleceğini kişiye özel
                çözümlerle güvence altına alıyor; şeffaf, dürüst ve güvene dayalı
                ilişkilerimizle sektörde fark yaratıyoruz.
              </p>
              <Link
                href="/hakkimizda"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white font-heading font-semibold text-sm rounded-xl hover:bg-navy-700 transition-all duration-300 shadow-lg shadow-navy-900/20 hover:-translate-y-0.5"
              >
                Daha Fazla Bilgi
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === Hizmetler Özet Kartları === */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
              Hizmetlerimiz
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Size Özel Sigorta Çözümleri
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* BES Card */}
            <div className="group bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-cream-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="h-1.5 bg-gradient-to-r from-gold-500 to-gold-400" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-navy-900 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                  Bireysel Emeklilik (BES)
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-6">
                  Devlet katkısı avantajıyla geleceğinize yatırım yapın. Kişiye özel fon yönetimi ve esnek ödeme planlarıyla emekliliğinizi güvence altına alıyoruz.
                </p>
                <Link
                  href="/hizmetlerimiz#bes"
                  className="group/btn inline-flex items-center gap-2 text-gold-600 font-heading font-semibold text-sm hover:text-gold-500 transition-colors"
                >
                  Detayları Gör
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hayat Sigortası Card */}
            <div className="group bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-cream-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="h-1.5 bg-gradient-to-r from-navy-700 to-navy-800" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                  Hayat Sigortası
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-6">
                  Sevdiklerinizin geleceğini güvence altına alın. Kapsamlı teminat seçenekleriyle beklenmedik durumlara karşı ailenizi koruyoruz.
                </p>
                <Link
                  href="/hizmetlerimiz#hayat-sigortasi"
                  className="group/btn inline-flex items-center gap-2 text-navy-700 font-heading font-semibold text-sm hover:text-navy-600 transition-colors"
                >
                  Detayları Gör
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hizmetlerimiz"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-heading font-bold text-base rounded-xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:-translate-y-0.5"
            >
              Tüm Hizmetleri İnceleyin
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <WhyUsSection />
      <FaqSection />
    </>
  );
}
