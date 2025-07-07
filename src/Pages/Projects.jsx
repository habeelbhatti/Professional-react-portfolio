import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section
      className='projects'
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className='section-title'>🌟 My Projects</h2>

      <div className='project-list'>
        {/* Project 1 */}
        <motion.div className='project-card' whileHover={{ scale: 1.05 }}>
          <h3>React E-Commerce Website</h3>
          <p>
            A modern and fully responsive e-commerce website with filters,
            product detail pages, routing, and smooth animations.
          </p>
          <a
            href='https://ecommerce-site-react-theta.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='btn glow-btn'
          >
            Live Demo
          </a>
        </motion.div>

        {/* Project 2 */}
        <motion.div className='project-card' whileHover={{ scale: 1.05 }}>
          <h3>Automation Brain</h3>
          <p>
            A premium industrial automation company website with elegant UI,
            smooth transitions, and modern animations.
          </p>
          <a
            href='https://automation-company-website.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn glow-btn'
          >
            Live Demo
          </a>
        </motion.div>

        {/* Project 3 */}
        <motion.div className='project-card' whileHover={{ scale: 1.05 }}>
          <h3>RK Naturals</h3>
          <p>
            A classic and clean organic products company site with professional
            design and responsive layout.
          </p>
          <a
            href='https://rk-naturals-company.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn glow-btn'
          >
            Live Demo
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
