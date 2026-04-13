import Link from "next/link";

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative bg-navy-800 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-cream-200/60 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Ana Sayfa
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-400 font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg text-cream-200/80 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
