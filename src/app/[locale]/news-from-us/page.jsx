import PageTitle from "@/components/common/PageTitle";
import NewsFromUsMain from "@/components/newsFromUs";
import VideoCarouselContainer from "@/components/newsFromUs/VideoCarouselContainer";
import React from "react";

const getYoutubeVideos = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/youtube`);

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

  return (
    <>
      <PageTitle title={"Bizden Haberler"} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptas?"} />
      <NewsFromUsMain>
        <VideoCarouselContainer data={data.videos} />
      </NewsFromUsMain>
    </>
  );
}
