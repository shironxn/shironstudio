import { Logo } from "@/components/layout/logo";
import { InstagramIcon } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const socialMedia = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/shironstudio",
      icon: InstagramIcon,
    },
  ];

  return (
    <footer className="gap-2 border-t p-4">
      <div className="container flex justify-between">
        <Logo />
        <p className="text-sm">
          © {new Date().getFullYear()} Shiron Studio. All rights reserved.
        </p>
        <div>
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
