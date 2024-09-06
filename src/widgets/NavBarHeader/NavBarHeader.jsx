"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import "./NavBarHeader.css";

function NavBarHeader() {
  return (
    <>
      <header className="navbar-header">
        <div className="navbar-header__name-banner">
          <p>JACQUELINE</p>
          <p>&nbsp;ALEMAN</p>
        </div>
      </header>
      <div className="navbar-header__nav">
        <a className="navbar-header__contact" href="/contactme">
          Contact me!
        </a>
        <span className="navbar-header__menu">
          <Button variant="ghost" className="navbar-header__menu-button">
            Projects
          </Button>
          &nbsp;*&nbsp;
          <Button variant="ghost" className="navbar-header__menu-button">
            Resume
          </Button>
          &nbsp;*&nbsp;
          <Button variant="ghost" className="navbar-header__menu-button">
            About
          </Button>
        </span>
      </div>
      <p className="navbar-header__welcome-message">
        Texas A&M senior, studying<br />Mechanical Engineering
      </p>
    </>
  );
}

export default NavBarHeader;
