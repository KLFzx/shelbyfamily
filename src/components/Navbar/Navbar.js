import './Navbar.css';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      scroller.scrollTo(sectionId, {
        duration: 1600,
        delay: 0,
        smooth: 'easeInOutQuad',
      });
    }
  };

  return (
    <section className="navbar-container" id="navbar">
      <button
        className="navbar-button navbar-button-home"
        onClick={() => scrollToSection('pricing')}
      >
        <motion.div
          whileHover={{ scale: 1.2, color: 'rgba(0, 0, 0, 0.7)' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          Pricing
        </motion.div>
      </button>
      <button
        className="navbar-button navbar-button-shelby"
        onClick={() => scrollToSection('whywe')}
      >
        <motion.div
          whileHover={{ scale: 1.3, color: 'rgba(0, 0, 0, 0.7)' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          animate={{ y: 30 }}
        >
          SHELBY FAMILY
        </motion.div>
      </button>
      <button
        className="navbar-button  navbar-button-about"
        onClick={() => scrollToSection('reviews')}
      >
        <motion.div
          whileHover={{ scale: 1.2, color: 'rgba(0, 0, 0, 0.7)' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          About us
        </motion.div>
      </button>
    </section>
  );
}

export default Navbar;
