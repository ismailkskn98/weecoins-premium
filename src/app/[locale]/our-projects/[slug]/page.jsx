import SlugPage from "@/components/ourProjects/SlugPage";
import React from "react";

import { generateMetadata as layoutMetadata } from "../../layout";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations({ locale: params.locale });
  const defaultMetaData = await layoutMetadata({ params });

  return {
    ...defaultMetaData,
    title: `${t("Metadata.title")} | ${t("Header.navbar.ourProjects")}`,
  };
}

export default async function page({ params }) {
  const slug = (await params).slug;
  const t = await getTranslations("OurProjectsPage");
  const cards = [
    {
      title: t("cards.weeZard.shortTitle"),
      slug: t("cards.weeZard.slug"),
      description: t("cards.weeZard.shortDescription"),
      image: "weezard",
      href: "https://weezard.org",
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
      image: "weecard",
      href: "https://weecard.org",
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
      image: "weesale",
      href: "https://weesale.shop",
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
      image: "weekobi",
      href: "https://weecomi.com/",
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
