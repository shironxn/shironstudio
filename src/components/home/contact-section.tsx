import { MailIcon, PhoneIcon } from "lucide-react";
import ContactForm from "@/components/home/contact-form";
import Link from "next/link";

const contact = {
  phoneNumber: "+62 895 3921 67612",
  email: "shironstudio@proton.me",
};

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Contact Info */}
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <h2>Siap Naikin Level Bisnis Anda?</h2>
            <p>
              Ceritain apa yang ingin Anda bangun — kami bantu wujudkan jadi
              solusi digital yang efektif dan profesional.
            </p>
          </div>

          <div className="space-y-2 text-muted-foreground">
            <Link
              href={`https://wa.me/${contact.phoneNumber.replaceAll(" ", "")}`}
              className="flex gap-2 hover:underline"
            >
              <PhoneIcon className="h-5 w-5" />
              <p>{contact.phoneNumber}</p>
            </Link>

            <Link
              href={`mailto:${contact.email}`}
              className="flex gap-2 hover:underline"
            >
              <MailIcon className="h-5 w-5" />
              <p>{contact.email}</p>
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
