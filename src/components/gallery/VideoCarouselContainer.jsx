"use client";
import React, { useState } from "react";
import VideoCarousel from "./VideoCarousel";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoCarouselContainer() {
  const [currentVideo, setCurrentVideo] = useState(1);

  const activeVideo = (videoId) => {
    console.log(videoId);
    setCurrentVideo(videoId);
  };

  return (
    <article className="flex w-full flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-dmSans text-6xl font-bold text-black">Video Başlık</h2>
        <p className="text-zinc-600">Video Açıklaması Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, nisi.</p>
      </div>
      <div className="mx-auto h-[500px] w-8/12 overflow-hidden rounded-2xl">
        <ReactPlayer url={"https://youtu.be/QiGK2NL6i0I"} controls width="100%" height="100%" />
      </div>
      <div className="w-full">
        <VideoCarousel activeVideo={activeVideo} />
      </div>
    </article>
  );
}
