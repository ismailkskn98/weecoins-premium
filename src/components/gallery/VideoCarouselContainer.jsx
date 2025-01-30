"use client";
import React, { useState } from "react";
import VideoCarousel from "./VideoCarousel";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoCarouselContainer({ data }) {
  const [currentVideo, setCurrentVideo] = useState({
    videoUrl: `https://youtu.be/${data[0].id.videoId}`,
    title: data[0].snippet.title,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);
  const backVideoRef = React.useRef(null);

  const activeVideo = (videoId, title) => {
    videoPause();
    setCurrentVideo({
      videoUrl: `https://youtu.be/${videoId}`,
      title,
    });
    setIsPlaying(true);
  };

  const videoPause = () => {
    setIsPlaying(false);
  };

  return (
    <article className="flex w-full flex-col items-center gap-16 bg-transparent">
      <div className="fluid absolute inset-0 -z-20 hidden opacity-70 sm:block">
        <ReactPlayer ref={backVideoRef} url={currentVideo.videoUrl} width="100%" height="100%" playing={isPlaying} muted config={{}} />
      </div>
      <div className="absolute inset-0 -z-10 hidden backdrop-blur-[110px] sm:block"></div>
      <div className="relative flex flex-col items-center gap-4 text-white">
        <div className="bg-backdrop-blur-lg absolute inset-0 -z-10 hidden sm:block"></div>
        <h2 className="font-dmSans text-4xl font-bold lg:text-5xl">{currentVideo.title}</h2>
      </div>
      <div className="mx-auto h-[400px] w-full overflow-hidden rounded-2xl sm:w-11/12 lg:h-[500px] lg:w-10/12 xl:w-8/12">
        <ReactPlayer
          ref={videoRef}
          url={currentVideo.videoUrl}
          controls
          width="100%"
          height="100%"
          playing={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onStart={() => setIsPlaying(true)}
          onPause={videoPause}
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
        <VideoCarousel activeVideo={activeVideo} items={data} />
      </div>
    </article>
  );
}
