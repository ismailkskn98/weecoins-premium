"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Visual() {
  const heroImagesContainer = useRef(null);

  useGSAP(
    () => {
      gsap.to(".hero-logo-image", {
        // rotate: 360,
        // y: 150,
        scale: 0.5,
        duration: 1,
        ease: "sine",
        stagger: {
          each: 0.2, // her biri arasındaki zaman farkı
          repeat: -1,
          yoyo: true,
          from: "random",
          // from: "center",
        },
      });
    },
    { scope: heroImagesContainer.current },
  );

  return (
    <article ref={heroImagesContainer} className="relative flex w-full items-center justify-center px-6 lg:px-0 xl:w-auto 2xl:justify-end">
      <Image
        src="/images/weecoins-material-top.png"
        alt="weecoins material"
        width={216}
        height={197}
        className="hero-logo-image top-image absolute -left-28 -top-20 -z-10 hidden max-h-[194px] max-w-[216px] drop-shadow-2xl lg:inline xl:-left-48 xl:z-10 2xl:-left-56"
      />
      <Image
        src="/images/logo-xl.png"
        alt="weecoins premium logo"
        width={500}
        height={500}
        className="hero-logo-image center-image relative z-10 flex max-w-full justify-end object-cover drop-shadow-2xl sm:max-h-[410px] sm:max-w-[410px] xl:max-h-[450px] xl:max-w-[450px] 2xl:max-h-[500px] 2xl:max-w-[500px]"
      />
      <Image
        src="/images/weecoins-material-bottom.png"
        alt="weecoins material"
        width={231}
        height={231}
        className="hero-logo-image bottom-image absolute -bottom-52 right-0 z-20 hidden max-h-[200px] max-w-[200px] drop-shadow-2xl lg:inline xl:-bottom-[12.5rem] xl:-right-20 2xl:-bottom-52 2xl:-right-36 2xl:max-h-[231px] 2xl:max-w-[231px]"
      />
    </article>
  );
}
