import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, GlobeIcon, VideoIcon, XIcon } from "lucide-react";
import { Badge } from "../ui/badge";

const services = [
  {
    icon: GlobeIcon,
    title: "Website Landing Page",
    price: "Rp 300.000",
    originalPrice: "Rp 600.000",
    discountUntil: "10 Desember 2025",
    duration: "3–5 hari kerja",
    description:
      "Landing page profesional untuk branding, promosi produk, atau portofolio dengan tampilan modern dan performa cepat.",
    features: [
      "1 Halaman landing page premium",
      "Hosting GRATIS selama proyek",
      "Desain responsif (mobile & desktop)",
      "Optimasi SEO dasar",
      "Formulir kontak (email/WA)",
      "Integrasi WhatsApp, media sosial, atau CTA lainnya",
      "Warna, tipografi, dan gaya disesuaikan brand",
      "Kecepatan website teroptimasi",
      "Deployment & konfigurasi selesai",
    ],
    excluded: [
      "Pembelian domain (opsional + biaya)",
      "Maintenance bulanan / tahunan",
      "Dashboard admin / CMS",
      "Fitur backend kompleks",
      "Halaman tambahan (bisa add-on)",
    ],
  },
  {
    icon: VideoIcon,
    title: "Video Editing",
    price: "Rp 130.000 – 500.000",
    originalPrice: "",
    discountUntil: "",
    duration: "-",
    description:
      "Editing video profesional untuk konten TikTok, Instagram, Reels, YouTube, atau materi promosi brand Anda.",
    features: [
      "Editing video cinematic / fast-paced",
      "Cutting & storytelling",
      "Color grading & tone adjustment",
      "Audio cleanup + mixing",
      "Subtitle & caption premium",
      "Thumbnail design (opsional)",
      "Output berbagai format (MP4, MOV, dll.)",
      "Revisi ringan GRATIS",
    ],
    excluded: [
      "Footage rekaman (harus dari klien)",
      "Voice over (opsional + biaya)",
      "Animasi 3D kompleks",
    ],
  },
];

const ServiceSection = () => {
  return (
    <section id="service" className="container py-32 space-y-16">
      <div className="md:text-center max-w-2xl mx-auto space-y-4">
        <h2>Yang Kami Tawarkan</h2>
        <p>
          Solusi digital modern untuk bisnis skala kecil. Layanan kami dibuat
          dengan fokus pada kualitas, kecepatan, dan hasil yang konsisten.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((item, index) => (
          <Card key={index} className="w-full flex flex-col">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              {item.originalPrice && item.discountUntil && (
                <Badge>Diskon sampai {item.discountUntil}</Badge>
              )}

              <CardTitle className="text-xl">{item.title}</CardTitle>

              <div className="space-y-1">
                {item.originalPrice ? (
                  <>
                    <p className="text-sm text-muted-foreground line-through">
                      {item.originalPrice}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {item.price}
                    </p>
                  </>
                ) : (
                  <p className="text-2xl font-bold text-primary">
                    {item.price}
                  </p>
                )}
              </div>

              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <span>⏱️ {item.duration}</span>
              </div>
              <CardDescription className="text-base mb-4">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-2 mb-6 flex-1">
                {item.features.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckIcon className="text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
                {item.excluded.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <XIcon className="text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
