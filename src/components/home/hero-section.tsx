"use client";

import animation from "@/../public/hero-animation.json";
import { Badge } from "@/components/ui/badge";
import Lottie from "lottie-react";
import { ChevronDownCircleIcon } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center py-32 md:py-24 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-2 border-border text-4xl"
            >
              Kami ada di sini.
            </Badge>
            <h1 className="mt-6 leading-[1.2]!">
              Solusi digital untuk bisnis anda.
            </h1>
          </div>

          <Link href="#project" className="flex gap-2 text-xl lg:text-lg">
            Lihat Karya Kami <ChevronDownCircleIcon />
          </Link>
        </div>
        <div className="relative max-w-lg lg:max-w-full mx-auto">
          <Lottie animationData={animation} loop className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
