import React from "react";

export default function SectionTitle({ title, description }) {
  return (
    <article className="mx-auto flex max-w-[690px] flex-col items-center justify-center gap-2">
      <h2 className="bg-gradient-to-t from-light-833E15 to-black bg-clip-text text-center font-dmSans text-[40px] font-bold leading-10 text-transparent dark:to-dark-808080 sm:text-[48px] sm:leading-[60px] lg:text-[54px]">
        {title}
      </h2>
      <p className="smleading-7 bg-gradient-to-t from-light-833E15 to-black bg-clip-text text-center font-inter text-[14px] font-light leading-6 sm:text-[16px] lg:text-[22px] lg:leading-[31px]">
        {description}
      </p>
    </article>
  );
}
