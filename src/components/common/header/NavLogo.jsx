import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function NavLogo({ isFixed }) {
  return (
    <Link href="/">
      <Image
        src={!isFixed ? "/images/logo-text-black.png" : "/images/logo-text-white.png"}
        alt="weecoins premium logo black"
        width={300}
        height={150}
        className="inline h-full max-h-28 w-full max-w-60 dark:hidden sm:max-h-36 sm:max-w-72"
        quality={100}
      />
      <Image
        src={"/images/logo-text-white.png"}
        alt="weecoins premium logo black"
        width={300}
        height={150}
        className="h-fullmax-h-28 hidden w-full max-w-60 dark:inline sm:max-h-36 sm:max-w-72"
        quality={100}
      />
    </Link>
  );
}
