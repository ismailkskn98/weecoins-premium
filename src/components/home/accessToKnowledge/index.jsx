"use client";
import SectionTitle from "@/components/common/SectionTitle";
import { Rocket, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import CardImage from "./CardImage";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AccessToKnowledge() {
  const t = useTranslations("HomePage");

  // useGSAP(() => {
  //   gsap.from(materialTopRef.current, {
  //     x: 300,
  //     rotateY: "50deg",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".video-container",
  //       start: "top 70%",
  //       end: "35% end",
  //       scrub: 1,
  //     },
  //   });
  //   gsap.from(materialBottomRef.current, {
  //     x: -300,
  //     rotateY: "50deg",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".video-container",
  //       start: "top 70%",
  //       end: "35% end",
  //       scrub: 1,
  //     },
  //   });
  // }, []);

  const cardItems = [
    {
      id: 1,
      title: t("accessToKnowledge.cards.discoverThePower.title"),
      description: t("accessToKnowledge.cards.discoverThePower.description"),
      badge1: t("accessToKnowledge.cards.discoverThePower.badge1"),
      badge2: t("accessToKnowledge.cards.discoverThePower.badge2"),
      image: "/images/access-card-3.webp",
    },
    {
      id: 2,
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
            {item && <CardImage cardNumber={item.id} />}
            <div className="space-y-2">
              <h4 className="text-wrap font-dmSans text-lg font-semibold text-black dark:text-zinc-100 sm:text-2xl">{item.title}</h4>
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1 text-nowrap rounded-full px-3 py-1 text-xs text-zinc-800 shadow-md dark:text-zinc-300 sm:flex">
                  <Rocket className="mr-1 h-4 w-4" />
                  {item.badge1}
                </div>
                <div className="flex items-center gap-1 text-nowrap rounded-full px-3 py-1 text-xs text-zinc-800 shadow-md dark:text-zinc-300">
                  <Shield className="mr-1 h-4 w-4" />
                  {item.badge2}
                </div>
              </div>
              <p className="text-justify font-inter text-sm font-light leading-5 text-zinc-700 dark:text-zinc-300 sm:text-base sm:leading-[23px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
