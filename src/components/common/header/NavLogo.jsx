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
        className="max-h-36 max-w-72"
        quality={100}
      />
    </Link>
  );
}
