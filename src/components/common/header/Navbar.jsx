"use client";
import React, { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { hover, motion } from "motion/react";
import { useTranslations } from "next-intl";
import classNames from "classnames";
export default function Navbar({ isFixed }) {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const [hoveredPath, setHoverPath] = useState(false);

  const navItems = [
    { path: "/", label: t("navbar.home") },
    { path: "/about", label: t("navbar.about") },
    { path: "/roadmap", label: t("navbar.roadmap") },
    { path: "/gallery", label: t("navbar.gallery") },
    { path: "/contact", label: t("navbar.contact") },
  ];

  return (
    <nav className="hidden items-center lg:flex">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          onMouseEnter={() => setHoverPath(item.path)}
          onMouseLeave={() => setHoverPath(false)}
          className={classNames(
            "relative text-nowrap border-b border-transparent px-5 py-1.5 capitalize text-black transition-all duration-300 dark:text-white",
            // {
            //   "text-black dark:text-white": !isFixed && !(hoveredPath === item.path),
            //   "text-white dark:!text-black": !isFixed && hoveredPath === item.path,
            //   "text-white dark:text-white": isFixed && !(hoveredPath === item.path),
            //   "!text-black dark:!text-black": isFixed && hoveredPath === item.path,
            // },
            {
              "text-black dark:text-white": !isFixed && !(hoveredPath === item.path),
              "text-white dark:!text-light-f88540": !isFixed && hoveredPath === item.path,
              "text-white dark:text-white": isFixed && !(hoveredPath === item.path),
              "!text-black dark:!text-light-f88540": isFixed && hoveredPath === item.path,
            },
          )}
        >
          {pathname === item.path && (
            <motion.div
              layoutId="active"
              className={classNames("absolute inset-0 -bottom-3 -z-10 border-b", {
                "border-dark-0d0d0d dark:border-light-EAEEFE": !isFixed,
                "border-light-EAEEFE dark:border-light-EAEEFE": isFixed,
              })}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            />
          )}
          {hoveredPath === item.path && (
            <motion.div
              layoutId="hover"
              className={classNames("absolute inset-0 -z-10 rounded-md", {
                // "bg-dark-0d0d0d dark:bg-light-EAEEFE": !isFixed,
                // "dark:bg-light-EAEEFE": isFixed,
                "border border-solid border-transparent bg-dark-0d0d0d dark:border-light-f88540 dark:bg-transparent": !isFixed,
                "border border-solid border-transparent bg-light-EAEEFE dark:border-light-f88540 dark:bg-transparent": isFixed,
              })}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          )}
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
