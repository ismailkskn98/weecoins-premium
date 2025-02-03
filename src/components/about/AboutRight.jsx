import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutRight() {
  const t = useTranslations("AboutPage");
  return (
    <article className="flex flex-1 flex-col items-start gap-8">
      <div className="flex flex-col gap-4 rounded-lg bg-gradient-to-br from-light-gradient-f7cf68 to-light-f88540 p-8 dark:from-light-833E15">
        <h3 className="text-3xl font-bold">{t("content.linkCard.title")}</h3>
        <p className="text-zinc-600 dark:text-zinc-200">{t("content.linkCard.description")}</p>
        <Link
          href={"/contact"}
          className="group flex items-center gap-1 font-inter text-sm font-medium capitalize text-black transition-all duration-150 hover:underline hover:underline-offset-4 dark:text-white sm:text-base lg:text-lg xl:gap-2"
        >
          {t("goToContact")} <FaArrowRight className="h-3 w-3 transition-all duration-200 group-hover:translate-x-1 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </article>
  );
}
