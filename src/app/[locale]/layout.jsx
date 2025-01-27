import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import Header from "@/components/common/header";
import localFont from "next/font/local";
import { customMetaData } from "@/components/MetaData";
import Footer from "@/components/common/footer";

export const metadata = { ...customMetaData };

const DmSans = localFont({
  src: [
    { path: "../fonts/DMSans_Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/DMSans_Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/DMSans_ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-dm-sans",
});
const Inter = localFont({
  src: [
    { path: "../fonts/Inter_Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Inter_Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Inter_Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Inter_SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Inter_Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Inter_ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-inter",
});
const Switzer = localFont({
  src: [{ path: "../fonts/Switzer-Variable.ttf", weight: "600", style: "normal" }],
  variable: "--font-switzer",
});
export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Gelen 'yerel ayarın' geçerli olduğundan emin olun
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={` ${DmSans.variable} ${Inter.variable} ${Switzer.variable} bg-light-EAEEFE text-black antialiased dark:bg-dark-0d0d0d dark:text-light-EAEEFE`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <main className="fluid gridContainer min-h-screen overflow-x-hidden font-inter">
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
