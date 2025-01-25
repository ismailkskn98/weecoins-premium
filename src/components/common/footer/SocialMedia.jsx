"use client";
import React from "react";
import { Link } from "@/i18n/routing";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

export default function SocialMedia() {
  const socialItems = [
    {
      href: "#",
      icon: FaFacebookF,
      tooltipContent: "Facebook",
      tooltipDataId: "facebook-tooltip",
    },
    {
      href: "#",
      icon: FaLinkedinIn,
      tooltipContent: "LinkedIn",
      tooltipDataId: "linkedIn-tooltip",
    },
    {
      href: "#",
      icon: FaXTwitter,
      tooltipContent: "Twitter",
      tooltipDataId: "twitter-tooltip",
    },
  ];

  return (
    <article className="flex items-center gap-3">
      {socialItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          data-tooltip-id={item.tooltipDataId}
          data-tooltip-content={item.tooltipContent}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-solid border-light-EAEEFE bg-transparent text-light-EAEEFE transition-all duration-200 hover:border-light-gradient-f7cf68"
        >
          <item.icon className="group-hover:text-light-gradient-f7cf68" />
          <Tooltip id={item.tooltipDataId} className="!text-light-gradient-f7cf68" />
        </Link>
      ))}
    </article>
  );
}
