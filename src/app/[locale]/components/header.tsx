// Header.tsx

import React from "react";
import Image from "next/image";
import Cross from "../../public/cross.png";

import "../globals.css";
import {Link} from '../../../navigation';
import { useTranslations } from "next-intl";

const Header: React.FC = () => {
  const t = useTranslations("Layout");

  return (
    <div
      className="mb-20"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <header className="text-center">
        <h1 className="text-scriptorium-red ">
          <Link href="/" className="font-semibold text-4xl hover:no-underline ">
            {t("title")}
          </Link>
        </h1>
      </header>
      <div style={{ display: "flex", alignItems: "center" }}>
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
