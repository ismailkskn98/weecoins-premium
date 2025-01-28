"use client";
import React from "react";
import { FaBookOpen, FaChartLine } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiSolidZap } from "react-icons/bi";
import "./roadmap.css";
import { useTranslations } from "next-intl";

export default function VerticalTimelineContainer() {
  const t = useTranslations("RoadMapPage");
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
      icon: FaChartLine,
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
          <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">{item.title}</h3>
          <p className="text-zinc-700 dark:text-white/85">{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
