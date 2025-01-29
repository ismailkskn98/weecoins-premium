"use client";
import Image from "next/image";
import React from "react";

export default function VideoContainerAnimate() {
  return (
    <>
      <div className="fluid absolute -right-16 top-1/4 z-10">
        <Image
          src="/images/weecoins-material-bottom.png"
          alt="weecoins material"
          width={240}
          height={240}
          className="max-h-[240px] max-w-[240px] object-cover drop-shadow-xl"
        />
      </div>
      <div className="fluid absolute -left-16 bottom-1/3 z-10">
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
