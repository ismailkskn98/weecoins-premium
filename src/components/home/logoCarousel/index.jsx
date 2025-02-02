"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function LogoCarousel() {
  const items = [
    { path: "https://www.criptoswaps.com/trading/wcsusdt", image: "/images/carousel-images/criptoswaps.png", title: "Criptoswaps" },
    { path: "https://coinpaprika.com/tr/coin/wcs-weecoins", image: "/images/carousel-images/Coinpaprika.png", title: "Coinpaprika" },
    { path: "https://coinmarketcap.com/currencies/weecoins", image: "/images/carousel-images/CoinMarketCap.png", title: "CoinMarketCap" },
    { path: "https://coincost.net/en/currency/weecoins", image: "/images/carousel-images/coincostlogo.png", title: "CoinCost" },
    { path: "https://azbit.com/exchange/WCS_USDT", image: "/images/carousel-images/Azbit-AZ.png", title: "Azbit" },
    { path: "https://www.coinbase.com/tr/price/weecoins", image: "/images/carousel-images/Coinbase-New.png", title: "Coinbase" },
  ];
  return (
    <section className="fluid gridContainer relative mt-1 flex h-36 w-full items-center overflow-hidden sm:mt-4">
      <div className="fluid absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-l from-light-EAEEFE/70 to-light-EAEEFE/80 dark:from-dark-0d0d0d/30 dark:to-dark-0d0d0d/60 sm:w-36 md:w-52 lg:w-64"></div>
      <div className="fluid absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-r from-light-EAEEFE/70 to-light-EAEEFE/80 dark:from-dark-0d0d0d/30 dark:to-dark-0d0d0d/60 sm:w-36 md:w-52 lg:w-64"></div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnHover: true,
            playOnInit: true,
            loop: true,
            stopOnLastSnap: false,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="fluid relative w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="flex basis-1/5 items-center">
              <div className="flex items-center text-gray-600 hover:text-gray-900">
                <Image
                  src={item.image}
                  className="object-cover brightness-50 grayscale hover:brightness-75 hover:grayscale-0 dark:brightness-[1]"
                  width={128}
                  height={128}
                  alt={item.title}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
