import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function LearnMore({ href }) {
  const t = useTranslations("HomePage");
  return (
    <Link
      href={href}
      className="group flex items-center gap-1 font-inter font-medium text-black transition-all duration-150 hover:underline hover:underline-offset-4 dark:text-white xl:gap-2 xl:text-xl"
    >
      {t("hero.learnMore")} <FaArrowRight className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1 xl:h-5 xl:w-5" />
    </Link>
  );
}
