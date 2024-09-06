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
        <div className="navbar-header__name-banner">
          <p>JACQUELINE</p>
          <p>&nbsp;ALEMAN</p>
        </div>
      </header>
      <div className="navbar-header__nav">
        <Button className="navbar-header__contact-button">
          <Link href="/contactme" legacyBehavior>
            Contact me!
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
      <p className="navbar-header__welcome-message">
        Texas A&M senior, studying
        <br />
        Mechanical Engineering
      </p>
    </>
  );
};

export default NavBarHeader;
