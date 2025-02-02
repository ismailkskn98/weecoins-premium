"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function OurVİsionAnimate() {
  const ourVisionLeftRef = useRef(null);
  const ourVisionRightRef = useRef(null);

  useGSAP(() => {
    gsap.from(ourVisionLeftRef.current, {
      x: -450,
      //   rotateX: 90,
      ease: "none",
      scrollTrigger: {
        trigger: ".ourVisionContainer",
        start: "top 70%",
        end: "35% 40%",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(ourVisionRightRef.current, {
      x: 250,
      rotateZ: 90,
      ease: "none",
      scrollTrigger: {
        trigger: ".ourVisionContainer",
        start: "top 70%",
        end: "35% 40%",
        scrub: 1,
        // markers: true,
      },
    });
  });

  return (
    <>
      <div ref={ourVisionLeftRef} className="absolute left-28 top-7 hidden h-full max-h-[362px] w-full max-w-[362px] md:block">
        <Image
          src="/images/our-vision-left.svg"
          alt="weecoins premium material"
          width={362}
          height={362}
          className="rotate-12 object-cover"
        />
      </div>
      <div ref={ourVisionRightRef} className="absolute bottom-7 right-0 hidden h-full max-h-[362px] w-full max-w-[362px] md:block">
        <Image
          src="/images/our-vision-right.svg"
          alt="weecoins premium material"
          width={362}
          height={362}
          className="0 rotate-12 object-cover"
        />
      </div>
    </>
  );
}
