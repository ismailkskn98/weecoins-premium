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

export default function VideoCarousel({ activeVideo, currentVideo, items }) {
  const [slidesPerView, setSlidesPerView] = useState(2);

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
      {items.map((item) => {
        // console.log(item);
        return (
          <SwiperSlide
            key={item.id.videoId}
            onClick={() => activeVideo(item.id.videoId, item.snippet.title)}
            className="cursor-pointer overflow-hidden rounded-xl"
          >
            <Image
              src={item.snippet.thumbnails.high.url}
              alt={item.snippet.title}
              width={400}
              height={360}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
