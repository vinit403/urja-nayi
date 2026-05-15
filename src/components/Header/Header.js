"use client";

import "./Header.scss";

import { useEffect, useState } from "react";

import { HERO_DATA } from "@/constants/siteData";

const NAV_LINKS = [
  {
    label: "ABOUT",
    id: "about",
  },

  {
    label: "AGENCY",
    id: "agency",
  },

  {
    label: "SERVICES",
    id: "services",
  },

  {
    label: "DESTINATIONS",
    id: "destinations",
  },

  {
    label: "MY STORY",
    id: "journey",
  },

  {
    label: "CONNECT",
    id: "contact",
  },
];

const Header = () => {
  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections =
        document.querySelectorAll("section");

      sections.forEach((section) => {
        const top =
          section.offsetTop - 200;

        const height = section.offsetHeight;

        const id =
          section.getAttribute("id");

        if (
          window.scrollY >= top &&
          window.scrollY <
            top + height
        ) {
          setActiveSection(id);
        }
      });
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

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting
            ) {
              entry.target.classList.add(
                "show-section"
              );
            }
          });
        },
        {
          threshold: 0.15,
        }
      );

    const hiddenElements =
      document.querySelectorAll(
        ".fade-section"
      );

    hiddenElements.forEach((el) =>
      observer.observe(el)
    );

    return () =>
      hiddenElements.forEach((el) =>
        observer.unobserve(el)
      );
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
          {NAV_LINKS.map(
            (item, index) => (
              <a
                href={`#${item.id}`}
                key={index}
                className={
                  activeSection ===
                  item.id
                    ? "active-link"
                    : ""
                }
                onClick={(e) =>
                  handleScrollToSection(
                    e,
                    item.id
                  )
                }
              >
                {item.label}
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
          {NAV_LINKS.map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                onClick={(e) =>
                  handleScrollToSection(
                    e,
                    item.id
                  )
                }
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Header;