import React from "react";
import PropTypes from "prop-types";

import NavBarHeader from "@/widgets/NavBarHeader";

import { Inter } from "next/font/google";
import "./globals.css";
import CustomFooter from "@/widgets/CustomFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jackie's Portfolio",
  description: "A portfolio website for Jackie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <NavBarHeader />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
