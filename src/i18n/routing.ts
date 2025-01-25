import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // Desteklenen tüm diller (Desteklenen tüm yerel ayarların listesi)
  locales: ["en", "tr"],

  // Hiçbir yerel ayar ile eşleşmediğinde kullanılır
  defaultLocale: "tr",
});

// / Next.js'nin gezinme API'leri etrafında sarmalayıcılar
export const { Link, usePathname, redirect, useRouter, getPathname } = createNavigation(routing);
