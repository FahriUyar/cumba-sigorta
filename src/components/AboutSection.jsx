"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Yıllık Tecrübe" },
  { value: 2000, suffix: "+", label: "Mutlu Müşteri" },
  { value: 50, suffix: "M+", label: "TL Toplam Birikim" },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-heading font-bold text-gold-500">
      {count.toLocaleString("tr-TR")}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="hakkimizda" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
            Hakkımızda
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
            Güvenilir Sigorta Danışmanınız
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <Image
                src="/about-consultant.png"
                alt="Sinan Cumba - Ankara Çukurambar BES ve Hayat Sigortası Uzmanı"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Decorative frame */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
            </div>
            {/* Floating accent card */}
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
            {/* Decorative background shape */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gold-400/10 rounded-2xl -z-10" />
          </div>

          {/* Text Side */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-navy-900 mb-6">
              Merhaba, Ben Sinan
            </h3>
            <div className="space-y-4 text-navy-700 leading-relaxed">
              <p>
                15 yıllık sektör deneyimimle Ankara&apos;da Bireysel Emeklilik Sistemi (BES) ve
                Hayat Sigortası alanlarında binlerce müşterime hizmet vermenin gururunu
                yaşıyorum.
              </p>
              <p>
                Cumba Sigorta olarak, her müşterimizin finansal geleceğini kişiye özel
                çözümlerle güvence altına alıyoruz. Şeffaf, dürüst ve güvene dayalı
                ilişkilerimizle sektörde fark yaratıyoruz.
              </p>
              <p>
                Devlet katkısından fon yönetimine, poliçe seçiminden hasar süreçlerine kadar
                her adımda yanınızdayız. İlk görüşmemizde ihtiyaçlarınızı birlikte analiz
                ediyor, size en uygun planı birlikte oluşturuyoruz.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+905541738880"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-800 text-white font-heading font-semibold text-sm rounded-xl hover:bg-navy-700 transition-all duration-300 shadow-lg shadow-navy-900/20 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Arayın
              </a>
              <a
                href="https://wa.me/905541738880?text=Merhaba,%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-navy-800 text-navy-800 font-heading font-semibold text-sm rounded-xl hover:bg-navy-800 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile Yazın
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-cream-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-navy-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
