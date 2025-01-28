import { useTranslations } from "next-intl";
import React from "react";

export default function AboutTitle() {
  const t = useTranslations("AboutPage");
  return (
    <article className="flex w-full flex-col gap-y-6">
      <div className="relative">
        <h2 className="mb-6 bg-gradient-to-t from-light-f88540 to-light-gradient-f7cf68 bg-clip-text text-center font-dmSans text-4xl font-bold text-transparent dark:to-light-f88540 md:text-6xl">
          {t("content.title")}
        </h2>
      </div>
      <p className="mx-auto w-full text-center text-lg text-zinc-600 dark:text-zinc-300 md:text-xl xl:w-10/12">
        {t("content.description")}
      </p>
    </article>
  );
}
