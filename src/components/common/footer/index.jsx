import Image from "next/image";
import React from "react";
import SocialMedia from "./SocialMedia";
export default function Footer() {
  return (
    <section className="fluid gridContainer h-auto self-end bg-[#111] py-10 md:max-h-[150px]">
      <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-solid border-light-gradient-f7cf68/10 pt-10 md:flex-row">
        <article>
          <Image
            src="/images/logo-text-white-footer.png"
            alt="weecoins logo footer"
            width={350}
            height={200}
            className="max-h-[350px] max-w-[200px] object-contain"
          />
        </article>
        <article className="text-center font-inter text-base font-light text-light-EAEEFE">
          <p>WeeCoins Premium © All Rights Reserved.</p>
        </article>
        <SocialMedia />
      </footer>
    </section>
  );
}
