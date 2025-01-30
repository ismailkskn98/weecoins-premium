import SectionTitle from "@/components/common/SectionTitle";
import { Marquee } from "@/components/ui/marquee";
import React from "react";
import MarqueeCard from "./MarqueeCard";
import { useTranslations } from "next-intl";

export default function SuccessStories({ data }) {
  const t = useTranslations("HomePage");
  const firstRow = data.slice(0, data.length / 3);
  const secondRow = data.slice(data.length / 3, (2 * data.length) / 3);
  const thirdRow = data.slice((2 * data.length) / 3);
  return (
    <section className="relative mb-[60px] mt-[92px] flex flex-col items-center justify-center gap-10 overflow-x-hidden text-center">
      <SectionTitle title={t("successStories.title")} description={t("successStories.description")} />
      <article className="overflow-x-hidden">
        <div className="relative flex max-h-[780px] w-full items-center justify-center gap-5 overflow-hidden rounded-lg md:shadow-xl">
          <Marquee vertical pauseOnHover className="[--duration:20s]">
            {firstRow.map((item, index) => (
              <MarqueeCard
                key={index}
                name={item.name + " " + item.surname}
                description={item.body}
                avatar={item.image}
                date={item.created_at}
                flag={item.language}
              />
            ))}
          </Marquee>
          <Marquee vertical pauseOnHover className="[--duration:20s]">
            {secondRow.map((item, index) => (
              <MarqueeCard
                key={index}
                name={item.name + " " + item.surname}
                description={item.body}
                avatar={item.image}
                date={item.created_at}
                flag={item.language}
              />
            ))}
          </Marquee>
          <Marquee vertical pauseOnHover className="[--duration:20s]">
            {thirdRow.map((item, index) => (
              <MarqueeCard
                key={index}
                name={item.name + " " + item.surname}
                description={item.body}
                avatar={item.image}
                date={item.created_at}
                flag={item.language}
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-light-EAEEFE dark:from-dark-0d0d0d"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-light-EAEEFE dark:from-dark-0d0d0d"></div>
        </div>
      </article>
    </section>
  );
}
