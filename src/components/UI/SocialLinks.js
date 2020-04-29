import React from "react"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

const SocialLinks = () => (
  <div className="social-icons">
    <a
      href="https://www.facebook.com/Angel.CreativeDigitalAgency/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://linkedin.com/company/angelagency/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://twitter.com/_angelagency_/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <FaTwitter />
    </a>
    <a
      href="https://www.instagram.com/_angelagency_"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
  </div>
)

export default SocialLinks;