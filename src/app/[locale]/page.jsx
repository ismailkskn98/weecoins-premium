import AccessToKnowledge from "@/components/home/accessToKnowledge";
import Hero from "@/components/home/hero";
import LogoCarousel from "@/components/home/logoCarousel";
import OurVision from "@/components/home/ourVision";
import SuccessStories from "@/components/home/successStories";
import VideoContainer from "@/components/home/videoContainer";

const getSuccessStories = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/success-stories`);
    // console.log(response);
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
      <SuccessStories data={data} />
      <OurVision />
    </>
  );
}
