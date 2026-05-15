"use client";

import "./Services.scss";

import {
  SERVICES_DATA,
  SERVICES_SECTION,
} from "@/constants/siteData";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-grid"></div>

      <div className="services-top">
        <span className="mini-title">
          ✦ {SERVICES_SECTION.tag}
        </span>

        <h2>
          {SERVICES_SECTION.title}
          <span>
            {" "}
            {SERVICES_SECTION.highlight}
          </span>
        </h2>

        <p>
          {
            SERVICES_SECTION.description
          }
        </p>
      </div>

      <div className="services-wrapper">
        {SERVICES_DATA.map(
          (item, index) => (
            <div
              className="service-card"
              key={index}
            >
              <div className="service-glow"></div>

              <div className="service-number">
                0{index + 1}
              </div>

              <div className="service-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>
                {item.description}
              </p>

              <div className="hover-line"></div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;