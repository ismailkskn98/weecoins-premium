"use client";
import React from "react";
import { FaBookOpen, FaChartLine } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiSolidZap } from "react-icons/bi";
import "./roadmap.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function VerticalTimelineContainer() {
  const t = useTranslations("OurProjectsPage");
  const cards = [
    {
      title: t("cards.wE3DUCATION.title"),
      description: t("cards.wE3DUCATION.description"),
      date: t("cards.wE3DUCATION.date"),
      icon: FaBookOpen,
      image: null,
    },
    {
      title: t("cards.wE3STATE.title"),
      description: t("cards.wE3STATE.description"),
      date: t("cards.wE3STATE.date"),
      icon: FaChartLine,
      image: null,
    },
    {
      title: t("cards.wE3NERGY.title"),
      description: t("cards.wE3NERGY.description"),
      date: t("cards.wE3NERGY.date"),
      icon: BiSolidZap,
      image: null,
    },
    //
    {
      title: t("cards.weeZard.shortTitle"),
      slug: t("cards.weeZard.slug"),
      description: t("cards.weeZard.sections.contribution.content"),
      date: t("cards.weeZard.date"),
      icon: null,
      image: "weezard.png",
    },
    {
      title: t("cards.weeCard.shortTitle"),
      slug: t("cards.weeCard.slug"),
      description: t("cards.weeCard.sections.contribution.content"),
      date: t("cards.weeCard.date"),
      icon: null,
      image: "weecard.png",
    },
    {
      title: t("cards.weeSale.shortTitle"),
      slug: t("cards.weeSale.slug"),
      description: t("cards.weeSale.sections.contribution.content"),
      date: t("cards.weeSale.date"),
      icon: null,
      image: "weesale.png",
    },
    {
      title: t("cards.weekobi.shortTitle"),
      slug: t("cards.weekobi.slug"),
      description: t("cards.weekobi.sections.contribution.content"),
      date: t("cards.weekobi.date"),
      icon: null,
      image: "weekobi.png",
    },
  ];

  return (
    <VerticalTimeline>
      {cards.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          iconStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          icon={
            item.icon ? (
              <item.icon className="!h-6 !w-6 text-white xl:!h-8 xl:!w-8" />
            ) : (
              <Image src={`/images/${item.image}`} alt={item.image} width={60} height={60} className="h-full max-h-14 w-full max-w-14" />
            )
          }
          // date={item.date}
        >
          {item.slug ? (
            <Link
              href={`/our-projects/${item.slug}`}
              className="text-lg font-semibold text-light-833E15 transition-all hover:text-black dark:text-white"
            >
              {item.title}
            </Link>
          ) : (
            <h3 className="text-lg font-semibold text-zinc-800 transition-all hover:text-black dark:text-white">{item.title}</h3>
          )}
          <p className="">
            {item.description.length <= 345 ? item.description : `${item.description.slice(0, 400)}...`}
            {item.description.length > 345 && item.slug ? (
              <Link
                href={`/our-projects/${item.slug}`}
                className="rounded-md px-3 py-2 text-sm text-light-833E15 underline decoration-light-833E15 underline-offset-4 transition-all hover:text-black dark:hover:text-white"
              >
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
