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
      title: t("cards.WE3DUCATION.title"),
      description: t("cards.WE3DUCATION.description"),
      date: t("cards.WE3DUCATION.date"),
      icon: FaBookOpen,
    },
    {
      title: t("cards.WE3STATE.title"),
      description: t("cards.WE3STATE.description"),
      date: t("cards.WE3STATE.date"),
      icon: FaChartLine,
    },
    {
      title: t("cards.WE3NERGY.title"),
      description: t("cards.WE3NERGY.description"),
      date: t("cards.WE3NERGY.date"),
      icon: BiSolidZap,
    },
    //
    {
      title: t("cards.WE3NERGY.title"),
      description: t("cards.WE3NERGY.description"),
      date: t("cards.WE3NERGY.date"),
      icon: BiSolidZap,
    },
    {
      title: t("cards.WE3NERGY.title"),
      description: t("cards.WE3NERGY.description"),
      date: t("cards.WE3NERGY.date"),
      icon: BiSolidZap,
    },
    {
      title: t("cards.WE3NERGY.title"),
      description: t("cards.WE3NERGY.description"),
      date: t("cards.WE3NERGY.date"),
      icon: BiSolidZap,
    },
    {
      title: t("cards.WE3NERGY.title"),
      description: t("cards.WE3NERGY.description"),
      date: t("cards.WE3NERGY.date"),
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
          <Link
            href={`/ecosystem/${item.title}`}
            className="text-xl font-semibold text-zinc-800 transition-all hover:text-black dark:text-white"
          >
            {item.title}
          </Link>
          <p className="text-zinc-700 dark:text-white/85">
            {item.description.length <= 192 ? item.description : `${item.description.slice(0, 192)}...`}
            {item.description.length <= 192 ? (
              ""
            ) : (
              <Link href={`/ecosystem/${item.title}`} className="text-sm text-zinc-800 underline transition-all hover:text-black">
                Devamını Oku
              </Link>
            )}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
