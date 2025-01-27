import Image from "next/image";
import React from "react";

export default function Visual() {
  return (
    <article className="relative flex w-full items-center justify-center px-6 lg:px-0 xl:w-auto 2xl:justify-end">
      <Image
        src="/images/weecoins-material-top.png"
        alt="weecoins material"
        width={216}
        height={197}
        className="top-image absolute -left-28 -top-20 -z-10 hidden max-h-[194px] max-w-[216px] drop-shadow-2xl lg:inline xl:-left-48 xl:z-10 2xl:-left-56"
        // style={{ filter: "blur(2px)" }}
      />
      <Image
        src="/images/logo-xl.png"
        alt="weecoins premium logo"
        width={500}
        height={500}
        className="center-image relative z-10 flex max-w-full justify-end object-cover drop-shadow-2xl sm:max-h-[410px] sm:max-w-[410px] xl:max-h-[450px] xl:max-w-[450px] 2xl:max-h-[500px] 2xl:max-w-[500px]"
      />
      <Image
        src="/images/weecoins-material-bottom.png"
        alt="weecoins material"
        width={231}
        height={231}
        className="bottom-image absolute -bottom-52 right-0 z-20 hidden max-h-[200px] max-w-[200px] drop-shadow-2xl lg:inline xl:-bottom-[12.5rem] xl:-right-20 2xl:-bottom-48 2xl:-right-32 2xl:max-h-[231px] 2xl:max-w-[231px]"
        // style={{ filter: "blur(4px)" }}
      />
    </article>
  );
}
