"use client";
import LearnMore from "@/components/common/LearnMore";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HeroContent() {
  const t = useTranslations("HomePage");
  const HeroContentRef = useRef(null);
  const HeroContentImageRef = useRef(null);

  useGSAP(() => {
    gsap.from(HeroContentRef.current, {
      scale: 0,
      duration: 0.3,
    });
  }, []);
  useGSAP(() => {
    gsap.from(HeroContentImageRef.current, {
      opacity: 0,
      duration: 0.3,
    });
  }, []);

  return (
    <article
      ref={HeroContentRef}
      className="flex w-full flex-col items-start justify-center gap-6 lg:items-start xl:w-auto 2xl:justify-start"
    >
      <div className="relative">
        <Image
          ref={HeroContentImageRef}
          src="/images/weecoins-text-bg.svg"
          width={150}
          height={90}
          alt="WeeCoins Premium logo"
          className="absolute -left-24 -top-11 -z-10 h-full w-full max-w-[360px] -rotate-180 object-cover xl:-left-32 xl:max-w-[390px]"
        />
        <h2 className="realtive flex flex-col items-center bg-gradient-to-t from-light-833E15 to-dark-0d0d0d bg-clip-text font-dmSans text-[80px] font-bold text-transparent dark:to-dark-808080 lg:items-start 2xl:text-[100px]">
          WeeCoins<span className="-mt-9">Premium</span>
        </h2>
      </div>

      <p className="-mt-4 w-full max-w-[650px] font-inter text-[22px] text-zinc-800 dark:text-zinc-200">{t("hero.description")}</p>
      <div className="flex items-center gap-4 xl:mt-2 xl:gap-6">
        <Link
          href={"/contact"}
          className="relative z-10 overflow-hidden rounded-sm bg-gradient-to-tr from-[#F8944A] to-[#F6D171] px-15px py-10px text-base font-medium text-light-833E15 shadow-xl before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:h-full before:w-10/12 before:origin-bottom-left before:scale-50 before:rounded-md before:bg-[#F8944A] before:opacity-50 before:transition-all before:duration-200 before:content-[''] hover:before:w-full hover:before:origin-bottom-left hover:before:scale-100 hover:before:opacity-100 xl:px-6 xl:py-3 xl:text-xl"
        >
          {t("hero.button")}
        </Link>
        <LearnMore href={"/about"} />
      </div>
    </article>
  );
}
