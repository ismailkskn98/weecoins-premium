import React from "react";
import PageGradientBg from "../common/PageGradientBg";
import NewspapersCarousel from "./NewspapersCarousel";
import { useTranslations } from "next-intl";

export default function NewsFromUsMain({ children, isData }) {
  const t = useTranslations("NewsFromUs");
  return (
    <section className="pageSection mb:pb-24 pb-16">
      <PageGradientBg />
      <div className="fluid absolute inset-x-0 -top-9 hidden h-14 bg-gradient-to-b from-transparent via-light-EAEEFE/70 to-transparent dark:via-dark-0d0d0d sm:block"></div>
      <div className="fluid absolute inset-x-0 -bottom-9 hidden h-14 bg-gradient-to-b from-transparent via-[#111] to-transparent sm:block"></div>
      <div className="newspapersWrapper mb-16">
        <h2
          className={`mb-8 text-nowrap text-center font-dmSans text-3xl font-semibold ${isData ? "text-white" : "text-black dark:text-white"} lg:text-4xl`}
        >
          {t("newspapers.title")}
        </h2>
        <NewspapersCarousel />
      </div>
      {children}
    </section>
  );
}
