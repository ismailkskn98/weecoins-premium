import React from "react";
import BlackButton from "@/components/common/BlackButton";
import LearnMore from "@/components/common/LearnMore";
import SectionTitle from "@/components/common/SectionTitle";
import { useTranslations } from "next-intl";
import OurVİsionAnimate from "./OurVİsionAnimate";

export default function OurVision() {
  const t = useTranslations("HomePage");

  return (
    <section className="ourVisionContainer fluid gridContainer relative overflow-hidden py-32">
      <div className="fluid absolute inset-0 -z-10 bg-gradient-to-t from-light-gradient-f7cf68 to-light-EAEEFE dark:from-light-833E15 dark:to-dark-0d0d0d"></div>
      <article className="mx-auto flex max-w-lg flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <SectionTitle title={t("ourVision.title")} description={t("ourVision.description")} />
        </div>
        <div className="flex items-center justify-center gap-4">
          <BlackButton href="/our-projects" label={t("ourVision.button")} isTopShow={false} isFixed={false} />
          <LearnMore href={"/about"} />
        </div>
      </article>
      <OurVİsionAnimate />
    </section>
  );
}
