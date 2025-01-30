import React from "react";

/*
    {
      title: t("cards.weeZard.shortTitle"),
      slug: t("cards.weeZard.slug"),
      description: t("cards.weeZard.shortDescription"),
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
*/

export default function SlugPage({ card }) {
  return (
    <section className="text-black">
      <p>{card.title}</p>
      <p>{card.slug}</p>
      <p>{card.description}</p>
      <p>{card.sections.howItWorks.title}</p>
      <p>{card.sections.howItWorks.content}</p>
      <p>{card.sections.whyUse.title}</p>
      <p>{card.sections.whyUse.content}</p>
      <p>{card.sections.contribution.title}</p>
      <p>{card.sections.contribution.content}</p>
      <p>{card.detailedText}</p>
    </section>
  );
}
