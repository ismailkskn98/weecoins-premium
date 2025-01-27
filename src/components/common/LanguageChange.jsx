import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocale } from "next-intl";
import Image from "next/image";
import classNames from "classnames";

export default function LanguageChange({ isFixed }) {
  const locale = useLocale();
  console.log(locale);
  return (
    <article>
      <Select defaultValue="tr" onValueChange={() => {}}>
        <SelectTrigger
          className={classNames("w-[180px] border-none bg-transparent text-sm uppercase lg:text-base", {
            "text-black dark:text-white": !isFixed,
            "text-white dark:text-black": isFixed,
          })}
        >
          <SelectValue placeholder="" className="text-sm sm:text-base" />
        </SelectTrigger>
        <SelectContent className={classNames("border-none bg-light-EAEEFE text-black dark:bg-[#111] dark:text-white", {})}>
          <SelectItem value="tr" className="uppercase">
            <span className="flex cursor-pointer flex-nowrap items-center gap-2 text-sm lg:text-base">
              <Image
                src="https://flagcdn.com/24x18/tr.png"
                alt="Türkçe"
                width={24}
                height={18}
                className="h-4 w-5 object-cover lg:h-[18px] lg:w-6"
              />
              <span className="text-sm lg:text-base">TR</span>
            </span>
          </SelectItem>
          <SelectItem value="en" className="uppercase">
            <span className="flex cursor-pointer flex-nowrap items-center gap-2 text-sm lg:text-base">
              <Image
                src="https://flagcdn.com/24x18/us.png"
                alt="English"
                width={24}
                height={18}
                className="h-4 w-5 object-cover lg:h-[18px] lg:w-6"
              />
              <span className="text-sm lg:text-base">en</span>
            </span>
          </SelectItem>
          <SelectItem value="ru" className="uppercase">
            <span className="flex cursor-pointer flex-nowrap items-center gap-2 text-sm lg:text-base">
              <Image
                src="https://flagcdn.com/24x18/py.png"
                alt="Русский"
                width={24}
                height={18}
                className="h43 w-5 object-cover lg:h-[18px] lg:w-6"
              />
              <span className="text-sm lg:text-base">PY</span>
            </span>
          </SelectItem>
          <SelectItem value="az" className="uppercase">
            <span className="flex cursor-pointer flex-nowrap items-center gap-2 text-sm lg:text-base">
              <Image
                src="https://flagcdn.com/24x18/az.png"
                alt="Azərbaycan"
                width={24}
                height={18}
                className="h43 w-5 object-cover lg:h-[18px] lg:w-6"
              />
              <span className="text-sm lg:text-base">AZ</span>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </article>
  );
}
