import AccessToKnowledge from "@/components/home/accessToKnowledge";
import ChartAndTableMain from "@/components/home/chartAndTable/ChartAndTableMain";
import Hero from "@/components/home/hero";
import LogoCarousel from "@/components/home/logoCarousel";
import OurVision from "@/components/home/ourVision";
import SuccessStories from "@/components/home/successStories";
import VideoContainer from "@/components/home/videoContainer";
import { data as jsonData } from "@/components/home/successStories/data";
import { generateMetadata as layoutMetadata } from "./layout";
import { getTranslations } from "next-intl/server";
import { cache } from "react";

export async function generateMetadata({ params }) {
  const t = await getTranslations({ locale: params.locale });
  const defaultMetaData = await layoutMetadata({ params });

  return {
    ...defaultMetaData,
    title: `${t("Metadata.title")} | ${t("Header.navbar.home")}`,
  };
}

const getSuccessStories = async () => {
  try {
    const response = await fetch(
      `https://backoffice.weecoins.org/getWcpStories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Form verisi göndereceğimizi belirtiyoruz
        },
        body: new URLSearchParams({
          whoiam: "Wee.Coins!Premium2030",
        }).toString(),
      },
      {
        next: {
          cache: "force-cache",
          revalidate: 3600 * 24,
        },
      },
    );
    if (!response.ok) {
      throw new Error(`API Hatası: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const fetchedData = await getSuccessStories();
  const successStoriesData = fetchedData && fetchedData.length > 0 ? fetchedData : jsonData;

  return (
    <>
      <Hero />
      <LogoCarousel />
      <VideoContainer />
      <AccessToKnowledge />
      <ChartAndTableMain />
      <SuccessStories data={successStoriesData} />
      <OurVision />
    </>
  );
}
