import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps } from "react";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "#service" },
  { name: "Portofolio", href: "#project" },
  { name: "Tentang", href: "#about" },
];

export const NavMenu = ({
  props,
  setIsMobileMenuOpen,
}: {
  props: ComponentProps<typeof NavigationMenu>;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start gap-2 md:gap-6">
        {navLinks.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              asChild
              className="font-semibold font-syne text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
