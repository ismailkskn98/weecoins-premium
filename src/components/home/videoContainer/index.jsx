import React from "react";
import VideoDialog from "./VideoDialog";
import VideoCards from "./VideoCards";
import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import { useTranslations } from "next-intl";

export default function VideoContainer() {
  const t = useTranslations("HomePage");
  return (
    <section className="fluid gridContainer relative mt-28 flex flex-col items-center justify-center gap-10 overflow-x-hidden pb-24">
      <SectionTitle title={t("videoContainer.title")} description={t("videoContainer.description")} />
      <VideoDialog />
      <VideoCards />
      <div className="fluid absolute inset-0 -z-10 bg-gradient-to-t from-light-gradient-f7cf68 to-light-EAEEFE dark:from-light-833E15 dark:to-dark-0d0d0d"></div>
      <div className="fluid absolute -right-16 top-1/4 z-10">
        <Image
          src="/images/weecoins-material-bottom.png"
          alt="weecoins material"
          width={240}
          height={240}
          className="max-h-[240px] max-w-[240px] object-cover drop-shadow-xl"
        />
      </div>
      <div className="fluid absolute -left-16 bottom-1/3 z-10">
        <Image
          src="/images/logo-xl.png"
          alt="weecoins material"
          width={240}
          height={240}
          className="max-h-[240px] max-w-[240px] object-cover drop-shadow-xl"
        />
      </div>
    </section>
  );
}
