import Image from "next/image";
import React from "react";

export default function MarqueeCard({ description, avatar, name, date }) {
  return (
    <div className="flex h-full max-h-[257px] w-full max-w-[325px] flex-col items-start gap-5 rounded-2xl border border-solid border-light-F1F1F1 bg-white px-10 py-10 shadow-lg">
      <p className="text-start font-inter text-base leading-6 text-black">{description}</p>
      <div className="flex items-center gap-2">
        <Image src={avatar} alt={name} className="h-full max-h-[42px] w-full max-w-[42px] rounded-full" width={42} height={42} />
        <div className="flex flex-col items-start">
          <span className="font-inter text-base font-medium capitalize text-black">{name}</span>
          <span className="font-inter text-sm font-light leading-6 text-black">{date}</span>
        </div>
      </div>
    </div>
  );
}
