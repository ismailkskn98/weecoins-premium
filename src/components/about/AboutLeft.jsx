import { useTranslations } from "next-intl";
import React from "react";

export default function AboutLeft() {
  const t = useTranslations("AboutPage");
  return (
    <article className="relative flex h-full flex-1 flex-col items-start gap-12">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold">{t("content.ourMission.title")}</h3>
        <p className="text-zinc-600 dark:text-zinc-300">{t("content.ourMission.description")}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold">{t("content.ourVision.title")}</h3>
        <p className="text-zinc-600 dark:text-zinc-300">{t("content.ourVision.description")}</p>
      </div>
    </article>
  );
}
