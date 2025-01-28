import React from "react";
import AboutGradientBg from "./AboutGradientBg";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import AboutTitle from "./AboutTitle";
import AboutCards from "./AboutCards";

export default function AboutMain() {
  return (
    <section className="fluid gridContainer relative flex gap-y-16 pt-16 transition-colors duration-300 md:pt-24">
      <AboutGradientBg />
      <AboutTitle />
      <AboutCards />
      <main className="relative mx-auto flex w-full flex-col items-center justify-between gap-24 pb-16 lg:flex-row lg:items-start xl:w-10/12">
        <AboutLeft />
        <AboutRight />
      </main>
    </section>
  );
}
