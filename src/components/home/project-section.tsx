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
    <section id="project" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container space-y-12 md:space-y-16">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl space-y-4 md:text-center">
          <h2>Projek Kami</h2>
          <p>
            Beberapa contoh pekerjaan dan project digital yang telah kami buat
            untuk menunjukkan kualitas, konsistensi, dan pendekatan minimalis
            kami.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <Card
              key={index}
              className="border-none bg-transparent shadow-none"
            >
              <Link href={`https://${item.url}`} target="_blank">
                <CardContent className="relative h-fit aspect-video p-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="rounded-2xl object-cover"
                  />
                </CardContent>
              </Link>

              <CardHeader className="flex flex-row items-center gap-3 border-t px-0 py-8">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
