"use client";

import "./About.scss";

import Image from "next/image";

import {
  ABOUT_DATA,
  ABOUT_SECTION,
} from "@/constants/siteData";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-grid"></div>

      <div className="about-left">
        <div className="about-card">
          <div className="about-circle"></div>

          <div className="image-wrapper">
            <Image
              src="/images/urja-2.jpeg"
              alt="Urja Nayi"
              fill
              priority
              className="about-image"
            />
          </div>

          <div className="tag-card">
            {
              ABOUT_SECTION.founderTag
            }
          </div>

          <div className="date-tag">
            {ABOUT_SECTION.birthDate}
          </div>
        </div>
      </div>

      <div className="about-right">
        <div className="mini-title">
          ✦ {ABOUT_SECTION.miniTitle}
        </div>

        <h2>
          {ABOUT_SECTION.title}
          <span>
            {" "}
            {
              ABOUT_SECTION.highlightTitle
            }
          </span>
        </h2>

        <div className="about-content">
          <p>{ABOUT_DATA.paragraph1}</p>

          <p>{ABOUT_DATA.paragraph2}</p>

          <p>{ABOUT_DATA.paragraph3}</p>
        </div>

        <div className="about-bottom">
          {ABOUT_DATA.details.map(
            (item, index) => (
              <div
                className="detail-card"
                key={index}
              >
                <span>{item.label}</span>

                <h4>{item.value}</h4>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default About;