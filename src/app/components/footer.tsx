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
      <div className="container px-4 text-sm">
        <p className="mb-2">
          Created by{" "}
          <a href="mailto:anm4+coptic@williams.edu">Andrew Megalaa </a>
          and <a href="mailto:me4+coptic@williams.edu">Maxim Enis</a> at
          Williams College.
        </p>
        <p className="mb-2">
          This translator was created using data from the <a href="https://data.copticscriptorium.org" target="_blank" rel="noopener noreferrer">Coptic Scriptorium.</a> It{"'"}
          s not perfect and will sometimes produce inaccurate results, and is not suitable for the Bohairic dialect.
          Use with caution.
        </p>

        <div className="flex justify-start">
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
            className="text-blue-500 hover:text-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
