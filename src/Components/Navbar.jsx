import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo1.png'; // 👈 Apna logo image yahan rakhna

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <motion.div
        className="logo-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={logoImg} alt="Logo" className="logo-img" />
      </motion.div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['/', '/about', '/services', '/projects', '/contact'].map((path, i) => (
          <li key={i}>
            <Link to={path} onClick={toggleMenu}>
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          </li>
        ))}
      </ul>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
