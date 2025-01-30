import Image from "next/image";
import React from "react";

function formatTarih(tarihMetni) {
  const tarih = new Date(tarihMetni);

  const gun = String(tarih.getDate()).padStart(2, "0");
  const ay = String(tarih.getMonth() + 1).padStart(2, "0"); // Aylar 0'dan başlıyor, +1 ekledik.
  const yil = tarih.getFullYear();

  const saat = String(tarih.getHours()).padStart(2, "0");
  const dakika = String(tarih.getMinutes()).padStart(2, "0");

  return `${gun}/${ay}/${yil} ${saat}:${dakika}`;
}

export default function MarqueeCard({ description, avatar, name, date, flag }) {
  return (
    <div className="flex h-full max-h-[257px] w-full max-w-[325px] flex-col items-start gap-5 rounded-2xl border border-solid border-light-F1F1F1 bg-white px-10 py-10 shadow-lg dark:border-light-EAEEFE/30 dark:bg-dark-040404">
      <p className="text-start font-inter text-base leading-6 text-black dark:text-white">{description}</p>
      <div className="flex items-center gap-2">
        <Image src={avatar} alt={name} className="max-h-[42px] max-w-[42px] rounded-full" width={42} height={42} />
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <span className="text-nowrap font-inter text-sm font-medium capitalize text-black dark:text-white">{name}</span>
            <Image
              src={`https://flagcdn.com/24x18/${flag.toLowerCase()}.png`}
              alt=""
              width={24}
              height={18}
              className="h-full max-h-[14px] w-full max-w-[20px]"
            />
          </div>
          <span className="font-inter text-sm font-light leading-6 text-black dark:text-white">{formatTarih(date)}</span>
        </div>
      </div>
    </div>
  );
}
