import { MailIcon, PhoneIcon } from "lucide-react";
import ContactForm from "@/components/home/contact-form";
import Link from "next/link";

const contact = {
  phoneNumber: "+62 895 3921 67612",
  email: "shironstudio@proton.me",
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="container py-32 grid md:grid-cols-2 gap-24"
    >
      <div className="flex flex-col justify-between gap-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2>Hubungi Kami</h2>
          <p>
            Jangan ragu untuk menghubungi kami. Kami siap membantu Anda untuk
            membangun website modern dan efisien tanpa biaya besar.
          </p>
        </div>

        <div className="space-y-2">
          <Link
            href={`https://wa.me/${contact.phoneNumber.replaceAll(" ", "")}`}
            className="flex gap-2 hover:cursor-pointer hover:text-foreground transition-colors duration-300"
          >
            <PhoneIcon className="w-5 h-5" />
            <p className="text-sm">{contact.phoneNumber}</p>
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            className="flex gap-2 hover:cursor-pointer hover:text-foreground transition-colors duration-300"
          >
            <MailIcon className="w-5 h-5" />
            <p className="text-sm">{contact.email}</p>
          </Link>
        </div>
      </div>

      <ContactForm />
    </section>
  );
};

export default ContactSection;
