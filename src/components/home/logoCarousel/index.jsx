"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function LogoCarousel() {
  const items = [
    { href: "https://www.criptoswaps.com/trading/wcpusdt", image: "/images/carousel-images/criptoswaps.webp", title: "Criptoswaps" },
    {
      href: "https://coinpaprika.com/tr/coin/wcp-weecoins-premium/",
      image: "/images/carousel-images/Coinpaprika.webp",
      title: "Coinpaprika",
    },
    { href: "https://coinmarketcap.com/currencies/weecoins", image: "/images/carousel-images/CoinMarketCap.webp", title: "CoinMarketCap" },
    { href: "https://coincost.net/en/currency/weecoins-premium", image: "/images/carousel-images/coincostlogo.webp", title: "CoinCost" },
    { href: "https://azbit.com/exchange/WCP_USDT", image: "/images/carousel-images/Azbit-AZ.webp", title: "Azbit" },
    { href: "https://www.coinbase.com/price/weecoins-premium", image: "/images/carousel-images/Coinbase-New.webp", title: "Coinbase" },
    { href: "https://www.coingecko.com/tr/coins/weecoins-premium", image: "/images/carousel-images/coingecko-1.webp", title: "CoinGecko" },
  ];

  return (
    <section className="fluid gridContainer relative mt-1 flex h-36 w-full items-center overflow-hidden sm:mt-4">
      <div className="fluid absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-l from-light-EAEEFE/70 to-light-EAEEFE/80 dark:from-dark-0d0d0d/30 dark:to-dark-0d0d0d/60 sm:w-36 md:w-52 lg:w-64"></div>
      <div className="fluid absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-r from-light-EAEEFE/70 to-light-EAEEFE/80 dark:from-dark-0d0d0d/30 dark:to-dark-0d0d0d/60 sm:w-36 md:w-52 lg:w-64"></div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          300: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <Link href={item.href} target="_blank" className="flex cursor-pointer items-center">
              <Image
                src={item.image}
                className="h-14 object-cover brightness-50 grayscale hover:brightness-75 hover:grayscale-0 dark:brightness-[1] sm:h-20 md:h-[110px]"
                width={128}
                height={128}
                quality={100}
                alt={item.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
