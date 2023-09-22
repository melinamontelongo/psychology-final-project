import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from 'negotiator';

const locales = ["es", "en"];
export const defaultLocale = "es";

const getLocale = (request: Request): string => {
    const headers = new Headers(request.headers);
    const acceptLanguage = headers.get("accept-language");
    if(!acceptLanguage || acceptLanguage === "*") return defaultLocale;
    if (acceptLanguage) headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
    const headersObj = Object.fromEntries(headers.entries());
    const languages = new Negotiator({ headers: headersObj }).languages();
    return match(languages, locales, defaultLocale);
}

const middleware = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;
    //  Check if user has manually set preferred language
    const langCookieValue = request.cookies.get("lang")?.value;
    if (langCookieValue) {
        return NextResponse.rewrite(new URL(`/${langCookieValue}${pathname}`, request.nextUrl));
    }
    //  Otherwise check browser preferences
    const locale = getLocale(request) ?? defaultLocale;
    return NextResponse.rewrite(new URL(`/${locale}${pathname}`, request.nextUrl));
}
export default middleware;

export const config = {
    matcher: "/((?!api|static|.*\\..*|_next).*)",
}