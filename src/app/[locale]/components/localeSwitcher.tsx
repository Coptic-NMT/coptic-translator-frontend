"use client";
import { usePathname } from "../../../navigation";
import { useLocale } from "next-intl";
import { useRouter } from "../../../navigation";
import "./translation.css";

const LocaleSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const buttonCss = "border mr-4 p-2 bg-scriptorium-red-left rounded-lg no-highlights"
  const selectedColor = "text-scriptorium-grey";
  const unselectedColor = "text-scriptorium-red";

  return (
    <div>
      <button
        onClick={() => {
          router.push(pathname, { locale: "en" });
        }}
        className={buttonCss + " " + (locale === "en" ? selectedColor : unselectedColor)}
        style={{ fontSize: "1rem", cursor: locale === "en" ? "default" : "pointer", border: locale === "en" ?"none" : "2px solid #94f3739"}}
      >
        EN 🇺🇸
      </button>
      <button
        onClick={() => {
          router.push(pathname, { locale: "ar" });
        }}
        className={buttonCss + " " + (locale === "ar" ? selectedColor : unselectedColor)}
        style={{ fontSize: "1rem", cursor: locale === "ar" ? "default" : "pointer", border: locale === "ar" ?"none" : "2px solid #94f3739"}}
      >
        AR 🇪🇬
      </button>
    </div>
  );
};

export default LocaleSwitcher;
