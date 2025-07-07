import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Text */}
        <p className="footer-title">
          © 2025 <strong>Habeel</strong>. All Rights Reserved.
        </p>

        {/* Contact Info */}
        <div className="footer-contact">
          <div className="footer-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span>Lahore, Pakistan</span>
          </div>
          <div className="footer-item">
            <FaPhoneAlt className="footer-icon" />
            <span>+92 329 1069830</span>
          </div>
          <div className="footer-item">
            <FaEnvelope className="footer-icon" />
            <span>habeelbhatti980@gmail.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-icons">
          <a
            href="https://github.com/habeelbhatti"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/habeel-bhatti-29368735b"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:habeelbhatti980@gmail.com"
            className="footer-social"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
