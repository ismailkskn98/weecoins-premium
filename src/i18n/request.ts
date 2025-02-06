import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Bu genellikle "[yerel]" segmentine karşılık gelir
  let locale = await requestLocale;

  // Geçerli bir yerel ayarın kullanıldığından emin olalım
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
