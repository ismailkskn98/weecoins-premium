import PageTitle from "@/components/common/PageTitle";
import OurProjectsMain from "@/components/ourProjects";
import { useTranslations } from "next-intl";
import React from "react";
import { customMetaData } from "@/components/MetaData";

export const metadata = { ...customMetaData, title: "Weecoins Premium | Our Projects" };

export default function OurProjects() {
  const t = useTranslations("OurProjectsPage");
  return (
    <>
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
      <OurProjectsMain />
    </>
  );
}
