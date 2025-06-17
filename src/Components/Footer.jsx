import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p>© 2025 <strong>Habeel</strong>. All Rights Reserved.</p>

        <div className="footer-contact">
          <div className="footer-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span>Lahore, Pakistan</span>
          </div>
          <div className="footer-item">
            <FaPhoneAlt className="footer-icon" />
            <span>03291069830</span>
          </div>
          <div className="footer-item">
            <FaEnvelope className="footer-icon" />
            <span>habeelbhatti980@gmail.com</span>
          </div>
        </div>

        <div className="footer-icons">
          <a href="https://github.com/habeelbhatti" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/habeel-bhatti-29368735b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="habeelbhatti980@gmail.com">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
