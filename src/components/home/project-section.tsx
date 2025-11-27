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
      "Website profesional untuk jasa poles lantai marmer, granit, dan teraso.",
    image: "/projects/1.png",
    url: "kahuripanpoleslantai.com",
  },
  {
    title: "Freedom Cup of 48",
    description:
      "Platform kompetisi siswa dengan berbagai cabang lomba dan pendaftaran online.",
    image: "/projects/2.png",
    url: "freedomof48.com",
  },
  {
    title: "MPK-OSIS SMA Negeri 48 Jakarta",
    description:
      "Website organisasi siswa menampilkan profil dan program kerja terupdate.",
    image: "/projects/3.png",
    url: "mpkosis-sman48jkt.id",
  },
];

export const ProjectSection = () => {
  return (
    <section id="project" className="bg-white py-32">
      <div className="container space-y-16">
        <div className="md:text-center max-w-2xl mx-auto space-y-4">
          <h2>Projek Kami</h2>
          <p>
            Beberapa contoh pekerjaan dan project digital yang telah kami buat
            untuk menunjukkan kualitas, konsistensi, dan pendekatan minimalis
            kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item, index) => {
            return (
              <Card
                key={index}
                className="shadow-none border-none bg-transparent"
              >
                <Link href={`https://${item.url}`} target="_blank">
                  <CardContent className="aspect-video px-0 py-0 h-fit relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="rounded-2xl"
                    />
                  </CardContent>
                </Link>

                <CardHeader className="px-0 py-8 flex flex-row items-center gap-3 border-t">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
