"use client";

import { Logo } from "@/components/layout/logo";
import { NavigationSheet } from "@/components/layout/navigation-sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transistion-all duration-300 w-full ${isScrolled ? "bg-background/95 backdrop-blur-lg shadow py-4" : "bg-transparent py-8"}`}
    >
      <div className="container h-full flex items-center justify-between gap-8">
        <Logo variant="dark" />

        <div className="flex items-center gap-3">
          <Button size="lg" variant="accent" asChild>
            <Link href="/#contact">Hubungi Kami</Link>
          </Button>

          <div>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
