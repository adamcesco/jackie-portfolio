"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import "./NavBarHeader.css";

class NavBarHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseIsOn: "",
    };
  }

  render() {
    const { mouseIsOn } = this.state;
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
            <Button
              variant="ghost"
              className={`navbar-header__menu-button ${mouseIsOn !== "" && mouseIsOn !== "projects" ? "not-hover" : ""}`}
              onMouseEnter={() => this.setState({ mouseIsOn: "projects" })}
              onMouseLeave={() => this.setState({ mouseIsOn: "" })}
            >
              Projects
            </Button>
            &nbsp;*&nbsp;
            <Button
              variant="ghost"
              className={`navbar-header__menu-button ${mouseIsOn !== "" && mouseIsOn !== "resume" ? "not-hover" : ""}`}
              onMouseEnter={() => this.setState({ mouseIsOn: "resume" })}
              onMouseLeave={() => this.setState({ mouseIsOn: "" })}
            >
              Resume
            </Button>
            &nbsp;*&nbsp;
            <Button
              variant="ghost"
              className={`navbar-header__menu-button ${mouseIsOn !== "" && mouseIsOn !== "about" ? "not-hover" : ""}`}
              onMouseEnter={() => this.setState({ mouseIsOn: "about" })}
              onMouseLeave={() => this.setState({ mouseIsOn: ""})}
            >
              About
            </Button>
          </span>
        </div>
        <p className="navbar-header__welcome-message">
          Texas A&M senior, studying
          <br />
          Mechanical Engineering
        </p>
      </>
    );
  }
}

export default NavBarHeader;
