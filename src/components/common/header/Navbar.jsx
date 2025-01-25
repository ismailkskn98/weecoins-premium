"use client";
import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import classNames from "classnames";
export default function Navbar({ isFixed }) {
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
    <nav className="flex items-center gap-6">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={classNames("text-nowrap capitalize transition-all duration-200", {
            "text-black dark:text-white": item.path === pathname,
            "text-black/60 hover:text-black dark:text-white/70 dark:hover:text-white": item.path !== pathname,
            "text-white/70 hover:text-white dark:text-black/70 dark:hover:text-black": isFixed && item.path !== pathname,
            "text-white dark:text-black": isFixed && item.path === pathname,
          })}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
