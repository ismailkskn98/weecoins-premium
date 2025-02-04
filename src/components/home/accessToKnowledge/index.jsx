import SectionTitle from "@/components/common/SectionTitle";
import { Rocket, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function AccessToKnowledge() {
  const t = useTranslations("HomePage");
  const cardItems = [
    {
      title: t("accessToKnowledge.cards.discoverThePower.title"),
      description: t("accessToKnowledge.cards.discoverThePower.description"),
      badge1: t("accessToKnowledge.cards.discoverThePower.badge1"),
      badge2: t("accessToKnowledge.cards.discoverThePower.badge2"),
      image: "/images/access-card-3.webp",
    },
    {
      title: t("accessToKnowledge.cards.whyWeecoins.title"),
      description: t("accessToKnowledge.cards.whyWeecoins.description"),
      badge1: t("accessToKnowledge.cards.whyWeecoins.badge1"),
      badge2: t("accessToKnowledge.cards.whyWeecoins.badge2"),
      image: "/images/access-card-4.webp",
    },
  ];

  return (
    <section className="mt-[92px] flex w-full flex-col items-center justify-center gap-[60px]">
      <SectionTitle title={t("accessToKnowledge.title")} description={t("accessToKnowledge.description")} />
      <article className="mx-auto flex flex-col items-center gap-6 lg:flex-row">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="group h-full w-full max-w-[600px] rounded-2xl border border-solid border-[#1B1B1B]/10 bg-white px-4 py-5 shadow-lg dark:border-gray-800 dark:bg-transparent sm:px-10 sm:py-10"
          >
            <div className="float-left">
              <Image
                src={item.image}
                width={330}
                height={330}
                alt="weecoins access to knowledge image"
                className="float-left h-full w-full max-w-[150px] object-cover drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-wrap font-dmSans text-lg font-semibold text-black dark:text-zinc-100 sm:text-2xl">{item.title}</h4>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full px-3 py-1 text-xs text-zinc-800 shadow-md dark:text-zinc-300">
                  <Rocket className="mr-1 h-4 w-4" />
                  {item.badge1}
                </div>
                <div className="flex items-center gap-1 rounded-full px-3 py-1 text-xs text-zinc-800 shadow-md dark:text-zinc-300">
                  <Shield className="mr-1 h-4 w-4" />
                  {item.badge2}
                </div>
              </div>
              <p className="text-justify font-inter text-xs font-light leading-5 text-zinc-700 dark:text-zinc-300 sm:text-base sm:leading-[23px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
