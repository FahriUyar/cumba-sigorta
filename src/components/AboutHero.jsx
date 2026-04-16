import React from "react";

export default function AboutHero() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Section */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
              Biz Kimiz?
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy-900 mb-6 leading-tight">
              Sektöre Sadece Bir İş Olarak Değil,<br className="hidden lg:block"/> Güven Meselesi Olarak Bakıyoruz
            </h2>
            <div className="space-y-4 text-navy-700 leading-relaxed">
              <p>
                Biz, sigortacılık sektörüne sadece bir iş olarak değil, bir güven meselesi olarak bakan bir ekibiz. 
                Kurucularımızın 10 yıl boyunca büyük sigorta şirketlerinin bölge müdürlüklerinde edindiği derin sektör bilgisi 
                ve saha deneyimi, bugün bulunduğumuz noktanın temel taşıdır.
              </p>
              <p>
                2022 yılında "kendi aracılık şirketimizi kurma" hayalini gerçeğe dönüştürerek yola çıktık. 
                Tüm bu birikimimizi, sadece iki branşta uzmanlaşarak taçlandırdık: <strong>Bireysel Emeklilik Sistemi (BES) ve Hayat Sigortaları.</strong>
              </p>
              <p>
                Neden sadece bu iki branş? Çünkü gerçek uzmanlık, her şeyi biraz değil, bir şeyi "en iyi" yapmaktan geçer. 
                Bugüne kadar binlerce sigortalılarımızın emeklilik hayallerine ortak olduk, onların ailelerini geleceğe güvenle bakmalarını sağladık.
              </p>
              <p>
                14 yılı aşkın süredir kendi işletmemizle verdiğimiz hizmette, sizi anlamayı, ihtiyaçlarınızı analiz etmeyi 
                ve uzun vadeli çözümler sunmayı ilke edindik. Siz sadece hedeflerinizi belirleyin, geri kalan her şey için yanınızdayız. 
                Çünkü bizim için her poliçe, bir başlangıcın ve güven dolu bir yolculuğun teminatıdır.
              </p>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10 border-[6px] border-white">
              {/* Statik export ile uyumlu olması için standart img etiketi kullanıyoruz */}
              <img
                src="/cumba1.webp"
                alt="Cumba Sigorta Ekibi - Ankara Çukurambar BES Uzmanları"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-cream-200 hidden sm:flex items-center gap-4 animate-fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-400 rounded-lg flex items-center justify-center shadow-lg shadow-gold-500/20">
                <svg className="w-6 h-6 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-heading font-bold text-navy-900">Güven Odaklı Hizmet</p>
                <p className="text-xs text-navy-600">14+ Yıllık Uzmanlık</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gold-400/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
