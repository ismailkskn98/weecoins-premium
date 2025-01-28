import React from "react";
import { IoShieldOutline } from "react-icons/io5";
import { LuZap } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import AboutCard from "./AboutCard";
import { useTranslations } from "next-intl";

export default function AboutCards() {
  const t = useTranslations("AboutPage");
  return (
    <article className="mx-auto flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:items-start xl:w-10/12">
      <AboutCard title={t("content.cards.safe.title")} description={t("content.cards.safe.description")} Icon={IoShieldOutline} />
      <AboutCard title={t("content.cards.speed.title")} description={t("content.cards.speed.description")} Icon={LuZap} />
      <AboutCard title={t("content.cards.cost.title")} description={t("content.cards.cost.description")} Icon={FiDollarSign} />
    </article>
  );
}
