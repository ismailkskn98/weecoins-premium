import AccessToKnowledge from "@/components/home/accessToKnowledge";
import ChartAndTableMain from "@/components/home/chartAndTable/ChartAndTableMain";
import Hero from "@/components/home/hero";
import LogoCarousel from "@/components/home/logoCarousel";
import OurVision from "@/components/home/ourVision";
import SuccessStories from "@/components/home/successStories";
import VideoContainer from "@/components/home/videoContainer";
import { data as jsonData } from "@/components/home/successStories/data";
import { customMetaData } from "@/components/MetaData";

export const metadata = { ...customMetaData, title: "Weecoins Premium | Home" };

const getSuccessStories = async () => {
  try {
    const response = await fetch(`https://backoffice.weecoins.org/getWcpStories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Form verisi göndereceğimizi belirtiyoruz
      },
      body: new URLSearchParams({
        whoiam: "Wee.Coins!Premium2030",
      }).toString(),
    });
    if (!response.ok) {
      throw new Error(`API Hatası: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const data = await getSuccessStories();

  return (
    <>
      <Hero />
      <LogoCarousel />
      <VideoContainer />
      <AccessToKnowledge />
      <ChartAndTableMain />
      <SuccessStories data={data && data.length > 0 ? data : jsonData} />
      <OurVision />
    </>
  );
}
