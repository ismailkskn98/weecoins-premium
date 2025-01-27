import React from "react";

export default function SectionTitle({ title, description }) {
  return (
    <article className="mx-auto flex max-w-[640px] flex-col items-center justify-center gap-2">
      <h2 className="bg-gradient-to-t from-light-833E15 to-black bg-clip-text text-center font-dmSans text-[54px] font-bold leading-[60px] text-transparent dark:to-dark-808080">
        {title}
      </h2>
      <p className="bg-gradient-to-t from-light-833E15 to-black bg-clip-text text-center font-inter text-[22px] font-light leading-[31px]">
        {description}
      </p>
    </article>
  );
}
