import React from "react";
import VideoDialog from "./VideoDialog";
import VideoCards from "./VideoCards";
import SectionTitle from "@/components/common/SectionTitle";
import { useTranslations } from "next-intl";
import VideoContainerAnimate from "./VideoContainerAnimate";

export default function VideoContainer() {
  const t = useTranslations("HomePage");
  return (
    <section className="video-container fluid gridContainer relative mt-10 flex flex-col items-center justify-center gap-y-8 overflow-x-hidden pb-24 sm:mt-20 md:mt-24 lg:gap-10 xl:mt-28">
      <SectionTitle title={t("videoContainer.title")} description={t("videoContainer.description")} />
      <VideoDialog />
      <VideoCards />
      <div className="fluid absolute inset-0 -z-10 bg-gradient-to-t from-light-gradient-f7cf68 to-light-EAEEFE dark:from-light-833E15 dark:to-dark-0d0d0d"></div>
      <VideoContainerAnimate />
    </section>
  );
}
