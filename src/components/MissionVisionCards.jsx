import React from "react";

export default function MissionVisionCards() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
            Geleceğe Bakışımız
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Misyonumuz Kartı */}
          <div className="bg-cream-50 rounded-2xl border-t-4 border-t-gold-500 shadow-lg shadow-navy-900/5 p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
               <svg className="w-24 h-24 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-50 flex items-center justify-center text-gold-600 mb-6 shadow-sm border border-gold-200">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-gold-600 mb-4">Misyonumuz</h3>
              <p className="text-navy-700 leading-relaxed text-[15px]">
                Müşterilerimizin geleceğe dair endişelerini, onların yerini ve ihtiyaçlarını anlayarak somut çözümlere dönüştürmek. 
                Sadece poliçe satmak değil; doğru BES fonuyla emeklilik hayallerini, doğru hayat sigortasıyla da kendilerinin ve sevdiklerinin geleceğini güvence altına almak için varız. 
                Tarafsız, şeffaf ve etik danışmanlık anlayışımızdan asla ödün vermiyoruz.
              </p>
            </div>
          </div>

          {/* Vizyonumuz Kartı */}
          <div className="bg-cream-50 rounded-2xl border-t-4 border-t-navy-900 shadow-lg shadow-navy-900/5 p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <svg className="w-24 h-24 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center text-navy-900 mb-6 shadow-sm border border-navy-200">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-gold-600 mb-4">Vizyonumuz</h3>
              <p className="text-navy-700 leading-relaxed text-[15px]">
                Türkiye'nin BES ve Hayat Sigortası dendiğinde ilk akla gelen Sigorta Aracılık Hizmeti markası olmak. 
                Sektörde "uzmanlık" kavramını yeniden tanımlayarak, sadece bugünün değil, yarının ihtiyaçlarını da öngören, 
                yenilikçi ve güvenilir çözümler üreten bir referans noktası haline gelmek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
