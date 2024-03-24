import * as React from "react";
import "./translation.css";
import "../globals.css";
interface InfoProps {
  title: string;
  children: React.ReactNode;
}
const Info: React.FC<InfoProps> = ({ title, children }) => {
  return (
    <div className="w-full text-left">
      <h1 className="text-scriptorium-red md:text-2xl">
        {title}
      </h1>
      <div
        className="border p-2  bg-scriptorium-red-left rounded-lg text-scriptorium-grey md:text-xl"
        style={{ background: "none", border: "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Info;
