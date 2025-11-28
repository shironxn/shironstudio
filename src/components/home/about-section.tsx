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

const AboutSection = () => {
  return (
    <section
      id="about"
      className="container space-y-12 py-16 md:py-24 lg:py-32"
    >
      {/* Header Section */}
      <div className="mx-auto max-w-2xl space-y-4 md:text-center">
        <h2>Tentang Kami</h2>
        <p>
          Studio kecil berbasis freelance yang fokus membantu usaha kecil
          memiliki website modern, cepat, dan efisien tanpa biaya besar. Kami
          percaya setiap bisnis, sekecil apapun, berhak tampil profesional di
          dunia digital.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {values.map((item, index) => (
          <Card key={index} className="border-none p-0 shadow-none">
            <CardContent className="p-0">
              <item.icon className="h-8 w-8 text-primary" />
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
