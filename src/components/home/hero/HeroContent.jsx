"use client";
import LearnMore from "@/components/common/LearnMore";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./hero.css";

gsap.registerPlugin(useGSAP);

export default function HeroContent() {
  const t = useTranslations("HomePage");
  const HeroContentRef = useRef(null);

  useGSAP(() => {
    gsap.from(HeroContentRef.current, {
      opacity: 0,
      delay: 0.5,
      duration: 0.3,
    });
  }, []);

  return (
    <article
      ref={HeroContentRef}
      className="flex w-full flex-col items-center justify-center gap-6 lg:items-start xl:w-auto 2xl:justify-start"
    >
      <div className="relative">
        <Image
          src="/images/weecoins-text-bg.svg"
          width={150}
          height={90}
          alt="WeeCoins Premium logo"
          className="title-svg absolute -left-12 -top-5 -z-10 h-full w-full max-w-[200px] object-cover drop-shadow-md sm:-left-14 sm:max-w-[220px] md:-left-20 md:-top-11 md:max-w-[280px] lg:-left-24 lg:max-w-[360px] xl:-left-32 xl:max-w-[390px]"
        />
        <h2 className="realtive flex flex-col items-center bg-gradient-to-t from-light-833E15 to-dark-0d0d0d bg-clip-text font-dmSans text-[50px] font-bold text-transparent drop-shadow-sm dark:to-dark-808080 sm:text-[60px] md:text-[80px] lg:items-start 2xl:text-[100px]">
          WeeCoins<span className="-mt-9">Premium</span>
        </h2>
      </div>

      <p className="-mt-4 w-full max-w-[650px] text-center font-inter text-[14px] text-zinc-800 dark:text-zinc-200 sm:text-start sm:text-[16px] md:text-[22px]">
        {t("hero.description")}
      </p>
      <div className="flex items-center gap-4 xl:mt-2 xl:gap-6">
        <Link
          href={"/contact"}
          className="relative z-10 overflow-hidden rounded-sm bg-gradient-to-tr from-[#F8944A] to-[#F6D171] px-2 py-2 text-sm font-medium text-light-833E15 shadow-xl before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:h-full before:w-10/12 before:origin-bottom-left before:scale-50 before:rounded-md before:bg-[#F8944A] before:opacity-50 before:transition-all before:duration-200 before:content-[''] hover:before:w-full hover:before:origin-bottom-left hover:before:scale-100 hover:before:opacity-100 md:px-15px md:py-10px md:text-base xl:px-6 xl:py-3 xl:text-xl"
        >
          {t("hero.button")}
        </Link>
        <LearnMore href={"/about"} />
      </div>
    </article>
  );
}
