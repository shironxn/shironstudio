import { Logo } from "@/components/layout/logo";
import { InstagramIcon } from "lucide-react";
import Link from "next/link";

const socialMedia = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/shironstudio",
    icon: InstagramIcon,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground gap-2 py-4">
      <div className="container flex flex-col md:flex-row text-center justify-center items-center md:text-start md:justify-between gap-2">
        <Logo variant="light" />
        <p className="text-primary-foreground text-sm font-medium">
          © {new Date().getFullYear()} Shiron Studio. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0">
          {socialMedia.map((item, index) => (
            <Link key={index} href={item.href} target="_blank">
              <item.icon />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
