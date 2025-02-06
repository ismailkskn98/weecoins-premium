import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default function middleware(req) {
  // API yollarını kontrol et ve middleware'i atla
  if (req.nextUrl.pathname.startsWith("/api")) {
    return;
  }

  return createMiddleware(routing)(req);
}

export const config = {
  matcher: ["/", "/(tr|en|ru|az)/:path*", "/:path"],
};
