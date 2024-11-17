"use client";
import { useTranslations } from "next-intl";
import { NextIntlClientProvider } from 'next-intl';
import { useLocale } from "next-intl";
import "./translation.css";

const TranslatorBanner = ({ messages }: { messages: any }) => {
  const locale = useLocale();
  
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <TranslatorContent />
    </NextIntlClientProvider>
  );
};

const TranslatorContent = () => {
  const t = useTranslations("Page");
  return (
    <div className="w-full justify-center">
      <div className="lg:flex-row lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            <span className="text-scriptorium-grey">{t("try-other-translators")}</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
              <a
                href="https://polytranslator.com/egyptian-arabic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scriptorium-red hover:underline"
              >
                {t("languages-egyptian-arabic")}
              </a>
              <a
                href="https://polytranslator.com/nubian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scriptorium-red hover:underline"
              >
                {t("languages-nubian")}
              </a>
              <a
                href="https://polytranslator.com/akkadian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scriptorium-red hover:underline"
              >
                {t("languages-akkadian")}
              </a>
              <a
                href="https://polytranslator.com/sumerian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scriptorium-red hover:underline"
              >
                {t("languages-sumerian")}
              </a>
              <a
                href="https://polytranslator.com/ancient-greek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-scriptorium-red hover:underline"
              >
                {t("languages-ancient-greek")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslatorBanner;