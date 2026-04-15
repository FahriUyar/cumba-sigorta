import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Hizmetlerimiz | Bireysel Emeklilik (BES) ve Hayat Sigortası Ankara",
  description:
    "%30 Devlet katkılı Bireysel Emeklilik Sistemi (BES) ve geleceğinizi koruyan Hayat Sigortası paketlerimizle yanınızdayız.",
  alternates: {
    canonical: "https://cumbasigorta.com/hizmetlerimiz",
  },
};

export default function HizmetlerimizPage() {
  return (
    <>
      <PageBanner
        title="Geleceğiniz ve Sevdikleriniz İçin Çözümlerimiz"
        subtitle="İhtiyaçlarınıza uygun, kapsamlı ve şeffaf sigorta çözümleri sunuyoruz."
        breadcrumbs={[{ label: "Hizmetlerimiz" }]}
      />

      {/* === BES Bölümü === */}
      <section id="bes" className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
                Hizmet 1
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-6">
                Bireysel Emeklilik Sistemi (BES)
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed mb-8">
                <p>
                  Bireysel Emeklilik Sistemi (BES), çalışma hayatınız boyunca düzenli olarak
                  birikim yaparak emeklilik döneminde ek gelir elde etmenizi sağlayan bir
                  tasarruf sistemidir.
                </p>
                <p>
                  Sisteme katıldığınızda, ödediğiniz katkı payları sizin adınıza açılan bireysel
                  emeklilik hesabında biriktirilir. Bu birikimler, tercih ettiğiniz yatırım fonları
                  aracılığıyla değerlendirilir.
                </p>
                <p>
                  Cumba Sigorta olarak, risk profilinize en uygun fon dağılımını birlikte belirliyor,
                  piyasa koşullarına göre portföyünüzü aktif olarak yönetiyoruz.
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {[
                  "Esnek ödeme seçenekleri (aylık, 3 aylık, yıllık)",
                  "Kişiye özel fon yönetimi ve portföy danışmanlığı",
                  "Vergi avantajları ve ek getiri fırsatları",
                  "İstediğiniz zaman ara verebilir veya çıkabilirsiniz",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-gold-200/60 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-navy-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* EGM Button */}
              <a
                href="https://www.egm.org.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-navy-800 text-navy-800 font-heading font-semibold text-sm rounded-xl hover:bg-navy-800 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Güncel EGM Verileri İçin Tıklayın
              </a>
            </div>

            {/* Right - Highlight Card */}
            <div className="bg-gradient-to-br from-gold-500 to-gold-400 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-gold-500/20 lg:sticky lg:top-28">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy-900/20 mb-6">
                  <span className="text-navy-900 font-heading font-black text-4xl">%30</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-900 mb-4">
                  Devlet Katkısı Avantajı
                </h3>
                <p className="text-navy-800/80 leading-relaxed mb-6">
                  Devlet, BES&apos;e ödediğiniz katkı paylarının <strong className="text-navy-900">%30&apos;u</strong> oranında
                  hesabınıza ek katkı yapar. Bu katkının yıllık üst sınırı, brüt asgari ücretin yıllık
                  tutarının %30&apos;u kadardır.
                </p>
                <div className="bg-navy-900/10 rounded-xl p-4 text-left space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-navy-800/70">3 yıldan önce ayrılma</span>
                    <span className="font-bold text-navy-900">%0</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-navy-800/70">3-6 yıl arası</span>
                    <span className="font-bold text-navy-900">%15</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-navy-800/70">6-10 yıl arası</span>
                    <span className="font-bold text-navy-900">%35</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-navy-800/70">10+ yıl</span>
                    <span className="font-bold text-navy-900">%60</span>
                  </div>
                  <div className="flex items-center justify-between text-sm pt-2 border-t border-navy-900/20">
                    <span className="text-navy-800/70">Emeklilik hakkı</span>
                    <span className="font-bold text-navy-900">%100 ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Divider === */}
      <div className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-px bg-cream-300" />
        </div>
      </div>

      {/* === Hayat Sigortası Bölümü === */}
      <section id="hayat-sigortasi" className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Highlight Card */}
            <div className="order-2 lg:order-1 bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-8 sm:p-10 shadow-2xl lg:sticky lg:top-28">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-500/20 mb-6">
                  <svg className="w-10 h-10 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-4">
                  Koruma Kalkanınız
                </h3>
                <p className="text-cream-200/80 leading-relaxed mb-6">
                  Hayat Sigortası, sadece bir poliçe değil; aileniz ve sevdikleriniz
                  için oluşturduğunuz bir güvenlik ağıdır.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Vefat Teminatı", desc: "Ailenizin finansal güvencesi" },
                    { label: "Maluliyet Teminatı", desc: "İş göremezlik durumunda koruma" },
                    { label: "Kritik Hastalık", desc: "Ciddi hastalıklarda finansal destek" },
                    { label: "Birikim + Koruma", desc: "Hem birikim hem teminat bir arada" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 rounded-xl p-3 text-left flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{item.label}</p>
                        <p className="text-cream-200/60 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-navy-800/10 text-navy-700 text-sm font-semibold font-heading rounded-full mb-4 border border-navy-800/20">
                Hizmet 2
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-6">
                Hayat Sigortası
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed mb-8">
                <p>
                  Hayat Sigortası, vefat, maluliyet veya kritik hastalık gibi risklere karşı
                  sizi ve ailenizi finansal olarak koruma altına alan bir sigorta türüdür.
                </p>
                <p>
                  Beklenmedik durumlarda ailenizin yaşam standardını korumak, kredi borçlarının
                  ödenmesini sağlamak ve çocuklarınızın eğitim masraflarını güvence altına almak
                  için hayat sigortası kritik bir öneme sahiptir.
                </p>
                <p className="font-semibold text-navy-900">
                  Kimler yaptırmalı?
                </p>
                <ul className="space-y-2 pl-4">
                  {[
                    "Kredi kullanan veya kullanmayı planlayan herkes",
                    "Ailesinin tek gelir kaynağı olan bireyler",
                    "Çocuklarının eğitim geleceğini güvence altına almak isteyenler",
                    "Kritik hastalık riskine karşı finansal koruma arayanlar",
                    "Birikim ve korumayı bir arada isteyenler",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-gold-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Prim tutarları yaşınıza, sağlık durumunuza, seçtiğiniz teminat kapsamına ve
                  poliçe süresine göre değişir. Size en uygun planı birlikte belirleyelim.
                </p>
              </div>

              {/* TSB Button */}
              <a
                href="https://www.tsb.org.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-navy-800 text-navy-800 font-heading font-semibold text-sm rounded-xl hover:bg-navy-800 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Türkiye Sigorta Birliği Verileri
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === Bottom CTA Banner === */}
      <section className="relative py-20 bg-navy-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Geleceğinizi planlamaya bugün başlayın.
          </h2>
          <p className="text-cream-200/70 text-lg mb-8 max-w-2xl mx-auto">
            Bireysel Emeklilik veya Hayat Sigortası hakkında ücretsiz danışmanlık almak için
            hemen iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-heading font-bold text-lg rounded-xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </>
  );
}
