"use client";

import animation from "@/../public/hero-animation.json";
import { Badge } from "@/components/ui/badge";
import Lottie from "lottie-react";
import { ChevronDownCircleIcon } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-32">
      <div className="container grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-between gap-4">
          <div>
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-2 border-border text-4xl"
            >
              Kami ada disini.
            </Badge>
            <h1 className="mt-6 max-w-[17ch]  leading-[1.2]!">
              Solusi digital untuk bisnis anda.
            </h1>
          </div>
          <Link href="#project" className="flex gap-2 text-xl lg:text-lg">
            Lihat Karya Kami <ChevronDownCircleIcon />
          </Link>
        </div>
        <div className="w-full">
          <Lottie animationData={animation} loop />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
