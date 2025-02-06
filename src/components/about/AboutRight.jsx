import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FaArrowRight } from "react-icons/fa6";
import { Shield, Wallet, Zap, DollarSign } from "lucide-react";

export default function AboutRight() {
  const t = useTranslations("AboutPage");

  const descriptions = [
    {
      title: t("content.linkCard.descriptionP1.title"),
      content: t("content.linkCard.descriptionP1.content"),
      icon: Wallet,
    },
    {
      title: t("content.linkCard.descriptionP2.title"),
      content: t("content.linkCard.descriptionP2.content"),
      icon: Zap,
    },
    {
      title: t("content.linkCard.descriptionP3.title"),
      content: t("content.linkCard.descriptionP3.content"),
      icon: Shield,
    },
    {
      title: t("content.linkCard.descriptionP4.title"),
      content: t("content.linkCard.descriptionP4.content"),
      icon: DollarSign,
    },
  ];

  return (
    <article className="flex flex-1 flex-col items-start gap-8 rounded-lg shadow-lg">
      <div className="flex flex-col gap-4 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 p-8">
        <div className="mb-3 flex flex-col items-start gap-2">
          <h3 className="text-3xl font-bold text-white">{t("content.linkCard.title")}</h3>
          <p className="text-white/80">{t("content.linkCard.content")}</p>
        </div>
        <div className="flex flex-col items-start gap-10">
          {descriptions.map((desc, index) => (
            <div key={index} className="group flex flex-col items-start gap-6 md:flex-row">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <desc.icon className="h-8 w-8 text-white" />
              </div>
              <div key={index} className="flex flex-col items-start gap-2">
                <h4 className="text-xl font-medium text-white">{desc.title}</h4>
                <p className="text-white/80">{desc.content}</p>
              </div>
            </div>
          ))}
          <p className="text-white">{t("content.linkCard.detailedText")}</p>
        </div>
        <Link
          href={"/contact"}
          className="group flex w-min items-center gap-1 text-nowrap rounded-lg bg-white px-4 py-2 font-inter text-sm capitalize text-black transition-all duration-150 hover:bg-white/80 sm:text-base xl:gap-2"
        >
          {t("goToContact")} <FaArrowRight className="h-3 w-3 transition-all duration-200 group-hover:translate-x-1 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </article>
  );
}
