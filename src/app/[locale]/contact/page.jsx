import PageTitle from "@/components/common/PageTitle";
import ContactMain from "@/components/contact";
import { useTranslations } from "next-intl";
import React from "react";

export default function Contact() {
  const t = useTranslations("ContactPage");
  return (
    <>
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
      <ContactMain />
    </>
  );
}
