"use client";
import React, { useState, ChangeEvent, use, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import "./translation.css";

const API: string = "/api/translate";

const LOADING_DELAY = 4500;
const DELAY = 800;
// const regexEnglish = /^[a-zA-Z\s.,!?'"-;:“”]*$/;
// const regexCoptic = /^[\u2C80-\u2CFF\u03E2-\u03EF\d\s.,!?'"-;:]*$/;

enum Language {
  english = "en",
  sahidic_coptic = "cop_sah",
  bohairic_coptic = "cop_boh",
  arabic = "ar",
  german = "de",
  french = "fr",
  dutch = "nl",
}

const TranslationComponent: React.FC = () => {
  const t = useTranslations("Page");
  const locale = useLocale();
  const [srcText, setSrcText] = useState<string>("");
  const [tgtText, setTgtText] = useState<string>("");
  const [tgtTextLoading, setTgtTextLoading] = useState<boolean>(false);

  const [srcLanguage, setSrcLanguage] = useState<Language>(
    locale === "en" ? Language.english : Language.arabic
  );
  const [tgtLanguage, setTgtLanguage] = useState<Language>(
    Language.bohairic_coptic
  );

  const srcTextRef = React.useRef<HTMLTextAreaElement>(null);
  const tgtTextRef = React.useRef<HTMLTextAreaElement>(null);
  const [isModelStartingUp, setIsModelStartingUp] = useState<boolean>(false);
  const [warning, setWarning] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const placeholderInputText = (srcLanguage: Language) => {
    switch (srcLanguage) {
      case Language.english:
        return t("english-input-msg");
      case Language.sahidic_coptic:
        return t("sahidic-coptic-input-msg");
      case Language.bohairic_coptic:
        return t("bohairic-coptic-input-msg");
      case Language.arabic:
        return t("arabic-input-msg");
      case Language.german:
        return t("german-input-msg");
      case Language.french:
        return t("french-input-msg");
      case Language.dutch:
        return t("dutch-input-msg");
      default:
        return "";
    }
  };

  const placeholderOutputText = (tgtLanguage: Language) => {
    switch (tgtLanguage) {
      case Language.english:
        return t("english-output-msg");
      case Language.sahidic_coptic:
        return t("sahidic-coptic-output-msg");
      case Language.bohairic_coptic:
        return t("bohairic-coptic-output-msg");
      case Language.arabic:
        return t("arabic-output-msg");
      case Language.german:
        return t("german-output-msg");
      case Language.french:
        return t("french-output-msg");
      case Language.dutch:
        return t("dutch-output-msg");
      default:
        return "";
    }
  };

  const reverseLanguages = () => {
    const src = srcLanguage;
    const tgt = tgtLanguage;
    setSrcLanguage(tgt);
    setTgtLanguage(src);
    const tempText = srcText;
    setSrcText(tgtText);
    setTgtText(tempText);
  };

  const cleanInput = (srcText: string) => {
    return srcText.trim().replace(/\s+/, " ");
  };

  useEffect(() => {
    let translationTimeout: NodeJS.Timeout;
    let modelStartingUpTimeout: NodeJS.Timeout;
    const controller = new AbortController();
    const signal = controller.signal;

    translationTimeout = setTimeout(async () => {
      const cleanedSrcText = cleanInput(srcText);
      if (cleanedSrcText === "") {
        setTgtText("");
        setError(null);
        setWarning(null);
        return;
      }

      if (cleanedSrcText.split(/\n/).length > 1) {
        setWarning(t("input-length-warning"));
      }

      const input = {
        text: cleanedSrcText,
        src: srcLanguage,
        tgt: tgtLanguage,
      };

      modelStartingUpTimeout = setTimeout(() => {
        setIsModelStartingUp(true);
      }, LOADING_DELAY);
      setTgtTextLoading(true);
      const translation = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
        signal: signal,
      })
        .then((response) => {
          if (response.status == 200) {
            return response.json();
          }
          if (response.status === 422) {
            clearTimeout(modelStartingUpTimeout);
            setIsModelStartingUp(false);
            setError(t("input-length-err"));
            return { translation: "" };
          } else {
            clearTimeout(modelStartingUpTimeout);
            setIsModelStartingUp(false);
            setError(t("server-down-err"));
            return { translation: "" };
          }
        })
        .then((data) => data.translation)
        .catch((err) => {
          clearTimeout(modelStartingUpTimeout);
          setIsModelStartingUp(false);
          return tgtText;
        })
        .finally(() => {
          clearTimeout(modelStartingUpTimeout);
          setIsModelStartingUp(false);
          setTgtTextLoading(false);
        });
      setTgtText(translation);
    }, DELAY);
    return () => {
      clearTimeout(translationTimeout);
      clearTimeout(modelStartingUpTimeout);
      controller.abort();
      setTgtTextLoading(false);
      setIsModelStartingUp(false);
    };
  }, [srcText, srcLanguage, tgtLanguage]);

  const handleSrcTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setError(null);
    setWarning(null);
    setSrcText(newText);
  };

  const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (srcTextRef.current && tgtTextRef.current) {
      srcTextRef.current.style.height = "auto";
      srcTextRef.current.style.height = `${srcTextRef.current.scrollHeight}px`;

      tgtTextRef.current.style.height = "auto";
      tgtTextRef.current.style.height = `${srcTextRef.current.scrollHeight}px`;
    }
  };

  return (
    <div>
      <div className="w-full justify-center text-scriptorium-red">
        <div className="flex justify-evenly mb-4">
          <select
            value={srcLanguage}
            onChange={(e) => {
              const lang = e.target.value as Language;
              if (lang === tgtLanguage) {
                reverseLanguages();
                return;
              }
              setSrcLanguage(lang);
            }}
            className="text-xl md:text-2xl bg-egyptian p-2 text-scriptorium-red rounded-pyramid outline-none text-center"
          >
            {Object.values(Language).map((lang, idx) => (
              <option key={idx} value={lang}>
                {t(lang)}
              </option>
            ))}
          </select>
          <div className="flex items-center justify-center">
            <button
              onClick={reverseLanguages}
              className="p-2 mx-4 bg-egyptian rounded-pyramid shrink-0"
            >
              <FaExchangeAlt size={24} />
            </button>
          </div>
          <select
            value={tgtLanguage}
            onChange={(e) => {
              const lang = e.target.value as Language;
              if (lang === srcLanguage) {
                reverseLanguages();
                return;
              }
              setTgtLanguage(lang);
            }}
            className="text-xl md:text-2xl bg-egyptian rounded-pyramid no-highlights p-2 outline-none text-center"
          >
            {Object.values(Language).map((lang, idx) => (
              <option key={idx} value={lang}>
                {t(lang)}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:flex-row lg:flex">
          <div className="w-full lg:w-1/2">
            <textarea
              dir={
                srcText === ""
                  ? undefined
                  : srcLanguage === Language.arabic
                  ? "rtl"
                  : "ltr"
              }
              ref={srcTextRef}
              className="border p-2 w-full bg-scriptorium-red-left rounded-lg no-highlights text-2xl"
              onChange={(e) => {
                handleSrcTextChange(e);
                autoResize(e);
              }}
              value={srcText}
              placeholder={placeholderInputText(srcLanguage)}
              style={{
                minHeight: "10rem",
                resize: "none",
                overflow: "hidden",
                outline: "none",
              }}
            />
          </div>
          <div className="hidden lg:flex lg:invisible items-center justify-center">
            <button
              onClick={reverseLanguages}
              className="p-2 mx-4 bg-scriptorium-red-left text-teal rounded-pyramid"
            >
              <FaExchangeAlt size={24} />
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <textarea
              dir={
                tgtText === ""
                  ? undefined
                  : tgtLanguage === Language.arabic
                  ? "rtl"
                  : "ltr"
              }
              ref={tgtTextRef}
              placeholder={placeholderOutputText(tgtLanguage)}
              className="border p-2 w-full bg-scriptorium-red-left rounded-lg no-highlights text-2xl"
              value={tgtTextLoading ? tgtText + "..." : tgtText}
              readOnly={true}
              style={{
                minHeight: "10rem",
                resize: "none",
                overflow: "hidden",
                outline: "none",
                border: "none",
              }}
            />
          </div>
        </div>
      </div>

      {isModelStartingUp && (
        <div className="text-warning">{t("startup-warning")}</div>
      )}
      {warning && <div className="text-warning">{"⚠️ " + warning}</div>}
      {error && <div className="text-error">{"❗️ " + error}</div>}
    </div>
  );
};

export default TranslationComponent;
