import React from "react";
import "./hero.css";
import HeroContent from "./HeroContent";
import Visual from "./Visual";

export default function Hero() {
  return (
    <main className="fluid gridContainer relative h-[830px] w-full">
      <div className="fluid absolute inset-0 -z-20 bg-[linear-gradient(10deg,_#f7cf68_0%,_#eaeefe_59%)] dark:bg-[linear-gradient(10deg,_#f7cf68_0%,_#222222_59%)]"></div>
      {/* <div className="bg-hero-bg fluid absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"></div> */}
      <section className="mx-auto flex w-10/12 items-center justify-between">
        <HeroContent />
        <Visual />
      </section>
    </main>
  );
}
