"use client";

import "./About.scss";

import Image from "next/image";

import { ABOUT_DATA } from "@/constants/siteData";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-grid"></div>

      <div className="about-left">
        <div className="about-card">
          <div className="about-circle"></div>

          <div className="image-wrapper">
            <Image
              src="/images/urja.jpg"
              alt="Urja Nayi"
              fill
              priority
              className="about-image"
            />
          </div>

          <div className="tag-card">
            BUSINESSWOMAN
            <br />
            & FOUNDER
          </div>

          <div className="date-tag">
            08 • 10 • 2001
          </div>
        </div>
      </div>

      <div className="about-right">
        <div className="mini-title">
          ✦ {ABOUT_DATA.sectionTitle}
        </div>

        <h2>
          Born to lead,
          <span> built to explore.</span>
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