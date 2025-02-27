"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Visual() {
  const heroImagesContainer = useRef(null);

  useGSAP(() => {
    gsap.from(".heroLogo", {
      opacity: 0,
      delay: 0.3,
      ease: "bouncepower1.out",
      stagger: 0.3,
    });
  }, {});

  return (
    <article ref={heroImagesContainer} className="relative flex w-full items-center justify-center px-6 lg:px-0 xl:w-auto 2xl:justify-end">
      <Image
        src="/images/weecoins-material-top.webp"
        alt="weecoins material"
        width={216}
        height={197}
        priority
        quality={40}
        className="heroLogo top-image absolute -left-28 -top-20 -z-10 hidden max-h-[194px] max-w-[216px] drop-shadow-2xl lg:inline xl:-left-48 xl:z-10 2xl:-left-56"
      />
      <Image
        src="/images/logo-xl.webp"
        alt="weecoins premium logo"
        width={500}
        height={500}
        priority
        quality={40}
        className="heroLogo center-image relative z-10 hidden max-w-[250px] justify-end object-cover drop-shadow-2xl sm:flex sm:max-h-[410px] sm:max-w-[410px] xl:max-h-[450px] xl:max-w-[450px] 2xl:max-h-[500px] 2xl:max-w-[500px]"
      />
      <Image
        src="/images/logo-xl.webp"
        alt="weecoins premium logo"
        width={250}
        height={250}
        priority
        quality={40}
        className="heroLogo center-image relative z-10 flex max-w-[250px] justify-end object-cover drop-shadow-2xl sm:hidden"
      />
      <Image
        src="/images/weecoins-material-bottom.webp"
        alt="weecoins material"
        width={231}
        height={231}
        priority
        quality={40}
        className="heroLogo bottom-image absolute -bottom-52 right-0 z-20 hidden max-h-[200px] max-w-[200px] drop-shadow-2xl lg:inline xl:-bottom-[12.5rem] xl:-right-20 2xl:-bottom-56 2xl:-right-28 2xl:max-h-[231px] 2xl:max-w-[231px]"
      />
    </article>
  );
}
