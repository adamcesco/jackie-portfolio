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
              <Link href="/" scroll shallow>
                Top of Page
              </Link>
            </li>
            <li>
              <Link href="#project-deck" scroll shallow>
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/files/temp_resume.pdf"
                scroll
                passHref
                legacyBehavior
              >
                <a target="_blank">Resume</a>
              </Link>
            </li>
            <li>
              <Link href="#about-section" scroll shallow>
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
              <Link
                href="https://www.linkedin.com/in/jacqueline-aleman/"
                passHref
                legacyBehavior
              >
                <a target="_blank">LinkedIn</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_list-container">
          <p className="footer__menu-leader">Contact</p>
          <p className="footer__menu-star">*</p>
          <ul className="footer__contact">
            <li>
              <Link href="mailto:jacquelinenaleman@gmail.com">jacquelinenaleman@gmail.com</Link>
            </li>
          </ul>
        </div>
      </footer>
      <p className="footer__emojis">*🚩💣*</p>
    </>
  );
}

export default CustomFooter;
