import Image from "next/image";
import React from "react";

export default function Visual() {
  return (
    <article className="relative flex items-center justify-end">
      <Image
        src="/images/weecoins-material-top.png"
        alt="weecoins material"
        width={216}
        height={197}
        className="top-image absolute -left-56 -top-24 z-10 max-h-[194px] max-w-[216px] drop-shadow-2xl"
        // style={{ filter: "blur(2px)" }}
      />
      <Image
        src="/images/logo-xl.png"
        alt="weecoins premium logo"
        width={500}
        height={500}
        className="center-image relative z-10 flex max-h-[500px] max-w-[500px] justify-end object-cover drop-shadow-2xl"
      />
      <Image
        src="/images/weecoins-material-bottom.png"
        alt="weecoins material"
        width={231}
        height={231}
        className="bottom-image absolute -bottom-48 -right-32 z-20 max-h-[231px] max-w-[231px] drop-shadow-2xl"
        // style={{ filter: "blur(4px)" }}
      />
    </article>
  );
}
