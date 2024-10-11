"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import "./NavBarHeader.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function NavBarHeader() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameHasError, setGameHasError] = useState(false);

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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="navbar-header__name">
                <Link href="#about-section" scroll shallow>
                  Jacqueline Aleman
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>but you can call me Jackie :&#41;</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <NavigationMenu>
            <NavigationMenuList className="navbar-header__menu">
              <NavigationMenuItem
                variant="ghost"
                className="navbar-header__menu-button"
              >
                <Link
                  href="#project-deck"
                  scroll
                  shallow
                  passHref
                  legacyBehavior
                >
                  <NavigationMenuLink>Projects</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              &nbsp;*&nbsp;
              <NavigationMenuItem
                variant="ghost"
                className="navbar-header__menu-button"
              >
                <Link
                  href="/files/temp_resume.pdf"
                  scroll
                  passHref
                  legacyBehavior
                >
                  <NavigationMenuLink target="_blank">
                    Resume
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              &nbsp;*&nbsp;
              <NavigationMenuItem
                variant="ghost"
                className="navbar-header__menu-button"
              >
                <Link
                  href="#about-section"
                  scroll
                  shallow
                  passHref
                  legacyBehavior
                >
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
            Instruments. Creating electrifying experiences :&#41;
          </p>
          <p className="navbar-header__welcome-page__text__secondary">
            Currently juggling studies at Texas A&M, whisking matcha, and
            learning to develop minesweeper logic for Arduino.
          </p>
        </div>
        <div className="navbar-header__welcome-page__game">
          {!isGameActive ? (
            <p className="navbar-header__welcome-page__game__text">
              * Press Shift + Enter to play a game of minesweeper *
            </p>
          ) : null}
          {isGameActive && gameHasError ? (
            <p className="navbar-header__welcome-page__game__text">
              There was an error loading the game. Please try again later or
              contact me if the issue persists.
            </p>
          ) : null}
          <div
            style={{
              display: isGameActive ? "inline-flex" : "none",
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              src="files/Minesweeper/index.html"
              onError={() => setGameHasError(true)}
              title="Minesweeper"
              width="100%"
              height="100%"
              style={{ scale: "0.8" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarHeader;
