import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coptic Translator",
  description: "Automatically translate English to Coptic and Coptic to English phrases and sentences, free of charge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen relative bg-egyptian text-teal">
          <div className="p-8 mb-40">
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
