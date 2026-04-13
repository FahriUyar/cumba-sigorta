import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import IndustryLinks from "@/components/IndustryLinks";

export const metadata = {
  title: "Hakkımızda",
  description:
    "Cumba Sigorta hakkında detaylı bilgi. Ankara merkezli, 15 yılı aşkın deneyime sahip güvenilir sigorta acenteniz.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageBanner
        title="Biz Kimiz?"
        subtitle="Ankara'da yılların tecrübesiyle yanınızdayız. Geleceğiniz için güvenilir adımlar atıyoruz."
        breadcrumbs={[{ label: "Hakkımızda" }]}
      />

      {/* === Hikayemiz === */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
                <Image
                  src="/about-consultant.png"
                  alt="Sinan Bey - Cumba Sigorta Danışmanı"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-cream-200 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-heading font-bold text-navy-900">Lisanslı Acente</p>
                    <p className="text-xs text-navy-600">TOBB &amp; TSB Onaylı</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gold-400/10 rounded-2xl -z-10" />
            </div>

            {/* Text */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
                Hikayemiz
              </span>
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
                Merhaba, Ben Sinan
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  15 yılı aşkın sektör deneyimimle Ankara&apos;da Bireysel Emeklilik Sistemi (BES) ve
                  Hayat Sigortası alanlarında binlerce müşterime hizmet vermenin gururunu
                  yaşıyorum.
                </p>
                <p>
                  Cumba Sigorta olarak, sadece BES ve Hayat Sigortası branşlarında uzmanlaşmayı tercih ettik.
                  Bu odaklanma sayesinde her iki alanda da derin bir bilgi birikimi oluşturduk.
                  Müşterilerimize genel bir sigorta hizmeti değil, bu iki branşta uzmanlaşmış,
                  kişiye özel danışmanlık sunuyoruz.
                </p>
                <p>
                  Her müşterimizin finansal geleceğini kişiye özel çözümlerle güvence altına alıyoruz.
                  Şeffaf, dürüst ve güvene dayalı ilişkilerimizle sektörde fark yaratıyoruz.
                  Devlet katkısından fon yönetimine, poliçe seçiminden tüm süreçlere kadar
                  her adımda yanınızdayız.
                </p>
                <p>
                  İlk görüşmemizde ihtiyaçlarınızı birlikte analiz ediyor, size en uygun planı
                  birlikte oluşturuyoruz. Çünkü biz biliyoruz ki her müşterinin durumu farklıdır
                  ve tek tip çözümler yetersiz kalır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Misyon & Vizyon === */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">
              Misyon & Vizyon
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Misyon */}
            <div className="bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-cream-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-navy-900 mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Misyonumuz</h3>
              <p className="text-navy-600 leading-relaxed">
                Her müşterimize şeffaf, dürüst ve kişiye özel danışmanlık hizmeti sunarak
                finansal geleceğini en iyi şekilde güvence altına almak. Karmaşık sigorta
                süreçlerini sade ve anlaşılır hale getirerek, müşterilerimizin bilinçli
                kararlar vermesini sağlamak.
              </p>
            </div>

            {/* Vizyon */}
            <div className="bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-cream-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center text-white mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Vizyonumuz</h3>
              <p className="text-navy-600 leading-relaxed">
                Ankara&apos;nın en güvenilir BES ve Hayat Sigortası danışmanlık firması olarak
                anılmak. Teknolojiyi ve kişisel ilişkileri bir arada kullanarak, sektörde
                müşteri memnuniyetinde öncü bir konuma ulaşmak ve toplumdaki sigorta
                bilincini artırmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Sertifikalar / Resmi Bağlantılar === */}
      <IndustryLinks />
    </>
  );
}
