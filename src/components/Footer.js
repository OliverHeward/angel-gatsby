import React from "react"
import SocialLinks from "./UI/SocialLinks";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <SocialLinks />
        <div className="about-us">
          <p>
            <span className="date-year"></span> Angel London.
          </p>
          <p>All rights reservered.</p>
        </div>
        <div className="contact-us">
          <p className="header">Don't be shy, say hi!</p>
          <a href="tel:02038580813">0203 8580813</a>
          <a href="mailto:info@angellondon.co.uk">info@angellondon.co.uk</a>
        </div>
        <div className="policy-links">
          <p className="header">The important bits</p>
          <a
            href="https://www.iubenda.com/privacy-policy/71633406"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.iubenda.com/privacy-policy/71633406/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cookie Policy"
          >
            Cookie Policy
          </a>
        </div>
        <div className="logo-container"></div>
      </div>
    </footer>
  )
}

export default Footer
