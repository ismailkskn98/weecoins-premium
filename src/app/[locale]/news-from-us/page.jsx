import PageTitle from "@/components/common/PageTitle";
import NewsFromUsMain from "@/components/newsFromUs";
import VideoCarouselContainer from "@/components/newsFromUs/VideoCarouselContainer";
import { getTranslations } from "next-intl/server";
import React from "react";

const getYoutubeVideos = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/youtube`, {
      next: {
        revalidate: 3600 * 24,
      },
    });

    if (!response.ok) {
      throw new Error("Veri çekme işlemi başarısız oldu.");
    }
    return response.json();
  } catch (error) {
    console.error("Hata:", error);
  }
};

export default async function NewsFromUs() {
  const data = await getYoutubeVideos();
  const t = await getTranslations("NewsFromUs");
  return (
    <>
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
      <NewsFromUsMain isData={data.videos.length > 0 ? true : false}>
        {data.videos.length > 0 && <VideoCarouselContainer data={data.videos} />}
      </NewsFromUsMain>
    </>
  );
}
