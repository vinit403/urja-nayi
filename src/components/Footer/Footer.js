"use client";

import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-grid"></div>

      <div className="footer-content">
        <div className="footer-logo">
          Ananta <span>Urja</span> Travels
        </div>

        <div className="footer-center">
          Founded by Urja Nayi • Surat,
          Gujarat
        </div>

        <div className="footer-right">
          © {currentYear} • All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;