import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "PF401",
    template: "%s | PF401",
  },
  description: "PF401 Products",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className="flex flex-col justify-between">
        <Header />
        <div className="flex gap-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
