import AboutMain from "@/components/about";
import PageTitle from "@/components/common/PageTitle";
import { useTranslations } from "next-intl";
import React from "react";
import { customMetaData } from "@/components/MetaData";

export const metadata = { ...customMetaData, title: "Weecoins Premium | About" };

export default function About() {
  const t = useTranslations("AboutPage");
  return (
    <>
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
      <AboutMain />
    </>
  );
}
