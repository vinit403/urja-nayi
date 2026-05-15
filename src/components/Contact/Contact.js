"use client";

import "./Contact.scss";

const CONTACT_DATA = [
  {
    label: "Office Address",
    value:
      "SOHAM ARCADE, 305, Pal Gam, Surat, Gujarat 395009",
    icon: "📍",
    link: "https://maps.app.goo.gl/Cjteo5qaoQm1L1DC7",
  },

  {
    label: "Call Anytime",
    value: "+91 95587 61658",
    icon: "📞",
    link: "tel:+919558761658",
  },

  {
    label: "Email Address",
    value: "urja@anantaurjatravels.com",
    icon: "✉️",
    link: "mailto:urja@anantaurjatravels.com",
  },
];

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-grid"></div>

      <div className="contact-heading">
        <span className="mini-title">
          ✦ LET'S CONNECT
        </span>

        <h2>
          Ready to plan
          <span> your dream trip?</span>
        </h2>

        <p>
          Whether you know exactly where you
          want to go or need inspiration, I'm
          here. Every journey begins with a
          conversation.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.066580604268!2d72.76830227484008!3d21.189513882238693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04de26f959c59%3A0xfa14fe563cbd8828!2sANANTA%20URJA%20TRAVELS!5e0!3m2!1sen!2sin!4v1778872808808!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="map-card">
            <h3>Ananta Urja Travels</h3>

            <span>
              SOHAM ARCADE, 305, Pal Gam,
              Surat
            </span>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-cards">
            {CONTACT_DATA.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-info">
                  <h4>{item.value}</h4>

                  <div className="contact-bottom">
                    <p>{item.label}</p>

                    <span className="info-icon">
                      {item.icon}
                    </span>
                  </div>
                </div>

                <div className="contact-arrow">
                  ↗
                </div>
              </a>
            ))}
          </div>

          <div className="social-section">
            <a
              href="https://www.instagram.com/anantaurjatravels?igsh=MTg5aW12Z3h5eThvOA=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
              />
            </a>

            <a
              href="https://www.facebook.com/share/1ApvJ3tDzQ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;