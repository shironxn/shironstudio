import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckIcon,
  CheckLineIcon,
  GlobeIcon,
  VideoIcon,
  XIcon,
} from "lucide-react";

const services = [
  {
    icon: GlobeIcon,
    title: "Website Landing Page",
    price: "Rp 300.000",
    originalPrice: "Rp 600.000",
    duration: "3-5 hari",
    description:
      "Website satu halaman yang menarik untuk promosi produk atau layanan Anda.",
    features: [
      "1 Halaman Landing Page profesional",
      "Hosting GRATIS dengan Vercel",
      "Responsive Design",
      "SEO Basic Optimization",
      "Contact Form Sederhana",
      "Integrasi WhatsApp / Sosial Media",
      "Penyesuaian warna & gaya sesuai brand",
    ],
    excluded: [
      "Domain (bisa tambah biaya)",
      "Maintenance panjang",
      "Dashboard admin",
      "Fitur kompleks (melibatkan backend)",
    ],
  },
  {
    icon: VideoIcon,
    title: "Video Editing",
    price: "Rp 150.000 - 550.000",
    originalPrice: "",
    duration: "-",
    description:
      "Editing video berkualitas tinggi untuk konten media sosial dan promosi.",
    features: [
      "Video editing",
      "Color grading",
      "Audio enhancement",
      "Subtitle",
      "Thumbnail design",
    ],
    excluded: [],
  },
];

const ServiceSection = () => {
  return (
    <section id="service" className="container py-32 space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold">Yang Kami Tawarkan</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Solusi digital modern untuk bisnis skala kecil. Layanan kami dibuat
          dengan fokus pada kualitas, kecepatan, dan hasil yang konsisten.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {services.map((item, index) => (
          <Card key={index} className="w-full flex flex-col">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
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
                  <p className="text-2xl font-bold text-primary pt-4">
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
