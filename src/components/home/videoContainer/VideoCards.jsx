import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import { FaChartLine } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function VideoCards() {
  const t = useTranslations("HomePage");
  const cards = [
    {
      title: t("videoContainer.cards.smartContracts.title"),
      description: t("videoContainer.cards.smartContracts.description"),
      icon: FaRegHandshake,
    },
    {
      title: t("videoContainer.cards.automaticLiquidityPool.title"),
      description: t("videoContainer.cards.automaticLiquidityPool.description"),
      icon: AiOutlineRobot,
    },
    {
      title: t("videoContainer.cards.stakingYieldFarming.title"),
      description: t("videoContainer.cards.stakingYieldFarming.description"),
      icon: TfiCup,
    },
    {
      title: t("videoContainer.cards.joinNow.title"),
      description: t("videoContainer.cards.joinNow.description"),
      icon: FaChartLine,
    },
  ];

  return (
    <article className="grid w-full grid-cols-1 justify-items-center gap-y-5 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-start">
      {cards.map((card, index) => (
        <div key={index} className="item-start flex max-w-64 flex-col gap-[10px] py-2 text-black dark:text-light-EAEEFE sm:py-5 lg:py-10">
          <card.icon className="h-10 w-10" />
          <h4 className="font-dmSans text-lg font-bold">{card.title}</h4>
          <p className="font-inter text-base leading-6">{card.description}</p>
        </div>
      ))}
    </article>
  );
}
