import Image from "next/image";
import React from "react";

export default function ContactImage() {
  return (
    <article className="max-h-h-auto relative h-full w-full max-w-[480px] rounded-xl lg:max-h-[500] lg:max-w-[484px] xl:max-h-[536px] xl:max-w-[520px]">
      <Image
        src={"/images/contact-image.png"}
        alt="weecoins contact image"
        width={680}
        height={700}
        className="h-full w-full rounded-xl object-cover"
      />
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-start justify-center gap-2 px-3">
        <p className="w-full text-xs text-zinc-300">
          Sonsuz evrende her keşif, yeni bir bakış açısı kazandırır. İş birliğiyle sınırları aşalım ve geleceğinizi birlikte
          şekillendirelim.
        </p>
        <span className="text-sm font-medium text-zinc-200">
          WeeCoins <span className="text-light-ffc107">Premium</span>
        </span>
      </div>
      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-t from-dark-0d0d0d to-transparent"></div>
    </article>
  );
}
