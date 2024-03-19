import createMiddleware from "next-intl/middleware";
import {locales, localePrefix} from './navigation';

export default createMiddleware({
  // A list of all locales that are supported
  defaultLocale: "en",
  localePrefix,
  locales,
  pathnames: {
    "/paper.pdf": "/paper.pdf",
    // "/licenses": "/licenses",
  },
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
