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
    <footer className="gap-2 border-t py-4">
      <div className="container flex flex-col md:flex-row text-center justify-center items-center md:text-start md:justify-between gap-2">
        <Logo />
        <p className="text-sm">
          © {new Date().getFullYear()} Shiron Studio. All rights reserved.
        </p>
        <div className="text-muted-foreground">
          {socialMedia.map((item, index) => (
            <Link key={index} href={item.href}>
              <item.icon />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
