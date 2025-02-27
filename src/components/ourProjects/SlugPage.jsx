"use client";
import { CheckCircle, Info, Zap } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { motion } from "motion/react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { FiExternalLink } from "react-icons/fi";

export default function SlugPage({ card }) {
  return (
    <section className="pageSection mt-20 pb-16 md:mt-5 md:pb-24">
      <main className="relative mx-auto flex w-full items-start py-8">
        <Sidebar slug={card.slug} />
        <motion.div initial={{ opacity: 0, animationDelay: 3 }} animate={{ opacity: 1 }} className="mx-auto max-w-5xl space-y-10">
          <div className="text-center">
            <h1 className="bg-gradient-to-r from-light-833E15 to-dark-ozelDark bg-clip-text text-center font-dmSans text-4xl font-bold text-transparent dark:to-light-f88540">
              {card.title}
            </h1>
            <Link
              href={card.href}
              target="_blank"
              className="mx-auto my-3 flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-full bg-black/30 shadow-lg dark:my-6"
            >
              <Image
                src={`/images/${card.image}-slug-dark.webp`}
                alt={card.image}
                width={230}
                height={230}
                className={`${card.image === "weezard" ? "ml-[5px]" : ""} block h-full w-full object-contain drop-shadow-lg dark:hidden`}
              />
              <Image
                src={`/images/${card.image}-slug-dark.webp`}
                alt={card.image}
                width={230}
                height={230}
                className={`${card.image === "weezard" ? "ml-[5px]" : ""} hidden h-full w-full object-contain drop-shadow-lg dark:block`}
              />
            </Link>
            <p className="mx-auto text-lg leading-relaxed text-muted-foreground">
              {card.description}
              <Link
                href={card.href}
                target="_blank"
                className="ml-2 inline-flex items-center gap-1 text-nowrap capitalize text-light-f88540 underline transition-all duration-200 hover:text-light-833E15"
              >
                {card.image}
                <FiExternalLink />
              </Link>
            </p>
          </div>

          <div className="rounded-2xl border border-muted bg-white p-8 shadow-lg dark:bg-dark-ozelDark">
            <div className="mb-4 flex items-start gap-4">
              <div className="hidden rounded-xl bg-primary/10 p-3 md:block">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-black dark:text-white">{card.sections.howItWorks.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{card.sections.howItWorks.content}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-muted bg-white p-8 shadow-lg dark:bg-dark-ozelDark">
            <div className="mb-4 flex items-start gap-4">
              <div className="hidden rounded-xl bg-green-100 p-3 md:block">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-black dark:text-white">{card.sections.whyUse.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{card.sections.whyUse.content}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-muted bg-white p-8 shadow-lg dark:bg-dark-ozelDark">
            <div className="mb-4 flex items-start gap-4">
              <div className="hidden rounded-xl bg-blue-100 p-3 md:block">
                <Info className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-black dark:text-white">{card.sections.contribution.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{card.sections.contribution.content}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-purple-500/5" />
            <div className="relative rounded-3xl border border-muted bg-background/80 p-8 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-muted-foreground">{card.detailedText}</p>
            </div>
          </div>
        </motion.div>
      </main>
    </section>
  );
}
