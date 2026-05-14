"use client";

import "./Hero.scss";

import Image from "next/image";

import { HERO_DATA } from "@/constants/siteData";

import { useEffect, useState } from "react";

const Hero = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        mouseMove
      );
    };
  }, []);

  const splitWord = (word, className) => {
    return word.split("").map((letter, index) => (
      <span
        key={index}
        className={`letter ${className}`}
        style={{
          animationDelay: `${index * 0.08}s`,
        }}
      >
        {letter}
      </span>
    ));
  };

  return (
    <section className="hero-section">
      <div className="grid-overlay"></div>

      <div
        className="mouse-follower"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="mouse-dot"></div>
      </div>

      <div className="hero-left">
        <div className="sub-title">
          <span className="line"></span>

          {HERO_DATA.subTitle}
        </div>

        <div className="hero-title">
          <div className="typing-word white-word">
            {splitWord(HERO_DATA.titleTop, "white")}
          </div>

          <div className="typing-word gray-word">
            {splitWord(HERO_DATA.titleBottom, "gray")}
          </div>
        </div>

        <p>
          <span>{HERO_DATA.highlightedText}</span>{" "}
          {HERO_DATA.description}
        </p>

        <div className="stats-wrapper">
          {HERO_DATA.stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.number}</h3>

              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="button-group">
          <button className="primary-btn">
            {HERO_DATA.primaryButton}
          </button>

          <button className="secondary-btn">
            {HERO_DATA.secondaryButton}
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="circle big-circle"></div>

        <div className="circle mid-circle"></div>

        <div className="circle small-main-circle"></div>

        <div className="image-outline-circle"></div>

        <div className="image-wrapper">
          <Image
            src="/assets/images/urja.jpg"
            alt="Urja Nayi"
            fill
            priority
            className="hero-image"
          />
        </div>
      </div>

      <div className="scroll-text">
        <div className="scroll-line"></div>

        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;