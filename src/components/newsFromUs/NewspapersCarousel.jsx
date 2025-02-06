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
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NewspapersCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const t = useTranslations("NewsFromUs");

  const items = [
    {
      title: t("newspapers.weecoins.title"),
      subtitle: t("newspapers.weecoins.subtitle"),
      image: "newspaper-weecoins.webp",
      url: "https://www.hurriyet.com.tr/weecomi-weecoins-ile-cripto-para-sektorunde-ezberleri-bozdu-41615714",
    },
    {
      title: t("newspapers.cryptoCurrencyExpert.title"),
      subtitle: t("newspapers.cryptoCurrencyExpert.subtitle"),
      image: "kripto-odul.jpeg",
      url: "https://www.analizgazetesi.com.tr/haber/ozkan-cibir-yilin-en-iyi-kripto-para-uzmani-secildi-3618/",
    },
    {
      title: t("newspapers.shopping.title"),
      subtitle: t("newspapers.shopping.subtitle"),
      image: "shopping.webp",
      url: "https://www.haberler.com/guncel/weecoins-ile-alisveriste-yeni-donem-13656945-haberi/",
    },
    // {
    //   title: t("newspapers.wedding.title"),
    //   subtitle: t("newspapers.wedding.subtitle"),
    //   image: "damat.webp",
    //   url: "https://www.takvim.com.tr/yasam/2021/06/28/damadin-yakinindan-bin-kripto-yurttan-haberler",
    // },
    {
      title: t("newspapers.kripto.title"),
      subtitle: t("newspapers.kripto.subtitle"),
      image: "kripto-uzmani.webp",
      url: "https://www.sondakika.com/teknoloji/haber-ozkan-cibir-yilin-en-iyi-kripto-para-uzmani-16723229/ ",
    },
    {
      title: t("newspapers.expert.title"),
      subtitle: t("newspapers.expert.subtitle"),
      image: "expert-1.webp",
      url: "https://www.haberler.com/teknoloji/ozkan-cibir-yilin-en-iyi-kripto-para-uzmani-16723228-haberi",
    },
  ];

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth > 1280) {
        setSlidesPerView(4);
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
      autoplay={{ delay: 200000, pauseOnMouseEnter: true }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      className={classNames("w-full", {
        "h-[250px]": slidesPerView !== 2,
        "h-[150px]": slidesPerView === 2,
      })}
    >
      {items.map((item) => {
        return (
          <SwiperSlide
            key={item.title}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-solid border-gray-900 bg-black"
          >
            <Link href={item.url} target="_blank" className="group flex h-full w-full flex-col items-center justify-center gap-3 bg-black">
              <div className="h-full w-full overflow-hidden">
                <Image
                  src={`/images/${item.image}`}
                  alt={item.title}
                  width={400}
                  height={360}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              {/* <div style={{ background: "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)" }} className="absolute inset-0" /> */}
              <div className="absolute inset-x-0 -bottom-1 w-full bg-black/60 px-2 py-3 backdrop-blur-sm mobileL:px-3 sm:py-5 xl:px-5">
                <Image
                  src="/images/newspaper-card.svg"
                  alt="weecoins premium newspaper card image"
                  width={70}
                  height={70}
                  quality={40}
                  className="absolute inset-0 -top-6 h-6 w-full rotate-180"
                />
                <Image
                  src="/images/logo-xl-newspaper.webp"
                  alt="weecoins premium logo"
                  width={70}
                  height={70}
                  quality={40}
                  className="absolute -top-8 right-4 h-10 w-10 drop-shadow-[0_0_5px_#ffc107] transition-all duration-500 group-hover:rotate-[360deg] sm:-top-9 sm:right-5 sm:h-12 sm:w-12 lg:-top-10 xl:h-14 xl:w-14"
                />
                <h5 className="line-clamp-1 text-start text-xs font-semibold capitalize text-zinc-200 md:text-sm">
                  {item.title.length > 40
                    ? item.title.charAt(0).toUpperCase() + item.title.substring(1, 25).toLowerCase() + "..."
                    : item.title.charAt(0).toUpperCase() + item.title.substring(1).toLowerCase()}
                </h5>
                <div className="mb-1 mt-1 line-clamp-2 w-full text-start text-xs lowercase text-zinc-300 sm:mb-0">
                  {item.subtitle.length > 80
                    ? item.subtitle.charAt(0).toUpperCase() + item.subtitle.substring(1, 80).toLowerCase() + "..."
                    : item.subtitle.charAt(0).toUpperCase() + item.subtitle.substring(1).toLowerCase()}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
