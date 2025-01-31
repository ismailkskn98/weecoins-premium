import SlugPage from "@/components/ourProjects/SlugPage";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function page({ params }) {
  const slug = (await params).slug;
  const t = await getTranslations("OurProjectsPage");
  const cards = [
    {
      title: t("cards.weeZard.shortTitle"),
      slug: t("cards.weeZard.slug"),
      description: t("cards.weeZard.shortDescription"),
      image: "weezard.png",
      sections: {
        howItWorks: {
          title: t("cards.weeZard.sections.howItWorks.title"),
          content: t("cards.weeZard.sections.howItWorks.content"),
        },
        whyUse: {
          title: t("cards.weeZard.sections.whyUse.title"),
          content: t("cards.weeZard.sections.whyUse.content"),
        },
        contribution: {
          title: t("cards.weeZard.sections.contribution.title"),
          content: t("cards.weeZard.sections.contribution.content"),
        },
      },
      detailedText: t("cards.weeZard.detailedText"),
      date: t("cards.weeZard.date"),
    },
    {
      title: t("cards.weeCard.shortTitle"),
      slug: t("cards.weeCard.slug"),
      description: t("cards.weeCard.shortDescription"),
      image: "weecard.png",
      sections: {
        howItWorks: {
          title: t("cards.weeCard.sections.howItWorks.title"),
          content: t("cards.weeCard.sections.howItWorks.content"),
        },
        whyUse: {
          title: t("cards.weeCard.sections.whyUse.title"),
          content: t("cards.weeCard.sections.whyUse.content"),
        },
        contribution: {
          title: t("cards.weeCard.sections.contribution.title"),
          content: t("cards.weeCard.sections.contribution.content"),
        },
      },
      detailedText: t("cards.weeCard.detailedText"),
      date: t("cards.weeCard.date"),
    },
    {
      title: t("cards.weeSale.shortTitle"),
      slug: t("cards.weeSale.slug"),
      description: t("cards.weeSale.shortDescription"),
      image: "weesale.png",
      sections: {
        howItWorks: {
          title: t("cards.weeSale.sections.howItWorks.title"),
          content: t("cards.weeSale.sections.howItWorks.content"),
        },
        whyUse: {
          title: t("cards.weeSale.sections.whyUse.title"),
          content: t("cards.weeSale.sections.whyUse.content"),
        },
        contribution: {
          title: t("cards.weeSale.sections.contribution.title"),
          content: t("cards.weeSale.sections.contribution.content"),
        },
      },
      detailedText: t("cards.weeSale.detailedText"),
      date: t("cards.weeSale.date"),
    },
    {
      title: t("cards.weekobi.shortTitle"),
      slug: t("cards.weekobi.slug"),
      description: t("cards.weekobi.shortDescription"),
      image: "weekobi.png",
      sections: {
        howItWorks: {
          title: t("cards.weekobi.sections.howItWorks.title"),
          content: t("cards.weekobi.sections.howItWorks.content"),
        },
        whyUse: {
          title: t("cards.weekobi.sections.whyUse.title"),
          content: t("cards.weekobi.sections.whyUse.content"),
        },
        contribution: {
          title: t("cards.weekobi.sections.contribution.title"),
          content: t("cards.weekobi.sections.contribution.content"),
        },
      },
      detailedText: t("cards.weekobi.detailedText"),
      date: t("cards.weekobi.date"),
    },
  ];

  const card = cards.filter((item) => item.slug === slug);

  return <SlugPage card={card[0]} />;
}
