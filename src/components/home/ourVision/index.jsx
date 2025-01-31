import React from "react";
import Image from "next/image";
import BlackButton from "@/components/common/BlackButton";
import LearnMore from "@/components/common/LearnMore";
import SectionTitle from "@/components/common/SectionTitle";
import { useTranslations } from "next-intl";

export default function OurVision() {
  const t = useTranslations("HomePage");

  return (
    <section className="fluid gridContainer relative overflow-x-hidden py-32">
      <div className="fluid absolute inset-0 -z-10 bg-gradient-to-t from-light-gradient-f7cf68 to-light-EAEEFE dark:from-light-833E15 dark:to-dark-0d0d0d"></div>
      <article className="mx-auto flex max-w-lg flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <SectionTitle title={t("ourVision.title")} description={t("ourVision.description")} />
        </div>
        <div className="flex items-center justify-center gap-4">
          <BlackButton href="/roadMap" label={t("ourVision.button")} isTopShow={false} isFixed={false} />
          <LearnMore href={"/about"} />
        </div>
      </article>
      <div className="absolute left-0 top-7 h-full max-h-[362px] w-full max-w-[362px]">
        <Image
          src="/images/our-vision-left.svg"
          alt="weecoins premium material"
          width={362}
          height={362}
          className="rotate-12 object-cover"
        />
      </div>
      <div className="absolute bottom-7 right-3 h-full max-h-[362px] w-full max-w-[362px]">
        <Image
          src="/images/our-vision-right.svg"
          alt="weecoins premium material"
          width={362}
          height={362}
          className="0 rotate-12 object-cover"
        />
      </div>
    </section>
  );
}
