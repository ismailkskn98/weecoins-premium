import PageTitle from "@/components/common/PageTitle";
import RoadMapMain from "@/components/roadmap";
import { useTranslations } from "next-intl";
import React from "react";

export default function RoadMap() {
  const t = useTranslations("RoadMapPage");
  return (
    <>
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
      <RoadMapMain />
    </>
  );
}
