import { GlobeIcon, HeartHandshakeIcon, ShieldCheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutTitle() {
  const t = useTranslations("AboutPage");

  const cards = [
    {
      icon: GlobeIcon,
      title: t("content.top.cards.global.title"),
      content: t("content.top.cards.global.content"),
    },
    {
      icon: ShieldCheckIcon,
      title: t("content.top.cards.security.title"),
      content: t("content.top.cards.security.content"),
    },
    {
      icon: HeartHandshakeIcon,
      title: t("content.top.cards.social.title"),
      content: t("content.top.cards.social.content"),
    },
  ];
  return (
    <article className="flex w-full flex-col gap-y-6">
      <div className="relative">
        <h2 className="mb-6 bg-gradient-to-t from-light-f88540 to-light-gradient-f7cf68 bg-clip-text text-center font-dmSans text-4xl font-bold text-transparent dark:to-light-f88540 md:text-6xl">
          {t("content.top.title")}
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-amber-600" />
      </div>
      <div className="rounded-lg border border-solid border-light-gradient-f7cf68 bg-light-EAEEFE shadow-lg dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md">
        <div className="flex flex-col gap-y-6 p-6 md:p-8">
          <div className="mx-auto flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-col space-y-3 text-start lg:items-start lg:p-4">
                <card.icon className="h-10 w-10 text-orange-600" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{card.title}</h3>
                  <p className="text-start text-zinc-700 dark:text-zinc-300">{card.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3">
            <p className="text-zinc-700 dark:text-zinc-300">{t("content.top.descriptionP1")}</p>
            <p className="text-zinc-700 dark:text-zinc-300">{t("content.top.descriptionP2")}</p>
            <p className="text-zinc-700 dark:text-zinc-300">{t("content.top.descriptionP3")}</p>
            <p className="text-zinc-700 dark:text-zinc-300">{t("content.top.descriptionP4")}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
