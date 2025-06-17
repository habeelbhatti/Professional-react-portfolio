import React, { useRef, useState } from 'react';
import './Contact.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaDownload, FaEye, FaGithub, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    form.current.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="contact"
    >
      <Particles id="particles-bg" init={particlesInit} options={{
        background: { color: "#000" },
        fpsLimit: 60,
        particles: {
          color: { value: "#00f0ff" },
          links: { enable: true, color: "#00f0ff", distance: 120 },
          move: { enable: true, speed: 1 },
          size: { value: 3 },
        },
      }} />

      <h2 className="section-title">📬 Contact Me</h2>

      <div className="contact-content">
        <div className="contact-left">
          <Player
            autoplay
            loop
            src="https://lottie.host/6751f1bf-f273-4ce4-9783-96f20f10c5a5/JHNpimoM5F.lottie"
            style={{ height: '200px', width: '200px' }}
          />
          <p className="contact-item"><FaEnvelope /> habeelbhatti980@gmail.com</p>
          <p className="contact-item"><FaLinkedin /><a href="https://linkedin.com/in/habeel-bhatti-29368735b" target="_blank">LinkedIn</a></p>
          <p className="contact-item"><FaGithub /><a href="https://github.com/habeelbhatti" target="_blank">GitHub</a></p>
          <p className="contact-item"><FaWhatsapp /> <a href="https://wa.me/923291069830" target="_blank">WhatsApp</a></p>
          <p className="contact-item"><FaMapMarkerAlt /> Lahore, Cavalry Ground</p>
          <p className="contact-item"><FaClock /> 10 AM – 6 PM (GMT+5)</p>
          <div className="cv-buttons">
            <a href="https://drive.google.com/file/d/1H8GMtn2_UBM4zsBpz-MQVygc1M7nHsGC/view?usp=sharing" className="btn view-cv" target="_blank"><FaEye /> View CV</a>
            <a href="https://drive.google.com/uc?export=download&id=1H8GMtn2_UBM4zsBpz-MQVygc1M7nHsGC" className="btn download-cv" target="_blank"><FaDownload /> Download CV</a>
            <a href="/HabeelBhatti.vcf" download className="btn save-contact">📇 Save Contact</a>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>

          <AnimatePresence>
            {submitted && (
              <motion.p
                className="form-response"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                ✅ Your message has been submitted. We’ll get back to you soon!
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
