import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

import "./CustomFooter.css";

function CustomFooter() {
  return (
    <>
      <Separator className="footer__separator" />
      <footer className="custom-footer">
        <div className="footer_list-container">
          <p className="footer__menu-leader">Explore</p>
          <p className="footer__menu-star">*</p>
          <ul className="footer__navmenu">
            <li>
              <Link href="/" legacyBehavior>
                Top of Page
              </Link>
            </li>
            <li>
              <Link href="/Projects" legacyBehavior>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/Resume" legacyBehavior>
                Resume
              </Link>
            </li>
            <li>
              <Link href="/About" legacyBehavior>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_list-container">
          <p className="footer__menu-leader">Socials</p>
          <p className="footer__menu-star">*</p>
          <ul className="footer__socials">
            <li>
              <Link href="/linkedin" legacyBehavior>
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_list-container">
          <p className="footer__menu-leader">Contact</p>
          <p className="footer__menu-star">*</p>
          <ul className="footer__contact">
            <li>
              <Link href="/email" legacyBehavior>
                jacquelinealeman@email.com
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <p className="footer__emojis">*🚩💣*</p>
    </>
  );
}

export default CustomFooter;
