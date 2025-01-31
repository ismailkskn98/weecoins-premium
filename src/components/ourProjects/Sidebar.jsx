"use client";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

export function Sidebar({ slug }) {
  const t = useTranslations("OurProjectsPage");
  const menuItems = [
    {
      title: "WeeZard",
      href: t("cards.weeZard.slug"),
      image: "weezard.png",
    },
    {
      title: "WeeCard",
      href: t("cards.weeCard.slug"),
      image: "weecard.png",
    },
    {
      title: "WeeSale",
      href: t("cards.weeSale.slug"),
      image: "weesale.png",
    },
    {
      title: "WeeCobi",
      href: t("cards.weekobi.slug"),
      image: "weekobi.png",
    },
  ];
  return (
    <aside className="sticky top-[130px] z-10 hidden h-min w-min min-w-[210px] overflow-y-auto border-r px-4 lg:block">
      <div className="item-start flex flex-col gap-4">
        <p className="text-nowrap text-base text-light-833E15/80 dark:text-light-f88540">Discover our OurProjects</p>
        <nav className="space-y-4">
          {menuItems.map((item, index) => {
            // console.log(item.href);
            return (
              <Link
                href={item.href}
                key={index}
                className={classNames("group flex cursor-pointer items-center gap-2 py-1 transition-all duration-300", {
                  "text-light-833E15 dark:text-light-f88540": slug === item.href,
                  "text-zinc-700 hover:text-black dark:text-zinc-400 dark:hover:text-white": slug !== item.href,
                })}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-ozelDark drop-shadow-md backdrop-blur-md transition-all duration-200 group-hover:scale-105">
                  <Image src={`/images/${item.image}`} alt={item.title} width={50} height={50} className="h-full max-h-9 w-full max-w-9" />
                </span>
                <span className="text-nowrap text-sm">{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
