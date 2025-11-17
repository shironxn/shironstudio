import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Kahuripan Poles Lantai",
    description:
      "Website landing page cepat & modern untuk UMKM yang ingin tampil profesional.",
    image: "/projects/1.png",
    url: "kahuripanpoleslantai.com",
  },
  {
    title: "Freedom Cup of 48",
    description:
      "Website landing page cepat & modern untuk UMKM yang ingin tampil profesional.",
    image: "/projects/2.png",
    url: "freedomof48.com",
  },
  {
    title: "MPK-OSIS SMA Negeri 48 Jakarta",
    description:
      "Website landing page cepat & modern untuk UMKM yang ingin tampil profesional.",
    image: "/projects/3.png",
    url: "mpkosis-sman48jkt.id",
  },
];

export const WorksSection = () => {
  return (
    <section id="works" className="container py-32 space-y-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Projek Kami</h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Beberapa contoh pekerjaan dan project digital yang telah kami buat
          untuk menunjukkan kualitas, konsistensi, dan pendekatan minimalis
          kami.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item, index) => {
          return (
            <Link key={index} href={`https://${item.url}`} target="_blank">
              <Card className="shadow-none border border-border/60 hover:shadow-md transition-all rounded-2xl bg-background/60 backdrop-blur-sm py-0">
                <CardContent className="aspect-video px-0 py-0 h-fit relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="rounded-t-2xl"
                  />
                </CardContent>

                <CardHeader className="py-5 px-6 flex flex-row items-center gap-3">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
