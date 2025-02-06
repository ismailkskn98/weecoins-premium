import PageTitle from "@/components/common/PageTitle";
import OurProjectsMain from "@/components/ourProjects";
import { useTranslations } from "next-intl";
import React from "react";
import { generateMetadata as layoutMetadata } from "../layout";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations({ locale: params.locale });
  const defaultMetaData = await layoutMetadata({ params });

  return {
    ...defaultMetaData,
    title: `${t("Metadata.title")} | ${t("Header.navbar.ourProjects")}`,
  };
}

export default function OurProjects() {
  const t = useTranslations("OurProjectsPage");
  return (
    <>
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
      <OurProjectsMain />
    </>
  );
}
