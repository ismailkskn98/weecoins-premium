import React from "react";
import "./hero.css";
import HeroContent from "./HeroContent";
import Visual from "./Visual";

export default function Hero() {
  return (
    <main className="fluid gridContainer relative h-auto w-full pb-10 pt-40 lg:h-[830px] lg:pb-0 lg:pt-0">
      <div className="fluid absolute inset-0 -z-20 bg-[linear-gradient(10deg,_var(--color-gradient-f7cf68)_0%,_var(--color-light-eaeefe)_59%)] dark:bg-[linear-gradient(10deg,_var(--color-light-331808)_0%,_var(--color-dark-0d0d0d)_59%)]"></div>
      {/* <div className="bg-hero-bg fluid absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"></div> */}
      <section className="mx-auto flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:gap-0 xl:w-11/12 2xl:w-10/12">
        <HeroContent />
        <Visual />
      </section>
    </main>
  );
}
