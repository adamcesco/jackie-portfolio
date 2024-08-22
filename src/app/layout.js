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
      {/* navigation bar component: projects, experience, resume, about */}
      <div className="flex flex-row items-center justify-between p-8">
        <h1>Jacqueline Aleman</h1>
        <div className="flex">
          <a href="/projects">Projects</a>
          <a href="/experience">Experience</a>
          <a href="/" download="temp_resume.pdf">Resume</a>
          <a href="/about">About</a>
        </div>
      </div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
}