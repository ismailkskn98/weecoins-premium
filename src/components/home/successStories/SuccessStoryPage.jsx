"use client";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "@/i18n/routing";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

/* {
    id: 83,
    user_id: 36642,
    name: 'Elnut Miriyev',
    surname: '',
    image: 'https://backoffice.weecoins.org/user-image/profile-1736139676.jpg',
    contact_type: 'phone', // phone, instagram, facebook, email, no-contact
    contact: '702332545',
    body: 'weecoins premium kriptovalyutanı almağı mənə dosdum tövsiyə  etdi  baxdım gördüm cox böyük projelərə və ekosistəmə sahib bir kriptodu qəbul etdim yatırım etdim bu gün kü gündə cox gözəl qazanc əldə edirəm, hər kəsə məsləhət görürəm',
    created_at: '2024-12-02 11:52:10',
    updated_at: '2024-12-02 11:52:10',
    is_approved: 1,
    language: 'az'
} */

export default function SuccessStoryPage({ successStory }) {
  const t = useTranslations("HomePage");
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    setRandomImage(`/images/story-${Math.floor(Math.random() * 5) + 1}.webp`);
  }, []);

  if (!randomImage) return null;
  const getContactType = () => {
    switch (successStory.contact_type) {
      case "phone":
        return FaPhone;
      case "instagram":
        return FaInstagram;
      case "facebook":
        return FaFacebook;
      case "email":
        return MdOutlineMailOutline;
      default:
        return null;
    }
  };

  const ContactIcon = getContactType();

  const getContactHref = () => {
    switch (successStory.contact_type) {
      case "phone":
        return "tel:";
      case "instagram":
        return "https://www.instagram.com/";
      case "facebook":
        return "https://www.facebook.com/public/";
      case "email":
        return "mailto:";
      default:
        return null;
    }
  };

  const contactHref = getContactHref();

  return (
    <motion.main
      initial={{ transform: "translateY(100px)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
      className="pageSection fluid gridContainer relative bg-light-EAEEFE dark:bg-dark-0d0d0d xl:pt-32"
    >
      <div className="fluid absolute -inset-0 bg-success-stories-bg bg-repeat opacity-5 dark:opacity-[.01]"></div>
      <section className="mb:mt-16 relative z-20 mx-auto mb-16 mt-24 overflow-hidden rounded-xl border border-solid border-gray-300 bg-light-EAEEFE px-2 py-11 shadow-lg dark:border-gray-800 dark:bg-dark-0d0d0d mobileS:px-3 mobileM:px-4 sm:px-8 sm:py-14 md:px-16 md:py-20 xl:mt-8 xl:w-10/12 2xl:w-9/12">
        <Link
          href={"/#successStories"}
          className="group absolute left-6 top-6 flex items-center gap-2 rounded-lg bg-black/10 px-4 py-2 text-white backdrop-blur-md"
        >
          <FaArrowLeft className="transition-all duration-200 group-hover:-translate-x-1" />
          <span>{t("successStories.backButton")}</span>
        </Link>

        <div className="fluid absolute inset-x-0 top-0 -z-10 flex h-60 items-center justify-center bg-gradient-to-r from-slate-300 to-slate-200 dark:from-dark-040404 dark:to-dark-040404/50">
          <Image
            src={randomImage}
            alt="success story image"
            width={1920}
            height={1080}
            priority
            quality={90}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-9 w-full bg-gradient-to-t from-white/30 to-transparent dark:from-black/60" />
          <span className="text-center font-switzer text-6xl tracking-wider text-slate-300/30 dark:text-gray-500/50 sm:text-7xl md:text-8xl">
            {successStory.name}
          </span>
        </div>
        <div className="h-28 w-full sm:h-20" />
        <main className="mx-auto w-full space-y-8 sm:space-y-11 md:space-y-12">
          <article className="w-full">
            <div className="flex items-center gap-2 mobileL:gap-3">
              <div className="h-28 w-28 overflow-hidden rounded-2xl bg-gradient-to-t from-slate-300 to-light-EAEEFE p-2 drop-shadow-md dark:from-dark-0d0d0d/90 dark:to-dark-ozelDark mobileM:h-32 mobileM:w-32 mobileL:h-36 mobileL:w-36 sm:h-48 sm:w-48 sm:p-3">
                <Image
                  src={successStory.image ? successStory.image : "https://avatar.vercel.sh/john"}
                  alt={successStory.name}
                  width={200}
                  height={200}
                  quality={90}
                  className="h-full w-full rounded-2xl object-cover object-center drop-shadow-sm"
                />
              </div>
              <div className="mt-3 flex h-full flex-col items-start justify-between gap-3 sm:gap-5">
                <div className="flex flex-col items-start gap-3">
                  <h4 className="text-nowrap text-xl font-bold text-zinc-900 dark:text-zinc-200 mobileL:text-2xl sm:text-4xl md:text-5xl">
                    {successStory.name}
                  </h4>

                  <div className="ml-1 flex flex-col items-start gap-3 text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-1">
                      <MdDateRange className="text-lg sm:text-xl" />
                      <span className="text-nowrap text-xs mobileL:text-sm sm:text-base">{formatDate(successStory.created_at)}</span>
                    </div>
                    {successStory.language && (
                      <div className="flex items-center gap-1">
                        <MdLanguage className="text-lg sm:text-xl" />
                        <div className="flex items-center gap-1">
                          <span className="text-nowrap text-xs mobileL:text-sm sm:text-base">
                            Language: <span className="uppercase">{successStory.language}</span>
                          </span>
                          <Image
                            src={`https://flagcdn.com/24x18/${successStory.language.toLowerCase()}.png`}
                            alt=""
                            width={24}
                            height={18}
                            className="h-full max-h-[14px] w-full max-w-[20px] object-contain object-center"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {ContactIcon && (
                  <Link
                    href={`${contactHref}${successStory.contact}`}
                    target="_blank"
                    className="ml-1 flex cursor-pointer items-center gap-2 text-light-ffc107 transition-all duration-200 hover:text-light-f88540"
                  >
                    <ContactIcon className="text-lg sm:text-xl" />
                    <span className="text-sm sm:text-base">{successStory.contact}</span>
                  </Link>
                )}
              </div>
            </div>
          </article>
          <p className="text-sm text-zinc-800 dark:text-zinc-200 sm:text-base">{successStory.body}</p>
        </main>
      </section>
    </motion.main>
  );
}
