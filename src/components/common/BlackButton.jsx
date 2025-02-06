import { Link } from "@/i18n/routing";
import classNames from "classnames";
import React from "react";

const BlackButton = React.memo(({ label, href, ReactIcon, target, isFixed = false, isTopShow = false }) => {
  return (
    <Link
      href={href}
      target={target ? target : "_self"}
      className={classNames("relative text-nowrap text-sm font-medium transition-all duration-300 lg:text-base", {
        "flex items-center gap-1 overflow-hidden": ReactIcon,
        "rounded-md bg-black px-2 py-2 text-xs text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 sm:text-sm xl:rounded-10 xl:px-15px xl:py-10px":
          !isFixed && isTopShow,
        "rounded-md bg-white px-2 py-1 text-black hover:bg-white/80 xl:rounded-10 xl:px-15px xl:py-10px": isFixed,
        "rounded-md bg-black px-2 py-2 text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 xl:rounded-10 xl:px-15px xl:py-10px":
          !isFixed && !isTopShow,
      })}
    >
      {label}
      {ReactIcon && <ReactIcon className="h-5 w-5" />}
    </Link>
  );
});

export default BlackButton;
