const advantages = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
    title: "Kişiye Özel Fon Yönetimi",
    description:
      "Risk profilinize uygun fon dağılımı oluşturuyor, piyasa koşullarına göre portföyünüzü aktif olarak yönetiyoruz.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
    title: "7/24 İletişim Desteği",
    description:
      "WhatsApp, telefon veya e-posta ile her an bize ulaşabilirsiniz. Sorularınıza en kısa sürede yanıt veriyoruz.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    title: "Yüz Yüze & Online Danışmanlık",
    description:
      "Sizlere uygun zaman dilimlerinde Yüz yüze ya da Online olarak görüşmeler sunuyoruz. İhtiyaçlarınızı dinliyor en uygun çözümü birlikte oluşturuyoruz.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Şeffaf Süreç Yönetimi",
    description:
      "Poliçe detaylarından prim ödemelerine, tüm süreçlerinizi açık ve anlaşılır şekilde sizinle paylaşıyoruz.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="neden-biz"
      className="relative py-24 bg-navy-800 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-navy-600/30 rounded-full blur-3xl" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold-500/20 text-gold-400 text-sm font-semibold font-heading rounded-full mb-4 border border-gold-500/30">
            Neden Cumba Sigorta?
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Farkımız, Güvencenizdir
          </h2>
          <p className="max-w-2xl mx-auto text-cream-200/70 text-lg">
            Sigortalı memnuniyetini her şeyin üstünde tutan yaklaşımımızla
            sektörde fark yaratıyoruz.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto rounded-full mt-6" />
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group relative bg-navy-700/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-navy-700/80 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-navy-900 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-500/20">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-heading font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-cream-200/70 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
