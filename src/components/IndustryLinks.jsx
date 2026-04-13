const institutions = [
  {
    name: "Emeklilik Gözetim Merkezi (EGM)",
    description:
      "Bireysel emeklilik sistemiyle ilgili tüm bilgilere, fon performanslarına ve katkı payı detaylarına EGM üzerinden ulaşabilirsiniz.",
    url: "https://www.egm.org.tr",
    logo: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    name: "Türkiye Sigorta Birliği (TSB)",
    description:
      "Sigorta sektörüne ait güncel veriler, yasal düzenlemeler ve tüketici hakları hakkında bilgi almak için Türkiye Sigorta Birliği&apos;ni ziyaret edebilirsiniz.",
    url: "https://www.tsb.org.tr",
    logo: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function IndustryLinks() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gold-200/50 text-gold-600 text-sm font-semibold font-heading rounded-full mb-4">
            Sektörel Bağlantılar
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
            Şeffaflık ve Güven
          </h2>
          <p className="max-w-2xl mx-auto text-navy-600">
            Resmi kurumların güncel bilgilerine doğrudan erişim sağlayın.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto rounded-full mt-6" />
        </div>

        {/* Institution Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {institutions.map((inst) => (
            <a
              key={inst.name}
              href={inst.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-cream-200 shadow-lg shadow-navy-900/5 hover:shadow-xl hover:border-gold-400/40 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-navy-800 flex items-center justify-center text-gold-400 mb-5 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300 shadow-lg">
                {inst.logo}
              </div>

              {/* Name */}
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                {inst.name}
              </h3>

              {/* Description */}
              <p className="text-navy-600 text-sm leading-relaxed mb-4">
                {inst.description}
              </p>

              {/* Link indicator */}
              <div className="inline-flex items-center gap-1 text-sm font-medium text-gold-600 group-hover:text-gold-500 transition-colors">
                Siteyi Ziyaret Et
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
