import { useTranslations } from "next-intl";
import { Target, Compass } from "lucide-react";
import React from "react";

export default function AboutLeft() {
  const t = useTranslations("AboutPage");
  return (
    <article className="relative flex h-full flex-1 flex-col items-start gap-12">
      <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-light-gradient-f7cf68 bg-light-EAEEFE p-6 shadow-lg backdrop-blur-0 duration-500 dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md dark:hover:border-light-f88540/50">
        <div className="inline-flex rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 p-3">
          <Target className="h-8 w-8 text-white" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-3xl font-semibold text-zinc-900 dark:text-white">{t("content.ourMission.title")}</h3>
          <p className="text-zinc-800 dark:text-zinc-300">{t("content.ourMission.description")}</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-light-gradient-f7cf68 bg-light-EAEEFE p-6 shadow-lg backdrop-blur-0 duration-500 dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md dark:hover:border-light-f88540/50">
        <div className="inline-flex rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 p-3">
          <Compass className="h-8 w-8 text-white" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-3xl font-semibold text-zinc-900 dark:text-white">{t("content.ourVision.title")}</h3>
          <p className="whitespace-pre-line text-zinc-800 dark:text-zinc-300">{t("content.ourVision.description")}</p>
        </div>
      </div>
    </article>
  );
}
