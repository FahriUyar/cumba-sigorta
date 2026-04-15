import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "İletişim | CUMBA Sigorta Çukurambar Ankara",
  description:
    "Bize ulaşın. Adres: 1071 Usta Plaza, Çukurambar - Çankaya / Ankara. Telefon: 0312 224 0010. WhatsApp: 0554 173 88 80.",
  alternates: {
    canonical: "https://cumbasigorta.com/iletisim",
  },
};

export default function IletisimPage() {
  return (
    <>
      <PageBanner
        title="İletişim"
        subtitle="Geleceğinizi şansa değil, bizimle güvenceye bırakın. Hemen tanışalım."
        breadcrumbs={[{ label: "İletişim" }]}
      />

      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Sol Taraf: İletişim Bilgileri */}
            <div className="space-y-10">
              <div>
                <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
                  Bize Ulaşın
                </span>
                <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">
                  Sizi Ofisimize Bekliyoruz
                </h2>
                <p className="text-navy-700 leading-relaxed font-body text-[16px]">
                  Ankara Çukurambar'daki ofisimize kahve içmeye bekleriz. 
                  Sorularınız, BES transferleriniz veya yepyeni bir hayat sigortası planı için alanında uzman ekibimiz daima yanınızda.
                </p>
              </div>

              {/* İletişim Kartları */}
              <div className="space-y-4">
                
                {/* Adres */}
                <div className="flex items-start gap-4 p-5 bg-white border border-cream-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy-900 mb-1">Adres</h4>
                    <p className="text-navy-700 text-sm font-body leading-relaxed">
                      Kızılırmak Mah. 1443 Cad. 1071 Usta Plaza<br />
                      No: 25-B Blok 4. Kat No: 31<br />
                      Çukurambar - Çankaya / ANKARA
                    </p>
                  </div>
                </div>

                {/* Ofis Tel */}
                <a href="tel:+903122240010" className="flex items-start gap-4 p-5 bg-white border border-cream-200 rounded-2xl shadow-sm hover:shadow-md hover:border-gold-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy-900 mb-1">Ofis Telefonu</h4>
                    <p className="text-navy-700 text-sm font-body">0312 224 0010</p>
                  </div>
                </a>

                {/* E-Posta */}
                <a href="mailto:basvuru@cumbasigorta.com" className="flex items-start gap-4 p-5 bg-white border border-cream-200 rounded-2xl shadow-sm hover:shadow-md hover:border-gold-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy-900 mb-1">E-posta</h4>
                    <p className="text-navy-700 text-sm font-body">basvuru@cumbasigorta.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/905541738880" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl shadow-sm hover:shadow-md hover:bg-[#25D366]/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy-900 mb-1">WhatsApp Hattı</h4>
                    <p className="text-navy-700 text-sm font-body">0554 173 88 80</p>
                  </div>
                </a>

                {/* Birebir Danışmanlık İçin */}
                <div className="mt-8 pt-6 border-t border-cream-200">
                  <h4 className="font-heading font-bold text-navy-900 mb-3 tracking-wider text-gold-500 uppercase text-xs">
                    Birebir Danışmanlık İçin
                  </h4>
                  <div className="bg-white rounded-xl p-5 border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-heading font-bold text-navy-900 mb-2">Sinan Cumba</p>
                    <div className="flex flex-col gap-2">
                       <a href="tel:+905323907340" className="text-navy-600 text-sm font-body hover:text-gold-500 transition-colors flex items-center gap-2">
                         <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                         0532 390 73 40
                       </a>
                       <a href="mailto:sinan.cumba@cumbasigorta.com" className="text-navy-600 text-sm font-body hover:text-gold-500 transition-colors flex items-center gap-2">
                         <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                         sinan.cumba@cumbasigorta.com
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf: Hızlı Form */}
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/5 border border-cream-200 p-8 sm:p-10 lg:sticky lg:top-32">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-2">
                Hızlı İletişim Formu
              </h3>
              <p className="text-navy-600 text-sm font-body mb-8 leading-relaxed">
                Aşağıdaki formu doldurarak bize ulaşın; uzman ekibimiz saniyeler içinde sizinle e-posta yoluyla iletişime geçsin.
              </p>
              
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
