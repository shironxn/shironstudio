"use client";

import { Logo } from "@/components/layout/logo";
import { NavMenu } from "@/components/layout/nav-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const NavigationSheet = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:size-14">
          <Menu className="md:size-10" />
        </Button>
      </SheetTrigger>

      <SheetContent className="h-full w-full max-w-full py-8" side="top">
        <div className="container relative h-full">
          <div>
            <Logo />
            <NavMenu
              props={{
                orientation: "vertical",
                className: "mt-8 md:mt-16 lg:mt-24 [&>div]:h-full",
              }}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>

          <Image
            src="/illustrations/work-space.svg"
            alt="Work Space"
            width={500}
            height={500}
            className="absolute bottom-0 right-8 max-w-[300px] md:max-w-[500px]"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
