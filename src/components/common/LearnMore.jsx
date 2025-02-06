import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function LearnMore({ href }) {
  const t = useTranslations("HomePage");
  return (
    <Link
      href={href}
      className="group flex items-center gap-1 font-inter text-sm font-medium text-black transition-all duration-150 hover:underline hover:underline-offset-4 dark:text-white sm:text-base lg:text-lg xl:gap-2"
    >
      {t("hero.learnMore")} <FaArrowRight className="h-3 w-3 transition-all duration-200 group-hover:translate-x-1 sm:h-4 sm:w-4" />
    </Link>
  );
}
