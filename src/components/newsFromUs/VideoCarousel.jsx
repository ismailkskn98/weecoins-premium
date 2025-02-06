"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./carosuel.css";
import classNames from "classnames";
import Image from "next/image";
import htmlEncoderDecoder from "html-encoder-decoder";

export default function VideoCarousel({ activeVideo, currentVideo, items }) {
  const [slidesPerView, setSlidesPerView] = useState(2);
  let encoded = null;

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth > 1280) {
        setSlidesPerView(5);
      } else if (window.innerWidth > 900) {
        setSlidesPerView(4);
      } else if (window.innerWidth > 700) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <Swiper
      spaceBetween={slidesPerView === 2 ? 20 : 50}
      slidesPerView={slidesPerView}
      autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
      //   pagination={{ clickable: true }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      className={classNames("", {
        "h-[200px]": slidesPerView !== 2,
        "h-[150px]": slidesPerView === 2,
      })}
    >
      {items ? (
        items.map((item, index) => {
          // console.log(item);
          return (
            <SwiperSlide
              key={index}
              onClick={() => activeVideo(item.id.videoId, item.snippet.title, item.snippet.thumbnails.high.url)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-red-300"
            >
              <Image
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
                width={400}
                height={360}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 hidden origin-bottom scale-y-0 rounded-b-xl bg-black/70 px-3 py-5 text-center text-xs text-white transition-all duration-200 group-hover:scale-y-100 sm:block">
                {(encoded = htmlEncoderDecoder.decode(item.snippet.title))}
              </div>
              <div className="absolute inset-x-0 bottom-0 flex h-1/3 origin-bottom items-center justify-center rounded-b-xl bg-black/70 px-1 py-2 text-center text-xs text-white sm:hidden">
                {item.snippet.title.length > 40
                  ? item.snippet.title.substring(0, 40) + "..."
                  : (encoded = htmlEncoderDecoder.decode(item.snippet.title))}
              </div>
            </SwiperSlide>
          );
        })
      ) : (
        <>
          <SwiperSlide className="group relative cursor-pointer overflow-hidden rounded-xl">1</SwiperSlide>
          <SwiperSlide className="group relative cursor-pointer overflow-hidden rounded-xl">1</SwiperSlide>
          <SwiperSlide className="group relative cursor-pointer overflow-hidden rounded-xl">1</SwiperSlide>
          <SwiperSlide className="group relative cursor-pointer overflow-hidden rounded-xl">1</SwiperSlide>
        </>
      )}
    </Swiper>
  );
}
