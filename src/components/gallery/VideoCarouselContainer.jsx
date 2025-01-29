"use client";
import React, { useState } from "react";
import VideoCarousel from "./VideoCarousel";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoCarouselContainer() {
  const [currentVideo, setCurrentVideo] = useState(1);
  const [isPlaying, setIsPaying] = useState(false);
  const videoRef = React.useRef(null);
  const backVideoRef = React.useRef(null);

  const activeVideo = (videoId) => {
    console.log(videoId);
    setCurrentVideo(videoId);
  };

  return (
    <article className="flex w-full flex-col items-center gap-16">
      <div className="absolute inset-0 -z-20 hidden sm:block">
        <ReactPlayer
          ref={backVideoRef}
          url={"https://youtu.be/QiGK2NL6i0I&"}
          controls
          width="100%"
          height="100%"
          playing={isPlaying}
          muted
        />
      </div>
      <div className="absolute inset-0 -z-10 hidden backdrop-blur-[110px] sm:block"></div>
      <div className="relative flex flex-col items-center gap-4 text-white">
        <div className="bg-backdrop-blur-lg absolute inset-0 -z-10 hidden sm:block"></div>
        <h2 className="font-dmSans text-5xl font-bold lg:text-6xl">Video Başlık</h2>
        <p className="text-center text-zinc-100 md:text-start md:text-zinc-300">
          Video Açıklaması Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, nisi.
        </p>
      </div>
      <div className="w-ful mx-auto h-[400px] w-full overflow-hidden rounded-2xl md:w-11/12 lg:h-[500px] lg:w-10/12 xl:w-9/12 2xl:w-8/12">
        <ReactPlayer
          ref={videoRef}
          url={"https://youtu.be/QiGK2NL6i0I"}
          controls
          width="100%"
          height="100%"
          onPlay={() => setIsPaying(true)}
          onPause={() => setIsPaying(false)}
          volume={0.4}
          progressInterval={100}
          onProgress={() => {
            // getCurrentTime()	Videonun şu anki süresini alır.
            // seekTo(seconds)	Videoyu belirli bir saniyeye sarar.
            backVideoRef.current.seekTo(videoRef.current.getCurrentTime());
          }}
        />
      </div>
      <div className="w-full">
        <VideoCarousel activeVideo={activeVideo} />
      </div>
    </article>
  );
}
