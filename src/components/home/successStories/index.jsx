import SectionTitle from "@/components/common/SectionTitle";
import { Marquee } from "@/components/ui/marquee";
import React from "react";
import MarqueeCard from "./MarqueeCard";

const reviews = [
  {
    name: "John",
    body: "Salam. Mən Ramil Murtuzov. 4 aydır Weecoins & Weecomi İnternational şirkətinin üzvüyəm. Bu şirkətdən...",
    img: "https://avatar.vercel.sh/john",
    date: "01.01.2023",
  },
  {
    name: "John",
    body: "Salam. Mən Ramil Murtuzov. 4 aydır Weecoins & Weecomi İnternational şirkətinin üzvüyəm. Bu şirkətdən...",
    img: "https://avatar.vercel.sh/john",
    date: "01.01.2023",
  },
  {
    name: "John",
    body: "Salam. Mən Ramil Murtuzov. 4 aydır Weecoins & Weecomi İnternational şirkətinin üzvüyəm. Bu şirkətdən...",
    img: "https://avatar.vercel.sh/john",
    date: "01.01.2023",
  },
  {
    name: "John",
    body: "Salam. Mən Ramil Murtuzov. 4 aydır Weecoins & Weecomi İnternational şirkətinin üzvüyəm. Bu şirkətdən...",
    img: "https://avatar.vercel.sh/john",
    date: "01.01.2023",
  },
  {
    name: "John",
    body: "Salam. Mən Ramil Murtuzov. 4 aydır Weecoins & Weecomi İnternational şirkətinin üzvüyəm. Bu şirkətdən...",
    img: "https://avatar.vercel.sh/john",
    date: "01.01.2023",
  },
  {
    name: "John",
    body: "Salam. Mən Ramil Murtuzov. 4 aydır Weecoins & Weecomi İnternational şirkətinin üzvüyəm. Bu şirkətdən...",
    img: "https://avatar.vercel.sh/john",
    date: "01.01.2023",
  },
  {
    name: "John",
    body: "Salam. Mən Ramil Murtuzov. 4 aydır Weecoins & Weecomi İnternational şirkətinin üzvüyəm. Bu şirkətdən...",
    img: "https://avatar.vercel.sh/john",
    date: "01.01.2023",
  },
  {
    name: "John",
    body: "Salam. Mən Ramil Murtuzov. 4 aydır Weecoins & Weecomi İnternational şirkətinin üzvüyəm. Bu şirkətdən...",
    img: "https://avatar.vercel.sh/john",
    date: "01.01.2023",
  },
  {
    name: "John",
    body: "Salam. Mən Ramil Murtuzov. 4 aydır Weecoins & Weecomi İnternational şirkətinin üzvüyəm. Bu şirkətdən...",
    img: "https://avatar.vercel.sh/john",
    date: "01.01.2023",
  },
];

const firstRow = reviews.slice(0, reviews.length / 3);
const secondRow = reviews.slice(reviews.length / 3, (2 * reviews.length) / 3);
const thirdRow = reviews.slice((2 * reviews.length) / 3);

export default function SuccessStories() {
  return (
    <section className="relative mb-[60px] mt-[92px] flex flex-col items-center justify-center gap-10 overflow-x-hidden text-center">
      <SectionTitle
        title="Başarı Hikayeleri"
        description="Burada kullanıcılarımızın deneyimlerini ve başarı hikayelerini bulabilirsiniz. İlham verici hikayelere göz atın ve kendi hikayenizi paylaşın."
      />
      <article className="overflow-x-hidden">
        <div className="relative flex max-h-[780px] w-full items-center justify-center gap-5 overflow-hidden rounded-lg md:shadow-xl">
          <Marquee vertical pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, index) => (
              <MarqueeCard key={index} name={review.name} description={review.body} avatar={review.img} date={review.date} />
            ))}
          </Marquee>
          <Marquee vertical pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, index) => (
              <MarqueeCard key={index} name={review.name} description={review.body} avatar={review.img} date={review.date} />
            ))}
          </Marquee>
          <Marquee vertical pauseOnHover className="[--duration:20s]">
            {thirdRow.map((review, index) => (
              <MarqueeCard key={index} name={review.name} description={review.body} avatar={review.img} date={review.date} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-light-EAEEFE dark:from-dark-0d0d0d"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-light-EAEEFE dark:from-dark-0d0d0d"></div>
        </div>
      </article>
    </section>
  );
}
