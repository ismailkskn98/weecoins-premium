"use client";
import React, { useEffect, useRef, useState } from "react";
import { ModeToggle } from "../ModToggle";
import Navbar from "./Navbar";
import BlackButton from "../BlackButton";
import NavLogo from "./NavLogo";
import { useWindowScroll } from "react-use";
import classNames from "classnames";

export default function Header() {
  const navContaninerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (currentScrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, [currentScrollY]);

  return (
    <section
      ref={navContaninerRef}
      className={classNames("fluid gridContainer fixed inset-x-0 border-none transition-all duration-300", {
        "top-0 z-10 bg-light-EAEEFE": !isFixed,
        "top-4 z-[70] bg-transparent": isFixed,
      })}
    >
      <header
        className={classNames("flex w-full items-center justify-between rounded-2xl py-5 transition-all duration-300", {
          "bg-transparent px-10": !isFixed,
          "bg-gradient-to-t from-black/85 to-black px-10": isFixed,
        })}
      >
        <NavLogo isFixed={isFixed} />
        <article className="flex items-center gap-6">
          <Navbar isFixed={isFixed} />
          <ModeToggle />
          <BlackButton isFixed={isFixed} target={"_blank"} href={"https://backoffice.weecoins.org/"} label={"Back Office"} />
        </article>
      </header>
    </section>
  );
}
