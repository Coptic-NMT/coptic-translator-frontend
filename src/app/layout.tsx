import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

const addJsonLd = () => {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          position: 1,
          "@type": "ListItem",
          item: {
            "@id": "https://www.coptictranslator.com/",
            name: "Coptic Translator",
          },
        },
      ],
    }),
  };
};
export const metadata: Metadata = {
  title: "Coptic Translator",
  description:
    "Automatically translate English to Coptic and Coptic to English phrases and sentences, free of charge.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
      </body>
    </html>
  );
}
