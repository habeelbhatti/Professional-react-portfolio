import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section
      className='projects'
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className='section-title'>My Projects</h2>
      <div className='project-list'>
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
            className='btn'
          >
            Live Demo
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
