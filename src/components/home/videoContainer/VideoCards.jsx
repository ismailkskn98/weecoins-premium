import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import { FaChartLine } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { CircleHelp } from "lucide-react";

export default function VideoCards() {
  const t = useTranslations("HomePage");
  const cards = [
    {
      title: t("videoContainer.cards.smartContracts.title"),
      description: t("videoContainer.cards.smartContracts.description"),
      icon: FaRegHandshake,
    },
    {
      title: t("videoContainer.cards.whyWeecoins.title"),
      description: t("videoContainer.cards.whyWeecoins.description"),
      icon: CircleHelp,
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
    <article className="grid w-full grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex max-w-64 flex-col items-center gap-3 py-2 text-black dark:text-zinc-200 sm:items-start sm:py-5 lg:py-10"
        >
          <card.icon className="h-10 w-10" />
          <div className="flex w-full flex-col items-center gap-1 sm:items-start">
            <h4 className="text-center font-dmSans text-lg font-bold sm:text-start">{card.title}</h4>
            <p className="text-center font-inter text-base leading-6 sm:text-start">{card.description}</p>
          </div>
        </div>
      ))}
    </article>
  );
}
