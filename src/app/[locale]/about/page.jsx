import AboutMain from "@/components/about/AboutMain";
import PageTitle from "@/components/common/PageTitle";
import { useTranslations } from "next-intl";
import React from "react";

export default function About() {
  const t = useTranslations("AboutPage");
  return (
    <>
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
      <AboutMain />
    </>
  );
}
