import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlobeIcon, VideoIcon } from "lucide-react";

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
      "Responsive design",
      "SEO optimized",
      "Fast loading",
      "Contact form",
      "Social media integration",
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
          <Card key={index} className="w-full">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground line-through">
                  {item.originalPrice}
                </p>
                <p className="text-2xl font-bold text-primary">{item.price}</p>
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
                {item.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{feature}</span>
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
