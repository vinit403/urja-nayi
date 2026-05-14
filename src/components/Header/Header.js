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

  const [menuOpen, setMenuOpen] =
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

  const handleScrollToSection = (
    e,
    id
  ) => {
    e.preventDefault();

    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`main-header ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <button
          className={`menu-btn ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="logo">
          {HERO_DATA.logoWhite}{" "}
          <span>
            {HERO_DATA.logoGold}
          </span>
        </div>

        <nav className="desktop-nav">
          {HEADER_LINKS.map(
            (item, index) => (
              <a
                href={`#${item
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={index}
                onClick={(e) =>
                  handleScrollToSection(
                    e,
                    item
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                  )
                }
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <div className="mobile-menu-bg"></div>

        <div className="mobile-menu-content">
          {HEADER_LINKS.map(
            (item, index) => (
              <a
                key={index}
                href={`#${item
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                onClick={(e) =>
                  handleScrollToSection(
                    e,
                    item
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                  )
                }
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Header;