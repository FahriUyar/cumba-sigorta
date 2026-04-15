"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Bireysel Emeklilik Sistemi (BES) nedir?",
    answer:
      "BES, çalışma hayatınız boyunca düzenli olarak birikim yaparak emeklilik döneminde ek gelir elde etmenizi sağlayan bir tasarruf sistemidir. Devletin %30'a varan katkısıyla birikimleriniz daha hızlı büyür.",
  },
  {
    question: "BES'te devlet katkısı nasıl hesaplanır?",
    answer:
      "Devlet, BES'e ödediğiniz katkı paylarının %30'u oranında hesabınıza ek katkı yapar. Bu katkının yıllık üst sınırı, brüt asgari ücretin yıllık tutarının %30'u kadardır. Devlet katkısı hak edişi, sistemde kalma süresine bağlı olarak artar.",
  },
  {
    question: "BES'ten erken ayrılırsam ne olur?",
    answer:
      "BES'ten erken ayrılırsanız birikiminizi alabilirsiniz, ancak devlet katkısının tamamını hak edemeyebilirsiniz. 3 yıldan önce ayrılırsanız devlet katkısının hiçbirini alamazsınız. 3-6 yıl arası %15, 6-10 yıl arası %35, 10+ yıl %60 ve emeklilik hakkı kazanırsanız %100'ünü alırsınız.",
  },
  {
    question: "Hayat Sigortası ile BES arasındaki fark nedir?",
    answer:
      "Hayat Sigortası, vefat veya maluliyet gibi risklere karşı ailenizi finansal olarak korur. BES ise emeklilik dönemine yönelik bir birikim sistemidir. Her ikisi de geleceğe yönelik güvence sağlar, ancak amaçları farklıdır. İhtiyacınıza göre her ikisini de birlikte kullanabilirsiniz.",
  },
  {
    question: "Hayat Sigortası prim ödemeleri ne kadardır?",
    answer:
      "Prim tutarları; yaşınıza, sağlık durumunuza, seçtiğiniz teminat kapsamına ve poliçe süresine göre değişir. Size en uygun fiyatı bulmak için ücretsiz bir görüşme ayarlamamızı öneririz. WhatsApp üzerinden hemen iletişime geçebilirsiniz.",
  },
  {
    question: "Cumba Sigorta ile nasıl iletişime geçebilirim?",
    answer:
      "WhatsApp, telefon veya e-posta ile 7/24 bize ulaşabilirsiniz. Ankara'daki ofisimizde yüz yüze görüşme imkânı da sunuyoruz. Sayfanın sağ alt köşesindeki WhatsApp butonuna tıklayarak anında iletişime geçebilirsiniz.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="sss" className="py-24 bg-cream-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
            SSS
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="max-w-2xl mx-auto text-navy-600 text-lg">
            Merak ettiğiniz konularda size yardımcı olalım.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto rounded-full mt-6" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-gold-400 shadow-lg shadow-gold-500/10"
                    : "border-cream-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Question Button */}
                <button
                  id={`faq-toggle-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-heading font-semibold text-base sm:text-lg pr-4 transition-colors duration-300 ${
                      isOpen ? "text-gold-600" : "text-navy-900"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-gold-500 text-navy-900 rotate-180"
                        : "bg-cream-200 text-navy-600"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`accordion-content ${isOpen ? "open" : ""}`}
                  style={isOpen ? { paddingBottom: "1.5rem" } : {}}
                >
                  <div className="px-6 pb-2">
                    <div className="w-full h-px bg-cream-200 mb-4" />
                    <p className="text-navy-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 text-center">
          <p className="text-navy-600 mb-4">Başka sorunuz mu var?</p>
          <a
            href="https://wa.me/905541738880?text=Merhaba,%20bir%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-heading font-semibold text-sm rounded-xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Bize Sorun
          </a>
        </div>
      </div>
    </section>
  );
}
