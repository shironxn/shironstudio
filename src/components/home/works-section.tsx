import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const WorksSection = () => {
  return (
    <section className="container py-20 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold">Tentang Kami</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Studio kecil berbasis freelance yang fokus membantu usaha kecil
          memiliki website modern, cepat, dan efisien tanpa biaya besar. Kami
          percaya setiap bisnis, sekecil apapun, berhak tampil profesional di
          dunia digital.
        </p>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default WorksSection;
