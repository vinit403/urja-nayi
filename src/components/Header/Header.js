"use client";

import "./Header.scss";

import { useEffect, useState } from "react";

import {
  HEADER_LINKS,
  HERO_DATA,
} from "@/constants/siteData";

const Header = () => {
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <header
      className={`main-header ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo">
        {HERO_DATA.logoWhite}{" "}
        <span>{HERO_DATA.logoGold}</span>
      </div>

      <nav>
        {HEADER_LINKS.map((item, index) => (
          <a href="/" key={index}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;