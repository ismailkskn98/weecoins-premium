import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link, usePathname } from "@/i18n/routing";
import classNames from "classnames";
import HeaderActions from "./HeaderActions";

export default function MobileNavbar() {
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Anasayfa" },
    { path: "/about", label: "Hakkımızda" },
    { path: "/services", label: "Servisler" },
    { path: "/roadmap", label: "Yol Haritası" },
    { path: "/gallery", label: "Galeri" },
    { path: "/contact", label: "İletişim" },
  ];
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <CgMenuRightAlt className="text-3xl" />
      </SheetTrigger>
      <SheetContent className="flex h-full w-full flex-col items-center justify-between bg-light-EAEEFE py-8 dark:bg-dark-0d0d0d">
        <SheetHeader className="flex h-full max-h-14 w-full items-center justify-start">
          <SheetTitle className="flex h-full w-full items-center justify-start">
            <Image
              src="/images/logo-text-black.png"
              alt="weecoins logo black"
              width={250}
              height={45}
              className="inline h-full max-h-11 w-full max-w-[250px] drop-shadow-lg dark:hidden"
            />
            <Image
              src="/images/logo-text-white.png"
              alt="weecoins logo white"
              width={250}
              height={45}
              className="hidden h-full max-h-11 w-full max-w-[250px] drop-shadow-lg dark:inline"
            />
          </SheetTitle>
        </SheetHeader>
        <div className="w-full flex-1 pt-12">
          <nav className="flex flex-col items-center justify-center gap-8 text-xl">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={classNames("text-nowrap capitalize transition-all duration-200", {
                  "text-black dark:text-white": item.path === pathname,
                  "text-black/60 hover:text-black dark:text-white/80 dark:hover:text-white": item.path !== pathname,
                })}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <SheetFooter>
          <HeaderActions isTopShow={true} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
