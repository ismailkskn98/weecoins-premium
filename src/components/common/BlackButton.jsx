import { Link } from "@/i18n/routing";
import classNames from "classnames";
import React from "react";

export default function BlackButton({ label, href, ReactIcon, target, isFixed = false }) {
  return (
    <Link
      href={href}
      target={target ? target : "_self"}
      className={classNames("relative rounded-10 px-15px py-10px text-base font-medium transition-all duration-300", {
        "flex items-center gap-1 overflow-hidden": ReactIcon,
        "bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80": !isFixed,
        "bg-white text-black hover:bg-white/80 dark:bg-black dark:text-white dark:hover:bg-black/80": isFixed,
      })}
    >
      {label}
      {ReactIcon && <ReactIcon className="h-5 w-5" />}
    </Link>
  );
}
