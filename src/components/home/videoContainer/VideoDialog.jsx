import React from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { useLocale } from "next-intl";

// https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=HmVeS2LDHIlObKmB

export default function VideoDialog() {
  const locale = useLocale();

  const videoLanguage = () => {
    switch (locale) {
      case "tr":
        return "https://www.youtube-nocookie.com/embed/HMaECBWoMYQ?si=Ga7WOii-P__dLmQL";
      case "en":
        return "https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=HmVeS2LDHIlObKmB";
      case "ru":
        return "https://www.youtube-nocookie.com/embed/B4fLCwE30sI?si=mYjcbseQHunxHXO1";
      case "az":
        return "https://www.youtube-nocookie.com/embed/HnYK8dgSsO4?si=BJp22ddd_E6U6FdV";
      default:
        return "https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=HmVeS2LDHIlObKmB";
    }
  };

  return (
    <article className="w-full">
      <div className="relative">
        <HeroVideoDialog
          className="block drop-shadow-sm dark:hidden"
          animationStyle="top-in-bottom-out"
          videoSrc={videoLanguage()}
          thumbnailSrc="/images/home-videoContainer-light.webp"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden drop-shadow-sm dark:block"
          animationStyle="top-in-bottom-out"
          videoSrc={videoLanguage()}
          thumbnailSrc="/images/home-videoContainer-dark.webp"
          thumbnailAlt="Hero Video"
        />
      </div>
    </article>
  );
}
