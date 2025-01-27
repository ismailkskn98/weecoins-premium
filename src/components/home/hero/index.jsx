import React from "react";
import "./hero.css";
import HeroContent from "./HeroContent";
import Visual from "./Visual";
import Gradient from "@/components/common/Gradient";

export default function Hero() {
  return (
    <main className="fluid gridContainer relative h-auto w-full pb-10 pt-40 lg:h-[830px] lg:pb-0 lg:pt-0">
      <Gradient />
      {/* <div className="bg-hero-bg fluid absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"></div> */}
      <section className="mx-auto flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:gap-0 xl:w-11/12 2xl:w-10/12">
        <HeroContent />
        <Visual />
      </section>
    </main>
  );
}
