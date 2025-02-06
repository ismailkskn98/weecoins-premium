import React from "react";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";

export default function ContactContent() {
  const t = useTranslations("ContactPage");
  return (
    <article className="flex h-full w-full flex-1 flex-col items-start gap-y-6 md:w-10/12 lg:w-full lg:p-6 xl:p-10">
      <div className="flex w-full flex-col items-start gap-2">
        <h3 className="text-xl font-semibold md:text-2xl">{t("form.title")}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 md:text-base">{t("form.subtitle")}</p>
      </div>
      <ContactForm />
    </article>
  );
}
