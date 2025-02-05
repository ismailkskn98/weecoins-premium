import PageTitle from "@/components/common/PageTitle";
import ContactMain from "@/components/contact";
import { useTranslations } from "next-intl";
import React from "react";
import { customMetaData } from "@/components/MetaData";

export const metadata = { ...customMetaData, title: "Weecoins Premium | Contact" };

export default function Contact() {
  const t = useTranslations("ContactPage");
  return (
    <>
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
      <ContactMain />
    </>
  );
}
