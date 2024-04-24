// Footer.tsx
import React from "react";
import "./translation.css";
import { Link } from "../../../navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  return (
    <footer
      className="text-gray-800 p-4 relative bottom-0 text-scriptorium-grey"
      style={{ backgroundColor: "#eef1f3" }}
    >
      <div className="md:px-4 text-sm">
        <div>
          <p className="mb-2">
            {t("created-by") + " "}
            <a href="mailto:anm4+coptic@williams.edu">
              {t("andrew-name")}
            </a>{" "}
            {t("and") + " "}
            <a href="mailto:me4+coptic@williams.edu">{t("maxim-name")}</a>{" "}
            {t("at-williams")}
          </p>
          <p className="mb-2">
            {/* {t("by-data-from")}{" "}
            <a
              href="https://data.copticscriptorium.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("coptic-scriptorium")}
            </a>
            {". "} */}
            {t("disclaimer-msg")}
          </p>

          <div className="flex flex-col md:flex-row justify-start">
            <a
              // link to paper located in public folder
              href="/paper.pdf"
              className="text-blue-500 mb-2 hover:text-blue-700 md:mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Translator Paper
            </a>
            <a
              // link to paper located in public folder
              href="https://arxiv.org/abs/2404.13813"
              className="text-blue-500 mb-2 hover:text-blue-700 md:mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              LLM to NMT Paper
            </a>
            <a
              href="https://github.com/orgs/Coptic-NMT/repositories"
              className="text-blue-500 mb-2  hover:text-blue-700 md:mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <Link
              href="/licenses"
              className="text-blue-500 mb-2  hover:text-blue-700 md:mr-4"
            >
              Data and Licenses
            </Link>
            <a
              href="mailto:anm4+coptic@williams.edu,me4+coptic@williams.edu"
              className="text-blue-500 mb-2 hover:text-blue-700 md:mr-4"
            >
              Contact Us
            </a>
            <div className="flex flex-row grow place-content-end">
              <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
              >
                <input type="hidden" name="business" value="F2BZGUEVD66TY" />
                <input type="hidden" name="no_recurring" value="0" />
                <input
                  type="hidden"
                  name="item_name"
                  value="Thank you for helping to keep Coptic Translator online!"
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <Image
                  alt=""
                  src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
