import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaChevronDown } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Wavify from 'react-wavify';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="home-container">
      {/* ✨ Starry Background Particles ✨ */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#000" },
          fpsLimit: 60,
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: "#2bb9dd" },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 0.4 }
          },
          detectRetina: true
        }}
      />

      {/* Main Content */}
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.h2
          className="sub-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Typewriter
            words={[
              'Premium Designs ✨',
              'React & Django Developer ⚛️',
              'Crafting Smooth UI/UX 🚀',
              'Mobile Responsive Magic 📱',
            ]}
            loop
            cursor
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.p
          className="intro-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          👋 Hi! I’m a passionate full-stack developer from Pakistan 🇵🇰. <br />
          Building premium websites with animations, responsiveness & clean code. <br />
          Let’s build something amazing together!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="home-buttons"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            to="/projects"
            className="btn glow-btn"
          >
            View Projects <FaArrowRight />
          </Link>
          <a
            href="https://drive.google.com/file/d/1BMmIToekKrlzi9JN-gpu49QakCJvj_3N/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn glow-btn"
          >
            Download CV <FaDownload />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="social-icons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="https://github.com/habeelbhatti"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/habeel-bhatti-637405312/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* 👇 Scroll Down Arrow */}
        <motion.div
          className="scroll-down"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>

      {/* 🌊 Waves Animation */}
      <Wavify
        fill="#2bb9dd"
        paused={false}
        options={{
          height: 50,
          amplitude: 60,
          speed: 0.25,
          points: 5
        }}
        className="waves"
      />
    </div>
  );
};

export default Home;
