import SectionTitle from "@/components/common/SectionTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function AccessToKnowledge() {
  const t = useTranslations("HomePage");
  const cardItems = [
    {
      title: t("accessToKnowledge.cards.discoverThePower.title"),
      description: t("accessToKnowledge.cards.discoverThePower.description"),
      image: "/images/access-card-1.png",
    },
    {
      title: t("accessToKnowledge.cards.whyWeecoins.title"),
      description: t("accessToKnowledge.cards.whyWeecoins.description"),
      image: "/images/access-card-2.png",
    },
  ];

  return (
    <section className="mt-[92px] flex w-full flex-col items-center justify-center gap-[60px]">
      <SectionTitle title={t("accessToKnowledge.title")} description={t("accessToKnowledge.description")} />
      <article className="mx-auto flex flex-col items-center gap-6 lg:flex-row">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="group flex h-full w-full max-w-[520px] flex-col items-center justify-center rounded-2xl border border-solid border-[#1B1B1B]/10 px-10 py-10 shadow-lg dark:border-light-EAEEFE/30"
          >
            <div>
              <Image
                src={item.image}
                width={330}
                height={330}
                alt="weecoins access to knowledge image"
                className="max-h-[330px] max-w-[330px] object-cover drop-shadow-lg -hue-rotate-180 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-t from-light-833E15 to-black bg-clip-text text-center text-transparent dark:from-light-EAEEFE dark:to-light-EAEEFE">
              <h4 className="text-nowrap font-dmSans text-2xl font-bold leading-[60px]">{item.title}</h4>
              <p className="font-inter text-base font-light leading-[23px]">{item.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
