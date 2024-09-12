"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import "./NavBarHeader.css";

const NavBarHeader = () => {
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
            I craft interfaces, interactions, and playful
            experiences between technology and people.
            Previously designed at Open Government 
            Products ツ
          </p>
          <p className="navbar-header__welcome-page__text__secondary">
            Currently juggling studies at ATM, exploring frontend coding, and whisking matcha in my free time.
          </p>
        </div>
        <div className="navbar-header__welcome-page__right">
          * Press Enter to play a game of pong *
        </div>
      </div>
    </>
  );
};

export default NavBarHeader;
