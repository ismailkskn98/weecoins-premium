"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./carosuel.css";

export default function VideoCarousel({ activeVideo, currentVideo }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={typeof window !== "undefined" && window.innerWidth > 768 ? 5 : 1} // Ekran genişliği 768'den büyükse 3, küçükse 1 slayt göster
      autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      className="h-[200px]"
    >
      <SwiperSlide onClick={() => activeVideo(1)} className="rounded-xl bg-red-300">
        Slide 1
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(2)} className="rounded-xl bg-red-300">
        Slide 2
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(3)} className="rounded-xl bg-red-300">
        Slide 3
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(4)} className="rounded-xl bg-red-300">
        Slide 4
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(5)} className="rounded-xl bg-red-300">
        Slide 5
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(6)} className="rounded-xl bg-red-300">
        Slide 6
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(7)} className="rounded-xl bg-red-300">
        Slide 7
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(8)} className="rounded-xl bg-red-300">
        Slide 8
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(9)} className="rounded-xl bg-red-300">
        Slide 9
      </SwiperSlide>
      <SwiperSlide onClick={() => activeVideo(10)} className="rounded-xl bg-red-300">
        Slide 10
      </SwiperSlide>
    </Swiper>
  );
}
