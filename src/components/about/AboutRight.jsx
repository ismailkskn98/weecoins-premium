import React from "react";
import LearnMore from "../common/LearnMore";
import { useTranslations } from "next-intl";

export default function AboutRight() {
  const t = useTranslations("AboutPage");
  return (
    <article className="flex flex-1 flex-col items-start gap-8">
      <div className="flex flex-col gap-4 rounded-lg bg-gradient-to-br from-light-gradient-f7cf68 to-light-f88540 p-8 dark:from-light-833E15">
        <h3 className="text-3xl font-bold">{t("content.linkCard.title")}</h3>
        <p className="text-zinc-600 dark:text-zinc-200">{t("content.linkCard.description")}</p>
        <LearnMore href={"/contact"} />
      </div>
    </article>
  );
}
