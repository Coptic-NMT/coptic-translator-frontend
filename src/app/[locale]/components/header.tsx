// Header.tsx

import React from "react";
import Image from "next/image";
import Cross from "../../public/cross.png";

import "../globals.css";
import { Link } from "../../../navigation";
import { useTranslations } from "next-intl";

const Header: React.FC = () => {
  const t = useTranslations("Layout");

  return (
    <div className="mb-5 md:mb-20 align-center flex flex-row grow  justify-center md:justify-between items-center">
      <header className="text-center">
        <h1 className="text-scriptorium-red ">
          <Link
            href="/"
            className="font-semibold md:text-4xl text-3xl hover:no-underline "
          >
            {t("title")}
          </Link>
        </h1>
      </header>
      <div className="hidden md:flex" style={{ alignItems: "center" }}>
        <a
          href="https://en.wikipedia.org/wiki/Copts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/cross.png" alt="Coptic Cross" width={100} height={100} />
        </a>{" "}
      </div>
    </div>
  );
};

export default Header;
