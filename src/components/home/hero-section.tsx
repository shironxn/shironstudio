"use client";

import animation from "@/../public/illustrations/hero-animation.json";
import { Badge } from "@/components/ui/badge";
import Lottie from "lottie-react";
import { ChevronDownCircleIcon } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white py-24 md:py-32 lg:py-40">
      <div className="container grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Hero Content */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="text-xl md:text-3xl rounded-full border-border px-4 py-2"
            >
              Kami ada di sini.
            </Badge>
            <h1 className="leading-[1.2]">Solusi digital untuk bisnis anda.</h1>
          </div>

          <Link href="#project" className="flex gap-2">
            Lihat Karya Kami
            <ChevronDownCircleIcon />
          </Link>
        </div>

        {/* Hero Animation */}
        <div className="relative mx-auto max-w-lg lg:max-w-full">
          <Lottie animationData={animation} loop className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
