"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import "./NavBarHeader.css";

function NavBarHeader() {
  const [isGameActive, setIsGameActive] = useState(false);

  const handleKeyDown = (event) => {
    if (event.shiftKey && event.key === "Enter") {
      setIsGameActive(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <header className="navbar-header">
        <div className="navbar-header__nav">
          <Button className="navbar-header__name">
            <Link href="/contactme" legacyBehavior>
              Jacqueline Aleman
            </Link>
          </Button>
          <NavigationMenu>
            <NavigationMenuList className="navbar-header__menu">
              <NavigationMenuItem
                variant="ghost"
                className="navbar-header__menu-button"
              >
                <Link href="/Projects" legacyBehavior passHref>
                  <NavigationMenuLink>Projects</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              &nbsp;*&nbsp;
              <NavigationMenuItem
                variant="ghost"
                className="navbar-header__menu-button"
              >
                <Link href="/Resume" legacyBehavior passHref>
                  <NavigationMenuLink>Resume</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              &nbsp;*&nbsp;
              <NavigationMenuItem
                variant="ghost"
                className="navbar-header__menu-button"
              >
                <Link href="/About" legacyBehavior passHref>
                  <NavigationMenuLink>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <div className="navbar-header__welcome-page">
        <div className="navbar-header__welcome-page__text">
          <p className="navbar-header__welcome-page__text__primary">
            I engineer solutions bridging hardware and software, from
            semiconductors to autonomous systems. Previously interned at Texas
            Instruments. Creating electrifying experiences ツ
          </p>
          <p className="navbar-header__welcome-page__text__secondary">
            Currently juggling studies at Texas A&M, whisking matcha, and
            learning to develop minesweeper logic for Arduino.
          </p>
        </div>
        {isGameActive ? null : (
          <div className="navbar-header__welcome-page__right">
            * Press Shift + Enter to play a game of minesweeper *
          </div>
        )}
        <div
          style={{ display: isGameActive ? "inline-flex" : "none" }}
          className="navbar-header__welcome-page__right-game"
        >
          <iframe
            src="files/Minesweeper/index.html"
            title="Minesweeper"
            width="100%"
            height="100%"
            style={{ scale: "0.8" }}
          />
        </div>
      </div>
    </>
  );
}

export default NavBarHeader;
