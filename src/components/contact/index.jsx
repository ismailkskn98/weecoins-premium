import React from "react";
import ContactImage from "./ContactImage";
import ContactContent from "./ContactContent";
import PageGradientBg from "../common/PageGradientBg";

export default function ContactMain() {
  return (
    <section className="pageSection pb-16 md:pt-24">
      <PageGradientBg />
      <main className="mx-auto flex w-full flex-col items-center justify-center gap-y-6 rounded-2xl bg-light-EAEEFE p-6 drop-shadow-xl dark:bg-dark-0d0d0d sm:p-4 md:p-5 lg:flex-row xl:w-11/12 2xl:w-[1110px]">
        <ContactContent />
        <ContactImage />
      </main>
    </section>
  );
}
