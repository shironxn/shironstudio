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
import { useState } from "react";

export const NavigationSheet = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:size-16">
          <Menu className="md:size-12" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3 w-full max-w-full">
        <Logo />
        <NavMenu
          props={{ orientation: "vertical", className: "mt-6 [&>div]:h-full" }}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </SheetContent>
    </Sheet>
  );
};
