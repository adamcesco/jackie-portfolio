import React from "react";

import "./NavBarHeader.css";

function NavBarHeader() {
  return (
    <header className="navbar-header">
      <h1>Jacqueline Aleman</h1>
      <div className="navbar-header__nav">
        <a className="navbar-header__contact" href="/contactme">Contact me</a>
        <span className="navbar-header__menu">
          <a href="/projects">Projects</a>
          <a href="/experience">Experience</a>
          <a href="." download="/files/temp_resume.pdf">
            Resume
          </a>
          <a href="/about">About</a>
        </span>
      </div>
    </header>
  );
}

export default NavBarHeader;
