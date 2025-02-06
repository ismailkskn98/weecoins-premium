import React from "react";
import "./hero.css";
import HeroContent from "./HeroContent";
import Visual from "./Visual";
import Gradient from "@/components/common/Gradient";

export default function Hero() {
  return (
    <main className="fluid gridContainer relative h-auto w-full pb-10 pt-40 lg:h-[880px] lg:pb-0 lg:pt-0">
      <Gradient />
      <section className="mx-auto flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:gap-0 xl:w-11/12">
        <HeroContent />
        <Visual />
      </section>
    </main>
  );
}
