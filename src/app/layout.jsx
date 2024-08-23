import React from "react";
import PropTypes from "prop-types";

import { Inter } from "next/font/google";
import "./globals.css";

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
        <header className="flex flex-row items-center justify-between p-8">
          <button type="button" href="/">
            Jacqueline Aleman
          </button>
          <span className="flex">
            <button type="button" href="/projects">
              Projects
            </button>
            <button type="button" href="/experience">
              Experience
            </button>
            <a href="." download="temp_resume.pdf">
              Resume
            </a>
            <button type="button" href="/about">
              About
            </button>
          </span>
        </header>
        {children}
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
