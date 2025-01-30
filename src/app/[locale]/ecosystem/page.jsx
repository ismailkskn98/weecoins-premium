import PageTitle from "@/components/common/PageTitle";
import EcosystemMain from "@/components/ecosystem";
import { useTranslations } from "next-intl";
import React from "react";

export default function Ecosystem() {
  const t = useTranslations("EcosystemPage");
  return (
    <>
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
      <EcosystemMain />
    </>
  );
}
