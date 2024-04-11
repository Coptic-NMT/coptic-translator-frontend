import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import useTextDirection from "./components/useTextDirection";
import LocaleSwitcher from "./components/localeSwitcher";
import { getTranslations } from "next-intl/server";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const addJsonLd = () => {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Coptic Translator",
      url: "https://www.coptictranslator.com",
    }),
  };
};
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  const direction = useTextDirection(locale);

  return (
    <html lang={locale} dir={direction}>
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}");
`}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="overflow-auto flex flex-col grow min-h-screen relative bg-egyptian text-teal">
          <div className="p-4 md:p-8">
            <Header />
            <NextIntlClientProvider messages={messages} locale={locale}>
              {children}
            </NextIntlClientProvider>
          </div>
          <div className="p-4 md:p-8">
            <LocaleSwitcher />
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
      </body>
    </html>
  );
}
