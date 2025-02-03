import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");
  return (
    <section className="fixed inset-0 z-[100] flex w-full items-center justify-center bg-green-500">
      <div className="absolute h-[900px] w-[2800px] -translate-x-[350px] -translate-y-[400px] -rotate-[15deg] bg-[#263238]"></div>
      <div className="absolute h-[900px] w-[2800px] translate-y-[400px] -rotate-[15deg] bg-[#37474F]"></div>
      <article className="relative z-[105] flex w-full flex-col items-center justify-center gap-20 px-4 sm:px-16 lg:flex-row lg:items-start lg:gap-1">
        <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-12 lg:items-start lg:justify-start">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <h3 className="text-center text-4xl font-semibold capitalize text-white sm:text-5xl xl:text-6xl">{t("title1")},</h3>
            <h3 className="text-wrap text-center text-4xl font-semibold capitalize text-white sm:text-nowrap sm:text-5xl xl:text-6xl">
              {t("title2")}
            </h3>
          </div>
          <Link
            href="/"
            className="text-nowrap rounded-full bg-[#92E3A9] px-16 py-4 text-xl font-medium uppercase text-white transition-all duration-200 hover:bg-[#50A167] sm:text-2xl xl:text-3xl"
          >
            {t("button")}
          </Link>
        </div>
        <Image
          src="/images/not-found.png"
          alt="not found image"
          width={918}
          height={789}
          className="h-full max-h-[489px] w-full max-w-[618px] 2xl:max-h-[589px] 2xl:max-w-[718px]"
        />
      </article>
    </section>
  );
}
