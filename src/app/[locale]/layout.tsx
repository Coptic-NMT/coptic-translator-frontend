import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import useTextDirection from "./components/useTextDirection";
import LocaleSwitcher from "./components/localeSwitcher";
import { getTranslations } from "next-intl/server";

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
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen relative bg-egyptian text-teal">
          <div className="p-8 mb-20">
            <Header />
            <NextIntlClientProvider messages={messages} locale={locale}>
              {children}
            </NextIntlClientProvider>
          </div>
          <div className="p-8 mb-40">
            <LocaleSwitcher />
          </div>
          <div className="-mt-10">
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
