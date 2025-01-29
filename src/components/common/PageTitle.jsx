import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PageTitle({ title, subtitle }) {
  const t = useTranslations("AboutPage");
  return (
    <section className="fluid gridContainer relative mt-32 h-auto py-4 shadow-sm md:mt-20 md:h-[300px]">
      <div className="fluid absolute inset-0 -z-20 bg-page-title-bg-light bg-cover bg-center bg-no-repeat dark:bg-page-title-bg-dark"></div>
      {/* <div className="to-light-f88540/20 fluid absolute inset-0 -z-20 bg-gradient-to-br from-light-gradient-f7cf68/20 dark:from-dark-0d0d0d dark:to-light-833E15/30"></div> */}
      {/* <div className="fluid absolute inset-0 -z-20 bg-black/5" /> */}
      <div className="relative mx-auto flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="bg-gradient-to-t from-light-833E15 to-dark-808080 bg-clip-text font-dmSans text-5xl font-bold text-transparent xl:text-7xl 2xl:text-8xl">
          {title}
        </h1>
        <p className="max-w-2xl text-dark-0d0d0d dark:text-light-EAEEFE">{subtitle}</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
}
