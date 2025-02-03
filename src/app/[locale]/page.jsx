import AccessToKnowledge from "@/components/home/accessToKnowledge";
import ChartAndTableMain from "@/components/home/chartAndTable/ChartAndTableMain";
import Hero from "@/components/home/hero";
import LogoCarousel from "@/components/home/logoCarousel";
import OurVision from "@/components/home/ourVision";
import SuccessStories from "@/components/home/successStories";
import VideoContainer from "@/components/home/videoContainer";

const getSuccessStories = async () => {
  // console.log(process.env.NEXT_PUBLIC_BASE_URL);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/success-stories`);
    console.log("Response Status:", response.status);
    console.log("Response Content-Type:", response.headers.get("content-type"));

    const text = await response.text();
    console.log("Response Body:", text);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const data = await getSuccessStories();
  // console.log(data);
  return (
    <>
      <Hero />
      <LogoCarousel />
      <VideoContainer />
      <AccessToKnowledge />
      <ChartAndTableMain />
      <SuccessStories data={data} />
      <OurVision />
    </>
  );
}
