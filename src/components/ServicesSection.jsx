const services = [
  {
    id: "bes",
    title: "Bireysel Emeklilik (BES)",
    description:
      "Devlet katkısı avantajıyla geleceğinize yatırım yapın. Kişiye özel fon yönetimi ve esnek ödeme planlarıyla emekliliğinizi güvence altına alıyoruz.",
    features: [
      "%30 Devlet Katkısı",
      "Esnek Ödeme Seçenekleri",
      "Kişiye Özel Fon Yönetimi",
      "Vergi Avantajları",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    ctaText: "BES Hakkında Bilgi Al",
    ctaLink:
      "https://wa.me/905551234567?text=Merhaba,%20BES%20hakkında%20bilgi%20almak%20istiyorum.",
    accentColor: "from-gold-500 to-gold-400",
  },
  {
    id: "hayat",
    title: "Hayat Sigortası",
    description:
      "Sevdiklerinizin geleceğini güvence altına alın. Kapsamlı teminat seçenekleriyle beklenmedik durumlara karşı ailenizi koruyoruz.",
    features: [
      "Vefat & Maluliyet Teminatı",
      "Kritik Hastalık Koruması",
      "Birikim + Koruma Seçeneği",
      "Uygun Prim Seçenekleri",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    ctaText: "Hayat Sigortası Detayları",
    ctaLink:
      "https://wa.me/905551234567?text=Merhaba,%20Hayat%20Sigortası%20hakkında%20bilgi%20almak%20istiyorum.",
    accentColor: "from-navy-700 to-navy-800",
  },
];

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
            Size Özel Sigorta Çözümleri
          </h2>
          <p className="max-w-2xl mx-auto text-navy-600 text-lg">
            İhtiyaçlarınıza uygun, kapsamlı ve şeffaf sigorta çözümleri sunuyoruz.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto rounded-full mt-6" />
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-cream-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Top accent line */}
              <div
                className={`h-1.5 bg-gradient-to-r ${service.accentColor}`}
              />

              <div className="p-8 sm:p-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accentColor} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-navy-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold-200/60 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-gold-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-navy-700 font-medium text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={service.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.accentColor} text-white font-heading font-semibold text-sm rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                >
                  {service.ctaText}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
