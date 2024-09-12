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
            Welcome to my portfolio!
          </p>
          <p className="navbar-header__welcome-page__text__secondary">
            Welcome to my portfolio!
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBarHeader;
