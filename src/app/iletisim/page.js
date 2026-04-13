import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "İletişim",
  description:
    "Cumba Sigorta ile iletişime geçin. WhatsApp, telefon veya iletişim formumuz aracılığıyla sorularınızı yanıtlayalım.",
};

export default function IletisimPage() {
  return (
    <>
      <PageBanner
        title="Bize Ulaşın"
        subtitle="Kararını vermiş ya da sadece merak eden — fark etmez. Sıfır eforla, anında iletişime geçin."
        breadcrumbs={[{ label: "İletişim" }]}
      />

      {/* === İletişim Grid === */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Contact Info */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
                İletişim Bilgileri
              </span>
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
                Sinan Bey ile Görüşün
              </h2>
              <p className="text-navy-700 leading-relaxed mb-8">
                Bireysel Emeklilik veya Hayat Sigortası hakkında sorularınız mı var?
                WhatsApp, telefon veya yüz yüze görüşme ile size yardımcı olmaktan
                memnuniyet duyarız.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/905551234567?text=Merhaba,%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#25D366] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy-900">WhatsApp&apos;tan Yazın</p>
                    <p className="text-navy-600 text-sm">Hemen cevap alın — en hızlı iletişim</p>
                  </div>
                  <svg className="w-5 h-5 text-navy-400 ml-auto group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                {/* Phone */}
                <a
                  href="tel:+905551234567"
                  className="group flex items-center gap-4 p-5 bg-white border border-cream-200 rounded-2xl shadow-sm hover:shadow-md hover:border-gold-400/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-navy-900 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy-900">Telefon</p>
                    <p className="text-navy-600 text-sm">+90 555 123 45 67</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@cumbasigorta.com"
                  className="group flex items-center gap-4 p-5 bg-white border border-cream-200 rounded-2xl shadow-sm hover:shadow-md hover:border-gold-400/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy-900">E-posta</p>
                    <p className="text-navy-600 text-sm">info@cumbasigorta.com</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-white border border-cream-200 rounded-2xl shadow-sm">
                  <div className="w-14 h-14 rounded-xl bg-cream-200 flex items-center justify-center text-navy-700 flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy-900">Ofis Adresi</p>
                    <p className="text-navy-600 text-sm">
                      Atatürk Bulvarı No: 123, Kat: 4<br />
                      Kızılay / Çankaya / Ankara
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/5 border border-cream-200 p-8 sm:p-10 lg:sticky lg:top-28">
                <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">
                  Hızlı İletişim Formu
                </h3>
                <p className="text-navy-600 text-sm mb-6">
                  Bilgilerinizi girin, WhatsApp üzerinden anında bağlanalım.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Google Maps === */}
      <section className="bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              Bizi Ziyaret Edin
            </h2>
            <p className="text-cream-200/70 text-sm">
              Ankara ofisimizde yüz yüze görüşme imkânı sunuyoruz.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              title="Cumba Sigorta Ofis Konumu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.123456789012!2d32.8597!3d39.9208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862c5f13442f8!2zS8SxesSxbGF5LCDDh2Fua2F5YS9BbmthcmE!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>
    </>
  );
}
