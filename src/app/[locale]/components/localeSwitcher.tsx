"use client";
import { usePathname } from "../../../navigation";
import { useLocale } from "next-intl";
import { useRouter } from "../../../navigation";
import "./translation.css";

const LocaleSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const buttonCss = "p-2 no-highlights"
  const selectedColor = "underline underline-offset-8 text-scriptorium-red";
  const unselectedColor = "text-scriptorium-grey";

  return (
    <div className="inline-flex flex-row whitespace-nowrap float-right ml-4 mb-2 md:float-none md:mb-0">
      <button
        onClick={() => {
          router.push(pathname, { locale: "en" });
        }}
        className={`${buttonCss} whitespace-nowrap ${locale === "en" ? selectedColor : unselectedColor}`}
        style={{ fontSize: "1rem", cursor: locale === "en" ? "default" : "pointer", border: "none"}}
      >
        EN 🇺🇸
      </button>
      <button
        onClick={() => {
          router.push(pathname, { locale: "ar" });
        }}
        className={buttonCss + " " + (locale === "ar" ? selectedColor : unselectedColor)}
        style={{ fontSize: "1rem", cursor: locale === "ar" ? "default" : "pointer", border: "none"}}
      >
        AR 🇪🇬
      </button>
    </div>
  );
};

export default LocaleSwitcher;
