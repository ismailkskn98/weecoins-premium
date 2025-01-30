import React from "react";
import PageGradientBg from "../common/PageGradientBg";

export default function GalleryMain({ children }) {
  return (
    <section className="pageSection mb:pb-24 pb-16">
      <div className="fluid absolute inset-0 -z-20 block sm:hidden">
        <PageGradientBg />
      </div>
      <div className="fluid absolute inset-x-0 -top-9 hidden h-14 bg-gradient-to-b from-transparent via-light-EAEEFE/70 to-transparent dark:via-dark-0d0d0d sm:block"></div>

      {children}
      <div className="fluid absolute inset-x-0 -bottom-9 hidden h-14 bg-gradient-to-b from-transparent via-[#111] to-transparent sm:block"></div>
    </section>
  );
}
