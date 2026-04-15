import PageBanner from "@/components/PageBanner";
import IndustryLinks from "@/components/IndustryLinks";
import AboutHero from "@/components/AboutHero";
import MissionVisionCards from "@/components/MissionVisionCards";

export const metadata = {
  title: "Hakkımızda | CUMBA Sigorta Aracılık Hizmetleri Ankara",
  description:
    "10 yılı aşkın tecrübemizle Ankara'da sadece BES ve Hayat Sigortası branşlarında şeffaf, güvenilir ve etik danışmanlık hizmeti sunuyoruz.",
  alternates: {
    canonical: "https://cumbasigorta.com/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageBanner
        title="Biz Kimiz?"
        subtitle="Sektörde yılların getirdiği tecrübeyle, geleceğiniz için güvenilir adımlar atıyoruz."
        breadcrumbs={[{ label: "Hakkımızda" }]}
      />

      {/* === Ana Hikaye === */}
      <AboutHero />

      {/* === Misyon & Vizyon === */}
      <MissionVisionCards />

      {/* === Sertifikalar / Resmi Bağlantılar === */}
      <IndustryLinks />
    </>
  );
}
