import React from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function VideoDialog() {
  return (
    <article className="w-full">
      <div className="relative">
        <HeroVideoDialog
          className="block drop-shadow-sm dark:hidden"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=I2So6po5f4ewQ5M1"
          thumbnailSrc="/images/home-videoContainer-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden drop-shadow-sm dark:block"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=I2So6po5f4ewQ5M1"
          thumbnailSrc="/images/home-videoContainer-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </article>
  );
}
