"use client";

import "./Journey.scss";

import {
  JOURNEY_DATA,
  JOURNEY_SECTION,
} from "@/constants/siteData";

const Journey = () => {
  return (
    <section className="journey-section">
      <div className="journey-bg-text">
        JOURNEY
      </div>

      <div className="journey-left">
        <span className="mini-title">
          ✦ {JOURNEY_SECTION.miniTitle}
        </span>

        <h2>
          {JOURNEY_SECTION.titleTop}

          <span>
            {JOURNEY_SECTION.titleBottom}
          </span>
        </h2>

        <p>
          {JOURNEY_SECTION.description}
        </p>

        <div className="journey-circle">
          <div className="inner-circle"></div>
        </div>
      </div>

      <div className="journey-right">
        {JOURNEY_DATA.map((item, index) => (
          <div
            className="journey-item"
            key={index}
          >
            <div className="year-box">
              {item.year}
            </div>

            <div className="journey-content">
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;