import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function LanguageChange() {
  const locale = useLocale();
  console.log(locale);
  return (
    <article>
      <Select defaultOpen defaultValue="tr" onValueChange={() => {}}>
        <SelectTrigger className="w-[180px] border-none bg-transparent uppercase">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent className="bg-light-EFF0F6">
          <SelectItem value="tr" className="uppercase">
            <span className="flex cursor-pointer flex-nowrap items-center gap-1">
              <Image src="https://flagcdn.com/24x18/tr.png" alt="Türkçe" width={24} height={18} className="object-cover" />
              <span>TR</span>
            </span>
          </SelectItem>
          <SelectItem value="en" className="uppercase">
            <span className="flex cursor-pointer flex-nowrap items-center gap-1">
              <Image src="https://flagcdn.com/24x18/us.png" alt="English" width={24} height={18} className="object-cover" />
              <span>en</span>
            </span>
          </SelectItem>
          <SelectItem value="ru" className="uppercase">
            <span className="flex cursor-pointer flex-nowrap items-center gap-1">
              <Image src="https://flagcdn.com/24x18/py.png" alt="Русский" width={24} height={18} className="object-cover" />
              <span>PY</span>
            </span>
          </SelectItem>
          <SelectItem value="az" className="uppercase">
            <span className="flex cursor-pointer flex-nowrap items-center gap-1">
              <Image src="https://flagcdn.com/24x18/az.png" alt="Azərbaycan" width={24} height={18} className="object-cover" />
              <span>AZ</span>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </article>
  );
}
