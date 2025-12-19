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
    description:
      "Landing page profesional untuk branding, promosi produk, atau portofolio dengan tampilan modern dan performa cepat.",
    features: [
      "1 Halaman landing page premium",
      "Hosting GRATIS",
      "Desain responsif (mobile & desktop)",
      "Optimasi SEO dasar",
      "Integrasi WhatsApp, media sosial, atau lainnya",
      "Warna, tipografi, dan gaya disesuaikan brand",
      "Kecepatan website teroptimasi",
      "Deployment & konfigurasi selesai",
    ],
    excluded: [
      "Pembelian domain (opsional + biaya)",
      "Maintenance bulanan / tahunan",
      "Dashboard admin / CMS",
      "Fitur backend kompleks",
    ],
  },
  {
    icon: VideoIcon,
    title: "Video Editing",
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
    <section
      id="service"
      className="container space-y-12 py-16 md:space-y-16 md:py-24 lg:py-32"
    >
      {/* Header Section */}
      <div className="mx-auto max-w-2xl space-y-4 md:text-center">
        <h2>Yang Kami Tawarkan</h2>
        <p>
          Solusi digital lengkap untuk mengembangkan bisnis Anda—lebih cepat,
          lebih stabil, dan lebih siap bersaing.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((item, index) => (
          <Card key={index} className="flex w-full flex-col bg-white">
            <CardHeader>
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Title */}
              <CardTitle>{item.title}</CardTitle>

              {/* Description */}
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col">
              {/* Features List */}
              <ul className="mb-6 flex-1 space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}

                {item.excluded.map((excluded, excludedIndex) => (
                  <li key={excludedIndex} className="flex items-start gap-2">
                    <XIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{excluded}</span>
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
