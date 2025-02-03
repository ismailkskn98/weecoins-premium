"use client";
import React, { useState, useRef, useEffect } from "react";
import VideoCarousel from "./VideoCarousel";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoCarouselContainer({ data }) {
  const [currentVideo, setCurrentVideo] = useState(
    data
      ? {
          videoUrl: `https://youtu.be/${data[10].id.videoId}`,
          title: data[10].snippet.title,
        }
      : {
          videoUrl: `https://youtu.be/ezTGPkDZTcw`,
          title: "WEECOINS - Hayallerine Aralanan Kapı",
        },
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const backVideoRef = useRef(null);

  const activeVideo = (videoId, title) => {
    setIsPlaying(false);
    setCurrentVideo({
      videoUrl: `https://youtu.be/${videoId}`,
      title,
    });
    if (typeof window !== "undefined" && backVideoRef.current) {
      backVideoRef.current.seekTo(0);
      videoRef.current.seekTo(0);
    }
  };

  return (
    <article className="flex w-full flex-col items-center gap-12 bg-transparent sm:gap-16">
      <div className="fluid absolute inset-0 -z-20 hidden sm:block">
        <ReactPlayer ref={backVideoRef} url={currentVideo.videoUrl} width="100%" height="100%" playing={isPlaying} muted />
      </div>
      <div className="bg-backdrop-blur-lg absolute inset-0 -z-10 hidden sm:block"></div>
      <div className="absolute inset-0 -z-10 hidden backdrop-blur-[110px] sm:block"></div>
      <div className="relative flex flex-col items-center gap-4 text-white">
        <h2 className="text-center font-dmSans text-3xl font-semibold lg:text-4xl">{currentVideo.title}</h2>
      </div>
      <div className="mx-auto h-[420px] w-full overflow-hidden rounded-2xl sm:w-11/12 lg:h-[520px] lg:w-10/12 xl:w-8/12">
        <ReactPlayer
          ref={videoRef}
          style={{ borderRadius: "16px", overflow: "hidden" }}
          url={currentVideo.videoUrl}
          controls
          width="100%"
          height="100%"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          volume={0.4}
          progressInterval={800}
          onProgress={() => {
            console.log(videoRef.current.getCurrentTime());
            // getCurrentTime()	Videonun şu anki süresini alır.
            // seekTo(seconds)	Videoyu belirli bir saniyeye sarar.
            backVideoRef.current.seekTo(videoRef.current.getCurrentTime());
          }}
        />
      </div>

      <div className="w-full">
        <VideoCarousel activeVideo={activeVideo} items={data} />
      </div>
    </article>
  );
}
