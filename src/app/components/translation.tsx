import React, { useState, ChangeEvent, use, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";

// import css
import "./translation.css";

const ENGLISH_API: string = process.env.NEXT_PUBLIC_ENGLISH_API ?? "";
const COPTIC_API: string = process.env.NEXT_PUBLIC_COPTIC_API ?? "";

const DELAY = 500;
const regexEnglish = /^[a-zA-Z\s.,!?'"-;:]*$/;
const regexCoptic = /^[\u2C80-\u2CFF\u03E2-\u03EF\d\s.,!?'"-;:]*$/;

const TranslationComponent: React.FC = () => {
  const [srcText, setSrcText] = useState<string>("");
  const [tgtText, setTgtText] = useState<string>("");
  const [tgtTextLoading, setTgtTextLoading] = useState<boolean>(false);
  const [isEnglishToCoptic, setIsEnglishToCoptic] = useState<boolean>(true);
  const srcTextRef = React.useRef<HTMLTextAreaElement>(null);
  const tgtTextRef = React.useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<string | null>(null);

  const placeholderText = (isEnglishToCoptic: boolean) => {
    return `Type or paste ${
      isEnglishToCoptic ? "English" : "Sahidic Coptic"
    } text here...`;
  };

  useEffect(() => {
    let translationTimeout: NodeJS.Timeout;
    const controller = new AbortController();
    const signal = controller.signal;
    translationTimeout = setTimeout(async () => {
      const api = isEnglishToCoptic ? COPTIC_API : ENGLISH_API;
      if (srcText === "") {
        setTgtText("");
        setError(null);
        return;
      }
      setTgtTextLoading(true);
      const translation = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: srcText,
        signal: signal,
      })
        .then((response) => {
          if (response.status == 200) {
            return response.json();
          }
          if (response.status === 422) {
            setError("Input too long. Try smaller chunks at a time.");
            return { translation: "" };
          } else {
            setError("Server is down. Please try again later.");
            return { translation: "" };
          }
        })
        .then((data) => data.translation)
        .catch((err) => {
          return "";
        })
        .finally(() => setTgtTextLoading(false));
      setTgtText(translation);
    }, DELAY);
    return () => {
      clearTimeout(translationTimeout);
      controller.abort();
      setTgtTextLoading(false);
    };
  }, [srcText, isEnglishToCoptic]);

  useEffect(() => {
    const tempText = srcText;
    setSrcText(tgtText);
    setTgtText(tempText);
  }, [isEnglishToCoptic]);

  const handleSrcTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (isEnglishToCoptic) {
      if (regexEnglish.test(newText)) {
        setError(null);
        setSrcText(newText);
      } else {
        setError("Only English is allowed. Please use the English keyboard.");
      }
    } else {
      if (regexCoptic.test(newText)) {
        setError(null);
        setSrcText(newText);
      } else {
        setError(
          "Only Coptic input is allowed. Please use the Coptic keyboard."
        );
      }
    }
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
      <div className="w-full flex justify-center text-scriptorium-red mb-10">
        <div className="w-1/2 pr-4">
          <h2 className="text-3xl mb-4 text-center">
            {isEnglishToCoptic ? "English" : "Coptic"}
          </h2>
          <textarea
            ref={srcTextRef}
            className="border p-2 w-full bg-scriptorium-red-left rounded-lg no-highlights text-2xl"
            onChange={(e) => {
              handleSrcTextChange(e);
              autoResize(e);
            }}
            value={srcText}
            placeholder={placeholderText(isEnglishToCoptic)}
            style={{
              minHeight: "10rem",
              resize: "none",
              overflow: "hidden",
              outline: "none",
            }}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => setIsEnglishToCoptic(!isEnglishToCoptic)}
            className="p-2 bg-scriptorium-red-left text-teal rounded-pyramid shadow-md"
          >
            <FaExchangeAlt size={24} />
          </button>
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="text-3xl mb-4 text-center">
            {isEnglishToCoptic ? "Coptic" : "English"}
          </h2>
          <textarea
            ref={tgtTextRef}
            placeholder={`${
              isEnglishToCoptic ? "Sahidic Coptic" : "English"
            } Translation`}
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
      {error && <div className="text-error">{"❗️ " + error}</div>}
    </div>
  );
};

export default TranslationComponent;
