import React from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { useLocale } from "next-intl";

export default function VideoDialog() {
  const locale = useLocale();

  const videoLanguage = () => {
    switch (locale) {
      case "tr":
        return "https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=I2So6po5f4ewQ5M1";
      case "en":
        return "https://www.youtube-nocookie.com/embed/B4fLCwE30sI?si=8a6SitdomOscAP1G";
      case "ru":
        return "https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=I2So6po5f4ewQ5M1";
      case "az":
        return "https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=I2So6po5f4ewQ5M1";
      default:
        return "https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=I2So6po5f4ewQ5M1";
    }
  };

  return (
    <article className="w-full">
      <div className="relative">
        <HeroVideoDialog
          className="block drop-shadow-sm dark:hidden"
          animationStyle="top-in-bottom-out"
          videoSrc={videoLanguage()}
          thumbnailSrc="/images/home-videoContainer-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden drop-shadow-sm dark:block"
          animationStyle="top-in-bottom-out"
          videoSrc={videoLanguage()}
          thumbnailSrc="/images/home-videoContainer-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </article>
  );
}
