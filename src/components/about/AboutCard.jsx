import React from "react";

export default function AboutCard({ title, Icon, description }) {
  return (
    <div className="hover:border-l-light-f88540 dark:hover:border-light-f88540/50 flex w-full flex-col items-center gap-3 rounded-lg border border-light-gradient-f7cf68 bg-light-EAEEFE p-6 shadow-lg backdrop-blur-0 duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md lg:items-start">
      <Icon className="text-light-f88540 h-11 w-11" />
      <h4 className="text-xl font-semibold dark:text-white">{title}</h4>
      <p className="text-zinc-600 dark:text-zinc-300">{description}</p>
    </div>
  );
}
