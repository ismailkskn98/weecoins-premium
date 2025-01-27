import React from "react";

export default function PageTitle({ title, subtitle }) {
  return (
    <section className="fluid gridContainer relative mt-20 h-[300px]">
      <div className="fluid bg-about-bg-light dark:bg-about-bg-dark absolute inset-0 -z-20 rotate-180 bg-cover bg-center bg-no-repeat"></div>
      {/* <div className="fluid absolute inset-0 bg-black/50" /> */}
      <div className="relative mx-auto flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="bg-gradient-to-t from-light-833E15 to-dark-808080 bg-clip-text font-dmSans text-5xl font-bold text-transparent xl:text-7xl 2xl:text-8xl">
          {title}
        </h1>
        <p className="max-w-2xl text-dark-0d0d0d dark:text-light-EAEEFE">{subtitle}</p>
      </div>
    </section>
  );
}
