import React from "react";
import "./gradient.css";
import VideoDialog from "./VideoDialog";
import VideoCards from "./VideoCards";
import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";

export default function VideoContainer() {
  return (
    <section className="fluid gridContainer relative mt-28 flex flex-col items-center justify-center gap-10 overflow-x-hidden pb-24">
      <SectionTitle
        title="Meet WeeCoins Premium!"
        description="WCP, blok zinciri teknolojisi aracılığıyla yenilenebilir enerji projelerine güvenli, şeffaf ve verimli bir şekilde yatırım yapmanızı
        sağlar."
      />
      <VideoDialog />
      <VideoCards />
      <div className="fluid videoContainer-gradient absolute inset-0 -z-10"></div>
      <div className="fluid absolute -right-16 top-1/4 z-10">
        <Image
          src="/images/weecoins-material-bottom.png"
          alt="weecoins material"
          width={240}
          height={240}
          className="h-full max-h-[240px] w-full max-w-[240px] object-cover drop-shadow-xl"
        />
      </div>
      <div className="fluid absolute -left-16 bottom-1/3 z-10">
        <Image
          src="/images/logo-xl.png"
          alt="weecoins material"
          width={240}
          height={240}
          className="h-full max-h-[240px] w-full max-w-[240px] object-cover drop-shadow-xl"
        />
      </div>
    </section>
  );
}
