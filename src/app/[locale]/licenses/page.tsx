import Info from "../components/info";
import "../components/translation.css";
import { useTranslations } from "next-intl";

// No translating for licenses
const Licenses = () => {
  const t = useTranslations("Licenses");
  return (
    <div dir="ltr">
      <Info title="Software Licenses">
        The Coptic Translator is licensed under the{" "}
        <a
          href="https://github.com/enismaxim1/coptic-machine-translation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          {" "}
          MIT License
        </a>
        .
      </Info>
      <Info title="The Coptic Scriptorium">
        Caroline T. Schroeder, Amir Zeldes, et al., Coptic SCRIPTORIUM,
        2013-2023, http://copticscriptorium.org.
        <Info title="Data Licenses">
          All the documents used for training are licensed{" "}
          <a
            href="https://creativecommons.org/licenses/by/3.0/us/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            CC-BY 3.0{" "}
          </a>
          or
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            {" "}
            4.0
          </a>{" "}
          unless otherwise indicated.
          <br />
          <br />
          Major exceptions include:
          <br />
          <div className="ml-4">
            <a
              href="http://www.copticscriptorium.org/download/corpora/Mark/coptic_nt_sahidic.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Sahidica New Testament specific license
            </a>
            <br />
            <a
              href="https://creativecommons.org/licenses/by-sa/3.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Canons of Apa Johannes CC-BY-SA 3.0
            </a>
            <br />
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Sahidic Old Testament CC-BY-SA 4.0
            </a>
          </div>
          <br />
          Individual files on the Scriptorium also contain licensing
          information.
        </Info>
      </Info>

      <Info title="Bohairic Psalmody Data">
        <a
          href="https://www.somiyagawa.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          So Miyagawa
        </a>
      </Info>
      <Info title="Bohairic Bible Data">Bishoy Girgis</Info>
    </div>
  );
};

export default Licenses;
