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

export default function VideoCarousel({ activeVideo, currentVideo }) {
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
      onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      className={classNames("", {
        "h-[200px]": slidesPerView !== 2,
        "h-[150px]": slidesPerView === 2,
      })}
    >
      <SwiperSlide onClick={() => activeVideo(1)} className="cursor-pointer rounded-xl bg-red-300">
        Slide 1
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(2)} className="cursor-pointer rounded-xl bg-red-300">
        Slide 2
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(3)} className="cursor-pointer rounded-xl bg-red-300">
        Slide 3
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(4)} className="cursor-pointer rounded-xl bg-red-300">
        Slide 4
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(5)} className="cursor-pointer rounded-xl bg-red-300">
        Slide 5
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(6)} className="cursor-pointer rounded-xl bg-red-300">
        Slide 6
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(7)} className="cursor-pointer rounded-xl bg-red-300">
        Slide 7
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(8)} className="cursor-pointer rounded-xl bg-red-300">
        Slide 8
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(9)} className="cursor-pointer rounded-xl bg-red-300">
        Slide 9
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(10)} className="cursor-pointer rounded-xl bg-red-300">
        Slide 10
      </SwiperSlide>
    </Swiper>
  );
}
