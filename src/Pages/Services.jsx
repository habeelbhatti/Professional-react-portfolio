import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaReact, FaServer, FaDatabase, FaShoppingCart, FaMobileAlt } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaReact />,
    title: 'Frontend Development',
    description: 'Modern, responsive, and interactive UIs using React.',
  },
  {
    icon: <FaServer />,
    title: 'Django APIs',
    description: 'Scalable and secure REST APIs with Django.',
  },
  {
    icon: <FaDatabase />,
    title: 'SQL Databases',
    description: 'Efficient and well-structured database solutions.',
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce Sites',
    description: 'Full-featured product systems with filtering and checkout.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive Design',
    description: 'Perfect look across desktops, tablets, and mobiles.',
  },
];

const Services = () => {
  return (
    <motion.section
      className='services-section'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className='section-title'>💼 My Services</h2>
      <div className='services-grid'>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={1000}>
              <div className='service-card'>
                <div className='icon-wrapper'>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
