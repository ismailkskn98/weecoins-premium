import PageTitle from "@/components/common/PageTitle";
import GalleryMain from "@/components/gallery";
import VideoCarouselContainer from "@/components/gallery/VideoCarouselContainer";
import React from "react";

export default async function NewsFromUs() {
  let data = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/youtube`);
    if (!response.ok) {
      throw new Error("Veri çekme işlemi başarısız oldu.");
    }
    data = await response.json();
  } catch (error) {
    console.error("Hata:", error);
  }
  return (
    <>
      <PageTitle title={"Bizden Haberler"} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptas?"} />
      <GalleryMain>
        <VideoCarouselContainer data={data.videos} />
      </GalleryMain>
    </>
  );
}
