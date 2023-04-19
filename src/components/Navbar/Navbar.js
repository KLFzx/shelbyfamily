import "./Navbar.css";
import { easeInOut, motion } from "framer-motion";
import { scroller } from "react-scroll";

import { dict } from "../../Lan.js";

function Navbar(props) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      scroller.scrollTo(sectionId, {
        duration: 1600,
        delay: 0,
        smooth: easeInOut,
      });
    }
  };

  return (
    <section className="navbar-container" id="navbar">
      <button
        className="navbar-button navbar-button-home"
        onClick={() => scrollToSection("pricing")}
      >
        <motion.div
          whileHover={{ scale: 1.2, color: "rgba(0, 0, 0, 0.7)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {dict["pricing"][props.lang]}
        </motion.div>
      </button>
      <button
        className="navbar-button navbar-button-shelby"
        onClick={() => scrollToSection("whywe")}
      >
        <motion.div
          whileHover={{ scale: 1.3, color: "rgba(0, 0, 0, 0.7)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          animate={{ y: 30 }}
        >
          SHELBY FAMILY
        </motion.div>
      </button>
      <button
        className="navbar-button  navbar-button-about"
        onClick={() => scrollToSection("reviews")}
      >
        <motion.div
          whileHover={{ scale: 1.2, color: "rgba(0, 0, 0, 0.7)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {dict["about"][props.lang]}
        </motion.div>
      </button>
    </section>
  );
}

export default Navbar;
