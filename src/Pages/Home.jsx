import React, { useState, useCallback } from 'react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaArrowRight, FaDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Home.css';

import profilePic from '../assets/habeel.png';
import reactLogo from '../assets/reactlogo.svg';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className={`home-container ${darkMode ? 'dark' : 'light'}`}>
      {/* ✨ Starry Background Particles ✨ */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: darkMode ? "#000000" : "#ffffff"
            }
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 120,
              density: { enable: true, area: 800 }
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
              }
            },
            size: {
              value: 1.5,
              random: true
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out"
              }
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: false
              },
              onClick: {
                enable: false
              },
              resize: true
            }
          },
          detectRetina: true
        }}
      />

      {/* Top Left - Profile + React Logo */}
      <div className="top-left">
        <img src={profilePic} alt="Profile" className="profile-img" />
        <img src={reactLogo} alt="React Logo" className="react-logo" />
      </div>

      {/* Top Right - Theme Toggle Button */}
      <div className="top-right">
        <button className="toggle-btn" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1>It's Habeel 👨‍💻</h1>
        <h2>
          <Typewriter
            words={[
              'Frontend Developer ✨',
              'React JS Expert ⚛️',
              'UI/UX Designer 🎨',
              'Clean Code Lover 💻',
              'Tech Enthusiast 🚀',
            ]}
            loop
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p>
          👋 Hi! I’m a creative full-stack developer from Pakistan 🇵🇰,<br />
          building modern websites using React & Django. <br />
          I love solving problems and crafting smooth user experiences 🚀
        </p>

        {/* Buttons */}
        <div className="home-buttons">
          <a href="/projects" className="btn">
            View Projects <FaArrowRight />
          </a>
          <a
            href="https://drive.google.com/file/d/1H8GMtn2_UBM4zsBpz-MQVygc1M7nHsGC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Download CV <FaDownload />
          </a>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/habeelbhatti" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/habeel-bhatti-29368735b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

