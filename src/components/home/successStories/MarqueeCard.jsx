import { Link } from "@/i18n/routing";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import React from "react";

export default function MarqueeCard({ description, avatar, name, date, flag, id }) {
  return (
    <Link
      href={`/success-stories/${id}`}
      className="flex h-full max-h-[257px] w-full max-w-[325px] flex-col items-start gap-5 rounded-2xl border border-solid border-light-F1F1F1 bg-white px-6 py-6 shadow-lg dark:border-light-EAEEFE/30 dark:bg-dark-040404"
    >
      <p className="line-clamp-4 select-none text-start font-inter text-sm text-black dark:text-white">{description}</p>
      <div className="flex items-center gap-2">
        <div className="max-h-[42px] max-w-[42px] overflow-hidden rounded-full">
          <Image
            src={avatar ? avatar : "https://avatar.vercel.sh/john"}
            alt={name}
            className="h-full w-full object-cover object-center"
            width={42}
            height={42}
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <span className="text-nowrap font-inter text-sm font-medium capitalize text-black dark:text-white">{name}</span>
            <Image
              src={`https://flagcdn.com/24x18/${flag.toLowerCase()}.png`}
              alt=""
              width={24}
              height={18}
              className="h-full max-h-[14px] w-full max-w-[20px] object-contain object-center"
            />
          </div>
          <span className="font-inter text-sm font-light text-black dark:text-white">{formatDate(date)}</span>
        </div>
      </div>
    </Link>
  );
}
