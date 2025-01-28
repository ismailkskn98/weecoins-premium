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

export default function PageTitle({ title, subtitle }) {
  return (
    <section className="fluid gridContainer relative mt-32 h-auto py-4 md:mt-20 md:h-[300px]">
      <div className="fluid absolute inset-0 -z-10 bg-about-bg-light bg-cover bg-center bg-no-repeat dark:bg-about-bg-dark"></div>
      {/* <div className="to-light-f88540/20 fluid absolute inset-0 -z-20 bg-gradient-to-br from-light-gradient-f7cf68/20 dark:from-dark-0d0d0d dark:to-light-833E15/30"></div> */}
      {/* <div className="fluid absolute inset-0 bg-black/50" /> */}
      <div className="relative mx-auto flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="bg-gradient-to-t from-light-833E15 to-dark-808080 bg-clip-text font-dmSans text-5xl font-bold text-transparent xl:text-7xl 2xl:text-8xl">
          {title}
        </h1>
        <p className="max-w-2xl text-dark-0d0d0d dark:text-light-EAEEFE">{subtitle}</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
