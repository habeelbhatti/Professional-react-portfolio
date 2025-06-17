import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <motion.section
      className="about-hero"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="about-container">
        <div className="about-text">
          <h2>👨‍💻 About Me</h2>
          <p>
            I'm <strong>Habeel Bhatti</strong>, a <span className="highlight">creative full-stack developer</span> passionate about crafting performant, secure, and responsive web applications using <strong>React</strong>, <strong>Django</strong>, and <strong>SQL</strong>.
          </p>
          <p>
            🚀 With over 2.5 years of hands-on experience, I specialize in turning complex problems into elegant solutions — building modern UIs, integrating REST APIs, and deploying full-stack applications.
          </p>
          <p>
            🎯 I focus on user experience, scalability, and clean code. Whether it's a startup idea or a business solution — <span className="highlight">I deliver with precision.</span>
          </p>
          <p>
            💡 Let's build something impactful together.
          </p>
        </div>

        <div className="about-cards">
          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLaptopCode className="card-icon" />
            <h3>Full-Stack Expertise</h3>
            <p>React + Django + SQL</p>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket className="card-icon" />
            <h3>20+ Projects</h3>
            <p>Deployed & Scalable</p>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLightbulb className="card-icon" />
            <h3>Problem Solver</h3>
            <p>UI/UX & Logic Focused</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
