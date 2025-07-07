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
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="contact"
    >
      <Particles id="particles-bg" init={particlesInit} options={{
        background: { color: "#000" },
        fpsLimit: 60,
        particles: {
          color: { value: "#2bb9dd" },
          links: { enable: true, color: "#2bb9dd", distance: 120 },
          move: { enable: true, speed: 1 },
          size: { value: 3 },
        },
      }} />

      <motion.h2
        className="section-title"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        📬 Let’s Connect
      </motion.h2>

      <div className="contact-content">
        {/* Left side */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Player
            autoplay
            loop
            src="https://lottie.host/6751f1bf-f273-4ce4-9783-96f20f10c5a5/JHNpimoM5F.lottie"
            style={{ height: '250px', width: '250px' }}
          />
          <div className="contact-info">
            <p><FaEnvelope /> habeelbhatti980@gmail.com</p>
            <p><FaLinkedin /><a href="https://linkedin.com/in/habeel-bhatti-29368735b" target="_blank" rel="noopener noreferrer"> LinkedIn</a></p>
            <p><FaGithub /><a href="https://github.com/habeelbhatti" target="_blank" rel="noopener noreferrer"> GitHub</a></p>
            <p><FaWhatsapp /><a href="https://wa.me/923291069830" target="_blank" rel="noopener noreferrer"> WhatsApp</a></p>
            <p><FaMapMarkerAlt /> Lahore, Cavalry Ground</p>
            <p><FaClock /> 10 AM – 6 PM (GMT+5)</p>
          </div>

          <div className="cv-buttons">
            <a href="https://drive.google.com/file/d/1BMmIToekKrlzi9JN-gpu49QakCJvj_3N/view?usp=sharing" target="_blank" className="btn view-cv"><FaEye /> View CV</a>
            <a href="https://drive.google.com/uc?export=download&id=1BMmIToekKrlzi9JN-gpu49QakCJvj_3N" target="_blank" className="btn download-cv"><FaDownload /> Download CV</a>
            <a href="/HabeelBhatti.vcf" download className="btn save-contact">📇 Save Contact</a>
          </div>
        </motion.div>

        {/* Right side form */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn send-btn">Send Message</button>

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
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
