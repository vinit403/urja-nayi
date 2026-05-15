"use client";

import "./Mindset.scss";

import {
  MINDSET_CARDS,
  MINDSET_QUOTE,
} from "@/constants/siteData";

const Mindset = () => {
  return (
    <section className="mindset-section">
      <div className="mindset-grid"></div>

      <div className="mindset-glow"></div>

      <div className="mindset-heading">
        <span>
          ✦ {MINDSET_QUOTE.miniTitle}
        </span>

        <h2>
          <div className="heading-line">
            {MINDSET_QUOTE.title1}
          </div>

          <div className="heading-line second-line">
            <strong>&</strong>

            <em>{MINDSET_QUOTE.title2}</em>
          </div>
        </h2>
      </div>

      <div className="mindset-layout">
        <div className="mindset-column">
          {MINDSET_CARDS.slice(0, 2).map(
            (item, index) => (
              <div
                className="mindset-card"
                key={index}
              >
                <div className="icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            )
          )}
        </div>

        <div className="quote-box">
          <div className="quote-star"></div>

          <div className="quote-mark">“</div>

          <p>{MINDSET_QUOTE.quote}</p>

          <span>
            — {MINDSET_QUOTE.author}
          </span>
        </div>

        <div className="mindset-column">
          {MINDSET_CARDS.slice(2, 4).map(
            (item, index) => (
              <div
                className="mindset-card"
                key={index}
              >
                <div className="icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Mindset;