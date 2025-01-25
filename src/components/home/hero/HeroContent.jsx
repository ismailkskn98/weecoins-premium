import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroContent() {
  return (
    <article className="flex flex-col items-start gap-6">
      <div className="relative">
        <Image
          src="/images/weecoins-text-bg.svg"
          width={150}
          height={90}
          alt="WeeCoins Premium logo"
          className="absolute -left-44 -top-10 -z-10 h-full w-full -rotate-180 object-cover"
        />
        <h2 className="realtive from-light-833E15 flex flex-col items-start bg-gradient-to-t to-black bg-clip-text font-dmSans text-[90px] font-bold text-transparent">
          WeeCoins<span className="-mt-9">Premium</span>
        </h2>
      </div>

      <p className="-mt-4 w-full max-w-[457px] font-inter text-[22px] text-light-010D3E">
        Projelerimize katılın ve prestijli bir yaşam sürün. Beklentilerinize uygun yatırım fırsatları WeeCoins Premium ile sizleri bekliyor.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href={"/contact"}
          className="text-light-833E15 relative z-10 overflow-hidden rounded-10 bg-gradient-to-tr from-[#F8944A] to-[#F6D171] px-15px py-10px text-base font-medium before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:h-full before:w-10/12 before:origin-bottom-left before:scale-50 before:rounded-10 before:bg-[#F8944A] before:opacity-50 before:transition-all before:duration-200 before:content-[''] hover:before:w-full hover:before:origin-bottom-left hover:before:scale-100 hover:before:opacity-100"
        >
          Bize Ulaşın
        </Link>
        <Link
          href={"/about"}
          className="group flex items-center gap-1 font-inter font-medium text-black transition-all duration-150 hover:underline hover:underline-offset-4"
        >
          Detaylı bilgi <FaArrowRight className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
