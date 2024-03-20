import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduScrape",
  description: "Educational web application for learning web scraping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="mb-4 sm:mb-2">
        <Header />
      </div>
      <body className={inter.className}>{children}</body>
      <div className="mt-4 sm:mt-2">
        <Footer />
      </div>
    </html>
  );
}
