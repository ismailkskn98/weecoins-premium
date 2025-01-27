"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import NavLogo from "./NavLogo";
import { useWindowScroll } from "react-use";
import classNames from "classnames";
import HeaderActions from "./HeaderActions";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  const navContaninerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (currentScrollY > 70) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, [currentScrollY]);

  return (
    <section
      ref={navContaninerRef}
      className={classNames("fluid gridContainer fixed inset-x-0 border-none transition-all duration-300", {
        "top-0 z-10 bg-light-EAEEFE dark:bg-dark-0d0d0d": !isFixed,
        "top-4 z-[70] bg-transparent": isFixed,
      })}
    >
      <div
        className={classNames("w-full items-center justify-end pb-1 pt-3", {
          "flex xl:hidden": !isFixed,
          hidden: isFixed,
        })}
      >
        <HeaderActions isTopShow={true} isFixed={isFixed} />
      </div>
      <header
        className={classNames("flex w-full items-center justify-between rounded-2xl py-5 transition-all duration-300", {
          "bg-transparent": !isFixed,
          "bg-gradient-to-t from-black/85 to-black px-10 backdrop-blur-0 dark:bg-black/35 dark:from-transparent dark:to-transparent dark:backdrop-blur-3xl":
            isFixed,
        })}
      >
        <NavLogo isFixed={isFixed} />
        <div className="flex items-center gap-6">
          <Navbar isFixed={isFixed} />
          <MobileNavbar isFixed={isFixed} />
          <HeaderActions isTopShow={false} isFixed={isFixed} />
        </div>
      </header>
    </section>
  );
}
