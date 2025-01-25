import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocale } from "next-intl";

export default function LanguageChange() {
  const locale = useLocale();
  console.log(locale);
  return (
    <article>
      <Select defaultValue="tr" onValueChange={() => {}}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="tr">Light</SelectItem>
          <SelectItem value="en">Light</SelectItem>
          <SelectItem value="ru">Dark</SelectItem>
          <SelectItem value="az">System</SelectItem>
        </SelectContent>
      </Select>
    </article>
  );
}
