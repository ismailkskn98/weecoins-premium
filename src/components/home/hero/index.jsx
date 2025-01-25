import React from "react";
import "./hero.css";
import HeroContent from "./HeroContent";
import Visual from "./Visual";

export default function Hero() {
  return (
    <main className="fluid gridContainer relative h-[830px] w-full">
      <div className="heroGradient fluid absolute inset-0 -z-20"></div>
      {/* <div className="bg-hero-bg fluid absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"></div> */}
      <section className="mx-auto flex w-10/12 items-center justify-between">
        <HeroContent />
        <Visual />
      </section>
    </main>
  );
}
