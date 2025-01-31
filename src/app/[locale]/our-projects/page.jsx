import PageTitle from "@/components/common/PageTitle";
import OurProjectsMain from "@/components/ourProjects";
import { useTranslations } from "next-intl";
import React from "react";

export default function OurProjects() {
  const t = useTranslations("OurProjectsPage");
  return (
    <>
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
      <OurProjectsMain />
    </>
  );
}
