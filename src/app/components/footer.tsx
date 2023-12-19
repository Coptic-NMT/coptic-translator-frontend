// Footer.tsx
import React from "react";
import "./translation.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      className="text-gray-800 p-4 absolute bottom-0 left-0 right-0 text-scriptorium-grey"
      style={{ backgroundColor: "#eef1f3" }}
    >
      <div className="px-4 text-sm">
        <div>
          <p className="mb-2">
            Created by{" "}
            <a href="mailto:anm4+coptic@williams.edu">Andrew Megalaa </a>
            and <a href="mailto:me4+coptic@williams.edu">Maxim Enis</a> at
            Williams College.
          </p>
          <p className="mb-2">
            This translator was created using data from the{" "}
            <a
              href="https://data.copticscriptorium.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coptic Scriptorium.
            </a>{" "}
            It{"'"}s not perfect and will sometimes produce inaccurate results,
            and is not suitable for the Bohairic dialect. Use with caution.
          </p>

          <div
            className="flex justify-start"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <a
                // link to paper located in public folder
                href="paper.pdf"
                className="text-blue-500 hover:text-blue-700 mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Paper
              </a>
              <a
                href="https://github.com/orgs/Coptic-NMT/repositories"
                className="text-blue-500 hover:text-blue-700 mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <Link
                href="/licenses"
                className="text-blue-500 hover:text-blue-700 mr-4"
              >
                Data and Licenses
              </Link>
              <a
                href="mailto:anm4+coptic@williams.edu,me4+coptic@williams.edu"
                className="text-blue-500 hover:text-blue-700 mr-4"
              >
                Contact Us
              </a>
            </div>
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
              <img
                alt=""
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
