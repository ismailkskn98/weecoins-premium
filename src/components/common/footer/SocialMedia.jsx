"use client";
import React from "react";
import { Link } from "@/i18n/routing";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function SocialMedia() {
  const socialItems = [
    {
      href: "https://www.facebook.com/weecomiinternational",
      icon: FaFacebookF,
      tooltipContent: "Facebook",
      tooltipDataId: "facebook-tooltip",
    },
    {
      href: "https://x.com/Wcs_robot",
      icon: FaXTwitter,
      tooltipContent: "Twitter",
      tooltipDataId: "twitter-tooltip",
    },
    {
      href: "https://www.instagram.com/weecoins_weecomi_international/",
      icon: FaInstagram,
      tooltipContent: "Instagram",
      tooltipDataId: "instagram-tooltip",
    },
    {
      href: "https://www.youtube.com/c/Weecoins",
      icon: FaYoutube,
      tooltipContent: "Youtube",
      tooltipDataId: "instagram-tooltip",
    },
    {
      href: "https://tr.linkedin.com/company/weecomi-weecoins",
      icon: FaLinkedinIn,
      tooltipContent: "LinkedIn",
      tooltipDataId: "linkedIn-tooltip",
    },
    {
      href: "https://www.tiktok.com/@weecoins_",
      icon: FaTiktok,
      tooltipContent: "Tiktok",
      tooltipDataId: "tiktok-tooltip",
    },
  ];

  return (
    <article className="flex items-center gap-2 sm:gap-3">
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
