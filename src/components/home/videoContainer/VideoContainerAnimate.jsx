"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function VideoContainerAnimate() {
  const materialBottomRef = useRef(null);
  const materialTopRef = useRef(null);

  useGSAP(() => {
    gsap.from(materialTopRef.current, {
      x: 300,
      rotateY: "50deg",
      ease: "none",
      scrollTrigger: {
        trigger: ".video-container",
        start: "top 70%",
        end: "35% end",
        scrub: 1,
      },
    });
    gsap.from(materialBottomRef.current, {
      x: -300,
      rotateY: "50deg",
      ease: "none",
      scrollTrigger: {
        trigger: ".video-container",
        start: "top 70%",
        end: "35% end",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div ref={materialTopRef} className="fluid absolute right-16 top-1/4 z-10">
        <Image
          src="/images/weecoins-material-bottom.png"
          alt="weecoins material"
          width={240}
          height={240}
          className="max-h-[240px] max-w-[240px] object-cover drop-shadow-xl"
        />
      </div>
      <div ref={materialBottomRef} className="fluid absolute bottom-1/3 left-16 z-10">
        <Image
          src="/images/logo-xl.png"
          alt="weecoins material"
          width={240}
          height={240}
          className="max-h-[240px] max-w-[240px] object-cover drop-shadow-xl"
        />
      </div>
    </>
  );
}
