"use client";
import React from "react";
import { FaBookOpen, FaChartLine } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiSolidZap } from "react-icons/bi";
import "./roadmap.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function VerticalTimelineContainer() {
  const t = useTranslations("EcosystemPage");
  const cards = [
    {
      title: t("cards.wE3DUCATION.title"),
      description: t("cards.wE3DUCATION.description"),
      date: t("cards.wE3DUCATION.date"),
      icon: FaBookOpen,
    },
    {
      title: t("cards.wE3STATE.title"),
      description: t("cards.wE3STATE.description"),
      date: t("cards.wE3STATE.date"),
      icon: FaChartLine,
    },
    {
      title: t("cards.wE3NERGY.title"),
      description: t("cards.wE3NERGY.description"),
      date: t("cards.wE3NERGY.date"),
      icon: BiSolidZap,
    },
    //
    {
      title: t("cards.weeZard.shortTitle"),
      slug: t("cards.weeZard.slug"),
      description: t("cards.weeZard.shortDescription"),
      date: t("cards.weeZard.date"),
      icon: BiSolidZap,
    },
    {
      title: t("cards.weeCard.shortTitle"),
      slug: t("cards.weeCard.slug"),
      description: t("cards.weeCard.shortDescription"),
      date: t("cards.weeCard.date"),
      icon: BiSolidZap,
    },
    {
      title: t("cards.weeSale.shortTitle"),
      slug: t("cards.weeSale.slug"),
      description: t("cards.weeSale.shortDescription"),
      date: t("cards.weeSale.date"),
      icon: BiSolidZap,
    },
    {
      title: t("cards.weekobi.shortTitle"),
      slug: t("cards.weekobi.slug"),
      description: t("cards.weekobi.shortDescription"),
      date: t("cards.weekobi.date"),
      icon: BiSolidZap,
    },
  ];

  return (
    <VerticalTimeline>
      {cards.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          iconStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          icon={<item.icon className="!h-6 !w-6 text-light-833E15 dark:text-light-f88540 md:!h-8 md:!w-8" />}
          date={item.date}
        >
          {item.slug ? (
            <Link
              href={`/ecosystem/${item.slug}`}
              className="text-xl font-semibold text-zinc-800 transition-all hover:text-black dark:text-white"
            >
              {item.title}
            </Link>
          ) : (
            <h3 className="text-xl font-semibold text-zinc-800 transition-all hover:text-black dark:text-white">{item.title}</h3>
          )}
          <p className="text-zinc-700 dark:text-white/85">
            {item.description.length <= 192 ? item.description : `${item.description.slice(0, 192)}...`}
            {item.description.length > 192 && item.slug ? (
              <Link href={`/ecosystem/${item.slug}`} className="text-sm text-zinc-800 underline transition-all hover:text-black">
                Devamını Oku
              </Link>
            ) : (
              ""
            )}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
