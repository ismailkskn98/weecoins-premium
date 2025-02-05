import PageTitle from "@/components/common/PageTitle";
import NewsFromUsMain from "@/components/newsFromUs";
import VideoCarouselContainer from "@/components/newsFromUs/VideoCarouselContainer";
import { getTranslations } from "next-intl/server";
import React from "react";
// import { XMLParser } from "fast-xml-parser";
import { customMetaData } from "@/components/MetaData";
// import * as cheerio from "cheerio";

export const metadata = { ...customMetaData, title: "Weecoins Premium | News From Us" };

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

// const parseYouTubeDuration = (duration) => {
//   const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

//   if (!match) return 0; // Geçersiz format

//   const hours = parseInt(match[1] || "0", 10);
//   const minutes = parseInt(match[2] || "0", 10);
//   const seconds = parseInt(match[3] || "0", 10);

//   return (hours * 3600 + minutes * 60 + seconds) * 1000; // Milisaniyeye çevir
// };

// const getYoutubeVideos = async () => {
//   try {
//     const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=UCMdhtrNApntO9QsobuoB6TA`);
//     // console.log("response: ", response);
//     if (!response.ok) {
//       throw new Error("Veri çekme işlemi başarısız oldu.");
//     }
//     const xmlText = await response.text();

//     // XML'i JSON'a çevirme
//     const parser = new XMLParser();
//     const jsonData = parser.parse(xmlText);

//     // console.log(jsonData.feed.entry);
//     const filteredData = await jsonData.feed.entry.map(async (item) => {
//       // console.log(`https://www.youtube.com/watch?v=${item["yt:videoId"]}`);
//       const response = await fetch(`https://www.youtube.com/watch?v=${item["yt:videoId"]}`);

//       if (!response.ok) {
//         throw new Error("YouTube videosu çekilemedi.");
//       }

//       const html = await response.text();
//       const $ = cheerio.load(html);

//       // <meta itemprop="duration" content="PT0M36S">
//       const duration = $('meta[itemprop="duration"]').attr("content");

//       if (parseYouTubeDuration(duration) > 1000 * 60 * 4) {
//         return item;
//       }
//     });
//   } catch (error) {
//     console.error("Hata:", error);
//   }
// };

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
