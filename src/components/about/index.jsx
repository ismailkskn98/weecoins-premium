import React from "react";
import PageGradientBg from "../common/PageGradientBg";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import AboutTitle from "./AboutTitle";
import AboutCards from "./AboutCards";

export default function AboutMain() {
  return (
    <section className="pageSection gap-y-16">
      <PageGradientBg />
      <AboutTitle />
      <AboutCards />
      <main className="relative mx-auto flex w-full flex-col items-center justify-between gap-24 pb-16 lg:flex-row lg:items-start">
        <AboutLeft />
        <AboutRight />
      </main>
    </section>
  );
}
