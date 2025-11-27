import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartIcon, TargetIcon, ZapIcon } from "lucide-react";

const values = [
  {
    icon: TargetIcon,
    title: "Fokus pada UMKM",
    description:
      "Kami memahami kebutuhan usaha kecil dan menawarkan solusi yang tepat sasaran.",
  },
  {
    icon: HeartIcon,
    title: "Desain yang Disukai",
    description:
      "Setiap website dibuat dengan perhatian detail untuk hasil yang memuaskan.",
  },
  {
    icon: ZapIcon,
    title: "Cepat & Efisien",
    description:
      "Proses kerja yang efisien tanpa mengorbankan kualitas hasil akhir.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="container py-32 space-y-12">
      <div className="md:text-center max-w-2xl mx-auto space-y-4">
        <h2>Tentang Kami</h2>
        <p>
          Studio kecil berbasis freelance yang fokus membantu usaha kecil
          memiliki website modern, cepat, dan efisien tanpa biaya besar. Kami
          percaya setiap bisnis, sekecil apapun, berhak tampil profesional di
          dunia digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((item, index) => (
          <Card key={index} className="border-none shadow-none p-0">
            <CardContent className="p-0">
              <item.icon className="text-primary w-8 h-8" />
            </CardContent>
            <CardHeader className="p-0">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
