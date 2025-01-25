import AccessToKnowledge from "@/components/home/accessToKnowledge";
import Hero from "@/components/home/hero";
import LogoCarousel from "@/components/home/logoCarousel";
import OurVision from "@/components/home/ourVision";
import SuccessStories from "@/components/home/successStories";
import VideoContainer from "@/components/home/videoContainer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <VideoContainer />
      <AccessToKnowledge />
      <SuccessStories />
      <OurVision />
    </>
  );
}
