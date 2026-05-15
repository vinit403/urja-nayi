"use client";

import "./Destinations.scss";

import {
  DESTINATION_DATA,
  FEATURED_DESTINATION,
  DESTINATION_SECTION,
} from "@/constants/siteData";

const Destinations = () => {
  const scrollToContact = () => {
    const section =
      document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="destinations-section">
      <div className="destination-grid"></div>

      <div className="destination-header">
        <div className="left-content">
          <span className="mini-tag">
            ✦ {DESTINATION_SECTION.tag}
          </span>

          <h2>
            {DESTINATION_SECTION.title}
            <span>
              {" "}
              {DESTINATION_SECTION.highlight}
            </span>
          </h2>

          <p>
            {
              DESTINATION_SECTION.description
            }
          </p>
        </div>

        <button
          className="trip-btn"
          onClick={scrollToContact}
        >
          {
            DESTINATION_SECTION.buttonText
          }
        </button>
      </div>

      <div className="destination-layout">
        <div
          className="featured-card"
          style={{
            backgroundImage: `url(${FEATURED_DESTINATION.image})`,
          }}
        >
          <div className="overlay"></div>

          <div className="featured-content">
            <span>
              {FEATURED_DESTINATION.region}
            </span>

            <h3>
              {FEATURED_DESTINATION.title}
            </h3>
          </div>

          <div className="destination-icon">
            {FEATURED_DESTINATION.icon}
          </div>
        </div>

        <div className="destination-right">
          {DESTINATION_DATA.map(
            (item, index) => (
              <div
                className="destination-card"
                key={index}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="overlay"></div>

                <div className="card-details">
                  <span>
                    {item.region}
                  </span>

                  <h4>
                    {item.title}
                  </h4>
                </div>

                <div className="destination-icon">
                  {item.icon}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Destinations;