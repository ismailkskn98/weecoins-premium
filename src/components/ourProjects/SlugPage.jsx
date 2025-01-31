"use client";
import { CheckCircle, Info, Zap } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { motion } from "motion/react";
import Image from "next/image";

export default function SlugPage({ card }) {
  return (
    <section className="pageSection mt-20 pb-16 md:mt-5 md:pb-24">
      <main className="relative mx-auto flex w-full items-start py-8">
        <Sidebar slug={card.slug} />
        <motion.div initial={{ opacity: 0, animationDelay: 3 }} animate={{ opacity: 1 }} className="mx-auto max-w-5xl space-y-10">
          <div className="text-center">
            <h1 className="bg-gradient-to-r from-light-833E15 to-black bg-clip-text text-center font-dmSans text-4xl font-bold text-transparent">
              {card.title}
            </h1>
            <div className="mx-auto my-3 flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-full bg-dark-ozelDark">
              <Image
                src={`/images/${card.image}`}
                alt=""
                width={230}
                height={230}
                className={`${card.image === "weezard.png" ? "ml-[5px]" : ""} h-full w-full object-cover`}
              />
            </div>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">{card.description}</p>
          </div>

          <div className="rounded-2xl border border-muted bg-gradient-to-br from-background to-muted p-8 shadow-lg">
            <div className="mb-4 flex items-start gap-4">
              <div className="hidden rounded-xl bg-primary/10 p-3 md:block">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold">{card.sections.howItWorks.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{card.sections.howItWorks.content}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-muted bg-gradient-to-br from-background to-muted p-8 shadow-lg">
            <div className="mb-4 flex items-start gap-4">
              <div className="hidden rounded-xl bg-green-500/10 p-3 md:block">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold">{card.sections.whyUse.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{card.sections.whyUse.content}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-muted bg-gradient-to-br from-background to-muted p-8 shadow-lg">
            <div className="mb-4 flex items-start gap-4">
              <div className="hidden rounded-xl bg-blue-500/10 p-3 md:block">
                <Info className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold">{card.sections.contribution.title}</h2>
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
